import fs from "node:fs";

const DEFAULT_BUILDING_DATA = "/Users/ottan/Downloads/outputs/building_data.json";
const DEFAULT_CHARACTER_TABLE = "/Users/ottan/Downloads/outputs/character_table.json";
const DEFAULT_OUTPUT = "data/base_intermediate_parameters.json";

const [buildingPath = DEFAULT_BUILDING_DATA, characterPath = DEFAULT_CHARACTER_TABLE, outputPath = DEFAULT_OUTPUT] =
  process.argv.slice(2);

const buildingData = JSON.parse(fs.readFileSync(buildingPath, "utf8"));
const characterTable = JSON.parse(fs.readFileSync(characterPath, "utf8"));

const cleanText = (value) =>
  value
    .replace(/<@cc\.[^>]+>/g, "")
    .replace(/<\/>/g, "")
    .replace(/<\$cc\.[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const extractParameterTags = (description) => {
  const tags = new Map();
  const pattern = /<\$(cc\.bd[^>]+)><@cc\.rem>([^<]+)<\/><\/>/g;
  for (const match of description.matchAll(pattern)) {
    const tag = `$${match[1]}`;
    if (!tags.has(tag)) {
      tags.set(tag, {
        tag,
        name: cleanText(match[2]),
      });
    }
  }
  return [...tags.values()];
};

const getContext = (description, tag) => {
  const token = `<${tag.slice(1)}>`;
  const index = description.indexOf(token);
  if (index === -1) {
    return cleanText(description).slice(0, 180);
  }
  return cleanText(description.slice(Math.max(0, index - 90), index + 220));
};

const classifyUse = (description, ref) => {
  const context = getContext(description, ref.tag);
  const plain = cleanText(description);
  const hasConversion = plain.includes("転化");
  const name = escapeRegExp(ref.name);
  const plusNearTag = new RegExp(`${name}[^。]{0,8}\\+|\\+[^。]{0,8}${name}`).test(context);
  const referencesValue =
    new RegExp(`${name}[^。]*(につき|ごと|上回る|以下|以上|下回る|場合|影響|参照|追加)`).test(context) ||
    new RegExp(`(につき|ごと|上回る|以下|以上|下回る|場合|影響|参照|追加)[^。]*${name}`).test(context);

  if (hasConversion && /転化/.test(context)) {
    return "converter";
  }
  if (plusNearTag || /生成|付与|獲得/.test(context)) {
    return "producer";
  }
  if (referencesValue) {
    return "consumer";
  }
  return "related";
};

const tagNameFromTag = (tag) => tag.replace(/^\$cc\./, "");

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buffHolders = new Map();
for (const [charId, charBuilding] of Object.entries(buildingData.chars || {})) {
  const operator = characterTable[charId] || {};
  const name = operator.name || charId;
  for (const slot of charBuilding.buffChar || []) {
    for (const buffData of slot.buffData || []) {
      if (!buffHolders.has(buffData.buffId)) {
        buffHolders.set(buffData.buffId, []);
      }
      buffHolders.get(buffData.buffId).push({
        id: charId,
        name,
        condition: buffData.cond || {},
      });
    }
  }
}

const parameters = new Map();
const conversionEdges = [];

for (const [buffId, buff] of Object.entries(buildingData.buffs || {})) {
  const refs = extractParameterTags(buff.description || "");
  if (refs.length === 0) {
    continue;
  }

  const entry = {
    buffId,
    buffName: buff.buffName,
    roomType: buff.roomType,
    description: cleanText(buff.description || ""),
    targets: buff.targets || [],
    operators: buffHolders.get(buffId) || [],
  };

  for (const ref of refs) {
    if (!parameters.has(ref.tag)) {
      parameters.set(ref.tag, {
        tag: ref.tag,
        key: tagNameFromTag(ref.tag),
        name: ref.name,
        producers: [],
        converters: [],
        consumers: [],
        related: [],
      });
    }

    const parameter = parameters.get(ref.tag);
    const kind = classifyUse(buff.description || "", ref);
    parameter[`${kind}s`]?.push(entry) ?? parameter.related.push(entry);
  }

  const plain = cleanText(buff.description || "");
  if (plain.includes("転化") && refs.length >= 2) {
    conversionEdges.push({
      buffId,
      buffName: buff.buffName,
      roomType: buff.roomType,
      from: refs[0],
      to: refs[refs.length - 1],
      description: entry.description,
      operators: entry.operators,
    });
  }
}

const output = {
  generatedAt: new Date().toISOString(),
  source: {
    buildingData: buildingPath,
    characterTable: characterPath,
  },
  notes: [
    "This table is extracted from building_data.json descriptions and buff ownership data.",
    "The producer/converter/consumer classification is heuristic; complex base skills still need explicit evaluator rules before optimization.",
  ],
  parameters: [...parameters.values()].sort((a, b) => a.key.localeCompare(b.key)),
  conversions: conversionEdges.sort((a, b) => a.buffId.localeCompare(b.buffId)),
};

fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Generated ${output.parameters.length} intermediate parameters at ${outputPath}.`);
console.log(`Detected ${output.conversions.length} conversion relations.`);
