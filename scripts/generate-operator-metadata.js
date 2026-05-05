import fs from "node:fs";

const rarityLabels = {
  TIER_6: "★6",
  TIER_5: "★5",
  TIER_4: "★4",
  TIER_3: "★3",
  TIER_2: "★2",
  TIER_1: "★1",
};

const professionLabels = {
  PIONEER: "先鋒",
  WARRIOR: "前衛",
  TANK: "重装",
  SNIPER: "狙撃",
  CASTER: "術師",
  MEDIC: "医療",
  SUPPORT: "補助",
  SPECIAL: "特殊",
};

const catalog = JSON.parse(fs.readFileSync("data/operator_catalog.json", "utf8"));
const metadata = Object.fromEntries(
  catalog.map((operator) => [
    operator.name,
    {
      rarity: rarityLabels[operator.rarity] || "その他",
      profession: professionLabels[operator.profession] || "その他",
      sortIndex: operator.sortIndex || 99999,
    },
  ])
);

fs.writeFileSync("operator-metadata.js", `window.OPERATION_BOARD_OPERATOR_METADATA = ${JSON.stringify(metadata, null, 2)}\n`);
console.log(`Generated metadata for ${Object.keys(metadata).length} operators.`);
