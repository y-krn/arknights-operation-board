import { formatCondition, formatRoomType } from "../formatters.js";

export function renderRosterRow(operator, roster) {
  const entry = roster[operator.id] || { owned: false, phase: "PHASE_0" };
  const activeSkills = operator.baseSkills
    .filter((skill) => ["MANUFACTURE", "TRADING", "CONTROL", "POWER"].includes(skill.roomType))
    .slice(0, 4);
  return `
    <div class="roster-row">
      <div>
        <label>
          <input class="owned-toggle" data-operator-id="${operator.id}" type="checkbox" ${entry.owned ? "checked" : ""} />
          <span>${operator.name}</span>
        </label>
        <details class="skill-details">
          <summary>基地スキル</summary>
          ${activeSkills.map(renderRosterSkill).join("")}
        </details>
      </div>
      <select class="phase-select" data-operator-id="${operator.id}" aria-label="${operator.name}の昇進段階">
        <option value="PHASE_0" ${entry.phase === "PHASE_0" ? "selected" : ""}>未昇進</option>
        <option value="PHASE_1" ${entry.phase === "PHASE_1" ? "selected" : ""}>昇進1</option>
        <option value="PHASE_2" ${entry.phase === "PHASE_2" ? "selected" : ""}>昇進2</option>
      </select>
    </div>
  `;
}

export function renderRosterSkill(skill) {
  return `
    <div class="skill-description">
      <strong>${skill.buffName}</strong>
      <span>${formatCondition(skill.condition)} / ${formatRoomType(skill.roomType)}</span>
      <p>${skill.description}</p>
    </div>
  `;
}
