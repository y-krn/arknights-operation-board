export function evaluateStaticEffect(effect, product, context, activeSkills) {
  const evaluator = staticEffectEvaluators[effect.type];
  return evaluator ? evaluator({ effect, product, context, activeSkills }) : null;
}

const staticEffectEvaluators = {
  manufactureSpeed({ effect, product }) {
    return effect.products.includes(product) ? effect.value : null;
  },

  tradingSpeed({ effect }) {
    return effect.value;
  },

  tradingSpeedPerRoomLevel({ effect, context }) {
    const level = effect.roomType === "MEETING" ? context.meetingRoomLevel : 0;
    return Math.min(effect.maxValue, effect.baseValue + level * effect.valuePerLevel);
  },

  powerPlantManufacture({ effect, product, context }) {
    return effect.products.includes(product) ? context.powerPlants * effect.percentPerPowerPlant : null;
  },

  rosmontisManufacture({ effect, context, activeSkills }) {
    if (!activeSkills.some((skill) => skill.buffId === effect.requiresSkill)) return null;
    return Number(context.intermediateParameters?.thoughtChain ?? context.dormOperators) * effect.percentPerThoughtChain;
  },

  ebenholzTrading({ effect, context, activeSkills }) {
    if (!activeSkills.some((skill) => skill.buffId === effect.requiresSkill)) return null;
    return Number(context.intermediateParameters?.silentResonance ?? context.dormOperators) * effect.percentPerSilentResonance;
  },
};
