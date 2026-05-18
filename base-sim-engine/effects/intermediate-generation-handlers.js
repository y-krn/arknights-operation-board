import { activeBaseSkills } from "../roster.js";
import { operatorMatchesTag } from "../tags.js";
import { calculateMorale } from "./morale-effects.js";
import { calculateMoraleTimeline } from "../shifts/morale.js";
import { INTERMEDIATE_PARAMETERS } from "./intermediate-parameters.js";

function textOf(skill) {
  return skill.description || "";
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

export const FIXED_CONTROL_INTERMEDIATE_HANDLERS = [
  {
    id: "sui-worldly-worry",
    key: INTERMEDIATE_PARAMETERS.WORLDLY_WORRY,
    source: "placed-sui",
    canHandle: (skill) => textOf(skill).includes("俗世之憂+5") && textOf(skill).includes("歳所属"),
    value: ({ context }) => countPlacedOrOwnedTaggedOperators(context, context.ownedOperators || [], "$cc.g.sui", 5) * 5,
  },
  {
    id: "dorm-passion",
    key: INTERMEDIATE_PARAMETERS.PASSION,
    source: "dorm",
    canHandle: (skill) => textOf(skill).includes("宿舎にいるオペレーター1人につきパッション+1"),
    value: ({ context }) => context.dormOperators,
  },
  {
    id: "fixed-passion-20",
    key: INTERMEDIATE_PARAMETERS.PASSION,
    source: "fixed",
    canHandle: (skill) => textOf(skill).includes("パッション+20"),
    value: () => 20,
  },
  {
    id: "fixed-passion-10",
    key: INTERMEDIATE_PARAMETERS.PASSION,
    source: "fixed",
    canHandle: (skill) => textOf(skill).includes("パッション+10"),
    value: () => 10,
  },
  {
    id: "fixed-catnip-8",
    key: INTERMEDIATE_PARAMETERS.CATNIP,
    source: "fixed",
    canHandle: (skill) => textOf(skill).includes("マタタビ+8"),
    value: () => 8,
  },
  {
    id: "mh-control-catnip",
    key: INTERMEDIATE_PARAMETERS.CATNIP,
    source: "control-tag",
    canHandle: (skill) => textOf(skill).includes("制御中枢内のアイルーと愉快な仲間たち所属オペレーター1人につき") && textOf(skill).includes("マタタビ+2"),
    value: ({ context, controlOperators }) => controlOperators.filter((controlOperator) => operatorMatchesTag(controlOperator, "$cc.tag.mh", context.catalog)).length * 2,
  },
  {
    id: "ursus-drink",
    key: INTERMEDIATE_PARAMETERS.URSUS_DRINK,
    source: "control-tag",
    canHandle: (skill) => textOf(skill).includes("制御中枢内のウルサス学生自治団所属オペレーター1人につき") && textOf(skill).includes("ウルサスドリンク+1"),
    value: ({ context, controlOperators }) => controlOperators.filter((controlOperator) => operatorMatchesTag(controlOperator, "$cc.g.ussg", context.catalog)).length,
  },
  {
    id: "info-reserve",
    key: INTERMEDIATE_PARAMETERS.INFO_RESERVE,
    source: "control-tag",
    canHandle: (skill) => textOf(skill).includes("制御中枢内のレインボー小隊所属オペレーター1人につき") && textOf(skill).includes("情報備蓄+1"),
    value: ({ context, controlOperators }) => controlOperators.filter((controlOperator) => operatorMatchesTag(controlOperator, "$cc.g.R6", context.catalog)).length,
  },
];

export const WORK_DORM_INTERMEDIATE_HANDLERS = [
  {
    id: "dorm-perceptual-info",
    key: INTERMEDIATE_PARAMETERS.PERCEPTUAL_INFO,
    source: "dorm",
    canHandle: (skill) => (skill.roomType === "MANUFACTURE" || skill.roomType === "TRADING") && textOf(skill).includes("宿舎中のオペレーター1人につき、知覚情報+1"),
    value: ({ context }) => context.dormOperators,
  },
  {
    id: "dorm-worldly-worry",
    key: INTERMEDIATE_PARAMETERS.WORLDLY_WORRY,
    source: "dorm",
    canHandle: (skill) => skill.roomType === "TRADING" && textOf(skill).includes("宿舎にいるオペレーター1人につき、俗世之憂+1"),
    value: ({ context }) => context.dormOperators,
  },
  {
    id: "dormitory-level-dungeon-meal",
    key: INTERMEDIATE_PARAMETERS.DUNGEON_MEAL,
    source: "dormitory-level",
    canHandle: (skill) => skill.roomType === "DORMITORY" && textOf(skill).includes("宿舎配置時、配置宿舎のレベル1につき") && textOf(skill).includes("魔物料理+1"),
    value: ({ context }) => context.dormitoryLevel,
  },
];

export const MORALE_CONTROL_INTERMEDIATE_HANDLERS = [
  {
    id: "worldly-worry-at-or-below-12",
    key: INTERMEDIATE_PARAMETERS.WORLDLY_WORRY,
    source: "morale-at-or-below-12",
    instantValue: 15,
    canHandle: (skill) => textOf(skill).includes("俗世之憂+15") && /体力が12を?以下/.test(textOf(skill)),
    value: ({ timeline }) => 15 * timeline.hoursAtOrBelow12Ratio,
  },
  {
    id: "worldly-worry-above-12",
    key: INTERMEDIATE_PARAMETERS.WORLDLY_WORRY,
    source: "morale-above-12",
    instantValue: 15,
    canHandle: (skill) => textOf(skill).includes("俗世之憂+15") && /体力が12を?上回る/.test(textOf(skill)),
    value: ({ timeline }) => 15 * timeline.hoursAbove12Ratio,
  },
  {
    id: "perceptual-info-above-12",
    key: INTERMEDIATE_PARAMETERS.PERCEPTUAL_INFO,
    source: "morale-above-12",
    instantValue: 10,
    canHandle: (skill) => textOf(skill).includes("知覚情報+10") && /体力が12を?上回る時、知覚情報/.test(textOf(skill)),
    value: ({ timeline }) => 10 * timeline.hoursAbove12Ratio,
  },
  {
    id: "perceptual-info-below-12",
    key: INTERMEDIATE_PARAMETERS.PERCEPTUAL_INFO,
    source: "morale-below-12",
    instantValue: 10,
    canHandle: (skill) => textOf(skill).includes("知覚情報+10") && /体力が12を?下回る/.test(textOf(skill)),
    value: ({ timeline }) => 10 * timeline.hoursBelow12Ratio,
  },
];

function collectMatchingEntries({ handlers, skills, context, operator, extras = {}, record }) {
  for (const skill of skills) {
    for (const handler of handlers) {
      if (!handler.canHandle(skill)) continue;
      record(handler.key, handler.value({ skill, context, operator, ...extras }), skill, handler.source, operator, handler.instantValue);
    }
  }
}

export function collectFixedControlIntermediateEntries({ context, controlOperators, roster, record }) {
  for (const operator of controlOperators) {
    const skills = activeBaseSkills(operator, roster[operator.id]).filter((skill) => skill.roomType === "CONTROL");
    collectMatchingEntries({ handlers: FIXED_CONTROL_INTERMEDIATE_HANDLERS, skills, context, operator, extras: { controlOperators }, record });
  }
}

export function collectWorkDormIntermediateEntries({ context, ownedOperators, roster, record }) {
  for (const operator of ownedOperators) {
    const skills = activeBaseSkills(operator, roster[operator.id]);
    collectMatchingEntries({ handlers: WORK_DORM_INTERMEDIATE_HANDLERS, skills, context, operator, record });
  }
}

export function collectMoraleControlIntermediateEntries({ context, controlOperators, roster, record }) {
  const selectedControlCandidates = controlOperators.map((selectedOperator) => ({
    operator: selectedOperator,
    activeSkills: activeBaseSkills(selectedOperator, roster[selectedOperator.id]),
  }));

  for (const operator of controlOperators) {
    const skills = activeBaseSkills(operator, roster[operator.id]).filter((skill) => skill.roomType === "CONTROL");
    const morale = calculateMorale({ operator, activeSkills: skills }, selectedControlCandidates, "CONTROL", context);
    const timeline = calculateMoraleTimeline(morale.costPerHour, context.shiftDurationHours || 24);
    collectMatchingEntries({ handlers: MORALE_CONTROL_INTERMEDIATE_HANDLERS, skills, context, operator, extras: { timeline }, record });
  }
}

export function isIntermediateGenerationSkillHandled(skill) {
  return [...FIXED_CONTROL_INTERMEDIATE_HANDLERS, ...WORK_DORM_INTERMEDIATE_HANDLERS, ...MORALE_CONTROL_INTERMEDIATE_HANDLERS]
    .some((handler) => handler.canHandle(skill));
}
