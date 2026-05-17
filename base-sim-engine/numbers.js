export function clampInteger(value, min, max) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return min;
  return Math.min(max, Math.max(min, number));
}

export function round(value, digits) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}
