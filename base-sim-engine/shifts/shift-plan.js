import { round } from "../numbers.js";
import { maxCondition } from "../roster.js";
import { averageShiftTotals } from "./timeline.js";
import {
  formatShiftOperatorMorale,
  summarizeShiftMorale,
  calculateMoraleEfficiency,
  applyProductionEfficiency,
} from "./morale.js";

export function buildShiftPlan({ facilities, totals, objective, mode = "single", context = null, secondShiftPlan = null }) {
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
