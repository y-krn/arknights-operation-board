import { activeBaseSkills } from "./roster.js";
import { isHandledBySkillRegistry } from "./effects/skill-handler-registry.js";

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
  return isHandledBySkillRegistry(skill);
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
