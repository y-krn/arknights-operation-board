export function buildAlternatives(manufacturePlan, tradingPlan) {
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
