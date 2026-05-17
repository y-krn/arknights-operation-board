import { SUPPORT_ROOM_CAPACITY } from "../constants.js";
import { activeBaseSkills } from "../roster.js";
import { operatorMatchesTag } from "../tags.js";
import { chooseManufactureProducts } from "../layout.js";
import { calculateMorale } from "../effects/morale-effects.js";
import { estimateOperatorShiftFeasible } from "../scoring.js";

export function optimizeControlAssignments(assignments, catalog, roster, ownedOperators, layout, objective, excludedOperatorIds = new Set(), shiftDurationHours = 24) {
  const fixedControl = assignments.CONTROL || [];
  const occupied = new Set(Object.entries(assignments).filter(([roomType]) => roomType !== "CONTROL").flatMap(([, ids]) => ids));
  for (const operatorId of fixedControl) occupied.add(operatorId);
  const slots = SUPPORT_ROOM_CAPACITY.CONTROL - fixedControl.length;
  if (slots <= 0) return assignments;

  const candidates = ownedOperators
    .filter((operator) => !occupied.has(operator.id) && !excludedOperatorIds.has(operator.id))
    .map((operator) => ({
      operator,
      score: scoreControlCandidate(operator, roster[operator.id], catalog, ownedOperators, layout, objective),
      moraleFeasible: estimateOperatorShiftFeasible(operator, roster[operator.id], "CONTROL", shiftDurationHours),
    }))
    .filter((candidate) => candidate.score > 0);
  const selectableCandidates = candidates.some((candidate) => candidate.moraleFeasible)
    ? candidates.filter((candidate) => candidate.moraleFeasible)
    : candidates;
  const selectedCandidates = selectableCandidates
    .sort((a, b) => Number(b.moraleFeasible) - Number(a.moraleFeasible) || b.score - a.score || b.operator.rarityValue - a.operator.rarityValue || a.operator.name.localeCompare(b.operator.name, "ja"))
    .slice(0, slots)
    .map((candidate) => candidate.operator.id);

  return { ...assignments, CONTROL: [...fixedControl, ...selectedCandidates] };
}

export function scoreControlCandidate(operator, rosterEntry, catalog, ownedOperators, layout, objective) {
  let score = 0;
  const products = chooseManufactureProducts(layout.manufacture, objective);
  for (const skill of activeBaseSkills(operator, rosterEntry)) {
    if (skill.roomType !== "CONTROL") continue;
    for (const effect of skill.effects || []) {
      if (effect.type === "manufactureSpeedForTaggedOperator") {
        const matchingOperators = ownedOperators.filter((ownedOperator) => operatorMatchesTag(ownedOperator, effect.tag, catalog)).length;
        const matchingRooms = products.filter((product) => effect.products.includes(product)).length;
        score += effect.value * matchingOperators * matchingRooms;
      }
      if (effect.type === "tradingSpeedForTaggedOperator") {
        const matchingOperators = ownedOperators.filter((ownedOperator) => operatorMatchesTag(ownedOperator, effect.tag, catalog)).length;
        score += effect.value * matchingOperators * layout.trading;
      }
    }
    const text = skill.description || "";
    if (text.includes("マタタビ+8")) score += 8;
    if (text.includes("マタタビ+2") && text.includes("アイルーと愉快な仲間たち")) score += 6;
    if (text.includes("全製造所の製造効率+2%") && text.includes("アイルーと愉快な仲間たち")) score += layout.manufacture * 2;
    if (text.includes("全貿易所の受注効率+7%") && text.includes("アイルーと愉快な仲間たち")) score += layout.trading * 7;
    const orderLimitMatch = text.match(/注文上限\+(\d+)/);
    if (orderLimitMatch && text.includes("ヘドリー")) {
      const hasHedley = ownedOperators.some((ownedOperator) => ownedOperator.name === "ヘドリー");
      if (hasHedley) score += Number(orderLimitMatch[1]) * layout.trading * 4;
    }
    if (orderLimitMatch && text.includes("イェラグ")) {
      const karlanOperators = ownedOperators.filter((ownedOperator) => operatorMatchesTag(ownedOperator, "$cc.g.karlan", catalog)).length;
      score += Number(orderLimitMatch[1]) * karlanOperators * layout.trading;
    }
  }
  return score;
}

export function planControl(catalog, roster, context, rooms = []) {
  const selected = (context.supportAssignments.CONTROL || [])
    .map((operatorId) => context.operatorById.get(operatorId))
    .filter(Boolean)
    .map((operator) => ({
      operator,
      score: null,
      approximate: false,
      activeSkills: activeBaseSkills(operator, roster[operator.id]),
      impacts: collectControlImpacts(operator, rooms),
      matched: activeBaseSkills(operator, roster[operator.id])
        .filter((skill) => skill.roomType === "CONTROL")
        .map((skill) => ({
          buffId: skill.buffId,
          buffName: skill.buffName,
          value: null,
          condition: skill.condition || {},
          roomType: skill.roomType,
          description: skill.description,
          approximate: false,
          suppressesOtherOperators: false,
        })),
    }));
  const selectedWithMorale = selected.map((candidate) => ({
    ...candidate,
    morale: calculateMorale(candidate, selected, "CONTROL", context),
  }));

  return {
    id: "control-1",
    type: "CONTROL",
    label: "制御中枢",
    product: "CONTROL",
    productLabel: "全体支援",
    speed: null,
    selected: selectedWithMorale,
    candidates: [],
  };
}

export function collectControlImpacts(operator, rooms) {
  const impacts = [];
  for (const room of rooms) {
    for (const candidate of room.selected || []) {
      for (const skill of candidate.matched || []) {
        if (skill.sourceOperatorId !== operator.id) continue;
        impacts.push({
          facilityLabel: room.label,
          facilityType: room.type,
          targetOperatorName: candidate.operator.name,
          buffName: skill.buffName,
          skillName: skill.sourceSkillName || skill.buffName,
          value: skill.value,
          detail: skill.detail || "",
        });
      }
    }
  }
  return impacts;
}
