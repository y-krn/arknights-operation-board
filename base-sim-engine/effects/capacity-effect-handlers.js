function textOf(skill) {
  return skill.description || "";
}

export const CAPACITY_VARIABLE_EFFECT_HANDLERS = [
  {
    id: "manufacture-speed-per-storage-limit-bonus",
    roomType: "MANUFACTURE",
    canHandle: (skill) => textOf(skill).includes("保管上限1上昇につき") && textOf(skill).includes("製造効率+2%"),
    infer: ({ product }) => ({ type: "manufactureSpeedPerStorageLimitBonus", valuePerLimit: 2, products: [product], approximate: false }),
  },
  {
    id: "manufacture-speed-per-operator-storage-limit-bonus",
    roomType: "MANUFACTURE",
    canHandle: (skill) => textOf(skill).includes("配属オペレーター各自の保管上限増加値") && textOf(skill).includes("製造効率+3%"),
    infer: ({ product }) => ({ type: "manufactureSpeedPerOperatorStorageLimitBonus", threshold: 16, lowValuePerLimit: 1, highValuePerLimit: 3, products: [product], approximate: false }),
  },
  {
    id: "trading-speed-per-order-limit-bonus",
    roomType: "TRADING",
    canHandle: (skill) => textOf(skill).includes("注文上限増加量1につき") && textOf(skill).includes("受注効率+4%"),
    infer: () => ({ type: "tradingSpeedPerOrderLimitBonus", valuePerLimit: 4, approximate: false }),
  },
  {
    id: "trading-speed-per-order-limit-step",
    roomType: "TRADING",
    canHandle: (skill) => textOf(skill).includes("注文上限増加量5につき") && textOf(skill).includes("受注効率+25%"),
    infer: () => ({ type: "tradingSpeedPerOrderLimitStep", limitPerStep: 5, valuePerStep: 25, maxValue: 100, approximate: false }),
  },
  {
    id: "trading-speed-per-order-limit-gap",
    roomType: "TRADING",
    canHandle: (skill) => textOf(skill).includes("オーダー数と注文上限数の差") && textOf(skill).includes("受注効率+4%"),
    infer: () => ({ type: "tradingSpeedPerOrderLimitGap", valuePerOrder: 4, approximate: false }),
  },
  {
    id: "trading-speed-per-current-order",
    roomType: "TRADING",
    canHandle: (skill) => textOf(skill).includes("オーダー数が1につき") && textOf(skill).includes("受注効率+4%"),
    infer: () => ({ type: "tradingSpeedPerCurrentOrder", valuePerOrder: 4, approximate: false }),
  },
  {
    id: "manufacture-speed-per-selected-operator",
    roomType: "MANUFACTURE",
    canHandle: (skill) => textOf(skill).includes("製造所に配置中のオペレーター1名につき") && textOf(skill).includes("製造効率+10%"),
    infer: ({ product }) => ({ type: "manufactureSpeedPerSelectedOperator", valuePerOperator: 10, products: [product], approximate: false }),
  },
];

export function findCapacityVariableEffectHandler(skill, roomType) {
  return CAPACITY_VARIABLE_EFFECT_HANDLERS.find((handler) => handler.roomType === roomType && handler.canHandle(skill)) || null;
}

export function inferCapacityVariableEffect(skill, roomType, product) {
  const handler = findCapacityVariableEffectHandler(skill, roomType);
  return handler?.infer({ skill, roomType, product }) || null;
}

export function isCapacityVariableEffectHandled(skill) {
  return CAPACITY_VARIABLE_EFFECT_HANDLERS.some((handler) => handler.canHandle(skill));
}
