export function formatIntermediateValue(value) {
  return Number(value || 0).toFixed(1).replace(/\.0$/, "");
}

export function formatMatchedSkillText(skill) {
  return skill.value === null ? skill.buffName : `${skill.buffName} +${skill.value.toFixed(1)}%`;
}

export function formatShiftOperatorSkillSummary(skill) {
  const value = skill.value === null ? "" : ` +${Number(skill.value || 0).toFixed(1)}%`;
  return `${skill.buffName}${value}`;
}

export function formatShiftOperatorMoraleText(morale) {
  const shiftText = `体力 ${formatMoraleChange(morale.changePerHour)}/h`;
  const timelineText = morale.moraleTimeline ? `推移 ${formatCompactNumber(morale.moraleTimeline.startMorale)}→${formatCompactNumber(morale.moraleTimeline.endMorale)}` : "";
  const costText = `消費 ${formatCompactNumber(morale.projectedCost)}`;
  const restText = morale.restHours > 0 ? `休憩 ${morale.restHours}h 回復 ${formatCompactNumber(morale.projectedRecovery)}` : "休憩なし";
  const status = morale.canCompleteShift ? (morale.canRecoverForCycle ? "回復可" : "回復不足") : "不足";
  return [shiftText, timelineText, costText, restText, status].filter(Boolean).join(" / ");
}

export function formatCompactNumber(value) {
  return Number(value || 0).toFixed(2).replace(/\.00$/, "").replace(/0$/, "");
}

export function formatSignedNumber(value) {
  const number = Number(value || 0);
  return `${number > 0 ? "+" : ""}${number}`;
}

export function formatMoraleChange(value) {
  const number = Number(value || 0);
  const sign = number > 0 ? "+" : "";
  return sign + number.toFixed(2).replace(/\.00$/, ".0");
}

export function formatUnsupportedCategory(category) {
  const labels = {
    orderModel: "注文種別",
    productFlow: "製品ライン",
    intermediate: "中間パラメータ",
    capacity: "上限モデル",
    tagCondition: "タグ条件",
    morale: "体力",
    supportFacility: "支援施設",
    outOfScope: "MVP対象外",
    manualRule: "手動対応待ち",
  };
  return labels[category] || "未分類";
}

export function formatMaxCondition(conditions) {
  return conditions.reduce((max, condition) => {
    if (conditionRank(condition) > conditionRank(max)) return condition || {};
    return max;
  }, {});
}

export function conditionRank(condition = {}) {
  const phaseRank = condition.phase === "PHASE_2" ? 2 : condition.phase === "PHASE_1" ? 1 : 0;
  return phaseRank * 10000 + Number(condition.level || 1);
}

export function formatNumber(value) {
  return new Intl.NumberFormat("ja-JP").format(value);
}

export function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round(Number(value || 0) * factor) / factor;
}

export function formatCondition(condition = {}) {
  const phase = condition.phase === "PHASE_2" ? "昇進2" : condition.phase === "PHASE_1" ? "昇進1" : "未昇進";
  return `${phase} Lv${condition.level || 1}`;
}

export function formatRoomType(roomType) {
  if (roomType === "MANUFACTURE") return "製造所";
  if (roomType === "TRADING") return "貿易所";
  if (roomType === "CONTROL") return "制御中枢";
  if (roomType === "POWER") return "発電所";
  if (roomType === "HIRE") return "事務室";
  if (roomType === "MEETING") return "応接室";
  return roomType;
}
