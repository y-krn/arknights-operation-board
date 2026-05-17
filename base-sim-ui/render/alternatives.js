export function renderAlternative(alternative) {
  const candidates = alternative.candidates.length
    ? alternative.candidates.map((candidate) => `${candidate.name} +${candidate.score.toFixed(1)}%`).join("、")
    : "候補なし";
  return `<div class="alternative-card"><strong>${alternative.facilityLabel}</strong>: ${candidates}</div>`;
}
