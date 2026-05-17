export function inferCapacityVariableEffect(skill, roomType, product) {
  const text = skill.description || "";
  if (roomType === "MANUFACTURE" && text.includes("保管上限1上昇につき") && text.includes("製造効率+2%")) {
    return { type: "manufactureSpeedPerStorageLimitBonus", valuePerLimit: 2, products: [product], approximate: false };
  }
  if (roomType === "MANUFACTURE" && text.includes("配属オペレーター各自の保管上限増加値") && text.includes("製造効率+3%")) {
    return { type: "manufactureSpeedPerOperatorStorageLimitBonus", threshold: 16, lowValuePerLimit: 1, highValuePerLimit: 3, products: [product], approximate: false };
  }
  if (roomType === "TRADING" && text.includes("注文上限増加量1につき") && text.includes("受注効率+4%")) {
    return { type: "tradingSpeedPerOrderLimitBonus", valuePerLimit: 4, approximate: false };
  }
  if (roomType === "TRADING" && text.includes("注文上限増加量5につき") && text.includes("受注効率+25%")) {
    return { type: "tradingSpeedPerOrderLimitStep", limitPerStep: 5, valuePerStep: 25, maxValue: 100, approximate: false };
  }
  if (roomType === "TRADING" && text.includes("オーダー数と注文上限数の差") && text.includes("受注効率+4%")) {
    return { type: "tradingSpeedPerOrderLimitGap", valuePerOrder: 4, approximate: false };
  }
  if (roomType === "TRADING" && text.includes("オーダー数が1につき") && text.includes("受注効率+4%")) {
    return { type: "tradingSpeedPerCurrentOrder", valuePerOrder: 4, approximate: false };
  }
  if (roomType === "MANUFACTURE" && text.includes("製造所に配置中のオペレーター1名につき") && text.includes("製造効率+10%")) {
    return { type: "manufactureSpeedPerSelectedOperator", valuePerOperator: 10, products: [product], approximate: false };
  }
  return null;
}
