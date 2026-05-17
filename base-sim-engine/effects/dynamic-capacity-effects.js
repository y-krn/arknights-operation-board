import { hasSelectedSkill } from "../facilities/capacity.js";

export const dynamicCapacityEvaluators = {
  manufactureSpeedPerStorageLimitBonus({ effect, selectedCandidates, product, roomState }) {
    if (!effect.products.includes(product)) return null;
    if (hasSelectedSkill(selectedCandidates, /大きい方がいい/)) return null;
    const bonus = Math.max(0, Number(roomState.storageBonus || 0));
    const value = bonus * effect.valuePerLimit;
    return value > 0 ? { value, detail: "保管上限 +" + bonus } : null;
  },

  manufactureSpeedPerOperatorStorageLimitBonus({ effect, product, roomState }) {
    if (!effect.products.includes(product)) return null;
    const values = [...(roomState.storageBonusesByOperator || new Map()).values()].map((value) => Math.max(0, Number(value || 0)));
    const value = values.reduce((sum, storageBonus) => {
      if (storageBonus <= 0) return sum;
      const rate = storageBonus > effect.threshold ? effect.highValuePerLimit : effect.lowValuePerLimit;
      return sum + storageBonus * rate;
    }, 0);
    const detail = values.filter((value) => value > 0).map((value) => "+" + value).join("/");
    return value > 0 ? { value, detail: "各保管上限 " + detail } : null;
  },

  manufactureSpeedPerSelectedOperator({ effect, selectedCandidates, product }) {
    if (!effect.products.includes(product)) return null;
    const count = selectedCandidates.length;
    return count > 0 ? { value: count * effect.valuePerOperator, detail: "配置人数 x" + count } : null;
  },

  tradingSpeedPerOrderLimitBonus({ effect, roomState }) {
    const bonus = Math.max(0, Number(roomState.orderBonus || 0));
    const value = bonus * effect.valuePerLimit;
    return value > 0 ? { value, detail: "注文上限 +" + bonus } : null;
  },

  tradingSpeedPerOrderLimitStep({ effect, roomState }) {
    const bonus = Math.max(0, Number(roomState.orderBonus || 0));
    const value = Math.min(effect.maxValue, Math.floor(bonus / effect.limitPerStep) * effect.valuePerStep);
    return value > 0 ? { value, detail: "注文上限 +" + bonus } : null;
  },

  tradingSpeedPerOrderLimitGap({ effect, roomState }) {
    const gap = Math.max(0, Number(roomState.orderLimitGap || 0));
    const value = gap * effect.valuePerOrder;
    return value > 0 ? { value, detail: "上限差 " + gap } : null;
  },

  tradingSpeedPerCurrentOrder({ effect, roomState }) {
    const orders = Math.max(0, Number(roomState.currentOrders || 0));
    const value = orders * effect.valuePerOrder;
    return value > 0 ? { value, detail: "オーダー数 " + orders } : null;
  },
};
