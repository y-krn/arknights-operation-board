export function registerAssignedOperators(context, plans) {
  for (const room of plans) {
    for (const candidate of room.selected) context.assignedOperatorNames.add(candidate.operator.name);
  }
}
