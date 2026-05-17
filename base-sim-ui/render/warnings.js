import { formatUnsupportedCategory } from "../formatters.js";

export function renderWarning(warning) {
  const tags = (warning.conditionTags || []).map((tag) => tag.label || tag.tag).filter(Boolean);
  const tagText = tags.length ? `<span>タグ: ${tags.join(" / ")}</span>` : "";
  const reason = warning.reason ? `<span>${warning.reason}</span>` : "";
  return `
    <div class="warning-card">
      <div class="warning-head">
        <strong>${warning.buffName}</strong>
        <span>${formatUnsupportedCategory(warning.category)} / ${warning.roomType}</span>
      </div>
      <div class="warning-meta">
        <span>${warning.operators.join("、")}</span>
        ${reason}
        ${tagText}
      </div>
      <p>${warning.description}</p>
    </div>
  `;
}
