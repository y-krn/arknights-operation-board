import { formatIntermediateValue } from "../formatters.js";

export function renderIntermediateParameters(parameters = {}) {
  const items = [
    { key: "worldlyWorry", label: "俗世之憂" },
    { key: "perceptualInfo", label: "知覚情報" },
    { key: "thoughtChain", label: "思念連鎖" },
    { key: "silentResonance", label: "静かなる共鳴" },
    { key: "passion", label: "パッション" },
    { key: "catnip", label: "マタタビ" },
    { key: "dungeonMeal", label: "魔物料理" },
  ].map((item) => ({ ...item, value: Number(parameters[item.key] || 0) }));
  return `
    <div class="intermediate-title">
      <span>中間パラメータ</span>
    </div>
    ${items.map((item) => `
      <article class="intermediate-chip ${item.value > 0 ? "active" : ""}">
        <span>${item.label}</span>
        <strong>${formatIntermediateValue(item.value)}</strong>
      </article>
    `).join("")}
  `;
}
