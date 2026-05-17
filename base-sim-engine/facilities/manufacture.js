import { DEFAULT_FACILITY_LEVEL } from "../constants.js";
import { chooseManufactureProducts } from "../layout.js";
import { calculateFacilityCapacity } from "./capacity.js";
import {
  buildRoomCandidates,
  rankCandidatesForDisplay,
  selectManufactureCandidates,
} from "../room-selection.js";

export function planManufacture(catalog, operators, roster, layout, objective, context, usedOperatorIds) {
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
