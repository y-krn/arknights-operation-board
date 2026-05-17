export const SUPPORT_ROOMS = [
  { roomType: "POWER", label: "発電所", capacity: (elements) => Number(elements.powerCount.value) },
];

export function renderSupportAssignments({ elements, catalog, roster, settings, onSettingsChange, onRunSimulation }) {
  elements.supportAssignments.innerHTML = SUPPORT_ROOMS.map((room) => renderSupportRoom(room, { elements, catalog, roster, settings })).join("");
  elements.supportAssignments.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      const roomType = select.dataset.roomType;
      const index = Number(select.dataset.index);
      const values = [...(settings.supportAssignments[roomType] || [])];
      values[index] = select.value;
      const nextSettings = {
        ...settings,
        supportAssignments: {
          ...settings.supportAssignments,
          [roomType]: values.filter(Boolean),
        },
      };
      const savedSettings = onSettingsChange(nextSettings);
      renderSupportAssignments({ elements, catalog, roster, settings: savedSettings, onSettingsChange, onRunSimulation });
      onRunSimulation();
    });
  });
}

function renderSupportRoom(room, context) {
  const capacity = room.capacity(context.elements);
  const current = context.settings.supportAssignments[room.roomType] || [];
  const slots = Array.from({ length: capacity }, (_, index) => renderSupportSelect(room, index, current[index] || "", context)).join("");
  return `
    <article class="support-card">
      <h3>${room.label}</h3>
      ${slots || `<span class="facility-meta">配置枠なし</span>`}
    </article>
  `;
}

function renderSupportSelect(room, index, selectedId, context) {
  const options = supportOperatorOptions(room.roomType, selectedId, context);
  return `
    <label>
      <span>${room.label} ${index + 1}</span>
      <select data-room-type="${room.roomType}" data-index="${index}" aria-label="${room.label} ${index + 1}">
        <option value="">未配置</option>
        ${options
          .map((operator) => `<option value="${operator.id}" ${operator.id === selectedId ? "selected" : ""}>${operator.name}</option>`)
          .join("")}
      </select>
    </label>
  `;
}

function supportOperatorOptions(roomType, selectedId, { catalog, roster, settings }) {
  const selectedIds = new Set(Object.values(settings.supportAssignments).flat().filter((operatorId) => operatorId !== selectedId));
  return catalog.operators
    .filter((operator) => roster[operator.id]?.owned)
    .filter((operator) => !selectedIds.has(operator.id))
    .filter((operator) => operator.id === selectedId || operator.baseSkills.some((skill) => skill.roomType === roomType))
    .sort((a, b) => b.rarityValue - a.rarityValue || a.name.localeCompare(b.name, "ja"));
}