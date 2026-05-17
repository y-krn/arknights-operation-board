import { clampInteger, round } from "../numbers.js";
import {
  DEFAULT_FACILITY_LEVEL,
  MANUFACTURE_CAPACITY_BY_LEVEL,
  TRADING_ORDER_LIMIT_BY_LEVEL,
  DEFAULT_PRODUCT_WEIGHT,
  DEFAULT_ORDER_VALUE_LMD,
} from "../constants.js";
import { countSelectedSkillFamily, operatorMatchesTag } from "../tags.js";

export function calculateFacilityCapacity(catalog, facility, context = null) {
  if (facility.type === "MANUFACTURE") return calculateManufactureCapacity(catalog, facility, context);
  if (facility.type === "TRADING") return calculateTradingCapacity(catalog, facility, context);
  return null;
}

export function calculateManufactureCapacity(catalog, facility, context = null) {
  const level = clampInteger(facility.level || DEFAULT_FACILITY_LEVEL, 1, 3);
  const base = MANUFACTURE_CAPACITY_BY_LEVEL[level - 1];
  const bonuses = collectCapacityBonuses(facility, "storage", context);
  const bonus = bonuses.reduce((sum, entry) => sum + entry.value, 0);
  const effective = Math.max(1, base + bonus);
  const weight = Number(catalog.products?.[facility.product]?.weight || DEFAULT_PRODUCT_WEIGHT[facility.product] || 1);
  const effectiveUnits = Math.floor(effective / weight);
  const unitsPerHour = Number(facility.unitsPerDay || 0) / 24;
  return {
    type: "storage",
    label: "保管上限",
    level,
    base,
    bonus,
    effective,
    unitWeight: weight,
    effectiveUnits,
    fillHours: unitsPerHour > 0 ? round(effectiveUnits / unitsPerHour, 1) : null,
    bonuses,
  };
}

export function calculateTradingCapacity(catalog, facility, context = null) {
  const level = clampInteger(facility.level || DEFAULT_FACILITY_LEVEL, 1, 3);
  const base = TRADING_ORDER_LIMIT_BY_LEVEL[level - 1];
  const bonuses = collectCapacityBonuses(facility, "order", context);
  const bonus = bonuses.reduce((sum, entry) => sum + entry.value, 0);
  const effective = Math.max(1, base + bonus);
  const lmdPerOrder = Number(catalog.trade?.lmdPerOrder || DEFAULT_ORDER_VALUE_LMD);
  const ordersPerHour = lmdPerOrder > 0 ? Number(facility.lmdPerDay || 0) / lmdPerOrder / 24 : 0;
  const currentOrders = estimateCurrentOrdersFromRate(ordersPerHour, effective, facility.collectionIntervalHours || 24);
  return {
    type: "order",
    label: "注文上限",
    level,
    base,
    bonus,
    effective,
    lmdPerOrder,
    effectiveUnits: effective,
    currentOrders,
    orderLimitGap: Math.max(0, effective - currentOrders),
    fillHours: ordersPerHour > 0 ? round(effective / ordersPerHour, 1) : null,
    bonuses,
  };
}

export function collectCapacityBonuses(facility, type, context = null) {
  const fixed = (facility.selected || []).flatMap((candidate) => collectCandidateCapacityBonuses(candidate, facility, type));
  const global = collectGlobalCapacityBonuses(facility.selected || [], type, context);
  const room = collectRoomVariableCapacityBonuses(facility.selected || [], facility, type, context);
  return type === "order" ? [...fixed, ...global, ...room, ...collectVariableOrderLimitBonuses(facility.selected || [])] : [...fixed, ...global, ...room];
}

export function collectRoomCapacityBonus(candidates, roomType, product, type, context = null) {
  if ((type === "storage" && roomType !== "MANUFACTURE") || (type === "order" && roomType !== "TRADING")) return 0;
  const facility = { type: roomType, product, level: DEFAULT_FACILITY_LEVEL };
  return candidates
    .flatMap((candidate) => collectCandidateCapacityBonuses(candidate, facility, type))
    .concat(collectGlobalCapacityBonuses(candidates, type, context))
    .concat(collectRoomVariableCapacityBonuses(candidates, facility, type, context))
    .concat(type === "order" ? collectVariableOrderLimitBonuses(candidates) : [])
    .reduce((sum, entry) => sum + entry.value, 0);
}

export function collectRoomVariableCapacityBonuses(candidates, facility, type, context = null) {
  if (type !== "storage" || facility.type !== "MANUFACTURE") return [];
  return candidates.flatMap((candidate) => {
    const bonuses = [];
    for (const skill of candidate.activeSkills || []) {
      if (skill.roomType !== facility.type || !capacitySkillAppliesToProduct(skill, facility.product)) continue;
      const text = skill.description || "";
      const perOperatorMatch = text.match(/製造所に配置中のオペレーター1名につき、配置製造所の(?:製造効率\+\d+%、)?保管上限\+(\d+)/);
      if (perOperatorMatch) {
        const count = candidates.length;
        bonuses.push(formatCapacityBonus(skill, Number(perOperatorMatch[1]) * count, candidate.operator, "配置人数 x" + count));
      }
      const skillFamilyMatch = text.match(/ラインテク系スキルの発動数1につき、保管上限\+(\d+)/);
      if (skillFamilyMatch && context) {
        const count = countSelectedSkillFamily(candidates, "$cc.sk.manu2", context.catalog);
        if (count > 0) bonuses.push(formatCapacityBonus(skill, Number(skillFamilyMatch[1]) * count, candidate.operator, "ラインテク系 x" + count));
      }
    }
    return bonuses;
  });
}

export function collectGlobalCapacityBonuses(candidates, type, context) {
  if (type !== "order" || !context) return [];
  const bonuses = [];
  for (const globalEffect of context.globalEffects || []) {
    const { effect } = globalEffect;
    if (effect.type === "orderLimitForNamedOperatorInTradingRoom") {
      for (const candidate of candidates) {
        if ((effect.operatorNames || []).includes(candidate.operator.name)) bonuses.push(formatGlobalCapacityBonus(globalEffect, effect.value, candidate.operator.name));
      }
    }
    if (effect.type === "orderLimitForTaggedOperatorInTradingRoom") {
      for (const candidate of candidates) {
        if (operatorMatchesTag(candidate.operator, effect.tag, context.catalog)) bonuses.push(formatGlobalCapacityBonus(globalEffect, effect.value, candidate.operator.name));
      }
    }
  }
  return bonuses;
}

export function formatGlobalCapacityBonus(globalEffect, value, targetName) {
  return {
    operatorId: globalEffect.supportOperator?.id || null,
    operatorName: globalEffect.supportOperator?.name || "",
    buffId: globalEffect.skill.buffId,
    buffName: globalEffect.skill.buffName,
    value,
    detail: targetName,
  };
}

export function collectVariableOrderLimitBonuses(candidates) {
  return candidates.flatMap((candidate) => {
    const skill = (candidate.activeSkills || []).find((activeSkill) => (activeSkill.description || "").includes("自身以外の配属オペレーターの受注効率が10%につき、注文上限-1"));
    if (!skill) return [];
    const otherSpeed = candidates
      .filter((other) => other.operator.id !== candidate.operator.id)
      .reduce((sum, other) => sum + Math.max(0, Number(other.staticScore ?? other.score ?? 0)), 0);
    const value = -Math.floor(otherSpeed / 10);
    return value ? [formatCapacityBonus(skill, value, candidate.operator, "他者効率 " + round(otherSpeed, 1) + "%")] : [];
  });
}

export function estimateCurrentOrders(candidates, orderLimit, context) {
  const speed = candidates.reduce((sum, candidate) => sum + Math.max(0, Number(candidate.staticScore ?? candidate.score ?? 0)), 0);
  const lmdPerOrder = Number(context.catalog?.trade?.lmdPerOrder || DEFAULT_ORDER_VALUE_LMD);
  const lmdPerDay = Number(context.catalog?.trade?.baseLmdPerDay || 0) * (1 + speed / 100);
  const ordersPerHour = lmdPerOrder > 0 ? lmdPerDay / lmdPerOrder / 24 : 0;
  return estimateCurrentOrdersFromRate(ordersPerHour, orderLimit, context.collectionIntervalHours || 24);
}

export function estimateCurrentOrdersFromRate(ordersPerHour, orderLimit, collectionIntervalHours) {
  return Math.max(0, Math.min(orderLimit, Math.floor(Number(ordersPerHour || 0) * Math.max(1, Number(collectionIntervalHours || 24)))));
}

export function collectRoomCapacityBonusesByOperator(candidates, roomType, product, type) {
  if ((type === "storage" && roomType !== "MANUFACTURE") || (type === "order" && roomType !== "TRADING")) return new Map();
  const facility = { type: roomType, product, level: DEFAULT_FACILITY_LEVEL };
  const bonuses = new Map();
  for (const candidate of candidates) {
    const value = collectCandidateCapacityBonuses(candidate, facility, type).reduce((sum, entry) => sum + entry.value, 0);
    bonuses.set(candidate.operator.id, value);
  }
  return bonuses;
}

export function collectCandidateCapacityBonuses(candidate, facility, type) {
  return (candidate.activeSkills || [])
    .filter((skill) => skill.roomType === facility.type)
    .filter((skill) => capacitySkillAppliesToProduct(skill, facility.product))
    .flatMap((skill) => parseFixedCapacityBonuses(skill, type, facility.level || DEFAULT_FACILITY_LEVEL, candidate.operator));
}

export function capacitySkillAppliesToProduct(skill, product) {
  const text = skill.description || "";
  if (skill.roomType !== "MANUFACTURE") return true;
  if (/源石|原料/.test(text)) return false;
  if (/作戦記録/.test(text)) return product === "EXP";
  if (/純金|金属/.test(text)) return product === "GOLD";
  return true;
}

export function parseFixedCapacityBonuses(skill, type, level, operator) {
  const text = skill.description || "";
  if (/(増加量|差が|オーダー数|発動数1につき|1名につき|上昇につき|ウルサスドリンク|体力減少分)/.test(text)) return [];
  const keyword = type === "storage" ? "保管上限" : "注文上限";
  const results = [];
  const levelPattern = new RegExp("レベル1ごとに" + keyword + "([+]\\d+)");
  const levelMatch = text.match(levelPattern);
  if (levelMatch) return [formatCapacityBonus(skill, Number(levelMatch[1]) * clampInteger(level, 1, 3), operator, "Lv" + level)];
  const fixedPattern = new RegExp(keyword + "([+-]\\d+)", "g");
  for (const match of text.matchAll(fixedPattern)) {
    results.push(formatCapacityBonus(skill, Number(match[1]), operator));
  }
  return results;
}

export function formatCapacityBonus(skill, value, operator, detail = "") {
  return {
    operatorId: operator?.id || null,
    operatorName: operator?.name || "",
    buffId: skill.buffId,
    buffName: skill.buffName,
    value,
    detail,
  };
}

export function hasSelectedSkill(candidates, pattern) {
  return candidates.some((candidate) => (candidate.activeSkills || []).some((skill) => pattern.test(skill.buffName || "") || pattern.test(skill.description || "")));
}
