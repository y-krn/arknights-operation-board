import { round } from "../numbers.js";
import { INTERMEDIATE_PARAMETERS } from "./intermediate-parameters.js";

function textOf(skill) {
  return skill.description || "";
}

function intermediateValue(context, key) {
  return Number(context.intermediateParameters?.[key] || 0);
}

function buildEffect({ value, detail, effectType, approximate }) {
  if (value <= 0) return null;
  return { value, detail, effectType, approximate };
}

export const INTERMEDIATE_SKILL_EFFECT_HANDLERS = [
  {
    id: "manufacture-speed-per-worldly-worry",
    roomType: "MANUFACTURE",
    canHandle: (skill) => textOf(skill).includes("俗世之憂3につき") && textOf(skill).includes("製造効率+1"),
    evaluate: ({ context }) => {
      const worldlyWorry = intermediateValue(context, INTERMEDIATE_PARAMETERS.WORLDLY_WORRY);
      return buildEffect({
        value: Math.floor(worldlyWorry / 3),
        detail: "俗世之憂 " + round(worldlyWorry, 1),
        effectType: "manufactureSpeedPerWorldlyWorry",
        approximate: true,
      });
    },
  },
  {
    id: "manufacture-speed-per-catnip",
    roomType: "MANUFACTURE",
    canHandle: (skill) => textOf(skill).includes("マタタビ1個につき") && textOf(skill).includes("製造効率+1%"),
    evaluate: ({ context }) => {
      const catnip = intermediateValue(context, INTERMEDIATE_PARAMETERS.CATNIP);
      return {
        value: 5 + catnip,
        detail: "マタタビ " + round(catnip, 1),
        effectType: "manufactureSpeedPerCatnip",
        approximate: false,
      };
    },
  },
  {
    id: "trading-speed-per-catnip",
    roomType: "TRADING",
    canHandle: (skill) => textOf(skill).includes("マタタビ1個につき") && textOf(skill).includes("受注効率+3%"),
    evaluate: ({ context }) => {
      const catnip = intermediateValue(context, INTERMEDIATE_PARAMETERS.CATNIP);
      return {
        value: 5 + catnip * 3,
        detail: "マタタビ " + round(catnip, 1),
        effectType: "tradingSpeedPerCatnip",
        approximate: false,
      };
    },
  },
  {
    id: "trading-speed-per-worldly-worry",
    roomType: "TRADING",
    canHandle: (skill) => textOf(skill).includes("俗世之憂1につき") && textOf(skill).includes("受注効率+1%"),
    evaluate: ({ context }) => {
      const worldlyWorry = intermediateValue(context, INTERMEDIATE_PARAMETERS.WORLDLY_WORRY);
      return buildEffect({
        value: Math.floor(worldlyWorry),
        detail: "俗世之憂 " + round(worldlyWorry, 1),
        effectType: "tradingSpeedPerWorldlyWorry",
        approximate: false,
      });
    },
  },
  {
    id: "manufacture-speed-per-dungeon-meal",
    roomType: "MANUFACTURE",
    canHandle: (skill) => textOf(skill).includes("魔物料理1つにつき製造効率+1%"),
    evaluate: ({ context }) => {
      const dungeonMeal = intermediateValue(context, INTERMEDIATE_PARAMETERS.DUNGEON_MEAL);
      return buildEffect({
        value: Math.floor(dungeonMeal),
        detail: "魔物料理 " + round(dungeonMeal, 1),
        effectType: "manufactureSpeedPerDungeonMeal",
        approximate: false,
      });
    },
  },
  {
    id: "trading-speed-per-dungeon-meal",
    roomType: "TRADING",
    canHandle: (skill) => textOf(skill).includes("魔物料理1つにつき受注効率+1%"),
    evaluate: ({ context }) => {
      const dungeonMeal = intermediateValue(context, INTERMEDIATE_PARAMETERS.DUNGEON_MEAL);
      return buildEffect({
        value: Math.floor(dungeonMeal),
        detail: "魔物料理 " + round(dungeonMeal, 1),
        effectType: "tradingSpeedPerDungeonMeal",
        approximate: false,
      });
    },
  },
  {
    id: "convert-worldly-worry-to-witchcraft-crystal",
    roomType: "MANUFACTURE",
    canHandle: (skill) => textOf(skill).includes("5の俗世之憂が1の巫術の結晶に転化される"),
    evaluate: ({ context }) => {
      const worldlyWorry = intermediateValue(context, INTERMEDIATE_PARAMETERS.WORLDLY_WORRY);
      const value = Math.floor(worldlyWorry / 5);
      if (value <= 0) return null;
      return {
        value: 0,
        detail: "巫術の結晶 " + value,
        effectType: "convertWorldlyWorryToWitchcraftCrystal",
        approximate: true,
      };
    },
  },
  {
    id: "manufacture-speed-per-witchcraft-crystal",
    roomType: "MANUFACTURE",
    canHandle: (skill) => textOf(skill).includes("巫術の結晶1につき") && textOf(skill).includes("製造効率+"),
    evaluate: ({ skill, context }) => {
      const worldlyWorry = intermediateValue(context, INTERMEDIATE_PARAMETERS.WORLDLY_WORRY);
      const crystal = Math.floor(worldlyWorry / 5);
      const match = textOf(skill).match(/巫術の結晶1につき、製造効率\+(\d+)%/);
      const valuePerCrystal = match ? Number(match[1]) : 0;
      return buildEffect({
        value: crystal * valuePerCrystal,
        detail: "巫術の結晶 " + crystal,
        effectType: "manufactureSpeedPerWitchcraftCrystal",
        approximate: true,
      });
    },
  },
];

export function findIntermediateSkillEffectHandler(skill, roomType) {
  return INTERMEDIATE_SKILL_EFFECT_HANDLERS.find((handler) => handler.roomType === roomType && handler.canHandle(skill)) || null;
}

export function isIntermediateSkillEffectHandled(skill) {
  return INTERMEDIATE_SKILL_EFFECT_HANDLERS.some((handler) => handler.canHandle(skill));
}

export function evaluateIntermediateSkillEffect(skill, roomType, product, context) {
  const handler = findIntermediateSkillEffectHandler(skill, roomType);
  return handler?.evaluate({ skill, roomType, product, context }) || null;
}
