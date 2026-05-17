import { BASE_LAYOUTS } from "../base-sim-engine.js";

export function createDefaultSettings() {
  return {
    shiftMode: "single",
    meetingRoomLevel: 3,
    collectionIntervalHours: 24,
    supportAssignments: { POWER: [] },
    timelineSeries: createDefaultTimelineSeries(),
  };
}

export function sanitizeUiSettings(value) {
  const assignments = value?.supportAssignments || {};
  return {
    ...value,
    shiftMode: normalizeShiftMode(value?.shiftMode),
    meetingRoomLevel: clampNumber(value?.meetingRoomLevel, 0, 3, 3),
    collectionIntervalHours: clampNumber(value?.collectionIntervalHours, 1, 72, 24),
    timelineSeries: sanitizeTimelineSeries(value?.timelineSeries),
    supportAssignments: {
      POWER: Array.isArray(assignments.POWER) ? assignments.POWER : [],
    },
  };
}

export function createDefaultTimelineSeries() {
  return { cumulative: true, morale: true, parameters: true };
}

export function sanitizeTimelineSeries(value = {}) {
  const defaults = createDefaultTimelineSeries();
  return Object.fromEntries(Object.entries(defaults).map(([key, defaultValue]) => [key, typeof value[key] === "boolean" ? value[key] : defaultValue]));
}

export function normalizeShiftMode(value) {
  return value === "two-shift" ? "two-shift" : "single";
}

export function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, Math.trunc(number)));
}

export function syncSettingsToInputs(elements, settings) {
  elements.shiftMode.value = settings.shiftMode;
  elements.meetingRoomLevel.value = settings.meetingRoomLevel;
  elements.collectionInterval.value = settings.collectionIntervalHours;
}

export function applyLayoutPreset(elements, onApplied) {
  const preset = BASE_LAYOUTS[elements.layoutPreset.value];
  if (!preset) return;
  elements.manufactureCount.value = preset.manufacture;
  elements.tradingCount.value = preset.trading;
  elements.powerCount.value = preset.power;
  onApplied();
}

export function currentLayout(elements) {
  return {
    manufacture: Number(elements.manufactureCount.value),
    trading: Number(elements.tradingCount.value),
    power: Number(elements.powerCount.value),
  };
}
