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

const PHASE_RANK = {
  PHASE_0: 0,
  PHASE_1: 1,
  PHASE_2: 2,
};

const ROOM_CAPACITY = 3;
const SUPPORT_ROOM_CAPACITY = {
  CONTROL: 5,
};
const DEFAULT_REST_RECOVERY_PER_HOUR = 2;
const DEFAULT_FACILITY_LEVEL = 3;
const MANUFACTURE_CAPACITY_BY_LEVEL = [24, 36, 54];
const TRADING_ORDER_LIMIT_BY_LEVEL = [6, 8, 10];
const DEFAULT_PRODUCT_WEIGHT = {
  GOLD: 2,
  EXP: 5,
};
const DEFAULT_ORDER_VALUE_LMD = 1500;

export function normalizeLayout(layout) {
  if (typeof layout === "string") return { ...BASE_LAYOUTS[layout] };
  return {
    trading: clampInteger(layout?.trading, 0, 5),
    manufacture: clampInteger(layout?.manufacture, 0, 5),
    power: clampInteger(layout?.power, 0, 3),
  };
}

export function createDefaultRoster(catalog, options = {}) {
  const defaultOwned = options.defaultOwned ?? true;
  return Object.fromEntries(
    catalog.operators.map((operator) => [
      operator.id,
      {
        owned: defaultOwned,
        phase: operator.rarityValue >= 5 ? "PHASE_2" : operator.rarityValue >= 3 ? "PHASE_1" : "PHASE_0",
        level: operator.rarityValue <= 2 ? 30 : 1,
      },
    ])
  );
}

export function activeBaseSkills(operator, rosterEntry) {
  if (!rosterEntry?.owned) return [];
  return selectTopSkillPerSlot(operator.baseSkills.filter((skill) => conditionMet(skill.condition, rosterEntry)));
}

export function simulateBase({ catalog, roster, baseLayout, objective = "lmd", settings = {} }) {
  const layout = normalizeLayout(baseLayout);
  const ownedOperators = catalog.operators.filter((operator) => roster[operator.id]?.owned);
  const context = createSimulationContext(catalog, roster, ownedOperators, layout, objective, settings);
  const unsupported = collectUnsupportedSkills(ownedOperators, roster);
  const usedOperatorIds = new Set(context.supportOperatorIds);
  const manufacturePlan = planManufacture(catalog, ownedOperators, roster, layout, objective, context, usedOperatorIds);
  context.goldProductionLines = manufacturePlan.filter((room) => room.product === "GOLD").length;
  registerAssignedOperators(context, manufacturePlan);
  const tradingPlan = planTrading(catalog, ownedOperators, roster, layout, context, usedOperatorIds);
  const controlPlan = planControl(catalog, roster, context, [...manufacturePlan, ...tradingPlan]);
  let totals = calculateTotals(catalog, manufacturePlan, tradingPlan, objective);
  let facilities = [...manufacturePlan, ...tradingPlan, controlPlan];
  let secondShiftPlan = settings.shiftMode === "two-shift"
    ? planSecondShift(catalog, ownedOperators, roster, layout, objective, context, facilities)
    : null;
  if (secondShiftPlan) {
    const balanced = balanceTwoShiftPlan(catalog, ownedOperators, roster, layout, objective, context, facilities, totals, secondShiftPlan);
    facilities = balanced.facilities;
    totals = balanced.totals;
    secondShiftPlan = balanced.secondShiftPlan;
  }
  const shiftPlan = buildShiftPlan({ facilities, totals, objective, mode: settings.shiftMode, context, secondShiftPlan });

  return {
    objective,
    layout,
    context: {
      powerPlants: context.powerPlants,
      dormOperators: context.dormOperators,
      meetingRoomLevel: context.meetingRoomLevel,
      globalSupportCount: context.globalEffects.length,
      supportAssignments: context.supportAssignments,
      goldProductionLines: context.goldProductionLines,
      collectionIntervalHours: context.collectionIntervalHours,
      intermediateParameters: context.intermediateParameters,
      intermediateEvaluationOrder: context.intermediateEvaluationOrder,
    },
    totals,
    facilities,
    shiftPlan,
    timeline: buildTimeline(shiftPlan),
    alternatives: buildAlternatives(manufacturePlan, tradingPlan),
    unsupported,
  };
}

function buildShiftPlan({ facilities, totals, objective, mode = "single", context = null, secondShiftPlan = null }) {
  const shiftMode = mode === "two-shift" ? "two-shift" : "single";
  if (shiftMode !== "two-shift") {
    const shift = formatShift(1, 0, 24, 24, facilities, totals, objective, context);
    return {
      mode: "single",
      cycleHours: 24,
      shifts: [shift],
      dailyAverages: { ...shift.adjustedTotals },
    };
  }

  const secondFacilities = secondShiftPlan?.facilities || facilities;
  const secondTotals = secondShiftPlan?.totals || totals;
  const secondContext = secondShiftPlan?.context || context;
  const shifts = [
    formatShift(1, 0, 12, 24, facilities, totals, objective, context),
    formatShift(2, 12, 12, 24, secondFacilities, secondTotals, objective, secondContext),
  ];
  return {
    mode: "two-shift",
    cycleHours: 24,
    shifts,
    dailyAverages: averageShiftTotals(shifts.map((shift) => ({ totals: shift.adjustedTotals, durationHours: shift.durationHours }))),
  };
}

function formatShift(index, startHour, durationHours, cycleHours, facilities, totals, objective, context = null) {
  const restHours = Math.max(0, cycleHours - durationHours);
  const formattedFacilities = facilities.map((facility) => formatShiftFacility(facility, durationHours, restHours));
  applyProductionEfficiency(formattedFacilities, context);
  return {
    id: "shift-" + index,
    label: "第" + index + "班",
    startHour,
    durationHours,
    restHours,
    facilities: formattedFacilities,
    totals: { ...totals },
    adjustedTotals: calculateShiftAdjustedTotals(facilities, formattedFacilities, objective),
    intermediateParameters: context?.intermediateParameters || {},
    intermediateEvaluationOrder: context?.intermediateEvaluationOrder || [],
    moraleStatus: summarizeShiftMorale(formattedFacilities),
  };
}

function buildTimeline(shiftPlan, intervalHours = 1) {
  const cycleHours = shiftPlan.cycleHours || 24;
  const points = [];
  const cumulative = createEmptyTimelineCumulativeTotals();
  for (let hour = 0; hour < cycleHours; hour += intervalHours) {
    const shift = activeShiftAtHour(shiftPlan.shifts, hour) || shiftPlan.shifts[0];
    const moraleByOperator = buildTimelineMoraleByOperator(shiftPlan.shifts, hour, cycleHours);
    const totals = buildTimelineTotals(shift);
    addTimelineCumulativeTotals(cumulative, totals, intervalHours);
    points.push({
      hour,
      shiftId: shift?.id || null,
      shiftLabel: shift?.label || "",
      intermediateParameters: buildTimelineIntermediateParameters(shift, moraleByOperator),
      moraleByOperator,
      facilities: buildTimelineFacilities(shift),
      totals,
      cumulativeTotals: { ...cumulative },
    });
  }
  return {
    intervalHours,
    cycleHours,
    points,
  };
}

function createEmptyTimelineCumulativeTotals() {
  return {
    lmd: 0,
    goldEquivalentLmd: 0,
    expValue: 0,
    totalValue: 0,
    goldUnits: 0,
  };
}

function addTimelineCumulativeTotals(cumulative, totals, intervalHours) {
  cumulative.lmd = round(cumulative.lmd + Number(totals.lmdPerHour || 0) * intervalHours, 2);
  cumulative.goldEquivalentLmd = round(cumulative.goldEquivalentLmd + Number(totals.goldEquivalentLmdPerHour || 0) * intervalHours, 2);
  cumulative.expValue = round(cumulative.expValue + Number(totals.expValuePerHour || 0) * intervalHours, 2);
  cumulative.totalValue = round(cumulative.totalValue + Number(totals.totalValuePerHour || 0) * intervalHours, 2);
  cumulative.goldUnits = round(cumulative.goldUnits + Number(totals.goldUnitsPerHour || 0) * intervalHours, 4);
}

function activeShiftAtHour(shifts, hour) {
  return shifts.find((shift) => hour >= shift.startHour && hour < shift.startHour + shift.durationHours) || null;
}

function buildTimelineMoraleByOperator(shifts, hour, cycleHours) {
  const entries = new Map();
  for (const shift of shifts) {
    for (const facility of shift.facilities || []) {
      for (const morale of facility.selectedOperatorMorale || []) {
        const current = timelineOperatorMorale(morale, shift, hour, cycleHours);
        const previous = entries.get(morale.operatorId);
        if (!previous || current.state === "working") entries.set(morale.operatorId, current);
      }
    }
  }
  return Object.fromEntries(entries);
}

function timelineOperatorMorale(morale, shift, hour, cycleHours) {
  const shiftStart = shift.startHour;
  const shiftEnd = shift.startHour + shift.durationHours;
  let state = "resting";
  let value = 24;
  if (hour >= shiftStart && hour < shiftEnd) {
    state = "working";
    value = 24 - Number(morale.costPerHour || 0) * (hour - shiftStart);
  } else if (hour >= shiftEnd) {
    const afterShift = 24 - Number(morale.costPerHour || 0) * shift.durationHours;
    value = Math.min(24, Math.max(0, afterShift) + Number(morale.recoveryPerHour || DEFAULT_REST_RECOVERY_PER_HOUR) * (hour - shiftEnd));
  } else if (shiftStart === 0 && hour < cycleHours) {
    const afterShift = 24 - Number(morale.costPerHour || 0) * shift.durationHours;
    value = Math.min(24, Math.max(0, afterShift) + Number(morale.recoveryPerHour || DEFAULT_REST_RECOVERY_PER_HOUR) * (cycleHours - shiftEnd + hour));
  }
  return {
    operatorId: morale.operatorId,
    operatorName: morale.operatorName,
    morale: round(Math.max(0, Math.min(24, value)), 2),
    state,
  };
}

function buildTimelineIntermediateParameters(shift, moraleByOperator) {
  const params = createEmptyIntermediateParameters();
  for (const entry of shift?.intermediateEvaluationOrder || []) {
    const value = timelineIntermediateEntryValue(entry, moraleByOperator);
    if (value) params[entry.key] += value;
  }
  return finalizeIntermediateParameters(params);
}

function timelineIntermediateEntryValue(entry, moraleByOperator) {
  const instantValue = Number(entry.instantValue ?? entry.value ?? 0);
  if (!entry.source?.startsWith("morale-")) return instantValue;
  const morale = moraleByOperator[entry.operatorId]?.morale ?? 24;
  if (entry.source === "morale-above-12") return morale > 12 ? instantValue : 0;
  if (entry.source === "morale-at-or-below-12") return morale <= 12 ? instantValue : 0;
  if (entry.source === "morale-below-12") return morale < 12 ? instantValue : 0;
  return 0;
}

function buildTimelineFacilities(shift) {
  return (shift?.facilities || []).map((facility) => ({
    facilityId: facility.facilityId,
    facilityLabel: facility.facilityLabel,
    facilityType: facility.facilityType,
    product: facility.product,
    productLabel: facility.productLabel,
    speed: facility.speed,
    capacity: facility.capacity,
    productionEfficiency: facility.productionEfficiency,
    effectiveSpeed: round(Number(facility.speed || 0) * Number(facility.productionEfficiency ?? 1), 2),
    selectedOperatorIds: facility.selectedOperatorIds || [],
    selectedOperatorNames: facility.selectedOperatorNames || [],
  }));
}

function buildTimelineTotals(shift) {
  const totals = shift?.adjustedTotals || {};
  return {
    lmdPerHour: round(Number(totals.tradingLmdPerDay || 0) / 24, 2),
    goldEquivalentLmdPerHour: round(Number(totals.goldEquivalentLmdPerDay || 0) / 24, 2),
    expValuePerHour: round(Number(totals.expValuePerDay || 0) / 24, 2),
    totalValuePerHour: round(Number(totals.totalValuePerDay || 0) / 24, 2),
    goldUnitsPerHour: round(Number(totals.goldUnitsPerDay || 0) / 24, 4),
  };
}

function averageShiftTotals(shifts) {
  const cycleHours = shifts.reduce((sum, shift) => sum + shift.durationHours, 0);
  const keys = new Set(shifts.flatMap((shift) => Object.keys(shift.totals || {})));
  return Object.fromEntries(
    [...keys].map((key) => [
      key,
      round(shifts.reduce((sum, shift) => sum + Number(shift.totals?.[key] || 0) * shift.durationHours, 0) / cycleHours, 2),
    ])
  );
}

function formatShiftFacility(facility, durationHours = 24, restHours = 0) {
  const selectedOperatorMorale = (facility.selected || []).map((candidate) => formatShiftOperatorMorale(candidate, durationHours, restHours));
  const selectedOperators = (facility.selected || []).map((candidate, index) => formatShiftOperator(candidate, selectedOperatorMorale[index]));
  return {
    facilityId: facility.id,
    facilityLabel: facility.label,
    facilityType: facility.type,
    product: facility.product,
    productLabel: facility.productLabel,
    speed: facility.speed,
    capacity: facility.capacity,
    selectedOperatorIds: (facility.selected || []).map((candidate) => candidate.operator.id),
    selectedOperatorNames: (facility.selected || []).map((candidate) => candidate.operator.name),
    selectedOperators,
    selectedOperatorMorale,
    moraleEfficiency: calculateMoraleEfficiency(selectedOperatorMorale),
    productionEfficiency: 1,
  };
}

function formatShiftOperator(candidate, morale) {
  const skills = (candidate.matched || []).map((skill) => ({
    buffId: skill.buffId,
    buffName: skill.buffName,
    value: skill.value,
    condition: skill.condition || {},
    roomType: skill.roomType,
    description: skill.description || "",
    approximate: Boolean(skill.approximate),
    detail: skill.detail || "",
  }));
  return {
    operatorId: candidate.operator.id,
    operatorName: candidate.operator.name,
    score: candidate.score,
    approximate: Boolean(candidate.approximate),
    unlockCondition: maxCondition(skills.map((skill) => skill.condition)),
    morale,
    impacts: candidate.impacts || [],
    skills,
  };
}

function formatShiftOperatorMorale(candidate, durationHours, restHours) {
  const changePerHour = candidate.morale?.changePerHour ?? -1;
  const costPerHour = candidate.morale?.costPerHour ?? Math.max(0, -changePerHour);
  const projectedCost = round(costPerHour * durationHours, 2);
  const recoveryPerHour = DEFAULT_REST_RECOVERY_PER_HOUR;
  const projectedRecovery = round(recoveryPerHour * restHours, 2);
  const maxMorale = 24;
  const timeline = calculateMoraleTimeline(costPerHour, durationHours);
  const moraleAfterShift = round(maxMorale - projectedCost, 2);
  const moraleAfterRest = round(Math.min(maxMorale, Math.max(0, moraleAfterShift) + projectedRecovery), 2);
  return {
    operatorId: candidate.operator.id,
    operatorName: candidate.operator.name,
    changePerHour,
    costPerHour,
    projectedCost,
    restHours,
    recoveryPerHour,
    projectedRecovery,
    maxMorale,
    moraleAfterShift,
    moraleAfterRest,
    moraleTimeline: timeline,
    canCompleteShift: projectedCost <= maxMorale,
    canRecoverForCycle: projectedRecovery >= projectedCost,
    effects: candidate.morale?.effects || [],
  };
}

function calculateMoraleTimeline(costPerHour, durationHours, startMorale = 24, threshold = 12) {
  const cost = Number(costPerHour || 0);
  const duration = Number(durationHours || 0);
  const rawEndMorale = startMorale - cost * duration;
  const endMorale = round(Math.max(0, rawEndMorale), 2);
  let hoursAbove12 = duration;
  if (cost > 0) hoursAbove12 = Math.min(duration, Math.max(0, (startMorale - threshold) / cost));
  if (startMorale <= threshold) hoursAbove12 = 0;
  const hoursAtOrBelow12 = Math.max(0, duration - hoursAbove12);
  const hoursBelow12 = cost > 0 ? Math.max(0, duration - Math.max(0, (startMorale - threshold) / cost)) : 0;
  return {
    startMorale,
    endMorale,
    threshold,
    hoursAbove12: round(hoursAbove12, 2),
    hoursAtOrBelow12: round(hoursAtOrBelow12, 2),
    hoursBelow12: round(hoursBelow12, 2),
    hoursAbove12Ratio: duration ? round(hoursAbove12 / duration, 4) : 0,
    hoursAtOrBelow12Ratio: duration ? round(hoursAtOrBelow12 / duration, 4) : 0,
    hoursBelow12Ratio: duration ? round(hoursBelow12 / duration, 4) : 0,
  };
}

function summarizeShiftMorale(facilities) {
  const entries = facilities.flatMap((facility) => facility.selectedOperatorMorale || []);
  const overLimit = entries.filter((entry) => !entry.canCompleteShift);
  const recoveryLimit = entries.filter((entry) => entry.canCompleteShift && !entry.canRecoverForCycle);
  const productionEfficiencies = facilities
    .filter((facility) => ["MANUFACTURE", "TRADING"].includes(facility.facilityType))
    .map((facility) => facility.productionEfficiency ?? 1);
  const dailyEfficiency = productionEfficiencies.length ? Math.min(...productionEfficiencies) : 1;
  return {
    canCompleteShift: overLimit.length === 0,
    overLimitOperatorIds: overLimit.map((entry) => entry.operatorId),
    overLimitOperatorNames: overLimit.map((entry) => entry.operatorName),
    canRecoverForCycle: recoveryLimit.length === 0 && overLimit.length === 0,
    recoveryLimitOperatorIds: recoveryLimit.map((entry) => entry.operatorId),
    recoveryLimitOperatorNames: recoveryLimit.map((entry) => entry.operatorName),
    dailyEfficiency: round(dailyEfficiency, 4),
  };
}

function maxCondition(conditions) {
  return conditions.reduce((max, condition) => {
    if (conditionRank(condition) > conditionRank(max)) return condition || {};
    return max;
  }, {});
}

function conditionRank(condition = {}) {
  const phaseRank = PHASE_RANK[condition.phase] ?? 0;
  return phaseRank * 10000 + Number(condition.level || 1);
}

function calculateMoraleEfficiency(entries) {
  if (!entries.length) return 1;
  return round(Math.min(...entries.map((entry) => {
    if (entry.projectedCost <= 0) return 1;
    return Math.min(1, entry.maxMorale / entry.projectedCost);
  })), 4);
}

function applyProductionEfficiency(facilities, context = null) {
  const controlEfficiency = facilities
    .filter((facility) => facility.facilityType === "CONTROL")
    .reduce((minimum, facility) => Math.min(minimum, facility.moraleEfficiency ?? 1), 1);
  const collectionIntervalHours = context?.collectionIntervalHours || 24;
  for (const facility of facilities) {
    if (["MANUFACTURE", "TRADING"].includes(facility.facilityType)) {
      const fullnessEfficiency = calculateFullnessEfficiency(facility.capacity, collectionIntervalHours);
      if (facility.capacity) facility.capacity = { ...facility.capacity, collectionIntervalHours, fullnessEfficiency };
      facility.productionEfficiency = round(Math.min(facility.moraleEfficiency ?? 1, controlEfficiency, fullnessEfficiency), 4);
    } else {
      facility.productionEfficiency = facility.moraleEfficiency ?? 1;
    }
  }
}

function calculateFullnessEfficiency(capacity, collectionIntervalHours) {
  if (!capacity?.fillHours) return 1;
  return round(Math.min(1, Number(capacity.fillHours) / Math.max(1, Number(collectionIntervalHours || 24))), 4);
}

function calculateShiftAdjustedTotals(facilities, formattedFacilities, objective) {
  const efficiencyById = new Map(formattedFacilities.map((facility) => [facility.facilityId, facility.productionEfficiency ?? 1]));
  const tradingLmd = facilities
    .filter((facility) => facility.type === "TRADING")
    .reduce((sum, facility) => sum + Number(facility.lmdPerDay || 0) * (efficiencyById.get(facility.id) ?? 1), 0);
  const goldEquivalentLmd = facilities
    .filter((facility) => facility.type === "MANUFACTURE" && facility.product === "GOLD")
    .reduce((sum, facility) => sum + Number(facility.valuePerDay || 0) * (efficiencyById.get(facility.id) ?? 1), 0);
  const expValue = facilities
    .filter((facility) => facility.type === "MANUFACTURE" && facility.product === "EXP")
    .reduce((sum, facility) => sum + Number(facility.valuePerDay || 0) * (efficiencyById.get(facility.id) ?? 1), 0);
  const goldUnits = facilities
    .filter((facility) => facility.type === "MANUFACTURE" && facility.product === "GOLD")
    .reduce((sum, facility) => sum + Number(facility.unitsPerDay || 0) * (efficiencyById.get(facility.id) ?? 1), 0);
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

function planSecondShift(catalog, ownedOperators, roster, layout, objective, baseContext, firstShiftFacilities) {
  const excludedOperatorIds = collectFacilityOperatorIds(firstShiftFacilities);
  const secondAssignments = optimizeControlAssignments(
    { ...baseContext.supportAssignments, CONTROL: [] },
    catalog,
    roster,
    ownedOperators,
    layout,
    objective,
    excludedOperatorIds,
    baseContext.shiftDurationHours
  );
  const context = cloneContextForSupportAssignments(baseContext, ownedOperators, roster, secondAssignments);
  const usedOperatorIds = new Set([...context.supportOperatorIds, ...excludedOperatorIds]);
  const manufacturePlan = planManufacture(catalog, ownedOperators, roster, layout, objective, context, usedOperatorIds);
  context.goldProductionLines = manufacturePlan.filter((room) => room.product === "GOLD").length;
  registerAssignedOperators(context, manufacturePlan);
  const tradingPlan = planTrading(catalog, ownedOperators, roster, layout, context, usedOperatorIds);
  const controlPlan = planControl(catalog, roster, context, [...manufacturePlan, ...tradingPlan]);
  return {
    facilities: [...manufacturePlan, ...tradingPlan, controlPlan],
    totals: calculateTotals(catalog, manufacturePlan, tradingPlan, objective),
    context,
  };
}

function balanceTwoShiftPlan(catalog, ownedOperators, roster, layout, objective, firstContext, firstFacilities, firstTotals, secondShiftPlan) {
  const secondContext = secondShiftPlan.context;
  if (!secondContext) return { facilities: firstFacilities, totals: firstTotals, secondShiftPlan };
  const first = firstFacilities.map((facility) => cloneFacility(facility));
  const second = secondShiftPlan.facilities.map((facility) => cloneFacility(facility));
  const secondById = new Map(second.map((facility) => [facility.id, facility]));

  for (const firstFacility of first) {
    if (!["MANUFACTURE", "TRADING"].includes(firstFacility.type)) continue;
    const secondFacility = secondById.get(firstFacility.id);
    if (!secondFacility || secondFacility.type !== firstFacility.type || secondFacility.product !== firstFacility.product) continue;
    const balanced = balanceWorkFacilityPair(catalog, ownedOperators, roster, firstContext, secondContext, first, second, firstFacility, secondFacility);
    if (!balanced) continue;
    Object.assign(firstFacility, balanced.firstFacility);
    Object.assign(secondFacility, balanced.secondFacility);
  }

  const firstManufacture = first.filter((facility) => facility.type === "MANUFACTURE");
  const firstTrading = first.filter((facility) => facility.type === "TRADING");
  const secondManufacture = second.filter((facility) => facility.type === "MANUFACTURE");
  const secondTrading = second.filter((facility) => facility.type === "TRADING");
  return {
    facilities: first,
    totals: calculateTotals(catalog, firstManufacture, firstTrading, objective),
    secondShiftPlan: {
      ...secondShiftPlan,
      facilities: second,
      totals: calculateTotals(catalog, secondManufacture, secondTrading, objective),
    },
  };
}

function balanceWorkFacilityPair(catalog, ownedOperators, roster, firstContext, secondContext, firstFacilities, secondFacilities, firstFacility, secondFacility) {
  const lockedIds = collectPairLockedOperatorIds(firstFacilities, secondFacilities, firstFacility.id);
  const firstCandidates = buildRoomCandidates(ownedOperators, roster, lockedIds, firstFacility.type, firstFacility.product, firstContext);
  const secondCandidates = buildRoomCandidates(ownedOperators, roster, lockedIds, secondFacility.type, secondFacility.product, secondContext);
  const firstSelections = generateRoomSelections(firstCandidates, firstFacility.product, firstContext);
  const secondSelections = generateRoomSelections(secondCandidates, secondFacility.product, secondContext);
  let best = null;
  for (const firstSelection of firstSelections) {
    for (const secondSelection of secondSelections) {
      if (!areSelectionsDisjoint(firstSelection, secondSelection)) continue;
      const metric = pairedSelectionMetric(firstSelection, secondSelection, firstFacility.product, firstContext);
      if (!best || comparePairedSelectionMetric(metric, best.metric) > 0) best = { firstSelection, secondSelection, metric };
    }
  }
  if (!best) return null;
  const currentMetric = pairedSelectionMetric(firstFacility.selected || [], secondFacility.selected || [], firstFacility.product, firstContext);
  if (comparePairedSelectionMetric(best.metric, currentMetric) <= 0) return null;
  return {
    firstFacility: rebuildWorkFacility(catalog, firstFacility, best.firstSelection),
    secondFacility: rebuildWorkFacility(catalog, secondFacility, best.secondSelection),
  };
}

function cloneFacility(facility) {
  return { ...facility, selected: [...(facility.selected || [])], candidates: [...(facility.candidates || [])] };
}

function collectPairLockedOperatorIds(firstFacilities, secondFacilities, currentFacilityId) {
  return new Set([...firstFacilities, ...secondFacilities]
    .filter((facility) => facility.id !== currentFacilityId)
    .flatMap((facility) => (facility.selected || []).map((candidate) => candidate.operator.id)));
}

function generateRoomSelections(candidates, product, context) {
  const pool = candidates.slice(0, 12);
  const selections = [];
  for (const combo of combinations(pool, ROOM_CAPACITY)) {
    if (combo.length === 0) continue;
    if (combo.length > 1 && combo.some((candidate) => candidate.suppressesOtherOperators)) continue;
    const finalized = finalizeRoomCandidates(combo, product, context).sort(compareCandidates);
    if (totalCandidateScore(finalized) <= 0) continue;
    selections.push(finalized);
  }
  return selections.sort((a, b) => compareRoomSelections(b, a, product, context)).slice(0, 40);
}

function combinations(items, maxSize) {
  const result = [];
  function visit(start, combo) {
    result.push(combo);
    if (combo.length >= maxSize) return;
    for (let index = start; index < items.length; index += 1) visit(index + 1, [...combo, items[index]]);
  }
  visit(0, []);
  return result;
}

function areSelectionsDisjoint(firstSelection, secondSelection) {
  const firstIds = new Set(firstSelection.map((candidate) => candidate.operator.id));
  return secondSelection.every((candidate) => !firstIds.has(candidate.operator.id));
}

function pairedSelectionMetric(firstSelection, secondSelection, product, context) {
  const first = roomSelectionMetric(firstSelection, product, context);
  const second = roomSelectionMetric(secondSelection, product, context);
  return {
    feasibleCount: Number(first.canCompleteShift) + Number(second.canCompleteShift),
    minAdjustedScore: Math.min(first.adjustedScore, second.adjustedScore),
    adjustedScore: first.adjustedScore + second.adjustedScore,
    rawScore: first.rawScore + second.rawScore,
  };
}

function comparePairedSelectionMetric(left, right) {
  return left.feasibleCount - right.feasibleCount
    || left.minAdjustedScore - right.minAdjustedScore
    || left.adjustedScore - right.adjustedScore
    || left.rawScore - right.rawScore;
}

function rebuildWorkFacility(catalog, facility, selected) {
  const speed = selected.reduce((sum, candidate) => sum + candidate.score, 0);
  if (facility.type === "MANUFACTURE") {
    const productConfig = catalog.products[facility.product];
    const unitsPerDay = productConfig.baseUnitsPerDay * (1 + speed / 100);
    const rebuilt = { ...facility, speed, unitsPerDay, valuePerDay: unitsPerDay * productConfig.value, selected };
    return { ...rebuilt, capacity: calculateFacilityCapacity(catalog, rebuilt, facility.context) };
  }
  if (facility.type === "TRADING") {
    const rebuilt = { ...facility, speed, lmdPerDay: catalog.trade.baseLmdPerDay * (1 + speed / 100), selected };
    return { ...rebuilt, capacity: calculateFacilityCapacity(catalog, rebuilt, facility.context) };
  }
  return { ...facility, selected };
}

function calculateFacilityCapacity(catalog, facility, context = null) {
  if (facility.type === "MANUFACTURE") return calculateManufactureCapacity(catalog, facility, context);
  if (facility.type === "TRADING") return calculateTradingCapacity(catalog, facility, context);
  return null;
}

function calculateManufactureCapacity(catalog, facility, context = null) {
  const level = clampInteger(facility.level || DEFAULT_FACILITY_LEVEL, 1, 3);
  const base = MANUFACTURE_CAPACITY_BY_LEVEL[level - 1];
  const bonuses = collectCapacityBonuses(facility, "storage", context);
  const bonus = bonuses.reduce((sum, entry) => sum + entry.value, 0);
  const effective = Math.max(1, base + bonus);
  const weight = Number(catalog.products?.[facility.product]?.weight || DEFAULT_PRODUCT_WEIGHT[facility.product] || 1);
  const effectiveUnits = Math.floor(effective / weight);
  const unitsPerHour = Number(facility.unitsPerDay || 0) / 24;
  return {
    type: "storage",
    label: "保管上限",
    level,
    base,
    bonus,
    effective,
    unitWeight: weight,
    effectiveUnits,
    fillHours: unitsPerHour > 0 ? round(effectiveUnits / unitsPerHour, 1) : null,
    bonuses,
  };
}

function calculateTradingCapacity(catalog, facility, context = null) {
  const level = clampInteger(facility.level || DEFAULT_FACILITY_LEVEL, 1, 3);
  const base = TRADING_ORDER_LIMIT_BY_LEVEL[level - 1];
  const bonuses = collectCapacityBonuses(facility, "order", context);
  const bonus = bonuses.reduce((sum, entry) => sum + entry.value, 0);
  const effective = Math.max(1, base + bonus);
  const lmdPerOrder = Number(catalog.trade?.lmdPerOrder || DEFAULT_ORDER_VALUE_LMD);
  const ordersPerHour = lmdPerOrder > 0 ? Number(facility.lmdPerDay || 0) / lmdPerOrder / 24 : 0;
  const currentOrders = estimateCurrentOrdersFromRate(ordersPerHour, effective, facility.collectionIntervalHours || 24);
  return {
    type: "order",
    label: "注文上限",
    level,
    base,
    bonus,
    effective,
    lmdPerOrder,
    effectiveUnits: effective,
    currentOrders,
    orderLimitGap: Math.max(0, effective - currentOrders),
    fillHours: ordersPerHour > 0 ? round(effective / ordersPerHour, 1) : null,
    bonuses,
  };
}

function collectCapacityBonuses(facility, type, context = null) {
  const fixed = (facility.selected || []).flatMap((candidate) => collectCandidateCapacityBonuses(candidate, facility, type));
  const global = collectGlobalCapacityBonuses(facility.selected || [], type, context);
  const room = collectRoomVariableCapacityBonuses(facility.selected || [], facility, type, context);
  return type === "order" ? [...fixed, ...global, ...room, ...collectVariableOrderLimitBonuses(facility.selected || [])] : [...fixed, ...global, ...room];
}

function collectRoomCapacityBonus(candidates, roomType, product, type, context = null) {
  if ((type === "storage" && roomType !== "MANUFACTURE") || (type === "order" && roomType !== "TRADING")) return 0;
  const facility = { type: roomType, product, level: DEFAULT_FACILITY_LEVEL };
  return candidates
    .flatMap((candidate) => collectCandidateCapacityBonuses(candidate, facility, type))
    .concat(collectGlobalCapacityBonuses(candidates, type, context))
    .concat(collectRoomVariableCapacityBonuses(candidates, facility, type, context))
    .concat(type === "order" ? collectVariableOrderLimitBonuses(candidates) : [])
    .reduce((sum, entry) => sum + entry.value, 0);
}

function collectRoomVariableCapacityBonuses(candidates, facility, type, context = null) {
  if (type !== "storage" || facility.type !== "MANUFACTURE") return [];
  return candidates.flatMap((candidate) => {
    const bonuses = [];
    for (const skill of candidate.activeSkills || []) {
      if (skill.roomType !== facility.type || !capacitySkillAppliesToProduct(skill, facility.product)) continue;
      const text = skill.description || "";
      const perOperatorMatch = text.match(/製造所に配置中のオペレーター1名につき、配置製造所の(?:製造効率\+\d+%、)?保管上限\+(\d+)/);
      if (perOperatorMatch) {
        const count = candidates.length;
        bonuses.push(formatCapacityBonus(skill, Number(perOperatorMatch[1]) * count, candidate.operator, "配置人数 x" + count));
      }
      const skillFamilyMatch = text.match(/ラインテク系スキルの発動数1につき、保管上限\+(\d+)/);
      if (skillFamilyMatch && context) {
        const count = countSelectedSkillFamily(candidates, "$cc.sk.manu2", context.catalog);
        if (count > 0) bonuses.push(formatCapacityBonus(skill, Number(skillFamilyMatch[1]) * count, candidate.operator, "ラインテク系 x" + count));
      }
    }
    return bonuses;
  });
}

function collectGlobalCapacityBonuses(candidates, type, context) {
  if (type !== "order" || !context) return [];
  const bonuses = [];
  for (const globalEffect of context.globalEffects || []) {
    const { effect } = globalEffect;
    if (effect.type === "orderLimitForNamedOperatorInTradingRoom") {
      for (const candidate of candidates) {
        if ((effect.operatorNames || []).includes(candidate.operator.name)) bonuses.push(formatGlobalCapacityBonus(globalEffect, effect.value, candidate.operator.name));
      }
    }
    if (effect.type === "orderLimitForTaggedOperatorInTradingRoom") {
      for (const candidate of candidates) {
        if (operatorMatchesTag(candidate.operator, effect.tag, context.catalog)) bonuses.push(formatGlobalCapacityBonus(globalEffect, effect.value, candidate.operator.name));
      }
    }
  }
  return bonuses;
}

function formatGlobalCapacityBonus(globalEffect, value, targetName) {
  return {
    operatorId: globalEffect.supportOperator?.id || null,
    operatorName: globalEffect.supportOperator?.name || "",
    buffId: globalEffect.skill.buffId,
    buffName: globalEffect.skill.buffName,
    value,
    detail: targetName,
  };
}

function collectVariableOrderLimitBonuses(candidates) {
  return candidates.flatMap((candidate) => {
    const skill = (candidate.activeSkills || []).find((activeSkill) => (activeSkill.description || "").includes("自身以外の配属オペレーターの受注効率が10%につき、注文上限-1"));
    if (!skill) return [];
    const otherSpeed = candidates
      .filter((other) => other.operator.id !== candidate.operator.id)
      .reduce((sum, other) => sum + Math.max(0, Number(other.staticScore ?? other.score ?? 0)), 0);
    const value = -Math.floor(otherSpeed / 10);
    return value ? [formatCapacityBonus(skill, value, candidate.operator, "他者効率 " + round(otherSpeed, 1) + "%")] : [];
  });
}

function estimateCurrentOrders(candidates, orderLimit, context) {
  const speed = candidates.reduce((sum, candidate) => sum + Math.max(0, Number(candidate.staticScore ?? candidate.score ?? 0)), 0);
  const lmdPerOrder = Number(context.catalog?.trade?.lmdPerOrder || DEFAULT_ORDER_VALUE_LMD);
  const lmdPerDay = Number(context.catalog?.trade?.baseLmdPerDay || 0) * (1 + speed / 100);
  const ordersPerHour = lmdPerOrder > 0 ? lmdPerDay / lmdPerOrder / 24 : 0;
  return estimateCurrentOrdersFromRate(ordersPerHour, orderLimit, context.collectionIntervalHours || 24);
}

function estimateCurrentOrdersFromRate(ordersPerHour, orderLimit, collectionIntervalHours) {
  return Math.max(0, Math.min(orderLimit, Math.floor(Number(ordersPerHour || 0) * Math.max(1, Number(collectionIntervalHours || 24)))));
}

function collectRoomCapacityBonusesByOperator(candidates, roomType, product, type) {
  if ((type === "storage" && roomType !== "MANUFACTURE") || (type === "order" && roomType !== "TRADING")) return new Map();
  const facility = { type: roomType, product, level: DEFAULT_FACILITY_LEVEL };
  const bonuses = new Map();
  for (const candidate of candidates) {
    const value = collectCandidateCapacityBonuses(candidate, facility, type).reduce((sum, entry) => sum + entry.value, 0);
    bonuses.set(candidate.operator.id, value);
  }
  return bonuses;
}

function collectCandidateCapacityBonuses(candidate, facility, type) {
  return (candidate.activeSkills || [])
    .filter((skill) => skill.roomType === facility.type)
    .filter((skill) => capacitySkillAppliesToProduct(skill, facility.product))
    .flatMap((skill) => parseFixedCapacityBonuses(skill, type, facility.level || DEFAULT_FACILITY_LEVEL, candidate.operator));
}

function capacitySkillAppliesToProduct(skill, product) {
  const text = skill.description || "";
  if (skill.roomType !== "MANUFACTURE") return true;
  if (/源石|原料/.test(text)) return false;
  if (/作戦記録/.test(text)) return product === "EXP";
  if (/純金|金属/.test(text)) return product === "GOLD";
  return true;
}

function parseFixedCapacityBonuses(skill, type, level, operator) {
  const text = skill.description || "";
  if (/(増加量|差が|オーダー数|発動数1につき|1名につき|上昇につき|ウルサスドリンク|体力減少分)/.test(text)) return [];
  const keyword = type === "storage" ? "保管上限" : "注文上限";
  const results = [];
  const levelPattern = new RegExp("レベル1ごとに" + keyword + "([+]\\d+)");
  const levelMatch = text.match(levelPattern);
  if (levelMatch) return [formatCapacityBonus(skill, Number(levelMatch[1]) * clampInteger(level, 1, 3), operator, "Lv" + level)];
  const fixedPattern = new RegExp(keyword + "([+-]\\d+)", "g");
  for (const match of text.matchAll(fixedPattern)) {
    results.push(formatCapacityBonus(skill, Number(match[1]), operator));
  }
  return results;
}

function formatCapacityBonus(skill, value, operator, detail = "") {
  return {
    operatorId: operator?.id || null,
    operatorName: operator?.name || "",
    buffId: skill.buffId,
    buffName: skill.buffName,
    value,
    detail,
  };
}

function hasSelectedSkill(candidates, pattern) {
  return candidates.some((candidate) => (candidate.activeSkills || []).some((skill) => pattern.test(skill.buffName || "") || pattern.test(skill.description || "")));
}

function cloneContextForSupportAssignments(context, ownedOperators, roster, supportAssignments) {
  const supportOperatorIds = new Set(Object.values(supportAssignments).flat());
  const supportOperatorNames = new Set(
    [...supportOperatorIds].map((operatorId) => context.operatorById.get(operatorId)?.name).filter(Boolean)
  );
  const cloned = {
    ...context,
    supportAssignments,
    supportOperatorIds,
    supportOperatorNames,
    globalEffects: collectGlobalEffects(ownedOperators, roster, new Set(supportAssignments.CONTROL || [])),
    assignedOperatorNames: new Set(supportOperatorNames),
    goldProductionLines: 0,
  };
  setIntermediateParameters(cloned, ownedOperators, roster);
  return cloned;
}

function collectFacilityOperatorIds(facilities) {
  return new Set(
    facilities.flatMap((facility) => (facility.selected || []).map((candidate) => candidate.operator.id))
  );
}

function setIntermediateParameters(context, ownedOperators, roster) {
  const evaluation = evaluateIntermediateParameters(context, ownedOperators, roster);
  context.intermediateParameters = evaluation.parameters;
  context.intermediateEvaluationOrder = evaluation.order;
}

function evaluateIntermediateParameters(context, ownedOperators, roster) {
  const params = createEmptyIntermediateParameters();
  const order = [];
  const controlIds = new Set(context.supportAssignments.CONTROL || []);
  const controlOperators = [...controlIds].map((operatorId) => context.operatorById.get(operatorId)).filter(Boolean);

  collectFixedControlIntermediateParameters(params, order, context, controlOperators, roster);
  collectWorkDormIntermediateParameters(params, order, context, ownedOperators, roster);
  context.intermediateParameters = finalizeIntermediateParameters(params);
  collectMoraleControlIntermediateParameters(params, order, context, controlOperators, roster);
  return {
    parameters: finalizeIntermediateParameters(params),
    order,
  };
}

function createEmptyIntermediateParameters() {
  return {
    worldlyWorry: 0,
    perceptualInfo: 0,
    passion: 0,
    catnip: 0,
  };
}

function collectFixedControlIntermediateParameters(params, order, context, controlOperators, roster) {
  for (const operator of controlOperators) {
    const activeSkills = activeBaseSkills(operator, roster[operator.id]).filter((skill) => skill.roomType === "CONTROL");
    for (const skill of activeSkills) {
      const text = skill.description || "";
      if (text.includes("俗世之憂+5") && text.includes("歳所属")) {
        const suiCount = countPlacedOrOwnedTaggedOperators(context, context.ownedOperators || [], "$cc.g.sui", 5);
        addIntermediateValue(params, order, "worldlyWorry", suiCount * 5, skill, "placed-sui", operator);
      }
      if (text.includes("宿舎にいるオペレーター1人につきパッション+1")) addIntermediateValue(params, order, "passion", context.dormOperators, skill, "dorm", operator);
      if (text.includes("パッション+20")) addIntermediateValue(params, order, "passion", 20, skill, "fixed", operator);
      if (text.includes("パッション+10")) addIntermediateValue(params, order, "passion", 10, skill, "fixed", operator);
      if (text.includes("マタタビ+8")) addIntermediateValue(params, order, "catnip", 8, skill, "fixed", operator);
      if (text.includes("制御中枢内のアイルーと愉快な仲間たち所属オペレーター1人につき") && text.includes("マタタビ+2")) {
        const mhCount = controlOperators.filter((controlOperator) => operatorMatchesTag(controlOperator, "$cc.tag.mh", context.catalog)).length;
        addIntermediateValue(params, order, "catnip", mhCount * 2, skill, "control-tag", operator);
      }
    }
  }
}

function collectMoraleControlIntermediateParameters(params, order, context, controlOperators, roster) {
  const selectedControlCandidates = controlOperators.map((selectedOperator) => ({
    operator: selectedOperator,
    activeSkills: activeBaseSkills(selectedOperator, roster[selectedOperator.id]),
  }));

  for (const operator of controlOperators) {
    const activeSkills = activeBaseSkills(operator, roster[operator.id]).filter((skill) => skill.roomType === "CONTROL");
    const morale = calculateMorale({ operator, activeSkills }, selectedControlCandidates, "CONTROL", context);
    const timeline = calculateMoraleTimeline(morale.costPerHour, context.shiftDurationHours || 24);
    for (const skill of activeSkills) {
      const text = skill.description || "";
      if (text.includes("俗世之憂+15") && /体力が12を?以下/.test(text)) addIntermediateValue(params, order, "worldlyWorry", 15 * timeline.hoursAtOrBelow12Ratio, skill, "morale-at-or-below-12", operator, 15);
      if (text.includes("俗世之憂+15") && /体力が12を?上回る/.test(text)) addIntermediateValue(params, order, "worldlyWorry", 15 * timeline.hoursAbove12Ratio, skill, "morale-above-12", operator, 15);
      if (text.includes("知覚情報+10") && /体力が12を?上回る時、知覚情報/.test(text)) addIntermediateValue(params, order, "perceptualInfo", 10 * timeline.hoursAbove12Ratio, skill, "morale-above-12", operator, 10);
      if (text.includes("知覚情報+10") && /体力が12を?下回る/.test(text)) addIntermediateValue(params, order, "perceptualInfo", 10 * timeline.hoursBelow12Ratio, skill, "morale-below-12", operator, 10);
    }
  }
}

function collectWorkDormIntermediateParameters(params, order, context, ownedOperators, roster) {
  for (const operator of ownedOperators) {
    for (const skill of activeBaseSkills(operator, roster[operator.id])) {
      const text = skill.description || "";
      if ((skill.roomType === "MANUFACTURE" || skill.roomType === "TRADING") && text.includes("宿舎中のオペレーター1人につき、知覚情報+1")) {
        addIntermediateValue(params, order, "perceptualInfo", context.dormOperators, skill, "dorm", operator);
      }
    }
  }
}

function addIntermediateValue(params, order, key, value, skill, source, operator = null, instantValue = value) {
  const roundedValue = round(value, 4);
  if (!roundedValue) return;
  params[key] += roundedValue;
  order.push({
    key,
    value: roundedValue,
    instantValue: round(instantValue, 4),
    source,
    operatorId: operator?.id || null,
    operatorName: operator?.name || "",
    buffId: skill.buffId,
    buffName: skill.buffName,
    roomType: skill.roomType,
  });
}

function finalizeIntermediateParameters(params) {
  return {
    worldlyWorry: round(params.worldlyWorry, 2),
    perceptualInfo: round(params.perceptualInfo, 2),
    thoughtChain: round(params.perceptualInfo, 2),
    silentResonance: round(params.perceptualInfo, 2),
    passion: round(params.passion, 2),
    catnip: round(params.catnip, 2),
  };
}

function countPlacedOrOwnedTaggedOperators(context, ownedOperators, tag, maxCount = Infinity) {
  const placedNames = new Set(context.assignedOperatorNames || []);
  let count = 0;
  for (const operator of ownedOperators) {
    if (!operatorMatchesTag(operator, tag, context.catalog)) continue;
    if (placedNames.size && !placedNames.has(operator.name)) continue;
    count += 1;
    if (count >= maxCount) return maxCount;
  }
  return count;
}

function createSimulationContext(catalog, roster, ownedOperators, layout, objective, settings) {
  const operatorByName = new Map(catalog.operators.map((operator) => [operator.name, operator]));
  const operatorById = new Map(catalog.operators.map((operator) => [operator.id, operator]));
  const ownedOperatorNames = new Set(ownedOperators.map((operator) => operator.name));
  const ownedOperatorIds = new Set(ownedOperators.map((operator) => operator.id));
  const shiftDurationHours = settings.shiftMode === "two-shift" ? 12 : 24;
  const supportAssignments = optimizeControlAssignments(
    normalizeSupportAssignments(settings.supportAssignments, layout, operatorById, ownedOperatorIds),
    catalog,
    roster,
    ownedOperators,
    layout,
    objective,
    new Set(),
    shiftDurationHours
  );
  const supportOperatorIds = new Set(Object.values(supportAssignments).flat());
  const supportOperatorNames = new Set(
    [...supportOperatorIds].map((operatorId) => operatorById.get(operatorId)?.name).filter(Boolean)
  );
  const context = {
    catalog,
    roster,
    powerPlants: layout.power,
    dormOperators: clampInteger(settings.dormOperators, 0, 20),
    meetingRoomLevel: clampInteger(settings.meetingRoomLevel ?? 3, 0, 3),
    collectionIntervalHours: clampInteger(settings.collectionIntervalHours ?? 24, 1, 72),
    shiftDurationHours,
    operatorByName,
    operatorById,
    ownedOperatorNames,
    ownedOperators,
    supportAssignments,
    supportOperatorIds,
    supportOperatorNames,
    globalEffects: [],
    intermediateParameters: {},
    assignedOperatorNames: new Set(supportOperatorNames),
    goldProductionLines: 0,
  };
  context.globalEffects = collectGlobalEffects(ownedOperators, roster, new Set(supportAssignments.CONTROL || []));
  setIntermediateParameters(context, ownedOperators, roster);
  return context;
}

function normalizeSupportAssignments(assignments = {}, layout, operatorById, ownedOperatorIds) {
  const capacities = { ...SUPPORT_ROOM_CAPACITY, POWER: layout.power };
  return Object.fromEntries(
    Object.entries(capacities).map(([roomType, capacity]) => {
      const values = Array.isArray(assignments[roomType]) ? assignments[roomType] : [];
      const uniqueIds = [];
      for (const operatorId of values) {
        if (!operatorById.has(operatorId) || !ownedOperatorIds.has(operatorId) || uniqueIds.includes(operatorId)) continue;
        uniqueIds.push(operatorId);
        if (uniqueIds.length >= capacity) break;
      }
      return [roomType, uniqueIds];
    })
  );
}

function optimizeControlAssignments(assignments, catalog, roster, ownedOperators, layout, objective, excludedOperatorIds = new Set(), shiftDurationHours = 24) {
  const fixedControl = assignments.CONTROL || [];
  const occupied = new Set(Object.entries(assignments).filter(([roomType]) => roomType !== "CONTROL").flatMap(([, ids]) => ids));
  for (const operatorId of fixedControl) occupied.add(operatorId);
  const slots = SUPPORT_ROOM_CAPACITY.CONTROL - fixedControl.length;
  if (slots <= 0) return assignments;

  const candidates = ownedOperators
    .filter((operator) => !occupied.has(operator.id) && !excludedOperatorIds.has(operator.id))
    .map((operator) => ({
      operator,
      score: scoreControlCandidate(operator, roster[operator.id], catalog, ownedOperators, layout, objective),
      moraleFeasible: estimateOperatorShiftFeasible(operator, roster[operator.id], "CONTROL", shiftDurationHours),
    }))
    .filter((candidate) => candidate.score > 0);
  const selectableCandidates = candidates.some((candidate) => candidate.moraleFeasible)
    ? candidates.filter((candidate) => candidate.moraleFeasible)
    : candidates;
  const selectedCandidates = selectableCandidates
    .sort((a, b) => Number(b.moraleFeasible) - Number(a.moraleFeasible) || b.score - a.score || b.operator.rarityValue - a.operator.rarityValue || a.operator.name.localeCompare(b.operator.name, "ja"))
    .slice(0, slots)
    .map((candidate) => candidate.operator.id);

  return { ...assignments, CONTROL: [...fixedControl, ...selectedCandidates] };
}

function scoreControlCandidate(operator, rosterEntry, catalog, ownedOperators, layout, objective) {
  let score = 0;
  const products = chooseManufactureProducts(layout.manufacture, objective);
  for (const skill of activeBaseSkills(operator, rosterEntry)) {
    if (skill.roomType !== "CONTROL") continue;
    for (const effect of skill.effects || []) {
      if (effect.type === "manufactureSpeedForTaggedOperator") {
        const matchingOperators = ownedOperators.filter((ownedOperator) => operatorMatchesTag(ownedOperator, effect.tag, catalog)).length;
        const matchingRooms = products.filter((product) => effect.products.includes(product)).length;
        score += effect.value * matchingOperators * matchingRooms;
      }
      if (effect.type === "tradingSpeedForTaggedOperator") {
        const matchingOperators = ownedOperators.filter((ownedOperator) => operatorMatchesTag(ownedOperator, effect.tag, catalog)).length;
        score += effect.value * matchingOperators * layout.trading;
      }
    }
    const text = skill.description || "";
    if (text.includes("マタタビ+8")) score += 8;
    if (text.includes("マタタビ+2") && text.includes("アイルーと愉快な仲間たち")) score += 6;
    if (text.includes("全製造所の製造効率+2%") && text.includes("アイルーと愉快な仲間たち")) score += layout.manufacture * 2;
    if (text.includes("全貿易所の受注効率+7%") && text.includes("アイルーと愉快な仲間たち")) score += layout.trading * 7;
    const orderLimitMatch = text.match(/注文上限\+(\d+)/);
    if (orderLimitMatch && text.includes("ヘドリー")) {
      const hasHedley = ownedOperators.some((ownedOperator) => ownedOperator.name === "ヘドリー");
      if (hasHedley) score += Number(orderLimitMatch[1]) * layout.trading * 4;
    }
    if (orderLimitMatch && text.includes("イェラグ")) {
      const karlanOperators = ownedOperators.filter((ownedOperator) => operatorMatchesTag(ownedOperator, "$cc.g.karlan", catalog)).length;
      score += Number(orderLimitMatch[1]) * karlanOperators * layout.trading;
    }
  }
  return score;
}

function collectGlobalEffects(operators, roster, controlOperatorIds = null) {
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

function inferControlIntermediateGlobalEffects(skill) {
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

function planControl(catalog, roster, context, rooms = []) {
  const selected = (context.supportAssignments.CONTROL || [])
    .map((operatorId) => context.operatorById.get(operatorId))
    .filter(Boolean)
    .map((operator) => ({
      operator,
      score: null,
      approximate: false,
      activeSkills: activeBaseSkills(operator, roster[operator.id]),
      impacts: collectControlImpacts(operator, rooms),
      matched: activeBaseSkills(operator, roster[operator.id])
        .filter((skill) => skill.roomType === "CONTROL")
        .map((skill) => ({
          buffId: skill.buffId,
          buffName: skill.buffName,
          value: null,
          condition: skill.condition || {},
          roomType: skill.roomType,
          description: skill.description,
          approximate: false,
          suppressesOtherOperators: false,
        })),
    }));
  const selectedWithMorale = selected.map((candidate) => ({
    ...candidate,
    morale: calculateMorale(candidate, selected, "CONTROL", context),
  }));

  return {
    id: "control-1",
    type: "CONTROL",
    label: "制御中枢",
    product: "CONTROL",
    productLabel: "全体支援",
    speed: null,
    selected: selectedWithMorale,
    candidates: [],
  };
}

function collectControlImpacts(operator, rooms) {
  const impacts = [];
  for (const room of rooms) {
    for (const candidate of room.selected || []) {
      for (const skill of candidate.matched || []) {
        if (skill.sourceOperatorId !== operator.id) continue;
        impacts.push({
          facilityLabel: room.label,
          facilityType: room.type,
          targetOperatorName: candidate.operator.name,
          buffName: skill.buffName,
          skillName: skill.sourceSkillName || skill.buffName,
          value: skill.value,
          detail: skill.detail || "",
        });
      }
    }
  }
  return impacts;
}

function planManufacture(catalog, operators, roster, layout, objective, context, usedOperatorIds) {
  const products = chooseManufactureProducts(layout.manufacture, objective);
  return products.map((product, index) => {
    const candidates = buildRoomCandidates(operators, roster, usedOperatorIds, "MANUFACTURE", product, context);
    const selected = selectManufactureCandidates(candidates, product, context);
    selected.forEach((candidate) => usedOperatorIds.add(candidate.operator.id));
    selected.forEach((candidate) => context.assignedOperatorNames.add(candidate.operator.name));
    const speed = selected.reduce((sum, candidate) => sum + candidate.score, 0);
    const productConfig = catalog.products[product];
    const unitsPerDay = productConfig.baseUnitsPerDay * (1 + speed / 100);
    const valuePerDay = unitsPerDay * productConfig.value;
    const room = {
      id: "manufacture-" + (index + 1),
      type: "MANUFACTURE",
      label: "製造所 " + (index + 1),
      level: DEFAULT_FACILITY_LEVEL,
      collectionIntervalHours: context.collectionIntervalHours,
      product,
      productLabel: productConfig.label,
      speed,
      unitsPerDay,
      valuePerDay,
      selected,
      candidates: rankCandidatesForDisplay(candidates, product, context).slice(0, 8),
    };
    return { ...room, capacity: calculateFacilityCapacity(catalog, room, context) };
  });
}

function registerAssignedOperators(context, plans) {
  for (const room of plans) {
    for (const candidate of room.selected) context.assignedOperatorNames.add(candidate.operator.name);
  }
}

function planTrading(catalog, operators, roster, layout, context, usedOperatorIds) {
  return Array.from({ length: layout.trading }, (_, index) => {
    const candidates = buildRoomCandidates(operators, roster, usedOperatorIds, "TRADING", "LMD", context);
    const selected = selectBestRoomCandidates(candidates, "LMD", context);
    selected.forEach((candidate) => usedOperatorIds.add(candidate.operator.id));
    selected.forEach((candidate) => context.assignedOperatorNames.add(candidate.operator.name));
    const speed = selected.reduce((sum, candidate) => sum + candidate.score, 0);
    const lmdPerDay = catalog.trade.baseLmdPerDay * (1 + speed / 100);
    const room = {
      id: "trading-" + (index + 1),
      type: "TRADING",
      label: "貿易所 " + (index + 1),
      level: DEFAULT_FACILITY_LEVEL,
      collectionIntervalHours: context.collectionIntervalHours,
      product: "LMD",
      productLabel: catalog.trade.label,
      speed,
      lmdPerDay,
      selected,
      candidates: rankCandidatesForDisplay(candidates, "LMD", context).slice(0, 8),
    };
    return { ...room, capacity: calculateFacilityCapacity(catalog, room, context) };
  });
}

function buildRoomCandidates(operators, roster, usedOperatorIds, roomType, product, context) {
  return operators
    .filter((operator) => !usedOperatorIds.has(operator.id))
    .map((operator) => scoreOperator(operator, roster[operator.id], roomType, product, context))
    .sort(compareCandidates);
}

function selectManufactureCandidates(candidates, product, context) {
  const suppressors = candidates.filter((candidate) => candidate.suppressesOtherOperators);
  if (suppressors.length === 0) return selectBestRoomCandidates(candidates, product, context);

  const normal = selectBestRoomCandidates(candidates.filter((candidate) => !candidate.suppressesOtherOperators), product, context);
  const automation = selectBestRoomCandidates(candidates.map((candidate) => candidate.suppressesOtherOperators ? candidate : zeroSuppressedCandidate(candidate)), product, context);
  return compareRoomSelections(automation, normal, product, context) >= 0 ? automation : normal;
}

function zeroSuppressedCandidate(candidate) {
  return {
    ...candidate,
    staticScore: 0,
    score: 0,
    staticMatched: [],
    matched: [],
    dynamicEffects: [],
    activeSkills: [],
    approximate: false,
  };
}

function selectBestRoomCandidates(candidates, product, context) {
  let selected = [];
  for (let slot = 0; slot < ROOM_CAPACITY; slot += 1) {
    const current = finalizeRoomCandidates(selected, product, context);
    const currentScore = roomSelectionMetric(current, product, context).adjustedScore;
    let best = null;
    let bestMetric = null;
    let fallback = null;
    let fallbackMetric = null;
    for (const candidate of candidates) {
      if (selected.some((selectedCandidate) => selectedCandidate.operator.id === candidate.operator.id)) continue;
      const trial = finalizeRoomCandidates([...selected, candidate], product, context);
      const score = totalCandidateScore(trial);
      const metric = roomSelectionMetric(trial, product, context);
      if (metric.canCompleteShift && metric.adjustedScore > currentScore && (!bestMetric || compareRoomSelectionMetrics(metric, bestMetric) > 0 || (compareRoomSelectionMetrics(metric, bestMetric) === 0 && best && compareCandidates(candidate, best) < 0))) {
        best = candidate;
        bestMetric = metric;
      }
      if (!metric.canCompleteShift && selected.length === 0 && score > 0 && (!fallbackMetric || compareRoomSelectionMetrics(metric, fallbackMetric) > 0 || (compareRoomSelectionMetrics(metric, fallbackMetric) === 0 && fallback && compareCandidates(candidate, fallback) < 0))) {
        fallback = candidate;
        fallbackMetric = metric;
      }
    }
    if (!best && fallback) best = fallback;
    if (!best) break;
    selected = [...selected, best];
  }
  return finalizeRoomCandidates(selected, product, context).sort(compareCandidates);
}

function rankCandidatesForDisplay(candidates, product, context) {
  return candidates
    .map((candidate) => finalizeRoomCandidates([candidate], product, context)[0])
    .filter((candidate) => candidate.score > 0)
    .sort(compareCandidates);
}

function finalizeRoomCandidates(candidates, product, context) {
  const roomType = candidates[0]?.roomType || "";
  const roomState = {
    goldLines: calculateRoomGoldLines(candidates, context),
    storageBonus: collectRoomCapacityBonus(candidates, roomType, product, "storage", context),
    storageBonusesByOperator: collectRoomCapacityBonusesByOperator(candidates, roomType, product, "storage"),
    orderBonus: collectRoomCapacityBonus(candidates, roomType, product, "order", context),
  };
  if (roomType === "TRADING") {
    roomState.orderLimit = Math.max(1, TRADING_ORDER_LIMIT_BY_LEVEL[DEFAULT_FACILITY_LEVEL - 1] + roomState.orderBonus);
    roomState.currentOrders = estimateCurrentOrders(candidates, roomState.orderLimit, context);
    roomState.orderLimitGap = Math.max(0, roomState.orderLimit - roomState.currentOrders);
  }
  return candidates.map((candidate) => {
    const matched = [...candidate.staticMatched];
    let score = candidate.staticScore;
    let approximate = candidate.approximate;

    for (const dynamicEffect of candidate.dynamicEffects) {
      const evaluated = evaluateDynamicEffect(dynamicEffect, candidate.operator, candidates, product, context, roomState);
      if (!evaluated || evaluated.value === 0) continue;
      score += evaluated.value;
      approximate ||= Boolean(dynamicEffect.effect.approximate);
      matched.push(formatMatchedSkill(dynamicEffect, evaluated.value, evaluated.detail));
    }

    const finalized = { ...candidate, score: round(score, 2), approximate, matched };
    return { ...finalized, morale: calculateMorale(finalized, candidates, candidate.roomType, context) }; 
  });
}

function calculateMorale(candidate, selectedCandidates, roomType, context = null) {
  const effects = [{ label: "通常勤務", changePerHour: -1 }];
  for (const effect of collectSelfMoraleEffects(candidate.activeSkills || [], roomType)) effects.push(effect);
  for (const selected of selectedCandidates || []) {
    for (const effect of collectRoomMoraleEffects(selected.activeSkills || [], roomType)) effects.push(effect);
  }
  for (const effect of collectIntermediateMoraleEffects(candidate, selectedCandidates, roomType, context)) effects.push(effect);
  const changePerHour = round(effects.reduce((sum, effect) => sum + effect.changePerHour, 0), 2);
  return {
    changePerHour,
    costPerHour: round(Math.max(0, -changePerHour), 2),
    effects,
  };
}

function collectIntermediateMoraleEffects(candidate, selectedCandidates, roomType, context) {
  if (!context) return [];
  const effects = [];
  const worldlyWorry = Number(context.intermediateParameters?.worldlyWorry || 0);
  const passion = Number(context.intermediateParameters?.passion || 0);
  if (roomType !== "CONTROL" && hasControlSkill(context, /孤光共に照らす|俗世之憂20につき、体力/)) {
    const value = 0.05 + Math.floor(worldlyWorry / 20) * 0.05;
    if (value > 0) effects.push({ label: "孤光共に照らす", changePerHour: round(value, 2), scope: "intermediate" });
  }
  if (roomType === "TRADING") {
    for (const selected of selectedCandidates || []) {
      for (const skill of selected.activeSkills || []) {
        const reduction = windChimesMoraleReduction(skill, worldlyWorry);
        if (reduction > 0) effects.push({ label: skill.buffName, changePerHour: reduction, scope: "intermediate" });
      }
    }
  }
  for (const skill of candidate.activeSkills || []) {
    const text = skill.description || "";
    if (roomType === "CONTROL" && text.includes("パッションが40以上") && text.includes("体力消費量+0.05") && passion >= 40) {
      effects.push({ label: skill.buffName, changePerHour: -0.05, scope: "intermediate" });
    }
    if (roomType === "CONTROL" && text.includes("パッション8につき") && text.includes("体力消費量+0.01")) {
      const value = Math.floor(passion / 8) * 0.01;
      if (value > 0) effects.push({ label: skill.buffName, changePerHour: round(-value, 2), scope: "intermediate" });
    }
  }
  return effects;
}

function hasControlSkill(context, pattern) {
  for (const operatorId of context.supportAssignments?.CONTROL || []) {
    const operator = context.operatorById.get(operatorId);
    if (!operator) continue;
    for (const skill of activeBaseSkills(operator, context.roster[operator.id])) {
      if (skill.roomType === "CONTROL" && pattern.test(skill.description || "")) return true;
    }
  }
  return false;
}

function windChimesMoraleReduction(skill, worldlyWorry) {
  const text = skill.description || "";
  if (!text.includes("俗世") || !text.includes("体力消費量")) return 0;
  const extraMatch = text.match(/俗世(?:之|の)憂10につき、体力消費量が追加で-(0\.0[12])/);
  const extra = extraMatch ? Math.floor(worldlyWorry / 10) * Number(extraMatch[1]) : 0;
  return round(extra, 2);
}

function collectSelfMoraleEffects(skills, roomType) {
  return skills
    .filter((skill) => skill.roomType === roomType)
    .flatMap(parseMoraleEffects)
    .filter((effect) => effect.scope === "self");
}

function collectRoomMoraleEffects(skills, roomType) {
  return skills
    .filter((skill) => skill.roomType === roomType)
    .flatMap(parseMoraleEffects)
    .filter((effect) => effect.scope === "roomAll");
}

function parseMoraleEffects(skill) {
  const description = skill.description || "";
  if (description.includes("パッション") && description.includes("体力消費量")) return [];
  const effects = [];
  const scope = moraleScope(description);
  const consumptionPattern = /体力消費量(?:が)?([+-]\d+(?:\.\d+)?)/g;
  for (const match of description.matchAll(consumptionPattern)) {
    const value = Number(match[1]);
    effects.push({
      label: skill.buffName,
      changePerHour: round(-value, 2),
      scope,
    });
  }
  const recoveryPattern = /体力(?:が|を)?1時間ごとに([+-]\d+(?:\.\d+)?)回復/g;
  for (const match of description.matchAll(recoveryPattern)) {
    effects.push({
      label: skill.buffName,
      changePerHour: round(Number(match[1]), 2),
      scope,
    });
  }
  return effects;
}

function moraleScope(description) {
  if (/制御中枢内全員|配属オペレーター|全員の体力/.test(description)) return "roomAll";
  return "self";
}

function totalCandidateScore(candidates) {
  return candidates.reduce((sum, candidate) => sum + candidate.score, 0);
}

function compareRoomSelections(left, right, product, context) {
  return compareRoomSelectionMetrics(roomSelectionMetric(left, product, context), roomSelectionMetric(right, product, context));
}

function compareRoomSelectionMetrics(left, right) {
  return Number(left.canCompleteShift) - Number(right.canCompleteShift)
    || left.adjustedScore - right.adjustedScore
    || left.rawScore - right.rawScore;
}

function roomSelectionMetric(candidates, product, context) {
  const rawScore = totalCandidateScore(candidates);
  const moraleEfficiencies = candidates.map((candidate) => candidateShiftMoraleEfficiency(candidate, context));
  const moraleEfficiency = moraleEfficiencies.length ? Math.min(...moraleEfficiencies) : 1;
  const fullnessEfficiency = selectionFullnessEfficiency(candidates, product, context);
  const productionEfficiency = Math.min(moraleEfficiency, fullnessEfficiency);
  return {
    rawScore,
    adjustedScore: round(rawScore * productionEfficiency, 2),
    moraleEfficiency,
    fullnessEfficiency,
    productionEfficiency,
    canCompleteShift: moraleEfficiency >= 1,
  };
}

function selectionFullnessEfficiency(candidates, product, context) {
  const roomType = candidates[0]?.roomType;
  if (!context || !["MANUFACTURE", "TRADING"].includes(roomType)) return 1;
  const speed = totalCandidateScore(candidates);
  const collectionIntervalHours = context.collectionIntervalHours || 24;
  if (roomType === "MANUFACTURE") {
    const productConfig = context.catalog.products?.[product];
    if (!productConfig) return 1;
    const unitsPerDay = productConfig.baseUnitsPerDay * (1 + speed / 100);
    const capacity = calculateFacilityCapacity(context.catalog, {
      type: "MANUFACTURE",
      product,
      level: DEFAULT_FACILITY_LEVEL,
      unitsPerDay,
      selected: candidates,
      collectionIntervalHours,
    }, context);
    return calculateFullnessEfficiency(capacity, collectionIntervalHours);
  }
  const lmdPerDay = context.catalog.trade.baseLmdPerDay * (1 + speed / 100);
  const capacity = calculateFacilityCapacity(context.catalog, {
    type: "TRADING",
    product: "LMD",
    level: DEFAULT_FACILITY_LEVEL,
    lmdPerDay,
    selected: candidates,
    collectionIntervalHours,
  }, context);
  return calculateFullnessEfficiency(capacity, collectionIntervalHours);
}

function candidateShiftMoraleEfficiency(candidate, context) {
  const cost = Number(candidate.morale?.costPerHour || 0) * Number(context.shiftDurationHours || 24);
  if (cost <= 0) return 1;
  return Math.min(1, 24 / cost);
}

function estimateOperatorShiftFeasible(operator, rosterEntry, roomType, shiftDurationHours) {
  const activeSkills = activeBaseSkills(operator, rosterEntry).filter((skill) => skill.roomType === roomType);
  const changePerHour = -1 + collectSelfMoraleEffects(activeSkills, roomType).reduce((sum, effect) => sum + effect.changePerHour, 0);
  return Math.max(0, -changePerHour) * shiftDurationHours <= 24;
}

function selectTopSkillPerSlot(skills) {
  const bestBySlot = new Map();
  const passthrough = [];
  for (const skill of skills) {
    if (!Number.isInteger(skill.slotIndex)) {
      passthrough.push(skill);
      continue;
    }
    const current = bestBySlot.get(skill.slotIndex);
    if (!current || skillRank(skill) > skillRank(current)) {
      bestBySlot.set(skill.slotIndex, skill);
    }
  }
  return [...passthrough, ...bestBySlot.values()].sort((a, b) => (a.slotIndex ?? 99) - (b.slotIndex ?? 99));
}

function skillRank(skill) {
  const phaseRank = PHASE_RANK[skill.condition?.phase] ?? 0;
  const level = Number(skill.condition?.level || 1);
  return phaseRank * 10000 + level * 100 + Number(skill.slotRank || 0);
}

function scoreOperator(operator, rosterEntry, roomType, product, context) {
  const activeSkills = activeBaseSkills(operator, rosterEntry);
  const staticMatched = [];
  const dynamicEffects = [];
  let staticScore = 0;
  let approximate = false;
  let suppressesOtherOperators = false;

  for (const skill of activeSkills) {
    if (skill.roomType !== roomType) continue;
    const intermediate = evaluateIntermediateSkillEffect(skill, roomType, product, context);
    if (intermediate) {
      staticScore += intermediate.value;
      approximate ||= Boolean(intermediate.approximate);
      staticMatched.push({
        buffId: skill.buffId,
        buffName: skill.buffName + (intermediate.detail ? " " + intermediate.detail : ""),
        value: intermediate.value,
        condition: skill.condition || {},
        roomType: skill.roomType,
        description: skill.description,
        approximate: Boolean(intermediate.approximate),
        suppressesOtherOperators: false,
        detail: intermediate.detail || "",
        effectType: intermediate.effectType,
        sourceOperatorId: null,
        sourceOperatorName: null,
        sourceSkillName: skill.buffName,
      });
    }
    const variableEffect = inferCapacityVariableEffect(skill, roomType, product);
    if (variableEffect) dynamicEffects.push({ effect: variableEffect, skill });
    if (roomType === "MANUFACTURE" && (skill.description || "").includes("自身以外の配属オペレーター全員の製造効率を0にする")) suppressesOtherOperators = true;
    const orderModelEffect = inferOrderModelEffect(skill, roomType);
    if (orderModelEffect) dynamicEffects.push({ effect: orderModelEffect, skill });
    for (const effect of skill.effects) {
      const value = evaluateStaticEffect(effect, product, context, activeSkills);
      if (value !== null) {
        staticScore += value;
        approximate ||= Boolean(effect.approximate);
        staticMatched.push(formatMatchedSkill({ effect, skill }, value));
        continue;
      }
      if (isRoomDynamicEffect(effect, roomType, product)) dynamicEffects.push({ effect, skill });
    }
  }

  for (const globalEffect of context.globalEffects) {
    if (isGlobalEffectApplicable(globalEffect.effect, roomType, product)) dynamicEffects.push(globalEffect);
  }

  return {
    operator,
    roomType,
    staticScore: round(staticScore, 2),
    score: round(staticScore, 2),
    approximate,
    suppressesOtherOperators: suppressesOtherOperators || staticMatched.some((skill) => skill.suppressesOtherOperators),
    staticMatched,
    matched: staticMatched,
    dynamicEffects,
    activeSkills,
  };
}

function evaluateIntermediateSkillEffect(skill, roomType, product, context) {
  const text = skill.description || "";
  if (roomType === "MANUFACTURE" && text.includes("俗世之憂3につき") && text.includes("製造効率+1")) {
    const worldlyWorry = Number(context.intermediateParameters?.worldlyWorry || 0);
    const value = Math.floor(worldlyWorry / 3);
    if (value <= 0) return null;
    return {
      value,
      detail: "俗世之憂 " + round(worldlyWorry, 1),
      effectType: "manufactureSpeedPerWorldlyWorry",
      approximate: true,
    };
  }
  if (roomType === "MANUFACTURE" && text.includes("マタタビ1個につき") && text.includes("製造効率+1%")) {
    const catnip = Number(context.intermediateParameters?.catnip || 0);
    const value = 5 + catnip;
    return {
      value,
      detail: "マタタビ " + round(catnip, 1),
      effectType: "manufactureSpeedPerCatnip",
      approximate: false,
    };
  }
  if (roomType === "TRADING" && text.includes("マタタビ1個につき") && text.includes("受注効率+3%")) {
    const catnip = Number(context.intermediateParameters?.catnip || 0);
    const value = 5 + catnip * 3;
    return {
      value,
      detail: "マタタビ " + round(catnip, 1),
      effectType: "tradingSpeedPerCatnip",
      approximate: false,
    };
  }
  return null;
}

function inferCapacityVariableEffect(skill, roomType, product) {
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

function inferOrderModelEffect(skill, roomType) {
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

function evaluateStaticEffect(effect, product, context, activeSkills) {
  if (effect.type === "manufactureSpeed") return effect.products.includes(product) ? effect.value : null;
  if (effect.type === "tradingSpeed") return effect.value;
  if (effect.type === "tradingSpeedPerRoomLevel") {
    const level = effect.roomType === "MEETING" ? context.meetingRoomLevel : 0;
    return Math.min(effect.maxValue, effect.baseValue + level * effect.valuePerLevel);
  }
  if (effect.type === "powerPlantManufacture") return effect.products.includes(product) ? context.powerPlants * effect.percentPerPowerPlant : null;
  if (effect.type === "rosmontisManufacture") {
    if (!activeSkills.some((skill) => skill.buffId === effect.requiresSkill)) return null;
    return Number(context.intermediateParameters?.thoughtChain ?? context.dormOperators) * effect.percentPerThoughtChain;
  }
  if (effect.type === "ebenholzTrading") {
    if (!activeSkills.some((skill) => skill.buffId === effect.requiresSkill)) return null;
    return Number(context.intermediateParameters?.silentResonance ?? context.dormOperators) * effect.percentPerSilentResonance;
  }
  return null;
}

function evaluateDynamicEffect(dynamicEffect, operator, selectedCandidates, product, context, roomState = {}) {
  const effect = dynamicEffect.effect;
  if (effect.type === "manufactureSpeedPerStorageLimitBonus") {
    if (!effect.products.includes(product)) return null;
    if (hasSelectedSkill(selectedCandidates, /大きい方がいい/)) return null;
    const bonus = Math.max(0, Number(roomState.storageBonus || 0));
    const value = bonus * effect.valuePerLimit;
    return value > 0 ? { value, detail: "保管上限 +" + bonus } : null;
  }
  if (effect.type === "manufactureSpeedPerOperatorStorageLimitBonus") {
    if (!effect.products.includes(product)) return null;
    const values = [...(roomState.storageBonusesByOperator || new Map()).values()].map((value) => Math.max(0, Number(value || 0)));
    const value = values.reduce((sum, storageBonus) => {
      if (storageBonus <= 0) return sum;
      const rate = storageBonus > effect.threshold ? effect.highValuePerLimit : effect.lowValuePerLimit;
      return sum + storageBonus * rate;
    }, 0);
    const detail = values.filter((value) => value > 0).map((value) => "+" + value).join("/");
    return value > 0 ? { value, detail: "各保管上限 " + detail } : null;
  }
  if (effect.type === "manufactureSpeedPerSelectedOperator") {
    if (!effect.products.includes(product)) return null;
    const count = selectedCandidates.length;
    return count > 0 ? { value: count * effect.valuePerOperator, detail: "配置人数 x" + count } : null;
  }
  if (effect.type === "tradingSpeedPerOrderLimitBonus") {
    const bonus = Math.max(0, Number(roomState.orderBonus || 0));
    const value = bonus * effect.valuePerLimit;
    return value > 0 ? { value, detail: "注文上限 +" + bonus } : null;
  }
  if (effect.type === "tradingSpeedPerOrderLimitStep") {
    const bonus = Math.max(0, Number(roomState.orderBonus || 0));
    const value = Math.min(effect.maxValue, Math.floor(bonus / effect.limitPerStep) * effect.valuePerStep);
    return value > 0 ? { value, detail: "注文上限 +" + bonus } : null;
  }
  if (effect.type === "tradingSpeedPerOrderLimitGap") {
    const gap = Math.max(0, Number(roomState.orderLimitGap || 0));
    const value = gap * effect.valuePerOrder;
    return value > 0 ? { value, detail: "上限差 " + gap } : null;
  }
  if (effect.type === "tradingSpeedPerCurrentOrder") {
    const orders = Math.max(0, Number(roomState.currentOrders || 0));
    const value = orders * effect.valuePerOrder;
    return value > 0 ? { value, detail: "オーダー数 " + orders } : null;
  }
  if (effect.type === "tradingBreachOrderExtraGold") {
    if (!hasSelectedSkill(selectedCandidates, /違約オーダーと見なす/)) return null;
    const lmdPerOrder = Number(context.catalog?.trade?.lmdPerOrder || DEFAULT_ORDER_VALUE_LMD);
    const extraLmdPerOrder = Number(effect.extraGold || 0) * Number(context.catalog?.products?.GOLD?.value || 500) * Number(effect.breachRatio || 0);
    const value = lmdPerOrder > 0 ? (extraLmdPerOrder / lmdPerOrder) * 100 : 0;
    return value > 0 ? { value: round(value, 2), detail: "違約注文 期待+" + round(extraLmdPerOrder, 0) + "龍門幣/件" } : null;
  }
  if (effect.type === "tradingSpecialExclusiveOrder") {
    const lmdPerOrder = Number(context.catalog?.trade?.lmdPerOrder || DEFAULT_ORDER_VALUE_LMD);
    const value = lmdPerOrder > 0 ? (Number(effect.fixedLmdPerBaseOrder || 0) / lmdPerOrder) * 100 : 0;
    return value > 0 ? { value: round(value, 2), detail: "特別注文 近似+" + Number(effect.fixedLmdPerBaseOrder || 0) + "龍門幣/件" } : null;
  }
  if (effect.type === "tradingSpeedPerNamedOperatorInWorkFacility") {
    const selectedNames = new Set(selectedCandidates.map((candidate) => candidate.operator.name));
    for (const supportName of context.supportOperatorNames) selectedNames.add(supportName);
    const matchedNames = effect.operatorNames.filter((name) => name !== operator.name && selectedNames.has(name));
    if (matchedNames.length === 0) return null;
    return { value: matchedNames.length * effect.valuePerOperator, detail: matchedNames.join("/") + " 配置" };
  }
  if (effect.type === "manufactureSpeedForTaggedOperator") {
    if (!effect.products.includes(product) || !operatorMatchesTag(operator, effect.tag, context.catalog)) return null;
    return { value: effect.value, detail: tagLabel(effect.tag, context.catalog) };
  }
  if (effect.type === "tradingSpeedForTaggedOperator") {
    if (!operatorMatchesTag(operator, effect.tag, context.catalog)) return null;
    return { value: effect.value, detail: tagLabel(effect.tag, context.catalog) };
  }
  if (effect.type === "goldManufactureSpeedPerPassion") {
    if (product !== "GOLD") return null;
    if (!isFacilityWideEffectCarrier(operator, selectedCandidates)) return null;
    const passion = Number(context.intermediateParameters?.passion || 0);
    const value = effect.baseValue + Math.floor(passion / 20) * effect.baseValue;
    return value > 0 ? { value, detail: "パッション " + round(passion, 1) } : null;
  }
  if (effect.type === "tradingSpeedPerPassion") {
    if (!isFacilityWideEffectCarrier(operator, selectedCandidates)) return null;
    const passion = Number(context.intermediateParameters?.passion || 0);
    const value = Math.floor(passion / effect.passionPerStep) * effect.valuePerStep;
    return value > 0 ? { value, detail: "パッション " + round(passion, 1) } : null;
  }
  if (effect.type === "manufactureSpeedIfMhInControl") {
    if (!effect.products.includes(product)) return null;
    if (!isFacilityWideEffectCarrier(operator, selectedCandidates)) return null;
    if (!hasTaggedControlPartner(context, dynamicEffect.supportOperator?.id, effect.tag)) return null;
    return { value: effect.value, detail: tagLabel(effect.tag, context.catalog) + " 制御中枢" };
  }
  if (effect.type === "tradingSpeedIfMhInControl") {
    if (!isFacilityWideEffectCarrier(operator, selectedCandidates)) return null;
    if (!hasTaggedControlPartner(context, dynamicEffect.supportOperator?.id, effect.tag)) return null;
    return { value: effect.value, detail: tagLabel(effect.tag, context.catalog) + " 制御中枢" };
  }
  if (effect.type === "manufactureSpeedPerTaggedOperatorInSameRoom") {
    if (!effect.products.includes(product)) return null;
    const count = countSelectedWithTag(selectedCandidates, effect.tag, context.catalog);
    return count > 0 ? { value: count * effect.valuePerOperator, detail: tagLabel(effect.tag, context.catalog) + " x" + count } : null;
  }
  if (effect.type === "manufactureSpeedPerSkillFamilyInSameRoom") {
    if (!effect.products.includes(product)) return null;
    const count = countSelectedSkillFamily(selectedCandidates, effect.tag, context.catalog);
    return count > 0 ? { value: count * effect.valuePerSkill, detail: skillFamilyLabel(effect.tag, context.catalog) + " x" + count } : null;
  }
  if (effect.type === "tradingSpeedPerTaggedOperatorInSameRoom") {
    const count = countSelectedWithTag(selectedCandidates, effect.tag, context.catalog);
    return count > 0 ? { value: count * effect.valuePerOperator, detail: tagLabel(effect.tag, context.catalog) + " x" + count } : null;
  }
  if (effect.type === "tradingSpeedIfTaggedOperatorInSameRoom") {
    const count = countSelectedWithTag(selectedCandidates, effect.tag, context.catalog);
    return count > 0 ? { value: effect.value, detail: tagLabel(effect.tag, context.catalog) } : null;
  }
  if (effect.type === "tradingSpeedPerGoldLine") {
    const lines = roomState.goldLines ?? context.goldProductionLines;
    return lines > 0 ? { value: lines * effect.valuePerLine, detail: "純金生産ライン x" + lines } : null;
  }
  if (effect.type === "tradingSpeedIfGoldLineCountAtLeast") {
    const lines = roomState.goldLines ?? context.goldProductionLines;
    return lines >= effect.threshold ? { value: effect.value, detail: "純金生産ライン x" + lines } : null;
  }
  return null;
}

function isFacilityWideEffectCarrier(operator, selectedCandidates) {
  const eligible = selectedCandidates
    .filter((candidate) => candidate.staticScore > 0 || candidate.staticMatched?.length)
    .sort(compareCandidates)[0];
  return eligible?.operator.id === operator.id;
}

function hasTaggedControlPartner(context, sourceOperatorId, tag) {
  for (const operatorId of context.supportAssignments?.CONTROL || []) {
    if (operatorId === sourceOperatorId) continue;
    const operator = context.operatorById.get(operatorId);
    if (operator && operatorMatchesTag(operator, tag, context.catalog)) return true;
  }
  return false;
}

function isRoomDynamicEffect(effect, roomType, product) {
  if (roomType === "TRADING" && effect.type === "tradingSpeedPerNamedOperatorInWorkFacility") return true;
  if (roomType === "TRADING" && ["tradingSpeedPerTaggedOperatorInSameRoom", "tradingSpeedIfTaggedOperatorInSameRoom", "tradingSpeedPerGoldLine", "tradingSpeedIfGoldLineCountAtLeast", "goldLineBonusIfGoldLineCountAtLeast", "goldLineBonusPerTaggedBaseOperator"].includes(effect.type)) return true;
  if (roomType === "MANUFACTURE" && effect.type === "manufactureSpeedPerTaggedOperatorInSameRoom") return effect.products.includes(product);
  if (roomType === "MANUFACTURE" && effect.type === "manufactureSpeedPerSkillFamilyInSameRoom") return effect.products.includes(product);
  return false;
}

function isGlobalEffectApplicable(effect, roomType, product) {
  if (roomType === "MANUFACTURE" && effect.type === "manufactureSpeedForTaggedOperator") return effect.products.includes(product);
  if (roomType === "TRADING" && effect.type === "tradingSpeedForTaggedOperator") return true;
  if (roomType === "MANUFACTURE" && effect.type === "goldManufactureSpeedPerPassion") return product === "GOLD";
  if (roomType === "TRADING" && effect.type === "tradingSpeedPerPassion") return true;
  if (roomType === "MANUFACTURE" && effect.type === "manufactureSpeedIfMhInControl") return effect.products.includes(product);
  if (roomType === "TRADING" && effect.type === "tradingSpeedIfMhInControl") return true;
  return false;
}

function formatMatchedSkill(dynamicEffect, value, detail = "") {
  const supportName = dynamicEffect.supportOperator ? "（" + dynamicEffect.supportOperator.name + "）" : "";
  const condition = detail ? " " + detail : "";
  return {
    buffId: dynamicEffect.skill.buffId,
    buffName: dynamicEffect.skill.buffName + supportName + condition,
    value,
    condition: dynamicEffect.skill.condition || {},
    roomType: dynamicEffect.skill.roomType,
    description: dynamicEffect.skill.description,
    approximate: Boolean(dynamicEffect.effect.approximate),
    suppressesOtherOperators: Boolean(dynamicEffect.effect.suppressesOtherOperators),
    detail,
    effectType: dynamicEffect.effect.type,
    sourceOperatorId: dynamicEffect.supportOperator?.id || null,
    sourceOperatorName: dynamicEffect.supportOperator?.name || null,
    sourceSkillName: dynamicEffect.skill.buffName,
  };
}

function calculateRoomGoldLines(candidates, context) {
  let lines = context.goldProductionLines;
  for (const candidate of candidates) {
    for (const skill of candidate.activeSkills || []) {
      for (const effect of skill.effects || []) {
        if (effect.type === "goldLineBonusIfGoldLineCountAtLeast" && context.goldProductionLines >= effect.threshold) {
          lines += effect.bonusLines;
        }
        if (effect.type === "goldLineBonusPerTaggedBaseOperator") {
          const count = Math.min(effect.maxOperators, countPlacedOperatorsWithTag(candidates, effect.tag, context));
          lines += count * effect.bonusLinesPerOperator;
        }
      }
    }
  }
  return lines;
}

function countPlacedOperatorsWithTag(candidates, tag, context) {
  const names = new Set(context.assignedOperatorNames);
  for (const candidate of candidates) names.add(candidate.operator.name);
  let count = 0;
  for (const name of names) {
    const operator = context.operatorByName.get(name);
    if (operator && operatorMatchesTag(operator, tag, context.catalog)) count += 1;
  }
  return count;
}

function operatorMatchesTag(operator, tag, catalog) {
  const dictionary = catalog.tagDictionary?.[tag];
  if (!dictionary) return false;
  return dictionary.operatorNames.includes(operator.name);
}

function countSelectedWithTag(candidates, tag, catalog) {
  return candidates.filter((candidate) => operatorMatchesTag(candidate.operator, tag, catalog)).length;
}

function countSelectedSkillFamily(candidates, tag, catalog) {
  const dictionary = catalog.skillFamilyDictionary?.[tag];
  if (!dictionary) return 0;
  const buffIds = new Set(dictionary.buffIds || []);
  const convertedFrom = convertedSkillFamilySources(candidates, tag);
  for (const fromTag of convertedFrom) {
    for (const buffId of catalog.skillFamilyDictionary?.[fromTag]?.buffIds || []) buffIds.add(buffId);
  }
  let count = 0;
  for (const candidate of candidates) {
    for (const skill of candidate.activeSkills || []) {
      if (buffIds.has(skill.buffId)) count += 1;
    }
  }
  return count;
}

function convertedSkillFamilySources(candidates, toTag) {
  const fromTags = new Set();
  for (const candidate of candidates) {
    for (const skill of candidate.activeSkills || []) {
      for (const effect of skill.effects || []) {
        if (effect.type !== "convertSkillFamiliesInSameRoom" || effect.toTag !== toTag) continue;
        for (const fromTag of effect.fromTags || []) fromTags.add(fromTag);
      }
    }
  }
  return fromTags;
}

function tagLabel(tag, catalog) {
  return catalog.tagDictionary?.[tag]?.label || tag;
}

function skillFamilyLabel(tag, catalog) {
  return catalog.skillFamilyDictionary?.[tag]?.label || tag;
}

function chooseManufactureProducts(count, objective) {
  if (objective === "exp") return Array.from({ length: count }, () => "EXP");
  if (objective === "balance") return Array.from({ length: count }, (_, index) => (index % 2 === 0 ? "GOLD" : "EXP"));
  return Array.from({ length: count }, () => "GOLD");
}

function calculateTotals(catalog, manufacturePlan, tradingPlan, objective) {
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

function collectUnsupportedSkills(operators, roster) {
  const warnings = new Map();
  for (const operator of operators) {
    for (const skill of activeBaseSkills(operator, roster[operator.id])) {
      if (!["MANUFACTURE", "TRADING", "CONTROL", "POWER", "DORMITORY"].includes(skill.roomType)) continue;
      if (skill.supported) continue;
      if (isSkillSupportedByManualEvaluator(skill)) continue;
      const classification = classifyUnsupportedSkill(skill);
      if (classification.visibility === "ignore") continue;
      const current = warnings.get(skill.buffId) || {
        buffId: skill.buffId,
        buffName: skill.buffName,
        roomType: skill.roomType,
        operators: [],
        description: skill.description,
        conditionTags: skill.conditionTags || [],
        intermediateRefs: skill.intermediateRefs || [],
        category: classification.category,
        reason: classification.reason,
        priority: classification.priority,
      };
      if (!current.operators.includes(operator.name)) current.operators.push(operator.name);
      warnings.set(skill.buffId, current);
    }
  }
  return [...warnings.values()]
    .sort((a, b) => a.priority - b.priority || a.category.localeCompare(b.category) || a.buffName.localeCompare(b.buffName, "ja"))
    .slice(0, 32);
}

function isSkillSupportedByManualEvaluator(skill) {
  const text = skill.description || "";
  if (parseMoraleEffects(skill).length > 0) return true;
  if (text.includes("宿舎中のオペレーター1人につき、知覚情報+1")) return true;
  if (text.includes("俗世之憂3につき") && text.includes("製造効率+1")) return true;
  if (text.includes("知覚情報") && (text.includes("思念連鎖") || text.includes("静かなる共鳴"))) return true;
  if (text.includes("パッション") && (text.includes("製造効率") || text.includes("受注効率") || text.includes("体力消費量"))) return true;
  if (text.includes("マタタビ")) return true;
  if (text.includes("保管上限1上昇につき") && text.includes("製造効率+2%")) return true;
  if (text.includes("配属オペレーター各自の保管上限増加値")) return true;
  if (/保管上限[+-]\d+|注文上限[+-]\d+|レベル1ごとに注文上限\+\d+/.test(text) && !/(増加量|差が|オーダー数|発動数)/.test(text)) return true;
  if (text.includes("製造所に配置中のオペレーター1名につき") && text.includes("保管上限+")) return true;
  if (text.includes("ラインテク系スキルの発動数1につき") && text.includes("保管上限+")) return true;
  if (text.includes("注文上限増加量1につき") && text.includes("受注効率+4%")) return true;
  if (text.includes("注文上限増加量5につき") && text.includes("受注効率+25%")) return true;
  if (text.includes("オーダー数と注文上限数の差") || text.includes("オーダー数が1につき")) return true;
  if (text.includes("アイルーと愉快な仲間たち") && (text.includes("全製造所の製造効率+2%") || text.includes("全貿易所の受注効率+7%"))) return true;
  if (text.includes("ヘドリー") && text.includes("注文上限+")) return true;
  if (text.includes("イェラグ") && text.includes("注文上限+")) return true;
  if (text.includes("違約オーダー")) return true;
  if (text.includes("特別独占オーダー")) return true;
  return false;
}

function classifyUnsupportedSkill(skill) {
  const text = skill.description || "";
  if (["POWER", "DORMITORY"].includes(skill.roomType)) return { category: "supportFacility", reason: "発電所/宿舎の効果はMVP最適化では限定対応", priority: 6 };
  if (/手がかり|応接|事務|連絡速度|公開求人|訓練|加工|副産物/.test(text)) return { category: "outOfScope", reason: "現在のMVP指標外", priority: 9 };
  if (/特別独占オーダー|違約オーダー|高価値オーダー/.test(text)) return { category: "orderModel", reason: "注文種別/注文価値モデルが未実装", priority: 1 };
  if (/純金生産ライン|金属.*作戦記録|作戦記録.*金属/.test(text)) return { category: "productFlow", reason: "製品ライン/製品間相互作用の追加整理が必要", priority: 2 };
  if (/俗世|知覚|思念|静かなる|パッション|マタタビ/.test(text) || (skill.intermediateRefs || []).length > 0) return { category: "intermediate", reason: "中間パラメータ式の未対応パターン", priority: 3 };
  if (/保管上限|注文上限|オーダー数/.test(text)) return { category: "capacity", reason: "上限/注文数モデルの未対応パターン", priority: 4 };
  if ((skill.conditionTags || []).length > 0) return { category: "tagCondition", reason: "タグ条件の未対応パターン", priority: 5 };
  if (/体力|疲労|宿舎/.test(text)) return { category: "morale", reason: "体力/休憩モデルの未対応パターン", priority: 6 };
  return { category: "manualRule", reason: "手書き evaluator が必要", priority: 7 };
}

function buildAlternatives(manufacturePlan, tradingPlan) {
  return [...manufacturePlan, ...tradingPlan].map((room) => ({
    facilityId: room.id,
    facilityLabel: room.label,
    candidates: room.candidates.slice(3, 6).map((candidate) => ({
      name: candidate.operator.name,
      score: candidate.score,
      skills: candidate.matched.map((skill) => skill.buffName),
    })),
  }));
}

function conditionMet(condition = {}, rosterEntry) {
  const requiredPhase = condition.phase ? PHASE_RANK[condition.phase] : 0;
  const currentPhase = PHASE_RANK[rosterEntry.phase] ?? 0;
  if (currentPhase < requiredPhase) return false;
  if (condition.level && Number(rosterEntry.level || 1) < condition.level) return false;
  return true;
}

function compareCandidates(a, b) {
  return b.score - a.score || b.staticScore - a.staticScore || b.operator.rarityValue - a.operator.rarityValue || a.operator.name.localeCompare(b.operator.name, "ja");
}

function clampInteger(value, min, max) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return min;
  return Math.min(max, Math.max(min, number));
}

function round(value, digits) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}
