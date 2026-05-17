import fs from "node:fs";

const DEFAULT_BUILDING_DATA = "/Users/ottan/Downloads/outputs/building_data.json";
const DEFAULT_CHARACTER_TABLE = "/Users/ottan/Downloads/outputs/character_table.json";
const DEFAULT_GAMEDATA_CONST = "/Users/ottan/Downloads/outputs/gamedata_const.json";
const DEFAULT_JSON_OUTPUT = "data/base_sim_catalog.json";
const DEFAULT_JS_OUTPUT = "base-sim-catalog.js";

const [buildingPath = DEFAULT_BUILDING_DATA, characterPath = DEFAULT_CHARACTER_TABLE, constPath = DEFAULT_GAMEDATA_CONST] = process.argv.slice(2);

const buildingData = JSON.parse(fs.readFileSync(buildingPath, "utf8"));
const characterTable = JSON.parse(fs.readFileSync(characterPath, "utf8"));
const gamedataConst = JSON.parse(fs.readFileSync(constPath, "utf8"));
const overrides = JSON.parse(fs.readFileSync("data/base_skill_rule_overrides.json", "utf8"));

const TAG_SUMMARY_ROOM_TYPES = new Set(["CONTROL", "MANUFACTURE", "TRADING", "POWER", "HIRE", "MEETING", "DORMITORY"]);

const SKILL_FAMILY_RULES = {
  "$cc.sk.manu1": { label: "標準化系スキル", buffNamePattern: /標準化/, descriptionPattern: /標準化系/ },
  "$cc.sk.manu2": { label: "ラインテク系スキル", buffNamePattern: /ラインテク/, descriptionPattern: /ラインテク系/ },
  "$cc.sk.manu3": { label: "レッドパイン系スキル", buffNamePattern: /レッドパイン/, descriptionPattern: /レッドパイン系/ },
  "$cc.sk.manu4": { label: "金属工芸系スキル", buffNamePattern: /金属工芸/, descriptionPattern: /金属工芸系/ },
};

const rarityOrder = {
  TIER_6: 6,
  TIER_5: 5,
  TIER_4: 4,
  TIER_3: 3,
  TIER_2: 2,
  TIER_1: 1,
};

const cleanText = (value = "") =>
  value
    .replace(/<@cc\.[^>]+>/g, "")
    .replace(/<\/>/g, "")
    .replace(/<\$cc\.[^>]+>/g, "")
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/\s+/g, " ")
    .trim();

const mapTarget = (target) => {
  if (target === "F_EXP") return "EXP";
  if (target === "F_GOLD") return "GOLD";
  if (target === "F_DIAMOND") return "DIAMOND";
  return "ANY";
};


const extractTaggedRefs = (description) => {
  const refs = [];
  const pattern = /<\$(cc\.[^>]+)><@cc\.([^>]+)>([^<]+)<\/><\/>/g;
  for (const match of description.matchAll(pattern)) {
    refs.push({
      tag: "$" + match[1],
      kind: match[2],
      label: cleanText(match[3]),
    });
  }
  return refs;
};

const extractIntermediateRefs = (description) => {
  const refs = [];
  const pattern = /<\$(cc\.bd[^>]+)><@cc\.rem>([^<]+)<\/><\/>/g;
  for (const match of description.matchAll(pattern)) {
    refs.push({ tag: `$${match[1]}`, name: cleanText(match[2]) });
  }
  return refs;
};


const tagCategory = (tag) => {
  if (tag.startsWith("$cc.bd")) return "intermediate";
  if (tag.startsWith("$cc.g.")) return "faction";
  if (tag.startsWith("$cc.tag.")) return "operatorTag";
  if (tag.startsWith("$cc.sk.")) return "skillFamily";
  if (tag.startsWith("$cc.c.room")) return "roomScope";
  if (tag.startsWith("$cc.c.")) return "specialCondition";
  if (tag.startsWith("$cc.t.")) return "tradeOrTrainingState";
  if (tag.startsWith("$cc.w.")) return "workshopState";
  if (tag.startsWith("$cc.m.")) return "manufactureState";
  if (tag.startsWith("$cc.tra.")) return "tradingState";
  return "other";
};

const tagImplementationHint = (tag) => {
  if (tag === "$cc.c.room3") return "ready";
  if (tag === "$cc.c.room2") return "ready";
  if (tag.startsWith("$cc.g.") || tag.startsWith("$cc.tag.") || tag.startsWith("$cc.sk.")) return "needsDictionary";
  if (["$cc.bd_a1", "$cc.bd_A", "$cc.bd_B", "$cc.bd_b1", "$cc.bd_mujica", "$cc.bd_felyne", "$cc.bd.costdrop"].includes(tag)) return "ready";
  if (tag.startsWith("$cc.bd")) return "needsIntermediateEvaluator";
  if (tag === "$cc.t.flow_gold") return "ready";
  return "manualRule";
};


const parseOperatorNames = (description = "") => {
  const marker = "対象オペレーター：";
  const index = description.indexOf(marker);
  if (index === -1) return [];
  return description
    .slice(index + marker.length)
    .split(/[、,，\n]/)
    .map((name) => cleanText(name).replace(/。$/, ""))
    .filter(Boolean);
};

const buildTagDictionary = (termDescriptionDict = {}) => {
  const dictionary = {};
  for (const [termId, term] of Object.entries(termDescriptionDict)) {
    const tag = "$" + termId;
    if (!tag.startsWith("$cc.g.") && !tag.startsWith("$cc.tag.")) continue;
    const operatorNames = parseOperatorNames(term.description || "");
    if (operatorNames.length === 0) continue;
    dictionary[tag] = {
      tag,
      label: term.termName || termId,
      category: tagCategory(tag),
      operatorNames,
    };
  }
  return dictionary;
};


const buildSkillFamilyDictionary = (buffs = {}) => {
  const dictionary = {};
  for (const [tag, rule] of Object.entries(SKILL_FAMILY_RULES)) {
    const matchedBuffs = Object.entries(buffs)
      .filter(([, buff]) => buff.roomType === "MANUFACTURE" && rule.buffNamePattern.test(buff.buffName || ""))
      .map(([buffId, buff]) => ({
        buffId,
        buffName: buff.buffName,
        skillIcon: buff.skillIcon || "",
      }))
      .sort((a, b) => a.buffId.localeCompare(b.buffId));
    dictionary[tag] = {
      tag,
      label: rule.label,
      category: "skillFamily",
      buffIds: matchedBuffs.map((buff) => buff.buffId),
      skillIcons: [...new Set(matchedBuffs.map((buff) => buff.skillIcon).filter(Boolean))],
      buffs: matchedBuffs,
    };
  }
  return dictionary;
};

const buildTagSummary = (operators, tagDictionary = {}) => {
  const tags = new Map();
  for (const operator of operators) {
    for (const skill of operator.baseSkills) {
      if (!TAG_SUMMARY_ROOM_TYPES.has(skill.roomType)) continue;
      for (const conditionTag of skill.conditionTags || []) {
        const current = tags.get(conditionTag.tag) || {
          tag: conditionTag.tag,
          label: conditionTag.label,
          kind: conditionTag.kind,
          category: tagCategory(conditionTag.tag),
          implementationHint: tagDictionary[conditionTag.tag] ? "dictionaryResolved" : tagImplementationHint(conditionTag.tag),
          count: 0,
          roomTypes: [],
          examples: [],
        };
        current.count += 1;
        if (!current.roomTypes.includes(skill.roomType)) current.roomTypes.push(skill.roomType);
        if (current.examples.length < 5) {
          current.examples.push({
            operatorId: operator.id,
            operatorName: operator.name,
            buffId: skill.buffId,
            buffName: skill.buffName,
            roomType: skill.roomType,
          });
        }
        tags.set(conditionTag.tag, current);
      }
    }
  }
  return [...tags.values()].sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
};

const inferProducts = (buff, text) => {
  const fromTargets = (buff.targets || []).map(mapTarget).filter((target) => target !== "ANY");
  if (fromTargets.length > 0) return [...new Set(fromTargets)];
  if (/源石/.test(text)) return ["DIAMOND"];
  if (/作戦記録/.test(text)) return ["EXP"];
  if (/金属|純金/.test(text)) return ["GOLD"];
  return ["GOLD", "EXP"];
};

const parseSignedPercent = (text, metric) => {
  const escaped = metric.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = text.match(new RegExp(`${escaped}[^。、]*?([+-]\\d+(?:\\.\\d+)?)%`));
  return match ? Number(match[1]) : null;
};

const parseLastSignedPercent = (text, metric) => {
  const escaped = metric.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matches = [...text.matchAll(new RegExp(`${escaped}[^。、]*?([+-]\\d+(?:\\.\\d+)?)%`, "g"))];
  if (matches.length === 0) return null;
  return Number(matches[matches.length - 1][1]);
};

const inferTagConditionEffects = (buff, text, conditionTags) => {
  const effects = [];
  const resolvableTags = conditionTags.filter((conditionTag) => conditionTag.tag.startsWith("$cc.g.") || conditionTag.tag.startsWith("$cc.tag.") || conditionTag.tag.startsWith("$cc.sk.") || conditionTag.tag === "$cc.t.flow_gold");
  if (resolvableTags.length === 0) return effects;
  const hasMixedProductManufactureEffect = /作戦記録製造の製造効率\+\d+(?:\.\d+)?%.*金属製造の製造効率-\d+(?:\.\d+)?%/.test(text);

  for (const conditionTag of resolvableTags) {
    if (buff.roomType === "TRADING" && conditionTag.tag === "$cc.t.flow_gold") {
      const baseSpeed = /^貿易所配置時、受注効率\+(\d+(?:\.\d+)?)%/.exec(text);
      if (baseSpeed) {
        effects.push({ type: "tradingSpeed", value: Number(baseSpeed[1]), source: "auto" });
      }

      const speedPerLine = /純金生産ラインの数1につき、受注効率\+(\d+(?:\.\d+)?)%/.exec(text);
      if (speedPerLine) {
        effects.push({
          type: "tradingSpeedPerGoldLine",
          valuePerLine: Number(speedPerLine[1]),
          source: "autoFlowGold",
        });
      }

      const thresholdSpeed = /純金生産ラインの数(\d+)につき、追加で受注効率\+(\d+(?:\.\d+)?)%/.exec(text);
      if (thresholdSpeed) {
        effects.push({
          type: "tradingSpeedIfGoldLineCountAtLeast",
          threshold: Number(thresholdSpeed[1]),
          value: Number(thresholdSpeed[2]),
          source: "autoFlowGold",
        });
      }

      const thresholdLineBonus = /純金生産ラインの数(\d+)につき、配置貿易所の純金生産ラインの数追加で\+(\d+)/.exec(text);
      if (thresholdLineBonus) {
        effects.push({
          type: "goldLineBonusIfGoldLineCountAtLeast",
          threshold: Number(thresholdLineBonus[1]),
          bonusLines: Number(thresholdLineBonus[2]),
          source: "autoFlowGold",
        });
      }

      const durinLineBonus = /ドゥリン族オペレーター1人につき（最大(\d+)人）、配置貿易所の純金生産ラインの数1\+/.exec(text);
      if (durinLineBonus) {
        effects.push({
          type: "goldLineBonusPerTaggedBaseOperator",
          tag: "$cc.tag.durin",
          maxOperators: Number(durinLineBonus[1]),
          bonusLinesPerOperator: 1,
          source: "autoFlowGold",
        });
      }
      continue;
    }

    if (buff.roomType === "MANUFACTURE" && conditionTag.tag.startsWith("$cc.sk.")) {
      const speed = parseSignedPercent(text, "製造効率");
      if (speed !== null && /スキルの発動数1につき/.test(text)) {
        effects.push({
          type: "manufactureSpeedPerSkillFamilyInSameRoom",
          valuePerSkill: speed,
          tag: conditionTag.tag,
          products: inferProducts(buff, text),
          source: "autoSkillFamilyCondition",
        });
      }

      if (conditionTag.tag === "$cc.sk.manu2" && /すべて.*標準化系/.test(text)) {
        effects.push({
          type: "convertSkillFamiliesInSameRoom",
          fromTags: ["$cc.sk.manu2", "$cc.sk.manu3"],
          toTag: "$cc.sk.manu1",
          source: "autoSkillFamilyCondition",
        });
      }
      continue;
    }

    if (buff.roomType === "CONTROL") {
      const manufactureSpeed = parseSignedPercent(text, "製造効率");
      if (!hasMixedProductManufactureEffect && manufactureSpeed !== null && /製造所に配置/.test(text) && /1人につき/.test(text)) {
        effects.push({
          type: "manufactureSpeedForTaggedOperator",
          value: manufactureSpeed,
          tag: conditionTag.tag,
          products: inferProducts(buff, text),
          source: "autoTagCondition",
        });
      }

      const tradingSpeed = parseSignedPercent(text, "受注効率");
      if (tradingSpeed !== null && /貿易所に配置/.test(text) && /1人につき/.test(text)) {
        effects.push({
          type: "tradingSpeedForTaggedOperator",
          value: tradingSpeed,
          tag: conditionTag.tag,
          source: "autoTagCondition",
        });
      }
    }

    if (buff.roomType === "MANUFACTURE") {
      const speed = parseSignedPercent(text, "製造効率");
      if (speed !== null && /(配置製造所|同じ製造所)/.test(text) && /1(?:人|体|つ)につき|数1につき/.test(text)) {
        effects.push({
          type: "manufactureSpeedPerTaggedOperatorInSameRoom",
          valuePerOperator: speed,
          tag: conditionTag.tag,
          products: inferProducts(buff, text),
          source: "autoTagCondition",
        });
      }
    }

    if (buff.roomType === "TRADING") {
      const type = /1人につき/.test(text)
          ? "tradingSpeedPerTaggedOperatorInSameRoom"
          : "tradingSpeedIfTaggedOperatorInSameRoom";
      const speed = type === "tradingSpeedPerTaggedOperatorInSameRoom"
        ? parseSignedPercent(text, "受注効率")
        : parseLastSignedPercent(text, "受注効率");
      if (speed !== null && /(同じ貿易所|配置貿易所)/.test(text)) {
        effects.push({
          type,
          valuePerOperator: type === "tradingSpeedPerTaggedOperatorInSameRoom" ? speed : undefined,
          value: type === "tradingSpeedIfTaggedOperatorInSameRoom" ? speed : undefined,
          tag: conditionTag.tag,
          source: "autoTagCondition",
        });
      }
    }
  }

  return effects;
};

const inferEffects = (buffId, buff) => {
  const description = buff.description || "";
  const text = cleanText(description);
  const conditionTags = extractTaggedRefs(description);
  const override = overrides[buffId] || null;
  const effects = [];

  if (override) {
    effects.push({ ...override, source: "override" });
  }

  if (buff.roomType === "MANUFACTURE") {
    const speed = parseSignedPercent(text, "製造効率");
    if (speed !== null && !/につき|ごと|転化|発電所1か所/.test(text)) {
      effects.push({
        type: "manufactureSpeed",
        value: speed,
        products: inferProducts(buff, text),
        source: "auto",
      });
    }
  }

  if (buff.roomType === "TRADING") {
    const speed = parseSignedPercent(text, "受注効率");
    if (speed !== null && !/につき|ごと|転化/.test(text)) {
      effects.push({
        type: "tradingSpeed",
        value: speed,
        source: "auto",
      });
    }
  }

  effects.push(...inferTagConditionEffects(buff, text, conditionTags));
  const normalizedEffects = effects.map((effect) => Object.fromEntries(Object.entries(effect).filter(([, value]) => value !== undefined)));
  return [...new Map(normalizedEffects.map((effect) => [JSON.stringify(effect), effect])).values()];
};

const buffs = buildingData.buffs || {};
const operators = Object.entries(buildingData.chars || {})
  .map(([charId, buildingChar]) => {
    const character = characterTable[charId];
    if (!character?.name) return null;
    const baseSkills = [];
    for (const [slotIndex, group] of (buildingChar.buffChar || []).entries()) {
      for (const [slotRank, buffData] of (group.buffData || []).entries()) {
        const buff = buffs[buffData.buffId];
        if (!buff) continue;
        const description = buff.description || "";
        baseSkills.push({
          buffId: buffData.buffId,
          buffName: buff.buffName,
          roomType: buff.roomType,
          slotIndex,
          slotRank,
          condition: buffData.cond || {},
          targets: buff.targets || [],
          skillIcon: buff.skillIcon || "",
          products: inferProducts(buff, cleanText(description)),
          description: cleanText(description),
          rawDescription: description,
          conditionTags: extractTaggedRefs(description),
          intermediateRefs: extractIntermediateRefs(description),
          effects: inferEffects(buffData.buffId, buff),
          supported: inferEffects(buffData.buffId, buff).some((effect) =>
            [
              "manufactureSpeed",
              "tradingSpeed",
              "tradingSpeedPerRoomLevel",
              "powerPlantManufacture",
              "rosmontisManufacture",
              "ebenholzTrading",
              "tradingSpeedPerNamedOperatorInWorkFacility",
              "manufactureSpeedForTaggedOperator",
              "tradingSpeedForTaggedOperator",
              "manufactureSpeedPerTaggedOperatorInSameRoom",
              "tradingSpeedPerTaggedOperatorInSameRoom",
              "tradingSpeedIfTaggedOperatorInSameRoom",
              "tradingSpeedPerGoldLine",
              "tradingSpeedIfGoldLineCountAtLeast",
              "goldLineBonusIfGoldLineCountAtLeast",
              "goldLineBonusPerTaggedBaseOperator",
              "manufactureSpeedPerSkillFamilyInSameRoom",
              "convertSkillFamiliesInSameRoom"
            ].includes(effect.type)
          ),
        });
      }
    }
    return {
      id: charId,
      name: character.name,
      rarity: character.rarity || "TIER_1",
      rarityValue: rarityOrder[character.rarity] || 1,
      profession: character.profession || "OTHER",
      baseSkills,
    };
  })
  .filter(Boolean)
  .sort((a, b) => b.rarityValue - a.rarityValue || a.name.localeCompare(b.name, "ja"));

const tagDictionary = buildTagDictionary(gamedataConst.termDescriptionDict || {});
const skillFamilyDictionary = buildSkillFamilyDictionary(buffs);
const conditionDictionary = { ...tagDictionary, ...skillFamilyDictionary };
const tagSummary = buildTagSummary(operators, conditionDictionary);

const catalog = {
  generatedAt: new Date().toISOString(),
  source: {
    buildingData: buildingPath,
    characterTable: characterPath,
    gamedataConst: constPath,
  },
  products: {
    GOLD: { label: "純金", baseUnitsPerDay: 20, value: 500 },
    EXP: { label: "作戦記録", baseUnitsPerDay: 8, value: 1000 },
  },
  trade: {
    label: "龍門幣",
    baseLmdPerDay: 12000,
  },
  tagSummary,
  tagDictionary,
  skillFamilyDictionary,
  operators,
};

fs.writeFileSync(DEFAULT_JSON_OUTPUT, `${JSON.stringify(catalog, null, 2)}\n`);
fs.writeFileSync(
  DEFAULT_JS_OUTPUT,
  `window.BASE_SIM_CATALOG = ${JSON.stringify(catalog, null, 2)};\n`
);

const supportedSkills = operators.flatMap((operator) => operator.baseSkills).filter((skill) => skill.supported).length;
console.log(`Generated ${operators.length} operators and ${supportedSkills} supported base skills.`);
