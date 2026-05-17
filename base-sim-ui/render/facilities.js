import { formatSignedNumber, formatCompactNumber } from "../formatters.js";
import { renderSelectedOperator, renderShiftOperator } from "./operators.js";

export function renderFacility(room) {
  return `
    <article class="facility-card">
      <div class="facility-title">
        <div>
          <h3>${room.label}</h3>
          <div class="facility-meta">${room.productLabel}${renderFacilityCapacity(room)}</div>
        </div>
        <strong>${room.speed === null ? "支援" : `+${room.speed.toFixed(1)}%`}</strong>
      </div>
      <div class="operator-list">
        ${
          room.selected.length
            ? room.selected.map(renderSelectedOperator).join("")
            : `<div class="operator-pill"><span>有効な候補がありません</span></div>`
        }
      </div>
    </article>
  `;
}

export function renderShiftTabs(shifts, activeId) {
  if (shifts.length <= 1) return "";
  return `
    <div class="shift-tabs" role="tablist" aria-label="表示するシフト">
      ${shifts.map((shift) => `
        <button
          type="button"
          role="tab"
          aria-selected="${shift.id === activeId ? "true" : "false"}"
          class="${shift.id === activeId ? "active" : ""}"
          data-shift-id="${shift.id}"
        >
          ${shift.label}
        </button>
      `).join("")}
    </div>
  `;
}

export function renderShiftMoraleStatus(shift) {
  if (!shift.moraleStatus) return "";
  const correction = shift.moraleStatus.dailyEfficiency < 1
    ? ` / 日次補正 ${(shift.moraleStatus.dailyEfficiency * 100).toFixed(1)}%`
    : "";
  if (shift.moraleStatus.canCompleteShift && shift.moraleStatus.canRecoverForCycle) return `<div class="shift-status ok">勤務可能 / 回復可${correction}</div>`;
  if (shift.moraleStatus.canCompleteShift) return `<div class="shift-status warn">勤務可能 / 回復不足: ${shift.moraleStatus.recoveryLimitOperatorNames.join(" / ")}${correction}</div>`;
  return `<div class="shift-status warn">体力不足: ${shift.moraleStatus.overLimitOperatorNames.join(" / ")}${correction}</div>`;
}

export function renderOptimalShiftFacility(facility) {
  const speed = facility.speed === null ? "支援" : `+${Number(facility.speed || 0).toFixed(1)}%`;
  const operators = facility.selectedOperators?.length
    ? facility.selectedOperators.map(renderShiftOperator).join("")
    : `<div class="operator-pill"><span>有効な候補がありません</span></div>`;
  return `
    <article class="facility-card">
      <div class="facility-title">
        <div>
          <h3>${facility.facilityLabel}</h3>
          <div class="facility-meta">${facility.productLabel}${renderProductionEfficiency(facility)}${renderFacilityCapacity(facility)}</div>
        </div>
        <strong>${speed}</strong>
      </div>
      ${renderFacilityCapacityDetails(facility)}
      <div class="operator-list shift-operators">${operators}</div>
    </article>
  `;
}

export function renderProductionEfficiency(facility) {
  if (!["MANUFACTURE", "TRADING"].includes(facility.facilityType)) return "";
  if ((facility.productionEfficiency ?? 1) >= 1) return "";
  return ` / 補正 ${(facility.productionEfficiency * 100).toFixed(1)}%`;
}

export function renderFacilityCapacity(facility) {
  const capacity = facility.capacity;
  if (!capacity) return "";
  const bonus = Number(capacity.bonus || 0);
  const bonusText = bonus === 0 ? "" : ` (${formatSignedNumber(bonus)})`;
  const fillText = capacity.fillHours === null || capacity.fillHours === undefined ? "" : ` / 満杯 ${formatCompactNumber(capacity.fillHours)}h`;
  const fullnessText = Number(capacity.fullnessEfficiency ?? 1) < 1
    ? ` / 満杯補正 ${(capacity.fullnessEfficiency * 100).toFixed(1)}%`
    : "";
  const unitText = capacity.type === "storage" && Number(capacity.unitWeight || 1) > 1
    ? ` / ${capacity.effectiveUnits}個分`
    : "";
  const orderText = capacity.type === "order" && capacity.currentOrders !== undefined
    ? ` / 想定注文 ${capacity.currentOrders}`
    : "";
  return ` / ${capacity.label} ${capacity.effective}${bonusText}${unitText}${orderText}${fillText}${fullnessText}`;
}

export function renderFacilityCapacityDetails(facility) {
  const capacity = facility.capacity;
  if (!capacity || !["MANUFACTURE", "TRADING"].includes(facility.facilityType)) return "";
  const bonus = Number(capacity.bonus || 0);
  const bonusParts = renderCapacityBonusParts(capacity);
  const baseLine = `${capacity.label}: 基礎 ${capacity.base}${bonus ? ` ${formatSignedNumber(bonus)} = ${capacity.effective}` : ` = ${capacity.effective}`}`;
  const unitLine = capacity.type === "storage" && Number(capacity.unitWeight || 1) > 1
    ? `製品換算: ${capacity.effectiveUnits}個分 / 1個あたり${capacity.unitWeight}`
    : capacity.type === "order"
      ? `注文状況: 想定 ${capacity.currentOrders ?? 0} / 上限 ${capacity.effective}${capacity.orderLimitGap !== undefined ? ` / 空き ${capacity.orderLimitGap}` : ""}`
      : "";
  const interval = Number(capacity.collectionIntervalHours || 24);
  const fillLine = capacity.fillHours === null || capacity.fillHours === undefined
    ? ""
    : `満杯停止: ${formatCompactNumber(capacity.fillHours)}hで満杯 / 回収 ${interval}h / 稼働 ${(Number(capacity.fullnessEfficiency ?? 1) * 100).toFixed(1)}%`;
  const rows = [baseLine, unitLine, fillLine].filter(Boolean).map((text) => `<span>${text}</span>`).join("");
  return `
    <details class="capacity-detail">
      <summary>上限補正の内訳</summary>
      <div class="capacity-detail-grid">${rows}</div>
      ${bonusParts}
    </details>
  `;
}

export function renderCapacityBonusParts(capacity) {
  const bonuses = capacity.bonuses || [];
  if (!bonuses.length) return `<div class="capacity-bonus-list"><span>スキル補正なし</span></div>`;
  return `
    <div class="capacity-bonus-list">
      ${bonuses.map((bonus) => {
        const source = bonus.operatorName ? `${bonus.operatorName} / ` : "";
        const detail = bonus.detail ? ` / ${bonus.detail}` : "";
        return `<span>${source}${bonus.buffName} ${formatSignedNumber(bonus.value)}${detail}</span>`;
      }).join("")}
    </div>
  `;
}


export function renderOptimalPlan(result, activeShift) {
  const shiftPlan = result.shiftPlan;
  if (!shiftPlan?.shifts?.length) return result.facilities.map(renderFacility).join("");
  return `
    ${renderShiftTabs(shiftPlan.shifts, activeShift.id)}
    <div class="active-shift-meta">
      <strong>${activeShift.label}</strong>
      <span>${activeShift.startHour}:00-${activeShift.startHour + activeShift.durationHours}:00 / ${activeShift.durationHours}時間</span>
      ${renderShiftMoraleStatus(activeShift)}
    </div>
    ${activeShift.facilities.map(renderOptimalShiftFacility).join("")}
  `;
}