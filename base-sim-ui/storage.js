import { createDefaultRoster } from "../base-sim-engine.js";
import { createDefaultSettings, sanitizeUiSettings } from "./state.js";

const STORAGE_KEY = "operation-board:base-sim-roster:v1";
const SETTINGS_KEY = "operation-board:base-sim-settings:v1";

export function loadRoster(catalog) {
  const fallback = createDefaultRoster(catalog, { defaultOwned: true });
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return fallback;
  }
}

export function saveRoster(roster) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(roster));
}

export function loadSettings() {
  try {
    return sanitizeUiSettings({ ...createDefaultSettings(), ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}") });
  } catch {
    return createDefaultSettings();
  }
}

export function saveSettings(settings) {
  const sanitized = sanitizeUiSettings(settings);
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(sanitized));
  return sanitized;
}
