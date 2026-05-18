import { activeBaseSkills } from "./roster.js";
import { classifyUnsupportedSkill, isHandledBySkillRegistry } from "./effects/skill-handler-registry.js";

export function collectUnsupportedSkills(operators, roster) {
  const warnings = new Map();
  for (const operator of operators) {
    for (const skill of activeBaseSkills(operator, roster[operator.id])) {
      if (!["MANUFACTURE", "TRADING", "CONTROL", "POWER", "DORMITORY"].includes(skill.roomType)) continue;
      if (skill.supported) continue;
      if (isSkillSupportedByManualEvaluator(skill)) continue;
      const classification = classifyUnsupportedSkill(skill);
      if (classification.visibility === "ignore") continue;
      const current = warnings.get(skill.buffId) || {
        buffId: skill.buffId,
        buffName: skill.buffName,
        roomType: skill.roomType,
        operators: [],
        description: skill.description,
        conditionTags: skill.conditionTags || [],
        intermediateRefs: skill.intermediateRefs || [],
        category: classification.category,
        reason: classification.reason,
        priority: classification.priority,
      };
      if (!current.operators.includes(operator.name)) current.operators.push(operator.name);
      warnings.set(skill.buffId, current);
    }
  }
  return [...warnings.values()]
    .sort((a, b) => a.priority - b.priority || a.category.localeCompare(b.category) || a.buffName.localeCompare(b.buffName, "ja"))
    .slice(0, 32);
}

function isSkillSupportedByManualEvaluator(skill) {
  return isHandledBySkillRegistry(skill);
}
