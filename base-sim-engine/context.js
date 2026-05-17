import { clampInteger } from "./numbers.js";
import { SUPPORT_ROOM_CAPACITY } from "./constants.js";
import { setIntermediateParameters } from "./effects/intermediate-effects.js";
import { collectGlobalEffects } from "./effects/global-effects.js";
import { optimizeControlAssignments } from "./facilities/control.js";

export const CONTEXT_CONTRACT = {
  mutableFields: [
    "assignedOperatorNames",
    "globalEffects",
    "goldProductionLines",
    "intermediateParameters",
    "intermediateEvaluationOrder",
    "supportAssignments",
    "supportOperatorIds",
    "supportOperatorNames",
  ],
  readonlyFields: [
    "catalog",
    "roster",
    "powerPlants",
    "dormOperators",
    "dormitoryLevel",
    "meetingRoomLevel",
    "collectionIntervalHours",
    "shiftDurationHours",
    "operatorByName",
    "operatorById",
    "ownedOperatorNames",
    "ownedOperators",
  ],
};

export function cloneContextForSupportAssignments(context, ownedOperators, roster, supportAssignments) {
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

export function collectFacilityOperatorIds(facilities) {
  return new Set(
    facilities.flatMap((facility) => (facility.selected || []).map((candidate) => candidate.operator.id))
  );
}

export function createSimulationContext(catalog, roster, ownedOperators, layout, objective, settings) {
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
    dormitoryLevel: clampInteger(settings.dormitoryLevel ?? 5, 0, 5),
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

export function normalizeSupportAssignments(assignments = {}, layout, operatorById, ownedOperatorIds) {
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
