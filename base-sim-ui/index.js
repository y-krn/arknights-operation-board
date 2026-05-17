import { queryElements } from "./dom.js";
import { formatNumber } from "./formatters.js";
import { syncSettingsToInputs, createPageState, selectActiveShift } from "./state.js";
import { loadRoster, saveRoster, loadSettings, saveSettings } from "./storage.js";
import { buildSimulationResult, applyOptimizedSupportAssignments } from "./engine-adapter.js";
import { renderAlternative } from "./render/alternatives.js";
import { renderWarning } from "./render/warnings.js";
import { renderTimeline } from "./render/timeline.js";
import { renderIntermediateParameters } from "./render/summary.js";
import { renderOptimalPlan } from "./render/facilities.js";
import { renderSupportAssignments } from "./render/support-assignments.js";
import { renderRosterPanel } from "./render/roster-controller.js";
import { bindControlEvents } from "./events/controls.js";
import { bindRosterEvents } from "./events/roster-events.js";
import { bindShiftTabEvents, bindTimelineEvents } from "./events/timeline-events.js";

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

  bindControlEvents({ elements, catalog, pageState, renderRoster, renderSupportUi, runSimulation });
  bindRosterEvents({ elements, renderRoster });
  bindShiftTabEvents({ elements, pageState, runSimulation });
  bindTimelineEvents({ elements, pageState, runSimulation });

  runSimulation();


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
