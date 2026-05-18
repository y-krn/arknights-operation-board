import { round } from "../numbers.js";
export { evaluateIntermediateSkillEffect } from "./intermediate-skill-handlers.js";
import { createEmptyIntermediateParameters, finalizeIntermediateParameters } from "./intermediate-parameters.js";
export { createEmptyIntermediateParameters, finalizeIntermediateParameters } from "./intermediate-parameters.js";
import {
  collectFixedControlIntermediateEntries,
  collectMoraleControlIntermediateEntries,
  collectWorkDormIntermediateEntries,
} from "./intermediate-generation-handlers.js";

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
  const record = (key, value, skill, source, operator = null, instantValue = value) => addIntermediateValue(params, order, key, value, skill, source, operator, instantValue);

  collectFixedControlIntermediateEntries({ context, controlOperators, roster, record });
  collectWorkDormIntermediateEntries({ context, ownedOperators, roster, record });
  context.intermediateParameters = finalizeIntermediateParameters(params);
  collectMoraleControlIntermediateEntries({ context, controlOperators, roster, record });
  return {
    parameters: finalizeIntermediateParameters(params),
    order,
  };
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
