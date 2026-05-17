import { clampInteger } from "./numbers.js";

export const BASE_LAYOUTS = {
  "243": { trading: 2, manufacture: 4, power: 3 },
  "252": { trading: 2, manufacture: 5, power: 2 },
  "153": { trading: 1, manufacture: 5, power: 3 },
};

export const OBJECTIVES = {
  lmd: { label: "龍門幣最大" },
  exp: { label: "作戦記録最大" },
  balance: { label: "バランス" },
};

export function normalizeLayout(layout) {
  if (typeof layout === "string") return { ...BASE_LAYOUTS[layout] };
  return {
    trading: clampInteger(layout?.trading, 0, 5),
    manufacture: clampInteger(layout?.manufacture, 0, 5),
    power: clampInteger(layout?.power, 0, 3),
  };
}

export function chooseManufactureProducts(count, objective) {
  if (objective === "exp") return Array.from({ length: count }, () => "EXP");
  if (objective === "balance") return Array.from({ length: count }, (_, index) => (index % 2 === 0 ? "GOLD" : "EXP"));
  return Array.from({ length: count }, () => "GOLD");
}
