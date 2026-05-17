export function bindRosterEvents({ elements, renderRoster }) {
  elements.operatorSearch.addEventListener("input", renderRoster);
}