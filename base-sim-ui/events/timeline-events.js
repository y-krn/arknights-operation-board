import { saveSettings } from "../storage.js";

export function bindTimelineEvents({ elements, pageState, runSimulation }) {
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
}

export function bindShiftTabEvents({ elements, pageState, runSimulation }) {
  elements.facilityResults.addEventListener("click", (event) => {
    const button = event.target.closest("[data-shift-id]");
    if (!button) return;
    pageState.activeShiftId = button.dataset.shiftId;
    runSimulation();
  });
}