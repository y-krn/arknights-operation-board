import { round } from "../numbers.js";
import { DEFAULT_REST_RECOVERY_PER_HOUR } from "../constants.js";
import {
  createEmptyIntermediateParameters,
  finalizeIntermediateParameters,
} from "../effects/intermediate-effects.js";

export function buildTimeline(shiftPlan, intervalHours = 1) {
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

export function averageShiftTotals(shifts) {
  const cycleHours = shifts.reduce((sum, shift) => sum + shift.durationHours, 0);
  const keys = new Set(shifts.flatMap((shift) => Object.keys(shift.totals || {})));
  return Object.fromEntries(
    [...keys].map((key) => [
      key,
      round(shifts.reduce((sum, shift) => sum + Number(shift.totals?.[key] || 0) * shift.durationHours, 0) / cycleHours, 2),
    ])
  );
}
