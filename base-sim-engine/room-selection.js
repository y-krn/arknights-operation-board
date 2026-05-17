import { round } from "./numbers.js";
import {
  ROOM_CAPACITY,
  DEFAULT_FACILITY_LEVEL,
  TRADING_ORDER_LIMIT_BY_LEVEL,
} from "./constants.js";
import {
  calculateFacilityCapacity,
  collectRoomCapacityBonus,
  collectRoomCapacityBonusesByOperator,
  estimateCurrentOrders,
} from "./facilities/capacity.js";
import { calculateMorale } from "./effects/morale-effects.js";
import { calculateFullnessEfficiency } from "./shifts/morale.js";
import {
  scoreOperator,
  compareCandidates,
  totalCandidateScore,
  formatMatchedSkill,
  calculateRoomGoldLines,
} from "./scoring.js";
import { evaluateDynamicEffect } from "./effects/dynamic-effects.js";

export function buildRoomCandidates(operators, roster, usedOperatorIds, roomType, product, context) {
  return operators
    .filter((operator) => !usedOperatorIds.has(operator.id))
    .map((operator) => scoreOperator(operator, roster[operator.id], roomType, product, context))
    .sort(compareCandidates);
}

export function selectManufactureCandidates(candidates, product, context) {
  const suppressors = candidates.filter((candidate) => candidate.suppressesOtherOperators);
  if (suppressors.length === 0) return selectBestRoomCandidates(candidates, product, context);

  const normal = selectBestRoomCandidates(candidates.filter((candidate) => !candidate.suppressesOtherOperators), product, context);
  const automation = selectBestRoomCandidates(candidates.map((candidate) => candidate.suppressesOtherOperators ? candidate : zeroSuppressedCandidate(candidate)), product, context);
  return compareRoomSelections(automation, normal, product, context) >= 0 ? automation : normal;
}

function zeroSuppressedCandidate(candidate) {
  return {
    ...candidate,
    staticScore: 0,
    score: 0,
    staticMatched: [],
    matched: [],
    dynamicEffects: [],
    activeSkills: [],
    approximate: false,
  };
}

export function selectBestRoomCandidates(candidates, product, context) {
  let selected = [];
  for (let slot = 0; slot < ROOM_CAPACITY; slot += 1) {
    const current = finalizeRoomCandidates(selected, product, context);
    const currentScore = roomSelectionMetric(current, product, context).adjustedScore;
    let best = null;
    let bestMetric = null;
    let fallback = null;
    let fallbackMetric = null;
    for (const candidate of candidates) {
      if (selected.some((selectedCandidate) => selectedCandidate.operator.id === candidate.operator.id)) continue;
      const trial = finalizeRoomCandidates([...selected, candidate], product, context);
      const score = totalCandidateScore(trial);
      const metric = roomSelectionMetric(trial, product, context);
      if (metric.canCompleteShift && metric.adjustedScore > currentScore && (!bestMetric || compareRoomSelectionMetrics(metric, bestMetric) > 0 || (compareRoomSelectionMetrics(metric, bestMetric) === 0 && best && compareCandidates(candidate, best) < 0))) {
        best = candidate;
        bestMetric = metric;
      }
      if (!metric.canCompleteShift && selected.length === 0 && score > 0 && (!fallbackMetric || compareRoomSelectionMetrics(metric, fallbackMetric) > 0 || (compareRoomSelectionMetrics(metric, fallbackMetric) === 0 && fallback && compareCandidates(candidate, fallback) < 0))) {
        fallback = candidate;
        fallbackMetric = metric;
      }
    }
    if (!best && fallback) best = fallback;
    if (!best) break;
    selected = [...selected, best];
  }
  return finalizeRoomCandidates(selected, product, context).sort(compareCandidates);
}

export function rankCandidatesForDisplay(candidates, product, context) {
  return candidates
    .map((candidate) => finalizeRoomCandidates([candidate], product, context)[0])
    .filter((candidate) => candidate.score > 0)
    .sort(compareCandidates);
}

export function finalizeRoomCandidates(candidates, product, context) {
  const roomType = candidates[0]?.roomType || "";
  const roomState = {
    goldLines: calculateRoomGoldLines(candidates, context),
    storageBonus: collectRoomCapacityBonus(candidates, roomType, product, "storage", context),
    storageBonusesByOperator: collectRoomCapacityBonusesByOperator(candidates, roomType, product, "storage"),
    orderBonus: collectRoomCapacityBonus(candidates, roomType, product, "order", context),
  };
  if (roomType === "TRADING") {
    roomState.orderLimit = Math.max(1, TRADING_ORDER_LIMIT_BY_LEVEL[DEFAULT_FACILITY_LEVEL - 1] + roomState.orderBonus);
    roomState.currentOrders = estimateCurrentOrders(candidates, roomState.orderLimit, context);
    roomState.orderLimitGap = Math.max(0, roomState.orderLimit - roomState.currentOrders);
  }
  return candidates.map((candidate) => {
    const matched = [...candidate.staticMatched];
    let score = candidate.staticScore;
    let approximate = candidate.approximate;

    for (const dynamicEffect of candidate.dynamicEffects) {
      const evaluated = evaluateDynamicEffect(dynamicEffect, candidate.operator, candidates, product, context, roomState);
      if (!evaluated || evaluated.value === 0) continue;
      score += evaluated.value;
      approximate ||= Boolean(dynamicEffect.effect.approximate);
      matched.push(formatMatchedSkill(dynamicEffect, evaluated.value, evaluated.detail));
    }

    const finalized = { ...candidate, score: round(score, 2), approximate, matched };
    return { ...finalized, morale: calculateMorale(finalized, candidates, candidate.roomType, context) };
  });
}

export function compareRoomSelections(left, right, product, context) {
  return compareRoomSelectionMetrics(roomSelectionMetric(left, product, context), roomSelectionMetric(right, product, context));
}

function compareRoomSelectionMetrics(left, right) {
  return Number(left.canCompleteShift) - Number(right.canCompleteShift)
    || left.adjustedScore - right.adjustedScore
    || left.rawScore - right.rawScore;
}

export function roomSelectionMetric(candidates, product, context) {
  const rawScore = totalCandidateScore(candidates);
  const moraleEfficiencies = candidates.map((candidate) => candidateShiftMoraleEfficiency(candidate, context));
  const moraleEfficiency = moraleEfficiencies.length ? Math.min(...moraleEfficiencies) : 1;
  const fullnessEfficiency = selectionFullnessEfficiency(candidates, product, context);
  const productionEfficiency = Math.min(moraleEfficiency, fullnessEfficiency);
  return {
    rawScore,
    adjustedScore: round(rawScore * productionEfficiency, 2),
    moraleEfficiency,
    fullnessEfficiency,
    productionEfficiency,
    canCompleteShift: moraleEfficiency >= 1,
  };
}

function selectionFullnessEfficiency(candidates, product, context) {
  const roomType = candidates[0]?.roomType;
  if (!context || !["MANUFACTURE", "TRADING"].includes(roomType)) return 1;
  const speed = totalCandidateScore(candidates);
  const collectionIntervalHours = context.collectionIntervalHours || 24;
  if (roomType === "MANUFACTURE") {
    const productConfig = context.catalog.products?.[product];
    if (!productConfig) return 1;
    const unitsPerDay = productConfig.baseUnitsPerDay * (1 + speed / 100);
    const capacity = calculateFacilityCapacity(context.catalog, {
      type: "MANUFACTURE",
      product,
      level: DEFAULT_FACILITY_LEVEL,
      unitsPerDay,
      selected: candidates,
      collectionIntervalHours,
    }, context);
    return calculateFullnessEfficiency(capacity, collectionIntervalHours);
  }
  const lmdPerDay = context.catalog.trade.baseLmdPerDay * (1 + speed / 100);
  const capacity = calculateFacilityCapacity(context.catalog, {
    type: "TRADING",
    product: "LMD",
    level: DEFAULT_FACILITY_LEVEL,
    lmdPerDay,
    selected: candidates,
    collectionIntervalHours,
  }, context);
  return calculateFullnessEfficiency(capacity, collectionIntervalHours);
}

function candidateShiftMoraleEfficiency(candidate, context) {
  const cost = Number(candidate.morale?.costPerHour || 0) * Number(context.shiftDurationHours || 24);
  if (cost <= 0) return 1;
  return Math.min(1, 24 / cost);
}
