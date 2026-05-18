import { round } from "../numbers.js";
export { evaluateIntermediateSkillEffect } from "./intermediate-skill-handlers.js";
import { INTERMEDIATE_PARAMETERS, createEmptyIntermediateParameters, finalizeIntermediateParameters } from "./intermediate-parameters.js";
export { createEmptyIntermediateParameters, finalizeIntermediateParameters } from "./intermediate-parameters.js";
import { activeBaseSkills } from "../roster.js";
import { operatorMatchesTag } from "../tags.js";
import { calculateMorale } from "../effects/morale-effects.js";
import { calculateMoraleTimeline } from "../shifts/morale.js";

export function setIntermediateParameters(context, ownedOperators, roster) {
  const evaluation = evaluateIntermediateParameters(context, ownedOperators, roster);
  context.intermediateParameters = evaluation.parameters;
  context.intermediateEvaluationOrder = evaluation.order;
}

export function evaluateIntermediateParameters(context, ownedOperators, roster) {
  const params = createEmptyIntermediateParameters();
  const order = [];
  const controlIds = new Set(context.supportAssignments.CONTROL || []);
  const controlOperators = [...controlIds].map((operatorId) => context.operatorById.get(operatorId)).filter(Boolean);

  collectFixedControlIntermediateParameters(params, order, context, controlOperators, roster);
  collectWorkDormIntermediateParameters(params, order, context, ownedOperators, roster);
  context.intermediateParameters = finalizeIntermediateParameters(params);
  collectMoraleControlIntermediateParameters(params, order, context, controlOperators, roster);
  return {
    parameters: finalizeIntermediateParameters(params),
    order,
  };
}

export function collectFixedControlIntermediateParameters(params, order, context, controlOperators, roster) {
  for (const operator of controlOperators) {
    const activeSkills = activeBaseSkills(operator, roster[operator.id]).filter((skill) => skill.roomType === "CONTROL");
    for (const skill of activeSkills) {
      const text = skill.description || "";
      if (text.includes("俗世之憂+5") && text.includes("歳所属")) {
        const suiCount = countPlacedOrOwnedTaggedOperators(context, context.ownedOperators || [], "$cc.g.sui", 5);
        addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.WORLDLY_WORRY, suiCount * 5, skill, "placed-sui", operator);
      }
      if (text.includes("宿舎にいるオペレーター1人につきパッション+1")) addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.PASSION, context.dormOperators, skill, "dorm", operator);
      if (text.includes("パッション+20")) addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.PASSION, 20, skill, "fixed", operator);
      if (text.includes("パッション+10")) addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.PASSION, 10, skill, "fixed", operator);
      if (text.includes("マタタビ+8")) addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.CATNIP, 8, skill, "fixed", operator);
      if (text.includes("制御中枢内のアイルーと愉快な仲間たち所属オペレーター1人につき") && text.includes("マタタビ+2")) {
        const mhCount = controlOperators.filter((controlOperator) => operatorMatchesTag(controlOperator, "$cc.tag.mh", context.catalog)).length;
        addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.CATNIP, mhCount * 2, skill, "control-tag", operator);
      }
      if (text.includes("制御中枢内のウルサス学生自治団所属オペレーター1人につき") && text.includes("ウルサスドリンク+1")) {
        const ussgCount = controlOperators.filter((controlOperator) => operatorMatchesTag(controlOperator, "$cc.g.ussg", context.catalog)).length;
        addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.URSUS_DRINK, ussgCount, skill, "control-tag", operator);
      }
      if (text.includes("制御中枢内のレインボー小隊所属オペレーター1人につき") && text.includes("情報備蓄+1")) {
        const rainbowCount = controlOperators.filter((controlOperator) => operatorMatchesTag(controlOperator, "$cc.g.R6", context.catalog)).length;
        addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.INFO_RESERVE, rainbowCount, skill, "control-tag", operator);
      }
    }
  }
}

function countPlacedOrOwnedTaggedOperators(context, ownedOperators, tag, maxCount = Infinity) {
  const placedNames = new Set(context.assignedOperatorNames || []);
  let count = 0;
  for (const operator of ownedOperators) {
    if (!operatorMatchesTag(operator, tag, context.catalog)) continue;
    if (placedNames.size && !placedNames.has(operator.name)) continue;
    count += 1;
    if (count >= maxCount) return maxCount;
  }
  return count;
}

export function collectMoraleControlIntermediateParameters(params, order, context, controlOperators, roster) {
  const selectedControlCandidates = controlOperators.map((selectedOperator) => ({
    operator: selectedOperator,
    activeSkills: activeBaseSkills(selectedOperator, roster[selectedOperator.id]),
  }));

  for (const operator of controlOperators) {
    const activeSkills = activeBaseSkills(operator, roster[operator.id]).filter((skill) => skill.roomType === "CONTROL");
    const morale = calculateMorale({ operator, activeSkills }, selectedControlCandidates, "CONTROL", context);
    const timeline = calculateMoraleTimeline(morale.costPerHour, context.shiftDurationHours || 24);
    for (const skill of activeSkills) {
      const text = skill.description || "";
      if (text.includes("俗世之憂+15") && /体力が12を?以下/.test(text)) addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.WORLDLY_WORRY, 15 * timeline.hoursAtOrBelow12Ratio, skill, "morale-at-or-below-12", operator, 15);
      if (text.includes("俗世之憂+15") && /体力が12を?上回る/.test(text)) addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.WORLDLY_WORRY, 15 * timeline.hoursAbove12Ratio, skill, "morale-above-12", operator, 15);
      if (text.includes("知覚情報+10") && /体力が12を?上回る時、知覚情報/.test(text)) addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.PERCEPTUAL_INFO, 10 * timeline.hoursAbove12Ratio, skill, "morale-above-12", operator, 10);
      if (text.includes("知覚情報+10") && /体力が12を?下回る/.test(text)) addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.PERCEPTUAL_INFO, 10 * timeline.hoursBelow12Ratio, skill, "morale-below-12", operator, 10);
    }
  }
}

export function collectWorkDormIntermediateParameters(params, order, context, ownedOperators, roster) {
  for (const operator of ownedOperators) {
    for (const skill of activeBaseSkills(operator, roster[operator.id])) {
      const text = skill.description || "";
      if ((skill.roomType === "MANUFACTURE" || skill.roomType === "TRADING") && text.includes("宿舎中のオペレーター1人につき、知覚情報+1")) {
        addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.PERCEPTUAL_INFO, context.dormOperators, skill, "dorm", operator);
      }
      if (skill.roomType === "TRADING" && text.includes("宿舎にいるオペレーター1人につき、俗世之憂+1")) {
        addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.WORLDLY_WORRY, context.dormOperators, skill, "dorm", operator);
      }
      if (skill.roomType === "DORMITORY" && text.includes("宿舎配置時、配置宿舎のレベル1につき") && text.includes("魔物料理+1")) {
        addIntermediateValue(params, order, INTERMEDIATE_PARAMETERS.DUNGEON_MEAL, context.dormitoryLevel, skill, "dormitory-level", operator);
      }
    }
  }
}

export function addIntermediateValue(params, order, key, value, skill, source, operator = null, instantValue = value) {
  const roundedValue = round(value, 4);
  if (!roundedValue) return;
  params[key] += roundedValue;
  order.push({
    key,
    value: roundedValue,
    instantValue: round(instantValue, 4),
    source,
    operatorId: operator?.id || null,
    operatorName: operator?.name || "",
    buffId: skill.buffId,
    buffName: skill.buffName,
    roomType: skill.roomType,
  });
}
