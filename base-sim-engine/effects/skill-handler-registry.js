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
      return text.includes("宿舎中のオペレーター1人につき、知覚情報+1")
        || (text.includes("宿舎にいるオペレーター1人につき、俗世之憂+1") && text.includes("俗世之憂1につき、受注効率+1%"))
        || (text.includes("俗世之憂+15") && text.includes("知覚情報+10") && text.includes("体力が12"))
        || text.includes("宿舎にいるオペレーター1人につきパッション+1")
        || (text.includes("ウルサス学生自治団") && text.includes("ウルサスドリンク+1"))
        || (text.includes("レインボー小隊") && text.includes("情報備蓄+1"))
        || text.includes("5の俗世之憂が1の巫術の結晶に転化される")
        || (text.includes("巫術の結晶1につき") && text.includes("製造効率+"))
        || (text.includes("魔物料理1つにつき") && (text.includes("製造効率+1%") || text.includes("受注効率+1%")))
        || (text.includes("宿舎配置時、配置宿舎のレベル1につき") && text.includes("魔物料理+1"))
        || (text.includes("俗世之憂3につき") && text.includes("製造効率+1"))
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
      return text.includes("ウルサスドリンク1本につき、保管上限+2")
        || (text.includes("保管上限1上昇につき") && text.includes("製造効率+2%"))
        || text.includes("配属オペレーター各自の保管上限増加値")
        || (/保管上限[+-]\d+|注文上限[+-]\d+|レベル1ごとに注文上限\+\d+/.test(text) && !/(増加量|差が|オーダー数|発動数)/.test(text))
        || (text.includes("製造所に配置中のオペレーター1名につき") && text.includes("保管上限+"))
        || (text.includes("ラインテク系スキルの発動数1につき") && text.includes("保管上限+"))
        || (text.includes("注文上限増加量1につき") && text.includes("受注効率+4%"))
        || (text.includes("注文上限増加量5につき") && text.includes("受注効率+25%"))
        || text.includes("オーダー数と注文上限数の差")
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
