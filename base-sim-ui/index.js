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
import { buildSimulationResult, applyOptimizedSupportAssignments } from "./engine-adapter.js";
import { renderAlternative } from "./render/alternatives.js";
import { renderWarning } from "./render/warnings.js";
import { renderTimeline } from "./render/timeline.js";
import { renderIntermediateParameters } from "./render/summary.js";
import {
  renderFacility,
  renderShiftTabs,
  renderShiftMoraleStatus,
  renderOptimalShiftFacility,
} from "./render/facilities.js";
import { renderRosterRow } from "./render/roster.js";

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
  const result = buildSimulationResult({ catalog, roster, settings, elements });
  renderResult(result);
  const sync = applyOptimizedSupportAssignments(settings, result.context.supportAssignments);
  if (sync.changed) {
    settings = sync.settings;
    renderSupportAssignments();
  }
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
  elements.operatorRoster.innerHTML = visibleOperators.map((operator) => renderRosterRow(operator, roster)).join("");

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






}
