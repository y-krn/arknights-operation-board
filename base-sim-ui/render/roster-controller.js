import { renderRosterRow } from "./roster.js";

const ROSTER_ROOM_TYPES = ["MANUFACTURE", "TRADING", "CONTROL", "POWER"];

export function renderRosterPanel({ elements, catalog, roster, searchText, onRosterChange, onRenderSupportAssignments, onRunSimulation }) {
  const query = searchText.trim().toLowerCase();
  const visibleOperators = catalog.operators
    .filter((operator) => operator.baseSkills.some((skill) => ROSTER_ROOM_TYPES.includes(skill.roomType)))
    .filter((operator) => !query || operator.name.toLowerCase().includes(query))
    .slice(0, query ? 80 : 120);

  const ownedCount = catalog.operators.filter((operator) => roster[operator.id]?.owned).length;
  elements.rosterSummary.textContent = `${ownedCount} / ${catalog.operators.length} 名を所持扱い`;
  elements.operatorRoster.innerHTML = visibleOperators.map((operator) => renderRosterRow(operator, roster)).join("");

  elements.operatorRoster.querySelectorAll(".owned-toggle").forEach((input) => {
    input.addEventListener("change", () => {
      const nextRoster = {
        ...roster,
        [input.dataset.operatorId]: {
          ...roster[input.dataset.operatorId],
          owned: input.checked,
        },
      };
      onRosterChange(nextRoster);
      onRenderSupportAssignments();
      renderRosterPanel({ elements, catalog, roster: nextRoster, searchText, onRosterChange, onRenderSupportAssignments, onRunSimulation });
      onRunSimulation();
    });
  });

  elements.operatorRoster.querySelectorAll(".phase-select").forEach((select) => {
    select.addEventListener("change", () => {
      const nextRoster = {
        ...roster,
        [select.dataset.operatorId]: {
          ...roster[select.dataset.operatorId],
          phase: select.value,
        },
      };
      onRosterChange(nextRoster);
      onRunSimulation();
    });
  });
}