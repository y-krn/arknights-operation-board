import { ROOM_CAPACITY } from "../constants.js";
import {
  collectFacilityOperatorIds,
  cloneContextForSupportAssignments,
} from "../context.js";
import { optimizeControlAssignments, planControl } from "../facilities/control.js";
import { calculateFacilityCapacity } from "../facilities/capacity.js";
import { planManufacture } from "../facilities/manufacture.js";
import { planTrading } from "../facilities/trading.js";
import {
  registerAssignedOperators,
} from "../planning.js";
import { calculateTotals } from "../totals.js";
import {
  buildRoomCandidates,
  compareRoomSelections,
  finalizeRoomCandidates,
  roomSelectionMetric,
} from "../room-selection.js";
import { compareCandidates, totalCandidateScore } from "../scoring.js";

export function planSecondShift(catalog, ownedOperators, roster, layout, objective, baseContext, firstShiftFacilities) {
  const excludedOperatorIds = collectFacilityOperatorIds(firstShiftFacilities);
  const secondAssignments = optimizeControlAssignments(
    { ...baseContext.supportAssignments, CONTROL: [] },
    catalog,
    roster,
    ownedOperators,
    layout,
    objective,
    excludedOperatorIds,
    baseContext.shiftDurationHours
  );
  const context = cloneContextForSupportAssignments(baseContext, ownedOperators, roster, secondAssignments);
  const usedOperatorIds = new Set([...context.supportOperatorIds, ...excludedOperatorIds]);
  const manufacturePlan = planManufacture(catalog, ownedOperators, roster, layout, objective, context, usedOperatorIds);
  context.goldProductionLines = manufacturePlan.filter((room) => room.product === "GOLD").length;
  registerAssignedOperators(context, manufacturePlan);
  const tradingPlan = planTrading(catalog, ownedOperators, roster, layout, context, usedOperatorIds);
  const controlPlan = planControl(catalog, roster, context, [...manufacturePlan, ...tradingPlan]);
  return {
    facilities: [...manufacturePlan, ...tradingPlan, controlPlan],
    totals: calculateTotals(catalog, manufacturePlan, tradingPlan, objective),
    context,
  };
}

export function balanceTwoShiftPlan(catalog, ownedOperators, roster, layout, objective, firstContext, firstFacilities, firstTotals, secondShiftPlan) {
  const secondContext = secondShiftPlan.context;
  if (!secondContext) return { facilities: firstFacilities, totals: firstTotals, secondShiftPlan };
  const first = firstFacilities.map((facility) => cloneFacility(facility));
  const second = secondShiftPlan.facilities.map((facility) => cloneFacility(facility));
  const secondById = new Map(second.map((facility) => [facility.id, facility]));

  for (const firstFacility of first) {
    if (!["MANUFACTURE", "TRADING"].includes(firstFacility.type)) continue;
    const secondFacility = secondById.get(firstFacility.id);
    if (!secondFacility || secondFacility.type !== firstFacility.type || secondFacility.product !== firstFacility.product) continue;
    const balanced = balanceWorkFacilityPair(catalog, ownedOperators, roster, firstContext, secondContext, first, second, firstFacility, secondFacility);
    if (!balanced) continue;
    Object.assign(firstFacility, balanced.firstFacility);
    Object.assign(secondFacility, balanced.secondFacility);
  }

  const firstManufacture = first.filter((facility) => facility.type === "MANUFACTURE");
  const firstTrading = first.filter((facility) => facility.type === "TRADING");
  const secondManufacture = second.filter((facility) => facility.type === "MANUFACTURE");
  const secondTrading = second.filter((facility) => facility.type === "TRADING");
  return {
    facilities: first,
    totals: calculateTotals(catalog, firstManufacture, firstTrading, objective),
    secondShiftPlan: {
      ...secondShiftPlan,
      facilities: second,
      totals: calculateTotals(catalog, secondManufacture, secondTrading, objective),
    },
  };
}

function balanceWorkFacilityPair(catalog, ownedOperators, roster, firstContext, secondContext, firstFacilities, secondFacilities, firstFacility, secondFacility) {
  const lockedIds = collectPairLockedOperatorIds(firstFacilities, secondFacilities, firstFacility.id);
  const firstCandidates = buildRoomCandidates(ownedOperators, roster, lockedIds, firstFacility.type, firstFacility.product, firstContext);
  const secondCandidates = buildRoomCandidates(ownedOperators, roster, lockedIds, secondFacility.type, secondFacility.product, secondContext);
  const firstSelections = generateRoomSelections(firstCandidates, firstFacility.product, firstContext);
  const secondSelections = generateRoomSelections(secondCandidates, secondFacility.product, secondContext);
  let best = null;
  for (const firstSelection of firstSelections) {
    for (const secondSelection of secondSelections) {
      if (!areSelectionsDisjoint(firstSelection, secondSelection)) continue;
      const metric = pairedSelectionMetric(firstSelection, secondSelection, firstFacility.product, firstContext);
      if (!best || comparePairedSelectionMetric(metric, best.metric) > 0) best = { firstSelection, secondSelection, metric };
    }
  }
  if (!best) return null;
  const currentMetric = pairedSelectionMetric(firstFacility.selected || [], secondFacility.selected || [], firstFacility.product, firstContext);
  if (comparePairedSelectionMetric(best.metric, currentMetric) <= 0) return null;
  return {
    firstFacility: rebuildWorkFacility(catalog, firstFacility, best.firstSelection),
    secondFacility: rebuildWorkFacility(catalog, secondFacility, best.secondSelection),
  };
}

function cloneFacility(facility) {
  return { ...facility, selected: [...(facility.selected || [])], candidates: [...(facility.candidates || [])] };
}

function collectPairLockedOperatorIds(firstFacilities, secondFacilities, currentFacilityId) {
  return new Set([...firstFacilities, ...secondFacilities]
    .filter((facility) => facility.id !== currentFacilityId)
    .flatMap((facility) => (facility.selected || []).map((candidate) => candidate.operator.id)));
}

function generateRoomSelections(candidates, product, context) {
  const pool = candidates.slice(0, 12);
  const selections = [];
  for (const combo of combinations(pool, ROOM_CAPACITY)) {
    if (combo.length === 0) continue;
    if (combo.length > 1 && combo.some((candidate) => candidate.suppressesOtherOperators)) continue;
    const finalized = finalizeRoomCandidates(combo, product, context).sort(compareCandidates);
    if (totalCandidateScore(finalized) <= 0) continue;
    selections.push(finalized);
  }
  return selections.sort((a, b) => compareRoomSelections(b, a, product, context)).slice(0, 40);
}

function combinations(items, maxSize) {
  const result = [];
  function visit(start, combo) {
    result.push(combo);
    if (combo.length >= maxSize) return;
    for (let index = start; index < items.length; index += 1) visit(index + 1, [...combo, items[index]]);
  }
  visit(0, []);
  return result;
}

function areSelectionsDisjoint(firstSelection, secondSelection) {
  const firstIds = new Set(firstSelection.map((candidate) => candidate.operator.id));
  return secondSelection.every((candidate) => !firstIds.has(candidate.operator.id));
}

function pairedSelectionMetric(firstSelection, secondSelection, product, context) {
  const first = roomSelectionMetric(firstSelection, product, context);
  const second = roomSelectionMetric(secondSelection, product, context);
  return {
    feasibleCount: Number(first.canCompleteShift) + Number(second.canCompleteShift),
    minAdjustedScore: Math.min(first.adjustedScore, second.adjustedScore),
    adjustedScore: first.adjustedScore + second.adjustedScore,
    rawScore: first.rawScore + second.rawScore,
  };
}

function comparePairedSelectionMetric(left, right) {
  return left.feasibleCount - right.feasibleCount
    || left.minAdjustedScore - right.minAdjustedScore
    || left.adjustedScore - right.adjustedScore
    || left.rawScore - right.rawScore;
}

function rebuildWorkFacility(catalog, facility, selected) {
  const speed = selected.reduce((sum, candidate) => sum + candidate.score, 0);
  if (facility.type === "MANUFACTURE") {
    const productConfig = catalog.products[facility.product];
    const unitsPerDay = productConfig.baseUnitsPerDay * (1 + speed / 100);
    const rebuilt = { ...facility, speed, unitsPerDay, valuePerDay: unitsPerDay * productConfig.value, selected };
    return { ...rebuilt, capacity: calculateFacilityCapacity(catalog, rebuilt, facility.context) };
  }
  if (facility.type === "TRADING") {
    const rebuilt = { ...facility, speed, lmdPerDay: catalog.trade.baseLmdPerDay * (1 + speed / 100), selected };
    return { ...rebuilt, capacity: calculateFacilityCapacity(catalog, rebuilt, facility.context) };
  }
  return { ...facility, selected };
}
