import { round } from "../numbers.js";

export const INTERMEDIATE_PARAMETERS = {
  WORLDLY_WORRY: "worldlyWorry",
  PERCEPTUAL_INFO: "perceptualInfo",
  THOUGHT_CHAIN: "thoughtChain",
  SILENT_RESONANCE: "silentResonance",
  PASSION: "passion",
  CATNIP: "catnip",
  URSUS_DRINK: "ursusDrink",
  INFO_RESERVE: "infoReserve",
  WITCHCRAFT_CRYSTAL: "witchcraftCrystal",
  DUNGEON_MEAL: "dungeonMeal",
};

export const INTERMEDIATE_PARAMETER_DEFINITIONS = [
  { key: INTERMEDIATE_PARAMETERS.WORLDLY_WORRY, label: "俗世之憂" },
  { key: INTERMEDIATE_PARAMETERS.PERCEPTUAL_INFO, label: "知覚情報" },
  { key: INTERMEDIATE_PARAMETERS.THOUGHT_CHAIN, label: "思念連鎖", sourceKey: INTERMEDIATE_PARAMETERS.PERCEPTUAL_INFO },
  { key: INTERMEDIATE_PARAMETERS.SILENT_RESONANCE, label: "静かなる共鳴", sourceKey: INTERMEDIATE_PARAMETERS.PERCEPTUAL_INFO },
  { key: INTERMEDIATE_PARAMETERS.PASSION, label: "パッション" },
  { key: INTERMEDIATE_PARAMETERS.CATNIP, label: "マタタビ" },
  { key: INTERMEDIATE_PARAMETERS.URSUS_DRINK, label: "ウルサスドリンク" },
  { key: INTERMEDIATE_PARAMETERS.INFO_RESERVE, label: "情報備蓄" },
  { key: INTERMEDIATE_PARAMETERS.WITCHCRAFT_CRYSTAL, label: "巫術の結晶" },
  { key: INTERMEDIATE_PARAMETERS.DUNGEON_MEAL, label: "魔物料理" },
];

export function createEmptyIntermediateParameters() {
  return Object.fromEntries(
    INTERMEDIATE_PARAMETER_DEFINITIONS
      .filter((definition) => !definition.sourceKey)
      .map((definition) => [definition.key, 0])
  );
}

export function finalizeIntermediateParameters(params) {
  return Object.fromEntries(
    INTERMEDIATE_PARAMETER_DEFINITIONS.map((definition) => [
      definition.key,
      round(params[definition.sourceKey || definition.key], 2),
    ])
  );
}
