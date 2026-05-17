import { DEFAULT_ORDER_VALUE_LMD } from "../constants.js";
import { round } from "../numbers.js";
import { hasSelectedSkill } from "../facilities/capacity.js";

export const dynamicOrderEvaluators = {
  tradingBreachOrderExtraGold({ effect, selectedCandidates, context }) {
    if (!hasSelectedSkill(selectedCandidates, /違約オーダーと見なす/)) return null;
    const lmdPerOrder = Number(context.catalog?.trade?.lmdPerOrder || DEFAULT_ORDER_VALUE_LMD);
    const extraLmdPerOrder = Number(effect.extraGold || 0) * Number(context.catalog?.products?.GOLD?.value || 500) * Number(effect.breachRatio || 0);
    const value = lmdPerOrder > 0 ? (extraLmdPerOrder / lmdPerOrder) * 100 : 0;
    return value > 0 ? { value: round(value, 2), detail: "違約注文 期待+" + round(extraLmdPerOrder, 0) + "龍門幣/件" } : null;
  },

  tradingSpecialExclusiveOrder({ effect, context }) {
    const lmdPerOrder = Number(context.catalog?.trade?.lmdPerOrder || DEFAULT_ORDER_VALUE_LMD);
    const value = lmdPerOrder > 0 ? (Number(effect.fixedLmdPerBaseOrder || 0) / lmdPerOrder) * 100 : 0;
    return value > 0 ? { value: round(value, 2), detail: "特別注文 近似+" + Number(effect.fixedLmdPerBaseOrder || 0) + "龍門幣/件" } : null;
  },
};
