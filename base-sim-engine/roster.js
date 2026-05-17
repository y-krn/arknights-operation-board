import { PHASE_RANK } from "./constants.js";

export function createDefaultRoster(catalog, options = {}) {
  const defaultOwned = options.defaultOwned ?? true;
  return Object.fromEntries(
    catalog.operators.map((operator) => [
      operator.id,
      {
        owned: defaultOwned,
        phase: operator.rarityValue >= 5 ? "PHASE_2" : operator.rarityValue >= 3 ? "PHASE_1" : "PHASE_0",
        level: operator.rarityValue <= 2 ? 30 : 1,
      },
    ])
  );
}

export function activeBaseSkills(operator, rosterEntry) {
  if (!rosterEntry?.owned) return [];
  return selectTopSkillPerSlot(operator.baseSkills.filter((skill) => conditionMet(skill.condition, rosterEntry)));
}

export function selectTopSkillPerSlot(skills) {
  const bestBySlot = new Map();
  const passthrough = [];
  for (const skill of skills) {
    if (!Number.isInteger(skill.slotIndex)) {
      passthrough.push(skill);
      continue;
    }
    const current = bestBySlot.get(skill.slotIndex);
    if (!current || skillRank(skill) > skillRank(current)) {
      bestBySlot.set(skill.slotIndex, skill);
    }
  }
  return [...passthrough, ...bestBySlot.values()].sort((a, b) => (a.slotIndex ?? 99) - (b.slotIndex ?? 99));
}

export function skillRank(skill) {
  const phaseRank = PHASE_RANK[skill.condition?.phase] ?? 0;
  const level = Number(skill.condition?.level || 1);
  return phaseRank * 10000 + level * 100 + Number(skill.slotRank || 0);
}

export function conditionMet(condition = {}, rosterEntry) {
  const requiredPhase = condition.phase ? PHASE_RANK[condition.phase] : 0;
  const currentPhase = PHASE_RANK[rosterEntry.phase] ?? 0;
  if (currentPhase < requiredPhase) return false;
  if (condition.level && Number(rosterEntry.level || 1) < condition.level) return false;
  return true;
}

export function maxCondition(conditions) {
  return conditions.reduce((max, condition) => {
    if (conditionRank(condition) > conditionRank(max)) return condition || {};
    return max;
  }, {});
}

export function conditionRank(condition = {}) {
  const phaseRank = PHASE_RANK[condition.phase] ?? 0;
  return phaseRank * 10000 + Number(condition.level || 1);
}
