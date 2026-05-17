import { round } from "./numbers.js";

export function calculateTotals(catalog, manufacturePlan, tradingPlan, objective) {
  const goldUnits = manufacturePlan.filter((room) => room.product === "GOLD").reduce((sum, room) => sum + room.unitsPerDay, 0);
  const expValue = manufacturePlan.filter((room) => room.product === "EXP").reduce((sum, room) => sum + room.valuePerDay, 0);
  const tradingLmd = tradingPlan.reduce((sum, room) => sum + room.lmdPerDay, 0);
  const goldEquivalentLmd = goldUnits * catalog.products.GOLD.value;
  const totalValue = tradingLmd + goldEquivalentLmd + expValue;
  const score = objective === "exp" ? expValue : objective === "balance" ? tradingLmd + expValue + goldEquivalentLmd * 0.5 : tradingLmd + goldEquivalentLmd;
  return {
    tradingLmdPerDay: round(tradingLmd, 0),
    goldEquivalentLmdPerDay: round(goldEquivalentLmd, 0),
    expValuePerDay: round(expValue, 0),
    totalValuePerDay: round(totalValue, 0),
    lmdPerDay: round(tradingLmd, 0),
    expPerDay: round(expValue, 0),
    goldUnitsPerDay: round(goldUnits, 1),
    score: round(score, 0),
  };
}
