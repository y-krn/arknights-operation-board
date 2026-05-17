import {
  formatMatchedSkillText,
  formatCondition,
  formatMaxCondition,
  formatMoraleChange,
  formatShiftOperatorSkillSummary,
  formatCompactNumber,
  formatRoomType,
} from "../formatters.js";

export function renderSelectedOperator(candidate) {
  const skills = candidate.matched.map(formatMatchedSkillText).join(" / ");
  const unlockCondition = formatCondition(formatMaxCondition(candidate.matched.map((skill) => skill.condition)));
  return `
    <div class="operator-pill">
      <strong>
        <span class="operator-title">${candidate.operator.name}<em>${unlockCondition}</em></span>
        <span>${candidate.score === null ? "支援" : `${candidate.score.toFixed(1)}%`}</span>
      </strong>
      <span>${skills}${candidate.approximate ? ` <b class="approx">近似</b>` : ""}</span>
      <span class="morale-line">体力 ${formatMoraleChange(candidate.morale?.changePerHour ?? -1)}/h</span>
      ${renderControlImpacts(candidate)}
      <details class="skill-details">
        <summary>説明</summary>
        ${candidate.matched
          .map(
            (skill) => `
              <div class="skill-description">
                <strong>${skill.buffName}</strong>
                <p>${skill.description}</p>
              </div>
            `
          )
          .join("")}
      </details>
    </div>
  `;
}

export function renderControlImpacts(candidate) {
  if (!candidate.impacts?.length) return "";
  const total = candidate.impacts.reduce((sum, impact) => sum + Number(impact.value || 0), 0);
  return `
    <div class="impact-summary">
      <strong>今回の寄与 +${total.toFixed(1)}%</strong>
      ${candidate.impacts.map(renderControlImpact).join("")}
    </div>
  `;
}

export function renderControlImpact(impact) {
  const detail = impact.detail ? ` / ${impact.detail}` : "";
  return `<span>${impact.facilityLabel} / ${impact.targetOperatorName} / ${impact.skillName} +${Number(impact.value || 0).toFixed(1)}%${detail}</span>`;
}

export function renderShiftOperator(operator) {
  const morale = operator.morale;
  const score = operator.score === null ? "支援" : `+${Number(operator.score || 0).toFixed(1)}%`;
  const moraleText = morale ? `体力 ${formatMoraleChange(morale.changePerHour)}/h` : "体力 -1.0/h";
  const skillSummary = operator.skills?.length ? operator.skills.map(formatShiftOperatorSkillSummary).join(" / ") : "有効スキルなし";
  return `
    <details class="shift-operator operator-pill">
      <summary>
        <div class="operator-card-head">
          <span class="operator-title">${operator.operatorName}<em>${formatCondition(operator.unlockCondition)}</em></span>
          <strong class="operator-score">${score}</strong>
        </div>
        ${morale ? renderMoraleCompact(morale, moraleText) : `<span class="morale-line">${moraleText}</span>`}
        <span class="operator-skill-preview">${skillSummary}</span>
      </summary>
      ${morale ? renderMoraleDetails(morale) : ""}
      ${renderControlImpacts(operator)}
      ${operator.skills?.length ? operator.skills.map(renderShiftOperatorSkill).join("") : `<div class="skill-description">有効スキルなし</div>`}
    </details>
  `;
}

export function renderMoraleCompact(morale, moraleText) {
  const end = morale.moraleTimeline?.endMorale ?? morale.moraleAfterShift;
  const ratio = Math.max(0, Math.min(1, Number(end || 0) / Number(morale.maxMorale || 24)));
  const status = morale.canCompleteShift ? (morale.canRecoverForCycle ? "回復可" : "回復不足") : "体力不足";
  const statusClass = morale.canCompleteShift && morale.canRecoverForCycle ? "ok" : "warn";
  return `
    <div class="morale-compact" style="--morale-end-ratio: ${ratio}">
      <span class="morale-range">${formatCompactNumber(morale.moraleTimeline?.startMorale ?? 24)}→${formatCompactNumber(end)}</span>
      <span class="morale-line">${moraleText}</span>
      <span class="morale-badge ${statusClass}">${status}</span>
      <i aria-hidden="true"></i>
    </div>
  `;
}

export function renderMoraleDetails(morale) {
  return `
    <div class="morale-detail-grid">
      <span><b>消費</b>${formatCompactNumber(morale.projectedCost)}</span>
      <span><b>休憩</b>${morale.restHours > 0 ? `${morale.restHours}h` : "なし"}</span>
      <span><b>回復</b>${formatCompactNumber(morale.projectedRecovery)}</span>
      <span><b>勤務後</b>${formatCompactNumber(morale.moraleAfterShift)}</span>
    </div>
  `;
}

export function renderShiftOperatorSkill(skill) {
  const value = skill.value === null ? "" : ` +${Number(skill.value || 0).toFixed(1)}%`;
  const approx = skill.approximate ? ` <b class="approx">近似</b>` : "";
  return `
    <div class="skill-description">
      <strong>${skill.buffName}${value}${approx}</strong>
      <span>${formatCondition(skill.condition)} / ${formatRoomType(skill.roomType)}</span>
      <p>${skill.description}</p>
    </div>
  `;
}

