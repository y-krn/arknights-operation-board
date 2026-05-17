import { createDefaultRoster } from "../../base-sim-engine.js";
import { createDefaultSettings, normalizeShiftMode, clampNumber, syncSettingsToInputs, applyLayoutPreset } from "../state.js";
import { saveRoster, saveSettings } from "../storage.js";

const LAYOUT_COUNT_INPUT_IDS = ["manufactureCount", "tradingCount", "powerCount"];

export function bindControlEvents({ elements, catalog, pageState, renderRoster, renderSupportUi, runSimulation }) {
  elements.layoutPreset.addEventListener("change", () => {
    applyLayoutPreset(elements, renderSupportUi);
    runSimulation();
  });

  for (const element of controlElements(elements)) {
    element.addEventListener("change", () => {
      handleControlChange({ element, elements, pageState, renderSupportUi });
      runSimulation();
    });
  }

  elements.runSimulation.addEventListener("click", runSimulation);
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
}

function controlElements(elements) {
  return [
    elements.objective,
    elements.shiftMode,
    elements.manufactureCount,
    elements.tradingCount,
    elements.powerCount,
    elements.meetingRoomLevel,
    elements.dormOperators,
    elements.collectionInterval,
  ];
}

function handleControlChange({ element, elements, pageState, renderSupportUi }) {
  if (LAYOUT_COUNT_INPUT_IDS.includes(element.id)) {
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