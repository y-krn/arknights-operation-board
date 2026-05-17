import { round } from "../numbers.js";
import { DEFAULT_REST_RECOVERY_PER_HOUR } from "../constants.js";

export function formatShiftOperatorMorale(candidate, durationHours, restHours) {
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

export function calculateMoraleTimeline(costPerHour, durationHours, startMorale = 24, threshold = 12) {
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

export function summarizeShiftMorale(facilities) {
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

export function calculateMoraleEfficiency(entries) {
  if (!entries.length) return 1;
  return round(Math.min(...entries.map((entry) => {
    if (entry.projectedCost <= 0) return 1;
    return Math.min(1, entry.maxMorale / entry.projectedCost);
  })), 4);
}

export function applyProductionEfficiency(facilities, context = null) {
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

export function calculateFullnessEfficiency(capacity, collectionIntervalHours) {
  if (!capacity?.fillHours) return 1;
  return round(Math.min(1, Number(capacity.fillHours) / Math.max(1, Number(collectionIntervalHours || 24))), 4);
}
