import { DEFAULT_FACILITY_LEVEL } from "../constants.js";
import { calculateFacilityCapacity } from "./capacity.js";
import {
  buildRoomCandidates,
  rankCandidatesForDisplay,
  selectBestRoomCandidates,
} from "../room-selection.js";

export function planTrading(catalog, operators, roster, layout, context, usedOperatorIds) {
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
