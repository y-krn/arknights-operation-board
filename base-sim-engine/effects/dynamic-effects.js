import { dynamicCapacityEvaluators } from "./dynamic-capacity-effects.js";
import { dynamicOrderEvaluators } from "./dynamic-order-effects.js";
import { dynamicTagEvaluators } from "./dynamic-tag-effects.js";

const dynamicEffectEvaluators = {
  ...dynamicCapacityEvaluators,
  ...dynamicOrderEvaluators,
  ...dynamicTagEvaluators,
};

export function evaluateDynamicEffect(dynamicEffect, operator, selectedCandidates, product, context, roomState = {}) {
  const effect = dynamicEffect.effect;
  const evaluator = dynamicEffectEvaluators[effect.type];
  return evaluator ? evaluator({ dynamicEffect, effect, operator, selectedCandidates, product, context, roomState }) : null;
}

export function isRoomDynamicEffect(effect, roomType, product) {
  if (roomType === "TRADING" && effect.type === "tradingSpeedPerNamedOperatorInWorkFacility") return true;
  if (roomType === "TRADING" && ["tradingSpeedPerTaggedOperatorInSameRoom", "tradingSpeedIfTaggedOperatorInSameRoom", "tradingSpeedPerGoldLine", "tradingSpeedIfGoldLineCountAtLeast", "goldLineBonusIfGoldLineCountAtLeast", "goldLineBonusPerTaggedBaseOperator"].includes(effect.type)) return true;
  if (roomType === "MANUFACTURE" && effect.type === "manufactureSpeedPerTaggedOperatorInSameRoom") return effect.products.includes(product);
  if (roomType === "MANUFACTURE" && effect.type === "manufactureSpeedPerSkillFamilyInSameRoom") return effect.products.includes(product);
  return false;
}
