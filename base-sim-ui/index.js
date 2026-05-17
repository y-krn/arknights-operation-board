import { createDefaultRoster } from "../base-sim-engine.js";
import { queryElements } from "./dom.js";
import { formatNumber } from "./formatters.js";
import {
  createDefaultSettings,
  normalizeShiftMode,
  clampNumber,
  syncSettingsToInputs,
  applyLayoutPreset,
  createPageState,
  selectActiveShift,
} from "./state.js";
import { loadRoster, saveRoster, loadSettings, saveSettings } from "./storage.js";
import { buildSimulationResult, applyOptimizedSupportAssignments } from "./engine-adapter.js";
import { renderAlternative } from "./render/alternatives.js";
import { renderWarning } from "./render/warnings.js";
import { renderTimeline } from "./render/timeline.js";
import { renderIntermediateParameters } from "./render/summary.js";
import { renderOptimalPlan } from "./render/facilities.js";
import { renderSupportAssignments } from "./render/support-assignments.js";
import { renderRosterPanel } from "./render/roster-controller.js";

export function initBaseSimPage() {
  window.addEventListener("error", (event) => {
    window.__BASE_SIM_ERROR = event.message;
    document.body.dataset.baseSimError = event.message;
  });

  const catalog = window.BASE_SIM_CATALOG;
  const elements = queryElements();
  const pageState = createPageState({
    catalog,
    roster: loadRoster(catalog),
    settings: loadSettings(),
  });

  syncSettingsToInputs(elements, pageState.settings);
  renderRoster();
  renderSupportUi();

  elements.layoutPreset.addEventListener("change", () => {
    applyLayoutPreset(elements, renderSupportUi);
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
      handleControlChange(element);
      runSimulation();
    });
  }

  elements.runSimulation.addEventListener("click", runSimulation);
  elements.operatorSearch.addEventListener("input", renderRoster);
  elements.facilityResults.addEventListener("click", (event) => {
    const button = event.target.closest("[data-shift-id]");
    if (!button) return;
    pageState.activeShiftId = button.dataset.shiftId;
    runSimulation();
  });
  elements.timelineResults.addEventListener("change", (event) => {
    const input = event.target.closest("[data-timeline-series]");
    if (!input) return;
    pageState.settings = saveSettings({
      ...pageState.settings,
      timelineSeries: {
        ...pageState.settings.timelineSeries,
        [input.dataset.timelineSeries]: input.checked,
      },
    });
    runSimulation();
  });
  elements.resetRoster.addEventListener("click", () => {
    pageState.roster = createDefaultRoster(catalog, { defaultOwned: true });
    pageState.settings = saveSettings(createDefaultSettings());
    pageState.activeShiftId = null;
    saveRoster(pageState.roster);
    syncSettingsToInputs(elements, pageState.settings);
    renderRoster();
    renderSupportUi();
    runSimulation();
  });

  runSimulation();

  function handleControlChange(element) {
    if (["manufactureCount", "tradingCount", "powerCount"].includes(element.id)) {
      elements.layoutPreset.value = "custom";
    }
    if (element.id === "powerCount") renderSupportUi();
    if (element.id === "shiftMode") {
      pageState.settings = saveSettings({ ...pageState.settings, shiftMode: normalizeShiftMode(element.value) });
      syncSettingsToInputs(elements, pageState.settings);
    }
    if (element.id === "meetingRoomLevel") {
      pageState.settings = saveSettings({ ...pageState.settings, meetingRoomLevel: clampNumber(element.value, 0, 3, 3) });
      syncSettingsToInputs(elements, pageState.settings);
    }
    if (element.id === "collectionInterval") {
      pageState.settings = saveSettings({ ...pageState.settings, collectionIntervalHours: clampNumber(element.value, 1, 72, 24) });
      syncSettingsToInputs(elements, pageState.settings);
    }
  }

  function runSimulation() {
    const result = buildSimulationResult({ catalog, roster: pageState.roster, settings: pageState.settings, elements });
    pageState.lastResult = result;
    renderResult(result);
    const sync = applyOptimizedSupportAssignments(pageState.settings, result.context.supportAssignments);
    if (sync.changed) {
      pageState.settings = sync.settings;
      renderSupportUi();
    }
  }

  function renderSupportUi() {
    renderSupportAssignments({
      elements,
      catalog,
      roster: pageState.roster,
      settings: pageState.settings,
      onSettingsChange: (nextSettings) => {
        pageState.settings = saveSettings(nextSettings);
        return pageState.settings;
      },
      onRunSimulation: runSimulation,
    });
  }

  function renderRoster() {
    renderRosterPanel({
      elements,
      catalog,
      roster: pageState.roster,
      searchText: elements.operatorSearch.value,
      onRosterChange: (nextRoster) => {
        pageState.roster = nextRoster;
        saveRoster(pageState.roster);
      },
      onRenderSupportAssignments: renderSupportUi,
      onRunSimulation: runSimulation,
    });
  }

  function renderResult(result) {
    const dailyTotals = result.shiftPlan?.dailyAverages || result.totals;
    const shiftSelection = selectActiveShift(result.shiftPlan, pageState.activeShiftId);
    pageState.activeShiftId = shiftSelection.activeShiftId;
    elements.tradingLmd.textContent = formatNumber(dailyTotals.tradingLmdPerDay);
    elements.goldEquivalentLmd.textContent = formatNumber(dailyTotals.goldEquivalentLmdPerDay);
    elements.expValue.textContent = formatNumber(dailyTotals.expValuePerDay);
    elements.totalValue.textContent = formatNumber(dailyTotals.totalValuePerDay);
    elements.intermediateResults.innerHTML = renderIntermediateParameters(result.context?.intermediateParameters);
    elements.facilityResults.innerHTML = shiftSelection.activeShift ? renderOptimalPlan(result, shiftSelection.activeShift) : "";
    elements.timelineResults.innerHTML = renderTimeline(result.timeline, pageState.settings.timelineSeries);
    elements.alternativeResults.innerHTML = result.alternatives.map(renderAlternative).join("");
    elements.warningResults.innerHTML = result.unsupported.length
      ? result.unsupported.map(renderWarning).join("")
      : `<div class="warning-card">現在の所持状態では、製造/貿易の未対応スキル警告はありません。</div>`;
  }
}
