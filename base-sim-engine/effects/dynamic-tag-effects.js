import { round } from "../numbers.js";
import {
  countSelectedWithTag,
  countSelectedSkillFamily,
  operatorMatchesTag,
  tagLabel,
  skillFamilyLabel,
} from "../tags.js";

export const dynamicTagEvaluators = {
  tradingSpeedPerNamedOperatorInWorkFacility({ effect, operator, selectedCandidates, context }) {
    const selectedNames = new Set(selectedCandidates.map((candidate) => candidate.operator.name));
    for (const supportName of context.supportOperatorNames) selectedNames.add(supportName);
    const matchedNames = effect.operatorNames.filter((name) => name !== operator.name && selectedNames.has(name));
    if (matchedNames.length === 0) return null;
    return { value: matchedNames.length * effect.valuePerOperator, detail: matchedNames.join("/") + " 配置" };
  },

  manufactureSpeedForTaggedOperator({ effect, operator, product, context }) {
    if (!effect.products.includes(product) || !operatorMatchesTag(operator, effect.tag, context.catalog)) return null;
    return { value: effect.value, detail: tagLabel(effect.tag, context.catalog) };
  },

  tradingSpeedForTaggedOperator({ effect, operator, context }) {
    if (!operatorMatchesTag(operator, effect.tag, context.catalog)) return null;
    return { value: effect.value, detail: tagLabel(effect.tag, context.catalog) };
  },

  goldManufactureSpeedPerPassion({ effect, operator, selectedCandidates, product, context }) {
    if (product !== "GOLD") return null;
    if (!isFacilityWideEffectCarrier(operator, selectedCandidates)) return null;
    const passion = Number(context.intermediateParameters?.passion || 0);
    const value = effect.baseValue + Math.floor(passion / 20) * effect.baseValue;
    return value > 0 ? { value, detail: "パッション " + round(passion, 1) } : null;
  },

  tradingSpeedPerPassion({ effect, operator, selectedCandidates, context }) {
    if (!isFacilityWideEffectCarrier(operator, selectedCandidates)) return null;
    const passion = Number(context.intermediateParameters?.passion || 0);
    const value = Math.floor(passion / effect.passionPerStep) * effect.valuePerStep;
    return value > 0 ? { value, detail: "パッション " + round(passion, 1) } : null;
  },

  manufactureSpeedIfMhInControl({ dynamicEffect, effect, operator, selectedCandidates, product, context }) {
    if (!effect.products.includes(product)) return null;
    if (!isFacilityWideEffectCarrier(operator, selectedCandidates)) return null;
    if (!hasTaggedControlPartner(context, dynamicEffect.supportOperator?.id, effect.tag)) return null;
    return { value: effect.value, detail: tagLabel(effect.tag, context.catalog) + " 制御中枢" };
  },

  tradingSpeedIfMhInControl({ dynamicEffect, effect, operator, selectedCandidates, context }) {
    if (!isFacilityWideEffectCarrier(operator, selectedCandidates)) return null;
    if (!hasTaggedControlPartner(context, dynamicEffect.supportOperator?.id, effect.tag)) return null;
    return { value: effect.value, detail: tagLabel(effect.tag, context.catalog) + " 制御中枢" };
  },

  manufactureSpeedPerTaggedOperatorInSameRoom({ effect, selectedCandidates, product, context }) {
    if (!effect.products.includes(product)) return null;
    const count = countSelectedWithTag(selectedCandidates, effect.tag, context.catalog);
    return count > 0 ? { value: count * effect.valuePerOperator, detail: tagLabel(effect.tag, context.catalog) + " x" + count } : null;
  },

  manufactureSpeedPerSkillFamilyInSameRoom({ effect, selectedCandidates, product, context }) {
    if (!effect.products.includes(product)) return null;
    const count = countSelectedSkillFamily(selectedCandidates, effect.tag, context.catalog);
    return count > 0 ? { value: count * effect.valuePerSkill, detail: skillFamilyLabel(effect.tag, context.catalog) + " x" + count } : null;
  },

  tradingSpeedPerTaggedOperatorInSameRoom({ effect, selectedCandidates, context }) {
    const count = countSelectedWithTag(selectedCandidates, effect.tag, context.catalog);
    return count > 0 ? { value: count * effect.valuePerOperator, detail: tagLabel(effect.tag, context.catalog) + " x" + count } : null;
  },

  tradingSpeedIfTaggedOperatorInSameRoom({ effect, selectedCandidates, context }) {
    const count = countSelectedWithTag(selectedCandidates, effect.tag, context.catalog);
    return count > 0 ? { value: effect.value, detail: tagLabel(effect.tag, context.catalog) } : null;
  },

  tradingSpeedPerGoldLine({ effect, context, roomState }) {
    const lines = roomState.goldLines ?? context.goldProductionLines;
    return lines > 0 ? { value: lines * effect.valuePerLine, detail: "純金生産ライン x" + lines } : null;
  },

  tradingSpeedIfGoldLineCountAtLeast({ effect, context, roomState }) {
    const lines = roomState.goldLines ?? context.goldProductionLines;
    return lines >= effect.threshold ? { value: effect.value, detail: "純金生産ライン x" + lines } : null;
  },
};

function isFacilityWideEffectCarrier(operator, selectedCandidates) {
  const eligible = selectedCandidates
    .filter((candidate) => candidate.staticScore > 0 || candidate.staticMatched?.length)
    .sort(compareDynamicCandidates)[0];
  return eligible?.operator.id === operator.id;
}

function compareDynamicCandidates(a, b) {
  return b.score - a.score || b.staticScore - a.staticScore || b.operator.rarityValue - a.operator.rarityValue || a.operator.name.localeCompare(b.operator.name, "ja");
}

function hasTaggedControlPartner(context, sourceOperatorId, tag) {
  for (const operatorId of context.supportAssignments?.CONTROL || []) {
    if (operatorId === sourceOperatorId) continue;
    const operator = context.operatorById.get(operatorId);
    if (operator && operatorMatchesTag(operator, tag, context.catalog)) return true;
  }
  return false;
}
