import { isCapacityVariableEffectHandled } from "./capacity-effect-handlers.js";
import { isIntermediateGenerationSkillHandled } from "./intermediate-generation-handlers.js";
import { isIntermediateSkillEffectHandled } from "./intermediate-skill-handlers.js";
import { parseMoraleEffects } from "./morale-effects.js";

function textOf(skill) {
  return skill.description || "";
}

export const SKILL_HANDLER_REGISTRY = [
  {
    id: "morale-effects",
    category: "morale",
    canHandle: (skill) => parseMoraleEffects(skill).length > 0,
  },
  {
    id: "intermediate-parameters",
    category: "intermediate",
    canHandle: (skill) => {
      const text = textOf(skill);
      return isIntermediateGenerationSkillHandled(skill)
        || isIntermediateSkillEffectHandled(skill)
        || (text.includes("知覚情報") && (text.includes("思念連鎖") || text.includes("静かなる共鳴")))
        || (text.includes("パッション") && (text.includes("製造効率") || text.includes("受注効率") || text.includes("体力消費量")))
        || text.includes("マタタビ");
    },
  },
  {
    id: "capacity-and-orders",
    category: "capacity",
    canHandle: (skill) => {
      const text = textOf(skill);
      return isCapacityVariableEffectHandled(skill)
        || text.includes("ウルサスドリンク1本につき、保管上限+2")
        || (/保管上限[+-]\d+|注文上限[+-]\d+|レベル1ごとに注文上限\+\d+/.test(text) && !/(増加量|差が|オーダー数|発動数)/.test(text))
        || (text.includes("ラインテク系スキルの発動数1につき") && text.includes("保管上限+"))
        || text.includes("オーダー数が1につき");
    },
  },
  {
    id: "global-and-tag-effects",
    category: "global",
    canHandle: (skill) => {
      const text = textOf(skill);
      return (text.includes("アイルーと愉快な仲間たち") && (text.includes("全製造所の製造効率+2%") || text.includes("全貿易所の受注効率+7%")))
        || (text.includes("レッドパイン騎士団") && text.includes("作戦記録製造の製造効率+10%") && text.includes("金属製造の製造効率-10%"))
        || (text.includes("ヘドリー") && text.includes("注文上限+"))
        || (text.includes("イェラグ") && text.includes("注文上限+"));
    },
  },
  {
    id: "order-model",
    category: "orderModel",
    canHandle: (skill) => {
      const text = textOf(skill);
      return text.includes("違約オーダー") || text.includes("特別独占オーダー");
    },
  },
];

export function findSkillHandler(skill) {
  return SKILL_HANDLER_REGISTRY.find((handler) => handler.canHandle(skill)) || null;
}

export function isHandledBySkillRegistry(skill) {
  return Boolean(findSkillHandler(skill));
}


export const UNSUPPORTED_SKILL_CLASSIFIERS = [
  {
    category: "supportFacility",
    reason: "発電所/宿舎の効果はMVP最適化では限定対応",
    priority: 6,
    matches: (skill) => ["POWER", "DORMITORY"].includes(skill.roomType),
  },
  {
    category: "outOfScope",
    reason: "現在のMVP指標外",
    priority: 9,
    matches: (skill) => /手がかり|応接|事務|連絡速度|公開求人|訓練|加工|副産物/.test(textOf(skill)),
  },
  {
    category: "orderModel",
    reason: "高価値オーダーの注文価値モデルが未実装",
    priority: 1,
    matches: (skill) => /高価値オーダー/.test(textOf(skill)),
  },
  {
    category: "productFlow",
    reason: "製品ライン/製品間相互作用の追加整理が必要",
    priority: 2,
    matches: (skill) => /純金生産ライン|金属.*作戦記録|作戦記録.*金属/.test(textOf(skill)),
  },
  {
    category: "intermediate",
    reason: "中間パラメータ式の未対応パターン",
    priority: 3,
    matches: (skill) => /俗世|知覚|思念|静かなる|パッション|マタタビ/.test(textOf(skill)) || (skill.intermediateRefs || []).length > 0,
  },
  {
    category: "capacity",
    reason: "上限/注文数モデルの未対応パターン",
    priority: 4,
    matches: (skill) => /保管上限|注文上限|オーダー数/.test(textOf(skill)),
  },
  {
    category: "tagCondition",
    reason: "タグ条件の未対応パターン",
    priority: 5,
    matches: (skill) => (skill.conditionTags || []).length > 0,
  },
  {
    category: "morale",
    reason: "体力/休憩モデルの未対応パターン",
    priority: 6,
    matches: (skill) => /体力|疲労|宿舎/.test(textOf(skill)),
  },
];

export function classifyUnsupportedSkill(skill) {
  return UNSUPPORTED_SKILL_CLASSIFIERS.find((classifier) => classifier.matches(skill)) || {
    category: "manualRule",
    reason: "手書き evaluator が必要",
    priority: 7,
  };
}
