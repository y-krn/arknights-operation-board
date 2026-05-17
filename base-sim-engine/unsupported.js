import { activeBaseSkills } from "./roster.js";
import { parseMoraleEffects } from "./effects/morale-effects.js";

export function collectUnsupportedSkills(operators, roster) {
  const warnings = new Map();
  for (const operator of operators) {
    for (const skill of activeBaseSkills(operator, roster[operator.id])) {
      if (!["MANUFACTURE", "TRADING", "CONTROL", "POWER", "DORMITORY"].includes(skill.roomType)) continue;
      if (skill.supported) continue;
      if (isSkillSupportedByManualEvaluator(skill)) continue;
      const classification = classifyUnsupportedSkill(skill);
      if (classification.visibility === "ignore") continue;
      const current = warnings.get(skill.buffId) || {
        buffId: skill.buffId,
        buffName: skill.buffName,
        roomType: skill.roomType,
        operators: [],
        description: skill.description,
        conditionTags: skill.conditionTags || [],
        intermediateRefs: skill.intermediateRefs || [],
        category: classification.category,
        reason: classification.reason,
        priority: classification.priority,
      };
      if (!current.operators.includes(operator.name)) current.operators.push(operator.name);
      warnings.set(skill.buffId, current);
    }
  }
  return [...warnings.values()]
    .sort((a, b) => a.priority - b.priority || a.category.localeCompare(b.category) || a.buffName.localeCompare(b.buffName, "ja"))
    .slice(0, 32);
}

function isSkillSupportedByManualEvaluator(skill) {
  const text = skill.description || "";
  if (parseMoraleEffects(skill).length > 0) return true;
  if (text.includes("宿舎中のオペレーター1人につき、知覚情報+1")) return true;
  if (text.includes("宿舎にいるオペレーター1人につき、俗世之憂+1") && text.includes("俗世之憂1につき、受注効率+1%")) return true;
  if (text.includes("俗世之憂+15") && text.includes("知覚情報+10") && text.includes("体力が12")) return true;
  if (text.includes("宿舎にいるオペレーター1人につきパッション+1")) return true;
  if (text.includes("ウルサス学生自治団") && text.includes("ウルサスドリンク+1")) return true;
  if (text.includes("レインボー小隊") && text.includes("情報備蓄+1")) return true;
  if (text.includes("5の俗世之憂が1の巫術の結晶に転化される")) return true;
  if (text.includes("巫術の結晶1につき") && text.includes("製造効率+")) return true;
  if (text.includes("ウルサスドリンク1本につき、保管上限+2")) return true;
  if (text.includes("俗世之憂3につき") && text.includes("製造効率+1")) return true;
  if (text.includes("知覚情報") && (text.includes("思念連鎖") || text.includes("静かなる共鳴"))) return true;
  if (text.includes("パッション") && (text.includes("製造効率") || text.includes("受注効率") || text.includes("体力消費量"))) return true;
  if (text.includes("マタタビ")) return true;
  if (text.includes("保管上限1上昇につき") && text.includes("製造効率+2%")) return true;
  if (text.includes("配属オペレーター各自の保管上限増加値")) return true;
  if (/保管上限[+-]\d+|注文上限[+-]\d+|レベル1ごとに注文上限\+\d+/.test(text) && !/(増加量|差が|オーダー数|発動数)/.test(text)) return true;
  if (text.includes("製造所に配置中のオペレーター1名につき") && text.includes("保管上限+")) return true;
  if (text.includes("ラインテク系スキルの発動数1につき") && text.includes("保管上限+")) return true;
  if (text.includes("注文上限増加量1につき") && text.includes("受注効率+4%")) return true;
  if (text.includes("注文上限増加量5につき") && text.includes("受注効率+25%")) return true;
  if (text.includes("オーダー数と注文上限数の差") || text.includes("オーダー数が1につき")) return true;
  if (text.includes("アイルーと愉快な仲間たち") && (text.includes("全製造所の製造効率+2%") || text.includes("全貿易所の受注効率+7%"))) return true;
  if (text.includes("レッドパイン騎士団") && text.includes("作戦記録製造の製造効率+10%") && text.includes("金属製造の製造効率-10%")) return true;
  if (text.includes("ヘドリー") && text.includes("注文上限+")) return true;
  if (text.includes("イェラグ") && text.includes("注文上限+")) return true;
  if (text.includes("違約オーダー")) return true;
  if (text.includes("特別独占オーダー")) return true;
  return false;
}

function classifyUnsupportedSkill(skill) {
  const text = skill.description || "";
  if (["POWER", "DORMITORY"].includes(skill.roomType)) return { category: "supportFacility", reason: "発電所/宿舎の効果はMVP最適化では限定対応", priority: 6 };
  if (/手がかり|応接|事務|連絡速度|公開求人|訓練|加工|副産物/.test(text)) return { category: "outOfScope", reason: "現在のMVP指標外", priority: 9 };
  if (/高価値オーダー/.test(text)) return { category: "orderModel", reason: "高価値オーダーの注文価値モデルが未実装", priority: 1 };
  if (/純金生産ライン|金属.*作戦記録|作戦記録.*金属/.test(text)) return { category: "productFlow", reason: "製品ライン/製品間相互作用の追加整理が必要", priority: 2 };
  if (/俗世|知覚|思念|静かなる|パッション|マタタビ/.test(text) || (skill.intermediateRefs || []).length > 0) return { category: "intermediate", reason: "中間パラメータ式の未対応パターン", priority: 3 };
  if (/保管上限|注文上限|オーダー数/.test(text)) return { category: "capacity", reason: "上限/注文数モデルの未対応パターン", priority: 4 };
  if ((skill.conditionTags || []).length > 0) return { category: "tagCondition", reason: "タグ条件の未対応パターン", priority: 5 };
  if (/体力|疲労|宿舎/.test(text)) return { category: "morale", reason: "体力/休憩モデルの未対応パターン", priority: 6 };
  return { category: "manualRule", reason: "手書き evaluator が必要", priority: 7 };
}
