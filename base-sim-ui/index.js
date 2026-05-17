import { BASE_LAYOUTS, createDefaultRoster, simulateBase } from "../base-sim-engine.js";
import {
  formatIntermediateValue,
  formatMatchedSkillText,
  formatShiftOperatorSkillSummary,
  formatShiftOperatorMoraleText,
  formatCompactNumber,
  formatSignedNumber,
  formatMoraleChange,
  formatUnsupportedCategory,
  formatMaxCondition,
  conditionRank,
  formatNumber,
  round,
  formatCondition,
  formatRoomType,
} from "./formatters.js";
import { queryElements } from "./dom.js";
import {
  createDefaultSettings,
  sanitizeUiSettings,
  createDefaultTimelineSeries,
  sanitizeTimelineSeries,
  normalizeShiftMode,
  clampNumber,
  syncSettingsToInputs,
  applyLayoutPreset,
  currentLayout,
} from "./state.js";
import { loadRoster, saveRoster, loadSettings, saveSettings } from "./storage.js";

export function initBaseSimPage() {
window.addEventListener("error", (event) => { window.__BASE_SIM_ERROR = event.message; document.body.dataset.baseSimError = event.message; });

const catalog = window.BASE_SIM_CATALOG;

const elements = queryElements();

const supportRooms = [
  { roomType: "POWER", label: "発電所", capacity: () => Number(elements.powerCount.value) },
];

let roster = loadRoster(catalog);
let settings = loadSettings();
let activeShiftId = null;

syncSettingsToInputs(elements, settings);
renderRoster();
renderSupportAssignments();

elements.layoutPreset.addEventListener("change", () => {
  applyLayoutPreset(elements, renderSupportAssignments);
  runSimulation();
});

for (const element of [
  elements.objective,
  elements.shiftMode,
  elements.manufactureCount,
  elements.tradingCount,
  elements.powerCount,
  elements.meetingRoomLevel,
  elements.dormOperators,
  elements.collectionInterval,
]) {
  element.addEventListener("change", () => {
    if (["manufactureCount", "tradingCount", "powerCount"].includes(element.id)) {
      elements.layoutPreset.value = "custom";
    }
    if (element.id === "powerCount") renderSupportAssignments();
    if (element.id === "shiftMode") {
      settings.shiftMode = normalizeShiftMode(element.value);
      settings = saveSettings(settings);
      syncSettingsToInputs(elements, settings);
    }
    if (element.id === "meetingRoomLevel") {
      settings.meetingRoomLevel = clampNumber(element.value, 0, 3, 3);
      settings = saveSettings(settings);
      syncSettingsToInputs(elements, settings);
    }
    if (element.id === "collectionInterval") {
      settings.collectionIntervalHours = clampNumber(element.value, 1, 72, 24);
      settings = saveSettings(settings);
      syncSettingsToInputs(elements, settings);
    }
    runSimulation();
  });
}

elements.runSimulation.addEventListener("click", runSimulation);
elements.operatorSearch.addEventListener("input", renderRoster);
elements.facilityResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-shift-id]");
  if (!button) return;
  activeShiftId = button.dataset.shiftId;
  runSimulation();
});
elements.timelineResults.addEventListener("change", (event) => {
  const input = event.target.closest("[data-timeline-series]");
  if (!input) return;
  settings.timelineSeries = {
    ...sanitizeTimelineSeries(settings.timelineSeries),
    [input.dataset.timelineSeries]: input.checked,
  };
  settings = saveSettings(settings);
  runSimulation();
});
elements.resetRoster.addEventListener("click", () => {
  roster = createDefaultRoster(catalog, { defaultOwned: true });
  settings = createDefaultSettings();
  saveRoster(roster);
  settings = saveSettings(settings);
  syncSettingsToInputs(elements, settings);
  renderRoster();
  renderSupportAssignments();
  runSimulation();
});

runSimulation();

function runSimulation() {
  const result = simulateBase({
    catalog,
    roster,
    baseLayout: currentLayout(elements),
    objective: elements.objective.value,
    settings: {
      shiftMode: elements.shiftMode.value,
      dormOperators: Number(elements.dormOperators.value),
      meetingRoomLevel: Number(elements.meetingRoomLevel.value),
      collectionIntervalHours: Number(elements.collectionInterval.value),
      supportAssignments: sanitizeUiSettings(settings).supportAssignments,
    },
  });
  renderResult(result);
  syncOptimizedSupportAssignments(result.context.supportAssignments);
}

function syncOptimizedSupportAssignments(nextAssignments) {
  if (!nextAssignments) return;
  const uiAssignments = sanitizeUiSettings({ ...settings, supportAssignments: nextAssignments }).supportAssignments;
  const current = JSON.stringify(settings.supportAssignments || {});
  const next = JSON.stringify(uiAssignments);
  if (current === next) return;
  settings.supportAssignments = uiAssignments;
  settings = saveSettings(settings);
  renderSupportAssignments();
}

function renderSupportAssignments() {
  elements.supportAssignments.innerHTML = supportRooms.map(renderSupportRoom).join("");
  elements.supportAssignments.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      const roomType = select.dataset.roomType;
      const index = Number(select.dataset.index);
      const values = [...(settings.supportAssignments[roomType] || [])];
      values[index] = select.value;
      settings.supportAssignments[roomType] = values.filter(Boolean);
      settings = saveSettings(settings);
      renderSupportAssignments();
      runSimulation();
    });
  });
}

function renderSupportRoom(room) {
  const capacity = room.capacity();
  const current = settings.supportAssignments[room.roomType] || [];
  settings.supportAssignments[room.roomType] = current.slice(0, capacity);
  const slots = Array.from({ length: capacity }, (_, index) => renderSupportSelect(room, index, current[index] || "")).join("");
  return `
    <article class="support-card">
      <h3>${room.label}</h3>
      ${slots || `<span class="facility-meta">配置枠なし</span>`}
    </article>
  `;
}

function renderSupportSelect(room, index, selectedId) {
  const options = supportOperatorOptions(room.roomType, selectedId);
  return `
    <label>
      <span>${room.label} ${index + 1}</span>
      <select data-room-type="${room.roomType}" data-index="${index}" aria-label="${room.label} ${index + 1}">
        <option value="">未配置</option>
        ${options
          .map((operator) => `<option value="${operator.id}" ${operator.id === selectedId ? "selected" : ""}>${operator.name}</option>`)
          .join("")}
      </select>
    </label>
  `;
}

function supportOperatorOptions(roomType, selectedId) {
  const selectedIds = new Set(Object.values(settings.supportAssignments).flat().filter((operatorId) => operatorId !== selectedId));
  return catalog.operators
    .filter((operator) => roster[operator.id]?.owned)
    .filter((operator) => !selectedIds.has(operator.id))
    .filter((operator) => operator.id === selectedId || operator.baseSkills.some((skill) => skill.roomType === roomType))
    .sort((a, b) => b.rarityValue - a.rarityValue || a.name.localeCompare(b.name, "ja"));
}
function renderRoster() {
  const query = elements.operatorSearch.value.trim().toLowerCase();
  const visibleOperators = catalog.operators
    .filter((operator) => operator.baseSkills.some((skill) => ["MANUFACTURE", "TRADING", "CONTROL", "POWER"].includes(skill.roomType)))
    .filter((operator) => !query || operator.name.toLowerCase().includes(query))
    .slice(0, query ? 80 : 120);

  const ownedCount = catalog.operators.filter((operator) => roster[operator.id]?.owned).length;
  elements.rosterSummary.textContent = `${ownedCount} / ${catalog.operators.length} 名を所持扱い`;
  elements.operatorRoster.innerHTML = visibleOperators.map(renderRosterRow).join("");

  elements.operatorRoster.querySelectorAll(".owned-toggle").forEach((input) => {
    input.addEventListener("change", () => {
      roster[input.dataset.operatorId] = {
        ...roster[input.dataset.operatorId],
        owned: input.checked,
      };
      saveRoster(roster);
      renderRoster();
      renderSupportAssignments();
      runSimulation();
    });
  });

  elements.operatorRoster.querySelectorAll(".phase-select").forEach((select) => {
    select.addEventListener("change", () => {
      roster[select.dataset.operatorId] = {
        ...roster[select.dataset.operatorId],
        phase: select.value,
      };
      saveRoster(roster);
      runSimulation();
    });
  });
}

function renderRosterRow(operator) {
  const entry = roster[operator.id] || { owned: false, phase: "PHASE_0" };
  const activeSkills = operator.baseSkills
    .filter((skill) => ["MANUFACTURE", "TRADING", "CONTROL", "POWER"].includes(skill.roomType))
    .slice(0, 4);
  return `
    <div class="roster-row">
      <div>
        <label>
          <input class="owned-toggle" data-operator-id="${operator.id}" type="checkbox" ${entry.owned ? "checked" : ""} />
          <span>${operator.name}</span>
        </label>
        <details class="skill-details">
          <summary>基地スキル</summary>
          ${activeSkills.map(renderRosterSkill).join("")}
        </details>
      </div>
      <select class="phase-select" data-operator-id="${operator.id}" aria-label="${operator.name}の昇進段階">
        <option value="PHASE_0" ${entry.phase === "PHASE_0" ? "selected" : ""}>未昇進</option>
        <option value="PHASE_1" ${entry.phase === "PHASE_1" ? "selected" : ""}>昇進1</option>
        <option value="PHASE_2" ${entry.phase === "PHASE_2" ? "selected" : ""}>昇進2</option>
      </select>
    </div>
  `;
}

function renderRosterSkill(skill) {
  return `
    <div class="skill-description">
      <strong>${skill.buffName}</strong>
      <span>${formatCondition(skill.condition)} / ${formatRoomType(skill.roomType)}</span>
      <p>${skill.description}</p>
    </div>
  `;
}

function renderResult(result) {
  const dailyTotals = result.shiftPlan?.dailyAverages || result.totals;
  elements.tradingLmd.textContent = formatNumber(dailyTotals.tradingLmdPerDay);
  elements.goldEquivalentLmd.textContent = formatNumber(dailyTotals.goldEquivalentLmdPerDay);
  elements.expValue.textContent = formatNumber(dailyTotals.expValuePerDay);
  elements.totalValue.textContent = formatNumber(dailyTotals.totalValuePerDay);
  elements.intermediateResults.innerHTML = renderIntermediateParameters(result.context?.intermediateParameters);
  elements.facilityResults.innerHTML = renderOptimalPlan(result);
  elements.timelineResults.innerHTML = renderTimeline(result.timeline, settings.timelineSeries);
  elements.alternativeResults.innerHTML = result.alternatives.map(renderAlternative).join("");
  elements.warningResults.innerHTML = result.unsupported.length
    ? result.unsupported.map(renderWarning).join("")
    : `<div class="warning-card">現在の所持状態では、製造/貿易の未対応スキル警告はありません。</div>`;
}

function renderIntermediateParameters(parameters = {}) {
  const items = [
    { key: "worldlyWorry", label: "俗世之憂" },
    { key: "perceptualInfo", label: "知覚情報" },
    { key: "thoughtChain", label: "思念連鎖" },
    { key: "silentResonance", label: "静かなる共鳴" },
    { key: "passion", label: "パッション" },
    { key: "catnip", label: "マタタビ" },
    { key: "dungeonMeal", label: "魔物料理" },
  ].map((item) => ({ ...item, value: Number(parameters[item.key] || 0) }));
  return `
    <div class="intermediate-title">
      <span>中間パラメータ</span>
    </div>
    ${items.map((item) => `
      <article class="intermediate-chip ${item.value > 0 ? "active" : ""}">
        <span>${item.label}</span>
        <strong>${formatIntermediateValue(item.value)}</strong>
      </article>
    `).join("")}
  `;
}


function renderOptimalPlan(result) {
  const shiftPlan = result.shiftPlan;
  if (!shiftPlan?.shifts?.length) return result.facilities.map(renderFacility).join("");
  const activeShift = selectedShift(shiftPlan);
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

function selectedShift(shiftPlan) {
  const activeShift = shiftPlan.shifts.find((shift) => shift.id === activeShiftId) || shiftPlan.shifts[0];
  activeShiftId = activeShift.id;
  return activeShift;
}

function renderFacility(room) {
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

function renderSelectedOperator(candidate) {
  const skills = candidate.matched.map(formatMatchedSkillText).join(" / ");
  const unlockCondition = formatCondition(formatMaxCondition(candidate.matched.map((skill) => skill.condition)));
  return `
    <div class="operator-pill">
      <strong>
        <span class="operator-title">${candidate.operator.name}<em>${unlockCondition}</em></span>
        <span>${candidate.score === null ? "支援" : `${candidate.score.toFixed(1)}%`}</span>
      </strong>
      <span>${skills}${candidate.approximate ? ` <b class="approx">近似</b>` : ""}</span>
      <span class="morale-line">体力 ${formatMoraleChange(candidate.morale?.changePerHour ?? -1)}/h</span>
      ${renderControlImpacts(candidate)}
      <details class="skill-details">
        <summary>説明</summary>
        ${candidate.matched
          .map(
            (skill) => `
              <div class="skill-description">
                <strong>${skill.buffName}</strong>
                <p>${skill.description}</p>
              </div>
            `
          )
          .join("")}
      </details>
    </div>
  `;
}

function renderControlImpacts(candidate) {
  if (!candidate.impacts?.length) return "";
  const total = candidate.impacts.reduce((sum, impact) => sum + Number(impact.value || 0), 0);
  return `
    <div class="impact-summary">
      <strong>今回の寄与 +${total.toFixed(1)}%</strong>
      ${candidate.impacts.map(renderControlImpact).join("")}
    </div>
  `;
}

function renderControlImpact(impact) {
  const detail = impact.detail ? ` / ${impact.detail}` : "";
  return `<span>${impact.facilityLabel} / ${impact.targetOperatorName} / ${impact.skillName} +${Number(impact.value || 0).toFixed(1)}%${detail}</span>`;
}

function renderShiftTabs(shifts, activeId) {
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

function renderShiftMoraleStatus(shift) {
  if (!shift.moraleStatus) return "";
  const correction = shift.moraleStatus.dailyEfficiency < 1
    ? ` / 日次補正 ${(shift.moraleStatus.dailyEfficiency * 100).toFixed(1)}%`
    : "";
  if (shift.moraleStatus.canCompleteShift && shift.moraleStatus.canRecoverForCycle) return `<div class="shift-status ok">勤務可能 / 回復可${correction}</div>`;
  if (shift.moraleStatus.canCompleteShift) return `<div class="shift-status warn">勤務可能 / 回復不足: ${shift.moraleStatus.recoveryLimitOperatorNames.join(" / ")}${correction}</div>`;
  return `<div class="shift-status warn">体力不足: ${shift.moraleStatus.overLimitOperatorNames.join(" / ")}${correction}</div>`;
}

function renderOptimalShiftFacility(facility) {
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

function renderShiftOperator(operator) {
  const morale = operator.morale;
  const score = operator.score === null ? "支援" : `+${Number(operator.score || 0).toFixed(1)}%`;
  const moraleText = morale ? `体力 ${formatMoraleChange(morale.changePerHour)}/h` : "体力 -1.0/h";
  const skillSummary = operator.skills?.length ? operator.skills.map(formatShiftOperatorSkillSummary).join(" / ") : "有効スキルなし";
  return `
    <details class="shift-operator operator-pill">
      <summary>
        <div class="operator-card-head">
          <span class="operator-title">${operator.operatorName}<em>${formatCondition(operator.unlockCondition)}</em></span>
          <strong class="operator-score">${score}</strong>
        </div>
        ${morale ? renderMoraleCompact(morale, moraleText) : `<span class="morale-line">${moraleText}</span>`}
        <span class="operator-skill-preview">${skillSummary}</span>
      </summary>
      ${morale ? renderMoraleDetails(morale) : ""}
      ${renderControlImpacts(operator)}
      ${operator.skills?.length ? operator.skills.map(renderShiftOperatorSkill).join("") : `<div class="skill-description">有効スキルなし</div>`}
    </details>
  `;
}

function renderMoraleCompact(morale, moraleText) {
  const end = morale.moraleTimeline?.endMorale ?? morale.moraleAfterShift;
  const ratio = Math.max(0, Math.min(1, Number(end || 0) / Number(morale.maxMorale || 24)));
  const status = morale.canCompleteShift ? (morale.canRecoverForCycle ? "回復可" : "回復不足") : "体力不足";
  const statusClass = morale.canCompleteShift && morale.canRecoverForCycle ? "ok" : "warn";
  return `
    <div class="morale-compact" style="--morale-end-ratio: ${ratio}">
      <span class="morale-range">${formatCompactNumber(morale.moraleTimeline?.startMorale ?? 24)}→${formatCompactNumber(end)}</span>
      <span class="morale-line">${moraleText}</span>
      <span class="morale-badge ${statusClass}">${status}</span>
      <i aria-hidden="true"></i>
    </div>
  `;
}


function renderMoraleDetails(morale) {
  return `
    <div class="morale-detail-grid">
      <span><b>消費</b>${formatCompactNumber(morale.projectedCost)}</span>
      <span><b>休憩</b>${morale.restHours > 0 ? `${morale.restHours}h` : "なし"}</span>
      <span><b>回復</b>${formatCompactNumber(morale.projectedRecovery)}</span>
      <span><b>勤務後</b>${formatCompactNumber(morale.moraleAfterShift)}</span>
    </div>
  `;
}


function renderShiftOperatorSkill(skill) {
  const value = skill.value === null ? "" : ` +${Number(skill.value || 0).toFixed(1)}%`;
  const approx = skill.approximate ? ` <b class="approx">近似</b>` : "";
  return `
    <div class="skill-description">
      <strong>${skill.buffName}${value}${approx}</strong>
      <span>${formatCondition(skill.condition)} / ${formatRoomType(skill.roomType)}</span>
      <p>${skill.description}</p>
    </div>
  `;
}

function renderProductionEfficiency(facility) {
  if (!["MANUFACTURE", "TRADING"].includes(facility.facilityType)) return "";
  if ((facility.productionEfficiency ?? 1) >= 1) return "";
  return ` / 補正 ${(facility.productionEfficiency * 100).toFixed(1)}%`;
}

function renderFacilityCapacity(facility) {
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

function renderFacilityCapacityDetails(facility) {
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

function renderCapacityBonusParts(capacity) {
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


function renderTimeline(timeline, seriesVisibility = createDefaultTimelineSeries()) {
  if (!timeline?.points?.length) return `<div class="timeline-empty">時系列データなし</div>`;
  const operators = collectTimelineOperators(timeline).slice(0, 8);
  const visibility = sanitizeTimelineSeries(seriesVisibility);
  return `
    <div class="timeline-board" style="--timeline-columns: ${timeline.points.length}">
      ${renderTimelineChart(timeline, operators, visibility)}
      <div class="timeline-scroll" aria-label="24時間タイムライン">
        <div class="timeline-hour-row">
          ${timeline.points.map(renderTimelineHour).join("")}
        </div>
        <div class="timeline-section-label">中間パラメータ</div>
        ${renderTimelineParameterRows(timeline)}
        <div class="timeline-section-label">体力</div>
        ${operators.length ? operators.map((operator) => renderTimelineOperatorRow(operator, timeline.points)).join("") : `<div class="timeline-empty-row">配置オペレーターなし</div>`}
      </div>
    </div>
  `;
}

function renderTimelineChart(timeline, operators, visibility = createDefaultTimelineSeries()) {
  const points = timeline.points || [];
  const width = 960;
  const height = 260;
  const padding = { top: 18, right: 18, bottom: 34, left: 44 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxTotal = Math.max(1, ...points.map((point) => Number(point.totals?.totalValuePerHour || 0)));
  const minMoraleByHour = points.map((point) => {
    const values = Object.values(point.moraleByOperator || {}).map((entry) => Number(entry.morale || 0));
    return values.length ? Math.min(...values) : 24;
  });
  const totalPath = linePath(points.map((point, index) => ({
    x: timelineChartX(index, points.length, padding.left, chartWidth),
    y: timelineChartY(Number(point.totals?.totalValuePerHour || 0), maxTotal, padding.top, chartHeight),
  })));
  const moralePath = linePath(minMoraleByHour.map((morale, index) => ({
    x: timelineChartX(index, points.length, padding.left, chartWidth),
    y: timelineChartY(morale, 24, padding.top, chartHeight),
  })));
  const parameterSeries = buildTimelineParameterSeries(points, padding, chartWidth, chartHeight);
  const cumulativeSeries = buildTimelineCumulativeSeries(points, padding, chartWidth, chartHeight);
  const operatorSeries = operators.slice(0, 3).map((operator) => ({
    operator,
    path: linePath(points.map((point, index) => ({
      x: timelineChartX(index, points.length, padding.left, chartWidth),
      y: timelineChartY(Number(point.moraleByOperator?.[operator.id]?.morale ?? 24), 24, padding.top, chartHeight),
    }))),
  }));
  const shiftBands = buildTimelineShiftBands(points, padding, chartWidth, chartHeight);

  return `
    <div class="timeline-chart" aria-label="時系列折れ線グラフ">
      <div class="timeline-chart-head">
        <strong>折れ線グラフ</strong>
        <span>総合価値/hを基準に、必要な系列だけ重ねる</span>
      </div>
      ${renderTimelineSeriesControls(visibility)}
      ${renderTimelineCumulativeSummary(points)}
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="24時間の効率と体力推移">
        ${shiftBands}
        ${[0, 6, 12, 18, 24].map((hour) => {
          const x = padding.left + (hour / 24) * chartWidth;
          return `<g class="chart-grid"><line x1="${x}" y1="${padding.top}" x2="${x}" y2="${padding.top + chartHeight}"/><text x="${x}" y="${height - 10}">${hour}</text></g>`;
        }).join("")}
        ${[0, 6, 12, 18, 24].map((value) => {
          const y = timelineChartY(value, 24, padding.top, chartHeight);
          return `<g class="chart-grid horizontal"><line x1="${padding.left}" y1="${y}" x2="${padding.left + chartWidth}" y2="${y}"/><text x="10" y="${y + 4}">${value}</text></g>`;
        }).join("")}
        <path class="chart-line total" d="${totalPath}"/>
        ${visibility.cumulative ? cumulativeSeries.map((series) => `<path class="chart-line cumulative ${series.key}" d="${series.path}"/>`).join("") : ""}
        ${visibility.morale ? `<path class="chart-line morale" d="${moralePath}"/>` : ""}
        ${visibility.parameters ? parameterSeries.map((series) => `<path class="chart-line parameter ${series.key}" d="${series.path}"/>`).join("") : ""}
        ${visibility.morale ? operatorSeries.map((series, index) => `<path class="chart-line operator op-${index}" d="${series.path}"/>`).join("") : ""}
      </svg>
      <div class="timeline-legend">
        <span><i class="total"></i>総合価値/h</span>
        ${visibility.cumulative ? cumulativeSeries.map((series) => `<span><i class="cumulative ${series.key}"></i>${series.label}</span>`).join("") : ""}
        ${visibility.morale ? `<span><i class="morale"></i>最低体力</span>` : ""}
        ${visibility.parameters ? parameterSeries.map((series) => `<span><i class="parameter ${series.key}"></i>${series.label}</span>`).join("") : ""}
        ${visibility.morale ? operatorSeries.map((series, index) => `<span><i class="operator op-${index}"></i>${series.operator.name}</span>`).join("") : ""}
      </div>
    </div>
  `;
}

function renderTimelineSeriesControls(visibility) {
  const controls = [
    { key: "cumulative", label: "累積生産" },
    { key: "morale", label: "体力" },
    { key: "parameters", label: "中間パラメータ" },
  ];
  return `
    <div class="timeline-series-controls" aria-label="折れ線表示">
      ${controls.map((control) => `
        <label class="timeline-series-toggle">
          <input type="checkbox" data-timeline-series="${control.key}" ${visibility[control.key] ? "checked" : ""} />
          <span>${control.label}</span>
        </label>
      `).join("")}
    </div>
  `;
}

function renderTimelineCumulativeSummary(points) {
  const last = points.at(-1)?.cumulativeTotals || {};
  return `
    <div class="timeline-cumulative-summary">
      <span>龍門幣 <strong>${formatNumber(Math.round(Number(last.lmd || 0)))}</strong></span>
      <span>純金換算 <strong>${formatNumber(Math.round(Number(last.goldEquivalentLmd || 0)))}</strong></span>
      <span>作戦記録価値 <strong>${formatNumber(Math.round(Number(last.expValue || 0)))}</strong></span>
      <span>総合価値 <strong>${formatNumber(Math.round(Number(last.totalValue || 0)))}</strong></span>
      <span>純金 <strong>${formatCompactNumber(last.goldUnits || 0)}</strong></span>
    </div>
  `;
}

function timelineChartX(index, count, left, width) {
  return round(left + (count <= 1 ? 0 : (index / (count - 1)) * width), 2);
}

function timelineChartY(value, max, top, height) {
  const ratio = max > 0 ? Math.max(0, Math.min(1, Number(value || 0) / max)) : 0;
  return round(top + height - ratio * height, 2);
}

function linePath(points) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`).join(" ");
}

function buildTimelineParameterSeries(points, padding, chartWidth, chartHeight) {
  const definitions = [
    { key: "worldlyWorry", label: "俗世之憂" },
    { key: "perceptualInfo", label: "知覚情報" },
    { key: "passion", label: "パッション" },
    { key: "catnip", label: "マタタビ" },
    { key: "dungeonMeal", label: "魔物料理" },
  ];
  return definitions
    .map((definition) => {
      const values = points.map((point) => Number(point.intermediateParameters?.[definition.key] || 0));
      const max = Math.max(1, ...values);
      return {
        ...definition,
        path: linePath(values.map((value, index) => ({
          x: timelineChartX(index, points.length, padding.left, chartWidth),
          y: timelineChartY(value, max, padding.top, chartHeight),
        }))),
      };
    })
    .filter((series) => points.some((point) => Number(point.intermediateParameters?.[series.key] || 0) > 0));
}

function buildTimelineCumulativeSeries(points, padding, chartWidth, chartHeight) {
  const definitions = [
    { key: "totalValue", label: "累積総合価値" },
    { key: "lmd", label: "累積龍門幣" },
    { key: "expValue", label: "累積作戦記録価値" },
    { key: "goldEquivalentLmd", label: "累積純金換算" },
  ];
  const globalMax = Math.max(1, ...points.flatMap((point) => definitions.map((definition) => Number(point.cumulativeTotals?.[definition.key] || 0))));
  return definitions
    .map((definition) => ({
      ...definition,
      path: linePath(points.map((point, index) => ({
        x: timelineChartX(index, points.length, padding.left, chartWidth),
        y: timelineChartY(Number(point.cumulativeTotals?.[definition.key] || 0), globalMax, padding.top, chartHeight),
      }))),
    }))
    .filter((series) => points.some((point) => Number(point.cumulativeTotals?.[series.key] || 0) > 0));
}

function buildTimelineShiftBands(points, padding, chartWidth, chartHeight) {
  const bands = [];
  let start = 0;
  for (let index = 1; index <= points.length; index += 1) {
    if (index < points.length && points[index].shiftId === points[start].shiftId) continue;
    const x = timelineChartX(start, points.length, padding.left, chartWidth);
    const nextX = index >= points.length
      ? padding.left + chartWidth
      : timelineChartX(index, points.length, padding.left, chartWidth);
    bands.push(`<rect class="chart-shift-band ${bands.length % 2 ? "even" : "odd"}" x="${x}" y="${padding.top}" width="${Math.max(0, nextX - x)}" height="${chartHeight}"/>`);
    start = index;
  }
  return bands.join("");
}

function renderTimelineHour(point) {
  const valuePerHour = Number(point.totals?.totalValuePerHour || 0);
  return `
    <article class="timeline-hour">
      <strong>${point.hour}</strong>
      <span>${point.shiftLabel}</span>
      <small>${formatCompactNumber(valuePerHour)}/h</small>
    </article>
  `;
}

function renderTimelineParameterRows(timeline) {
  const params = [
    { key: "worldlyWorry", label: "俗世之憂" },
    { key: "perceptualInfo", label: "知覚情報" },
    { key: "thoughtChain", label: "思念連鎖" },
    { key: "silentResonance", label: "静かなる共鳴" },
    { key: "passion", label: "パッション" },
    { key: "catnip", label: "マタタビ" },
    { key: "dungeonMeal", label: "魔物料理" },
  ];
  return params.map((param) => {
    const max = Math.max(1, ...timeline.points.map((point) => Number(point.intermediateParameters?.[param.key] || 0)));
    return `
      <div class="timeline-lane parameter-lane">
        <div class="timeline-lane-label">${param.label}</div>
        <div class="timeline-lane-cells">
          ${timeline.points.map((point) => {
            const value = Number(point.intermediateParameters?.[param.key] || 0);
            const ratio = Math.max(0.04, Math.min(1, value / max));
            return `<span class="timeline-cell ${value > 0 ? "active" : ""}" style="--cell-ratio: ${ratio}" title="${point.hour}:00 ${param.label} ${formatIntermediateValue(value)}">${value > 0 ? formatIntermediateValue(value) : ""}</span>`;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function collectTimelineOperators(timeline) {
  const operators = new Map();
  for (const point of timeline.points || []) {
    for (const entry of Object.values(point.moraleByOperator || {})) {
      if (!operators.has(entry.operatorId)) operators.set(entry.operatorId, { id: entry.operatorId, name: entry.operatorName });
    }
  }
  return [...operators.values()];
}

function renderTimelineOperatorRow(operator, points) {
  return `
    <div class="timeline-lane morale-lane">
      <div class="timeline-lane-label">${operator.name}</div>
      <div class="timeline-lane-cells">
        ${points.map((point) => renderTimelineMoraleCell(point, operator.id)).join("")}
      </div>
    </div>
  `;
}

function renderTimelineMoraleCell(point, operatorId) {
  const entry = point.moraleByOperator?.[operatorId];
  if (!entry) return `<span class="timeline-cell empty"></span>`;
  const morale = Number(entry.morale || 0);
  const ratio = Math.max(0.04, Math.min(1, morale / 24));
  const stateClass = entry.state === "working" ? "working" : "resting";
  const lowClass = morale <= 12 ? "low" : "";
  return `<span class="timeline-cell morale-cell ${stateClass} ${lowClass}" style="--cell-ratio: ${ratio}" title="${point.hour}:00 ${entry.operatorName} ${formatCompactNumber(morale)} / ${entry.state}">${formatCompactNumber(morale)}</span>`;
}


function renderAlternative(alternative) {
  const candidates = alternative.candidates.length
    ? alternative.candidates.map((candidate) => `${candidate.name} +${candidate.score.toFixed(1)}%`).join("、")
    : "候補なし";
  return `<div class="alternative-card"><strong>${alternative.facilityLabel}</strong>: ${candidates}</div>`;
}

function renderWarning(warning) {
  const tags = (warning.conditionTags || []).map((tag) => tag.label || tag.tag).filter(Boolean);
  const tagText = tags.length ? `<span>タグ: ${tags.join(" / ")}</span>` : "";
  const reason = warning.reason ? `<span>${warning.reason}</span>` : "";
  return `
    <div class="warning-card">
      <div class="warning-head">
        <strong>${warning.buffName}</strong>
        <span>${formatUnsupportedCategory(warning.category)} / ${warning.roomType}</span>
      </div>
      <div class="warning-meta">
        <span>${warning.operators.join("、")}</span>
        ${reason}
        ${tagText}
      </div>
      <p>${warning.description}</p>
    </div>
  `;
}

}
