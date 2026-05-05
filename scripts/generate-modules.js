import fs from "node:fs";
import path from "node:path";

const sourceDir = "/Users/ottan/Downloads/outputs";
const characterTable = JSON.parse(fs.readFileSync(path.join(sourceDir, "character_table.json"), "utf8"));
const uniEquipTable = JSON.parse(fs.readFileSync(path.join(sourceDir, "uniequip_table.json"), "utf8"));
const battleEquipTable = JSON.parse(fs.readFileSync(path.join(sourceDir, "battle_equip_table.json"), "utf8"));

const attributeLabels = {
  max_hp: "HP",
  atk: "攻撃力",
  def: "防御力",
  magic_resistance: "術耐性",
  attack_speed: "攻撃速度",
  cost: "配置コスト",
  block_cnt: "ブロック数",
  respawn_time: "再配置時間",
};

const slotLabels = {
  D: "Δ",
};

function moduleSlot(value) {
  return slotLabels[value] || value || "";
}

function cleanText(value, blackboard = {}) {
  if (!value) return "";
  return String(value)
    .replace(/\{(-?)([^}:]+)(?::([^}]+))?\}/g, (match, sign, key, format) => {
      if (!Object.prototype.hasOwnProperty.call(blackboard, key)) return match;
      const raw = Number(blackboard[key]);
      if (!Number.isFinite(raw)) return blackboard[key];
      const value = sign === "-" ? -raw : raw;
      if (format?.includes("%")) {
        const digits = format.includes(".0") ? 1 : 0;
        return `${(value * 100).toFixed(digits).replace(/\.0$/, "")}%`;
      }
      if (format?.includes(".0")) return value.toFixed(1).replace(/\.0$/, "");
      return Number.isInteger(value) ? String(value) : String(value).replace(/\.0$/, "");
    })
    .replace(/<@[^>]+>/g, "")
    .replace(/<\$[^>]+>/g, "")
    .replace(/<\/>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function phaseEffects(phase) {
  const effects = [];
  for (const part of phase?.parts || []) {
    const traitCandidates = part.overrideTraitDataBundle?.candidates || [];
    const talentCandidates = part.addOrOverrideTalentDataBundle?.candidates || [];
    for (const candidate of traitCandidates) {
      const text = cleanText(candidate.additionalDescription || candidate.overrideDescripton, candidate.blackboard);
      if (text) effects.push(text);
    }
    for (const candidate of talentCandidates) {
      const text = cleanText(candidate.upgradeDescription || candidate.description, candidate.blackboard);
      if (text) effects.push(text);
    }
  }
  return [...new Set(effects)];
}

function phaseAttributes(phase) {
  return Object.entries(phase?.attributeBlackboard || {})
    .filter(([, value]) => Number(value) !== 0)
    .map(([key, value]) => ({
      key,
      label: attributeLabels[key] || key,
      value: Number(value),
    }));
}

const charNames = new Map(Object.entries(characterTable).map(([charId, info]) => [charId, info.name]));
const modulesByOperator = {};

for (const equipId of Object.keys(uniEquipTable.equipDict).sort()) {
  const equip = uniEquipTable.equipDict[equipId];
  if (equip.type !== "ADVANCED") continue;
  const operatorName = charNames.get(equip.charId);
  if (!operatorName) continue;
  const battle = battleEquipTable[equipId];
  const maxPhase = [...(battle?.phases || [])].sort((a, b) => b.equipLevel - a.equipLevel)[0];
  const moduleInfo = {
    slot: moduleSlot(equip.typeName2),
    rawSlot: equip.typeName2 || "",
    equipId,
    name: equip.uniEquipName,
    typeName: [equip.typeName1, moduleSlot(equip.typeName2)].filter(Boolean).join("-"),
    unlock: `昇進2 Lv${equip.unlockLevel || equip.showLevel || 1}`,
    level: maxPhase?.equipLevel || 1,
    attributes: phaseAttributes(maxPhase),
    effects: phaseEffects(maxPhase),
    description: cleanText(equip.uniEquipDesc),
  };
  modulesByOperator[operatorName] ||= [];
  modulesByOperator[operatorName].push(moduleInfo);
}

for (const modules of Object.values(modulesByOperator)) {
  modules.sort((a, b) => a.slot.localeCompare(b.slot, "ja") || a.name.localeCompare(b.name, "ja"));
}

const outputJson = `${JSON.stringify(modulesByOperator, null, 2)}\n`;
fs.writeFileSync(path.join("data", "module_catalog.json"), outputJson);
fs.writeFileSync("modules.js", `window.OPERATION_BOARD_MODULES = ${outputJson}`);

console.log(`Generated ${Object.keys(modulesByOperator).length} operator module entries.`);
