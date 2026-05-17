export function inferOrderModelEffect(skill, roomType) {
  if (roomType !== "TRADING") return null;
  const text = skill.description || "";
  if (text.includes("違約オーダーならば") && text.includes("純金の納品数が+")) {
    const match = text.match(/純金の納品数が\+(\d+)/);
    return match ? { type: "tradingBreachOrderExtraGold", extraGold: Number(match[1]), breachRatio: 2 / 3, approximate: true } : null;
  }
  if (text.includes("特別独占オーダー") && text.includes("受注効率による影響を受けない")) {
    return { type: "tradingSpecialExclusiveOrder", fixedLmdPerBaseOrder: 500, approximate: true };
  }
  return null;
}
