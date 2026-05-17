export function countPlacedOperatorsWithTag(candidates, tag, context) {
  const names = new Set(context.assignedOperatorNames);
  for (const candidate of candidates) names.add(candidate.operator.name);
  let count = 0;
  for (const name of names) {
    const operator = context.operatorByName.get(name);
    if (operator && operatorMatchesTag(operator, tag, context.catalog)) count += 1;
  }
  return count;
}

export function operatorMatchesTag(operator, tag, catalog) {
  const dictionary = catalog.tagDictionary?.[tag];
  if (!dictionary) return false;
  return dictionary.operatorNames.includes(operator.name);
}

export function countSelectedWithTag(candidates, tag, catalog) {
  return candidates.filter((candidate) => operatorMatchesTag(candidate.operator, tag, catalog)).length;
}

export function countSelectedSkillFamily(candidates, tag, catalog) {
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

export function convertedSkillFamilySources(candidates, toTag) {
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

export function tagLabel(tag, catalog) {
  return catalog.tagDictionary?.[tag]?.label || tag;
}

export function skillFamilyLabel(tag, catalog) {
  return catalog.skillFamilyDictionary?.[tag]?.label || tag;
}
