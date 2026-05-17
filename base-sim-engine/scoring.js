import { round } from "./numbers.js";
import { countPlacedOperatorsWithTag } from "./tags.js";
import { activeBaseSkills } from "./roster.js";
import { evaluateIntermediateSkillEffect } from "./effects/intermediate-effects.js";
import { isGlobalEffectApplicable } from "./effects/global-effects.js";
import { collectSelfMoraleEffects } from "./effects/morale-effects.js";
import { inferCapacityVariableEffect } from "./effects/capacity-effects.js";
import { inferOrderModelEffect } from "./effects/order-model-effects.js";
import { evaluateStaticEffect } from "./effects/static-effects.js";
import {
  evaluateDynamicEffect,
  isRoomDynamicEffect,
} from "./effects/dynamic-effects.js";
export function compareCandidates(a, b) {
  return b.score - a.score || b.staticScore - a.staticScore || b.operator.rarityValue - a.operator.rarityValue || a.operator.name.localeCompare(b.operator.name, "ja");
}

export function totalCandidateScore(candidates) {
  return candidates.reduce((sum, candidate) => sum + candidate.score, 0);
}

export function estimateOperatorShiftFeasible(operator, rosterEntry, roomType, shiftDurationHours) {
  const activeSkills = activeBaseSkills(operator, rosterEntry).filter((skill) => skill.roomType === roomType);
  const changePerHour = -1 + collectSelfMoraleEffects(activeSkills, roomType).reduce((sum, effect) => sum + effect.changePerHour, 0);
  return Math.max(0, -changePerHour) * shiftDurationHours <= 24;
}


export function scoreOperator(operator, rosterEntry, roomType, product, context) {
  const activeSkills = activeBaseSkills(operator, rosterEntry);
  const staticMatched = [];
  const dynamicEffects = [];
  let staticScore = 0;
  let approximate = false;
  let suppressesOtherOperators = false;

  for (const skill of activeSkills) {
    if (skill.roomType !== roomType) continue;
    const intermediate = evaluateIntermediateSkillEffect(skill, roomType, product, context);
    if (intermediate) {
      staticScore += intermediate.value;
      approximate ||= Boolean(intermediate.approximate);
      staticMatched.push({
        buffId: skill.buffId,
        buffName: skill.buffName + (intermediate.detail ? " " + intermediate.detail : ""),
        value: intermediate.value,
        condition: skill.condition || {},
        roomType: skill.roomType,
        description: skill.description,
        approximate: Boolean(intermediate.approximate),
        suppressesOtherOperators: false,
        detail: intermediate.detail || "",
        effectType: intermediate.effectType,
        sourceOperatorId: null,
        sourceOperatorName: null,
        sourceSkillName: skill.buffName,
      });
    }
    const variableEffect = inferCapacityVariableEffect(skill, roomType, product);
    if (variableEffect) dynamicEffects.push({ effect: variableEffect, skill });
    if (roomType === "MANUFACTURE" && (skill.description || "").includes("自身以外の配属オペレーター全員の製造効率を0にする")) suppressesOtherOperators = true;
    const orderModelEffect = inferOrderModelEffect(skill, roomType);
    if (orderModelEffect) dynamicEffects.push({ effect: orderModelEffect, skill });
    for (const effect of skill.effects) {
      const value = evaluateStaticEffect(effect, product, context, activeSkills);
      if (value !== null) {
        staticScore += value;
        approximate ||= Boolean(effect.approximate);
        staticMatched.push(formatMatchedSkill({ effect, skill }, value));
        continue;
      }
      if (isRoomDynamicEffect(effect, roomType, product)) dynamicEffects.push({ effect, skill });
    }
  }

  for (const globalEffect of context.globalEffects) {
    if (isGlobalEffectApplicable(globalEffect.effect, roomType, product)) dynamicEffects.push(globalEffect);
  }

  return {
    operator,
    roomType,
    staticScore: round(staticScore, 2),
    score: round(staticScore, 2),
    approximate,
    suppressesOtherOperators: suppressesOtherOperators || staticMatched.some((skill) => skill.suppressesOtherOperators),
    staticMatched,
    matched: staticMatched,
    dynamicEffects,
    activeSkills,
  };
}

export function formatMatchedSkill(dynamicEffect, value, detail = "") {
  const supportName = dynamicEffect.supportOperator ? "（" + dynamicEffect.supportOperator.name + "）" : "";
  const condition = detail ? " " + detail : "";
  return {
    buffId: dynamicEffect.skill.buffId,
    buffName: dynamicEffect.skill.buffName + supportName + condition,
    value,
    condition: dynamicEffect.skill.condition || {},
    roomType: dynamicEffect.skill.roomType,
    description: dynamicEffect.skill.description,
    approximate: Boolean(dynamicEffect.effect.approximate),
    suppressesOtherOperators: Boolean(dynamicEffect.effect.suppressesOtherOperators),
    detail,
    effectType: dynamicEffect.effect.type,
    sourceOperatorId: dynamicEffect.supportOperator?.id || null,
    sourceOperatorName: dynamicEffect.supportOperator?.name || null,
    sourceSkillName: dynamicEffect.skill.buffName,
  };
}

export function calculateRoomGoldLines(candidates, context) {
  let lines = context.goldProductionLines;
  for (const candidate of candidates) {
    for (const skill of candidate.activeSkills || []) {
      for (const effect of skill.effects || []) {
        if (effect.type === "goldLineBonusIfGoldLineCountAtLeast" && context.goldProductionLines >= effect.threshold) {
          lines += effect.bonusLines;
        }
        if (effect.type === "goldLineBonusPerTaggedBaseOperator") {
          const count = Math.min(effect.maxOperators, countPlacedOperatorsWithTag(candidates, effect.tag, context));
          lines += count * effect.bonusLinesPerOperator;
        }
      }
    }
  }
  return lines;
}
