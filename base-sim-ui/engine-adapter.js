import { simulateBase } from "../base-sim-engine.js";
import { currentLayout, sanitizeUiSettings } from "./state.js";
import { saveSettings } from "./storage.js";

export function buildSimulationResult({ catalog, roster, settings, elements }) {
  return simulateBase({
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
}

export function applyOptimizedSupportAssignments(settings, nextAssignments) {
  if (!nextAssignments) return { settings, changed: false };
  const uiAssignments = sanitizeUiSettings({ ...settings, supportAssignments: nextAssignments }).supportAssignments;
  const current = JSON.stringify(settings.supportAssignments || {});
  const next = JSON.stringify(uiAssignments);
  if (current === next) return { settings, changed: false };
  const updated = { ...settings, supportAssignments: uiAssignments };
  return { settings: saveSettings(updated), changed: true };
}
