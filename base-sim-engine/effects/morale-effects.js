import { round } from "../numbers.js";
import { activeBaseSkills } from "../roster.js";

export function calculateMorale(candidate, selectedCandidates, roomType, context = null) {
  const effects = [{ label: "通常勤務", changePerHour: -1 }];
  for (const effect of collectSelfMoraleEffects(candidate.activeSkills || [], roomType)) effects.push(effect);
  for (const selected of selectedCandidates || []) {
    for (const effect of collectRoomMoraleEffects(selected.activeSkills || [], roomType)) effects.push(effect);
  }
  for (const effect of collectIntermediateMoraleEffects(candidate, selectedCandidates, roomType, context)) effects.push(effect);
  const changePerHour = round(effects.reduce((sum, effect) => sum + effect.changePerHour, 0), 2);
  return {
    changePerHour,
    costPerHour: round(Math.max(0, -changePerHour), 2),
    effects,
  };
}

export function collectIntermediateMoraleEffects(candidate, selectedCandidates, roomType, context) {
  if (!context) return [];
  const effects = [];
  const worldlyWorry = Number(context.intermediateParameters?.worldlyWorry || 0);
  const passion = Number(context.intermediateParameters?.passion || 0);
  if (roomType !== "CONTROL" && hasControlSkill(context, /孤光共に照らす|俗世之憂20につき、体力/)) {
    const value = 0.05 + Math.floor(worldlyWorry / 20) * 0.05;
    if (value > 0) effects.push({ label: "孤光共に照らす", changePerHour: round(value, 2), scope: "intermediate" });
  }
  if (roomType === "TRADING") {
    for (const selected of selectedCandidates || []) {
      for (const skill of selected.activeSkills || []) {
        const reduction = windChimesMoraleReduction(skill, worldlyWorry);
        if (reduction > 0) effects.push({ label: skill.buffName, changePerHour: reduction, scope: "intermediate" });
      }
    }
  }
  for (const skill of candidate.activeSkills || []) {
    const text = skill.description || "";
    if (roomType === "CONTROL" && text.includes("パッションが40以上") && text.includes("体力消費量+0.05") && passion >= 40) {
      effects.push({ label: skill.buffName, changePerHour: -0.05, scope: "intermediate" });
    }
    if (roomType === "CONTROL" && text.includes("パッション8につき") && text.includes("体力消費量+0.01")) {
      const value = Math.floor(passion / 8) * 0.01;
      if (value > 0) effects.push({ label: skill.buffName, changePerHour: round(-value, 2), scope: "intermediate" });
    }
  }
  return effects;
}

export function hasControlSkill(context, pattern) {
  for (const operatorId of context.supportAssignments?.CONTROL || []) {
    const operator = context.operatorById.get(operatorId);
    if (!operator) continue;
    for (const skill of activeBaseSkills(operator, context.roster[operator.id])) {
      if (skill.roomType === "CONTROL" && pattern.test(skill.description || "")) return true;
    }
  }
  return false;
}

export function windChimesMoraleReduction(skill, worldlyWorry) {
  const text = skill.description || "";
  if (!text.includes("俗世") || !text.includes("体力消費量")) return 0;
  const extraMatch = text.match(/俗世(?:之|の)憂10につき、体力消費量が追加で-(0\.0[12])/);
  const extra = extraMatch ? Math.floor(worldlyWorry / 10) * Number(extraMatch[1]) : 0;
  return round(extra, 2);
}

export function collectSelfMoraleEffects(skills, roomType) {
  return skills
    .filter((skill) => skill.roomType === roomType)
    .flatMap(parseMoraleEffects)
    .filter((effect) => effect.scope === "self");
}

export function collectRoomMoraleEffects(skills, roomType) {
  return skills
    .filter((skill) => skill.roomType === roomType)
    .flatMap(parseMoraleEffects)
    .filter((effect) => effect.scope === "roomAll");
}

export function parseMoraleEffects(skill) {
  const description = skill.description || "";
  if (description.includes("パッション") && description.includes("体力消費量")) return [];
  const effects = [];
  const scope = moraleScope(description);
  const consumptionPattern = /体力消費量(?:が)?([+-]\d+(?:\.\d+)?)/g;
  for (const match of description.matchAll(consumptionPattern)) {
    const value = Number(match[1]);
    effects.push({
      label: skill.buffName,
      changePerHour: round(-value, 2),
      scope,
    });
  }
  const recoveryPattern = /体力(?:が|を)?1時間ごとに([+-]\d+(?:\.\d+)?)回復/g;
  for (const match of description.matchAll(recoveryPattern)) {
    effects.push({
      label: skill.buffName,
      changePerHour: round(Number(match[1]), 2),
      scope,
    });
  }
  return effects;
}

export function moraleScope(description) {
  if (/制御中枢内全員|配属オペレーター|全員の体力/.test(description)) return "roomAll";
  return "self";
}
