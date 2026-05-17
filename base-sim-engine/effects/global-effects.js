import { activeBaseSkills } from "../roster.js";

export function collectGlobalEffects(operators, roster, controlOperatorIds = null) {
  const effects = [];
  for (const operator of operators) {
    if (controlOperatorIds && !controlOperatorIds.has(operator.id)) continue;
    for (const skill of activeBaseSkills(operator, roster[operator.id])) {
      if (skill.roomType !== "CONTROL") continue;
      for (const effect of skill.effects) {
        if (!["manufactureSpeedForTaggedOperator", "tradingSpeedForTaggedOperator"].includes(effect.type)) continue;
        effects.push({ effect, skill, supportOperator: operator });
      }
      for (const effect of inferControlIntermediateGlobalEffects(skill)) effects.push({ effect, skill, supportOperator: operator });
    }
  }
  return effects;
}

export function inferControlIntermediateGlobalEffects(skill) {
  const text = skill.description || "";
  const effects = [];
  if (text.includes("パッション") && text.includes("金属を製造する製造所") && text.includes("製造効率")) {
    const baseMatch = text.match(/製造効率\+([\d.]+)%/);
    const baseValue = baseMatch ? Number(baseMatch[1]) : 0;
    if (baseValue > 0) effects.push({ type: "goldManufactureSpeedPerPassion", baseValue, products: ["GOLD"], approximate: false });
  }
  if (text.includes("パッション8につき") && text.includes("全貿易所の受注効率+1%")) {
    effects.push({ type: "tradingSpeedPerPassion", valuePerStep: 1, passionPerStep: 8, approximate: false });
  }
  if (text.includes("全製造所の製造効率+2%") && text.includes("アイルーと愉快な仲間たち")) {
    effects.push({ type: "manufactureSpeedIfMhInControl", value: 2, products: ["GOLD", "EXP"], tag: "$cc.tag.mh", approximate: false });
  }
  if (text.includes("全貿易所の受注効率+7%") && text.includes("アイルーと愉快な仲間たち")) {
    effects.push({ type: "tradingSpeedIfMhInControl", value: 7, tag: "$cc.tag.mh", approximate: false });
  }
  const orderLimitMatch = text.match(/注文上限\+(\d+)/);
  if (orderLimitMatch && text.includes("ヘドリー")) {
    effects.push({ type: "orderLimitForNamedOperatorInTradingRoom", operatorNames: ["ヘドリー"], value: Number(orderLimitMatch[1]), approximate: false });
  }
  if (orderLimitMatch && text.includes("イェラグ")) {
    effects.push({ type: "orderLimitForTaggedOperatorInTradingRoom", tag: "$cc.g.karlan", value: Number(orderLimitMatch[1]), approximate: false });
    effects.push({ type: "tradingSpeedForTaggedOperator", tag: "$cc.g.karlan", value: -15, approximate: false });
  }
  return effects;
}

export function isGlobalEffectApplicable(effect, roomType, product) {
  if (roomType === "MANUFACTURE" && effect.type === "manufactureSpeedForTaggedOperator") return effect.products.includes(product);
  if (roomType === "TRADING" && effect.type === "tradingSpeedForTaggedOperator") return true;
  if (roomType === "MANUFACTURE" && effect.type === "goldManufactureSpeedPerPassion") return product === "GOLD";
  if (roomType === "TRADING" && effect.type === "tradingSpeedPerPassion") return true;
  if (roomType === "MANUFACTURE" && effect.type === "manufactureSpeedIfMhInControl") return effect.products.includes(product);
  if (roomType === "TRADING" && effect.type === "tradingSpeedIfMhInControl") return true;
  return false;
}
