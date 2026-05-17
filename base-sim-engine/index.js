import { BASE_LAYOUTS, OBJECTIVES, normalizeLayout } from "./layout.js";
import { createDefaultRoster, activeBaseSkills } from "./roster.js";
import { createSimulationContext } from "./context.js";
import { collectUnsupportedSkills } from "./unsupported.js";
import { buildAlternatives } from "./alternatives.js";
import { registerAssignedOperators } from "./planning.js";
import { calculateTotals } from "./totals.js";
import { planManufacture } from "./facilities/manufacture.js";
import { planTrading } from "./facilities/trading.js";
import { planControl } from "./facilities/control.js";
import { planSecondShift, balanceTwoShiftPlan } from "./shifts/second-shift.js";
import { buildShiftPlan } from "./shifts/shift-plan.js";
import { buildTimeline } from "./shifts/timeline.js";

export { createDefaultRoster, activeBaseSkills };
export { BASE_LAYOUTS, OBJECTIVES, normalizeLayout };

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

