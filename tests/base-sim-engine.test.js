import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import { createDefaultRoster, simulateBase } from "../base-sim-engine.js";

const catalog = {
  products: {
    GOLD: { label: "純金", baseUnitsPerDay: 20, value: 500 },
    EXP: { label: "作戦記録", baseUnitsPerDay: 8, value: 1000 },
  },
  trade: { label: "龍門幣", baseLmdPerDay: 12000 },
  operators: [
    {
      id: "gold",
      name: "Gold Worker",
      rarityValue: 4,
      baseSkills: [
        {
          buffId: "gold-speed",
          buffName: "金属工芸",
          roomType: "MANUFACTURE",
          condition: { level: 1 },
          supported: true,
          effects: [{ type: "manufactureSpeed", value: 30, products: ["GOLD"] }],
        },
      ],
    },
    {
      id: "exp",
      name: "Exp Worker",
      rarityValue: 4,
      baseSkills: [
        {
          buffId: "exp-speed",
          buffName: "作戦記録指導",
          roomType: "MANUFACTURE",
          condition: { level: 1 },
          supported: true,
          effects: [{ type: "manufactureSpeed", value: 35, products: ["EXP"] }],
        },
      ],
    },
    {
      id: "trade",
      name: "Trade Worker",
      rarityValue: 4,
      baseSkills: [
        {
          buffId: "trade-speed",
          buffName: "ペンギン急便",
          roomType: "TRADING",
          condition: { level: 1 },
          supported: true,
          effects: [{ type: "tradingSpeed", value: 30 }],
        },
      ],
    },
    {
      id: "weedy",
      name: "Weedy",
      rarityValue: 6,
      baseSkills: [
        {
          buffId: "auto",
          buffName: "シードラゴン",
          roomType: "MANUFACTURE",
          condition: { phase: "PHASE_2", level: 1 },
          supported: true,
          effects: [{ type: "powerPlantManufacture", percentPerPowerPlant: 15, products: ["GOLD", "EXP"], suppressesOtherOperators: true }]
        },
      ],
    },
  ],
};

function roundForTest(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round(Number(value || 0) * factor) / factor;
}

test("simulates objective-specific manufacture assignments", () => {
  const roster = createDefaultRoster(catalog);
  roster.weedy.owned = false;

  const lmd = simulateBase({ catalog, roster, baseLayout: { manufacture: 1, trading: 1, power: 3 }, objective: "lmd" });
  assert.equal(lmd.facilities[0].product, "GOLD");
  assert.equal(lmd.facilities[0].selected[0].operator.name, "Gold Worker");
  assert.equal(lmd.facilities[1].selected[0].operator.name, "Trade Worker");

  const exp = simulateBase({ catalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "exp" });
  assert.equal(exp.facilities[0].product, "EXP");
  assert.equal(exp.facilities[0].selected[0].operator.name, "Exp Worker");
});

test("applies power-plant scaled manufacture overrides", () => {
  const roster = createDefaultRoster(catalog);
  roster.gold.owned = false;
  roster.exp.owned = false;
  roster.trade.owned = false;

  const result = simulateBase({ catalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  assert.equal(result.facilities[0].selected[0].operator.name, "Weedy");
  assert.equal(result.facilities[0].selected[0].score, 45);
});

test("calculates fixed storage and order limits with fill hours", () => {
  const limitCatalog = {
    ...catalog,
    operators: [
      {
        id: "store",
        name: "Storage Worker",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "storage-limit",
            buffName: "倉庫整備",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、保管上限+6、製造効率+10%",
            effects: [{ type: "manufactureSpeed", value: 10, products: ["GOLD"] }],
          },
        ],
      },
      {
        id: "order",
        name: "Order Worker",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "order-limit",
            buffName: "注文管理",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            description: "貿易所配置時、受注効率+10%、注文上限+4",
            effects: [{ type: "tradingSpeed", value: 10 }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(limitCatalog);
  const result = simulateBase({ catalog: limitCatalog, roster, baseLayout: { manufacture: 1, trading: 1, power: 3 }, objective: "lmd" });

  const manufacture = result.facilities.find((facility) => facility.type === "MANUFACTURE");
  assert.equal(manufacture.capacity.base, 54);
  assert.equal(manufacture.capacity.bonus, 6);
  assert.equal(manufacture.capacity.effective, 60);
  assert.equal(manufacture.capacity.effectiveUnits, 30);
  assert.equal(manufacture.capacity.fillHours, 32.7);

  const trading = result.facilities.find((facility) => facility.type === "TRADING");
  assert.equal(trading.capacity.base, 10);
  assert.equal(trading.capacity.bonus, 4);
  assert.equal(trading.capacity.effective, 14);
  assert.equal(trading.capacity.fillHours, 38.2);
});

test("applies collection interval fullness efficiency to daily totals", () => {
  const fastCatalog = {
    ...catalog,
    operators: [
      {
        id: "fast",
        name: "Fast Worker",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "fast-speed",
            buffName: "高速製造",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 200, products: ["GOLD"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(fastCatalog);
  const result = simulateBase({
    catalog: fastCatalog,
    roster,
    baseLayout: { manufacture: 1, trading: 0, power: 3 },
    objective: "lmd",
    settings: { collectionIntervalHours: 24 },
  });
  const shiftFacility = result.shiftPlan.shifts[0].facilities[0];
  assert.equal(shiftFacility.capacity.fillHours, 10.8);
  assert.equal(shiftFacility.capacity.fullnessEfficiency, 0.45);
  assert.equal(result.shiftPlan.dailyAverages.goldUnitsPerDay, 27);
});

test("uses collection interval fullness efficiency when selecting operators", () => {
  const fullnessCatalog = {
    ...catalog,
    operators: [
      {
        id: "fast-suppressor",
        name: "Fast Suppressor",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "fast-suppressor-speed",
            buffName: "高速単独作業",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "powerPlantManufacture", percentPerPowerPlant: 34, products: ["GOLD"], suppressesOtherOperators: true }],
          },
        ],
      },
      {
        id: "steady-storage",
        name: "Steady Storage",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "steady-speed-storage",
            buffName: "長時間保管",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、製造効率+70%、保管上限+54",
            effects: [{ type: "manufactureSpeed", value: 70, products: ["GOLD"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(fullnessCatalog);
  const result = simulateBase({
    catalog: fullnessCatalog,
    roster,
    baseLayout: { manufacture: 1, trading: 0, power: 3 },
    objective: "lmd",
    settings: { collectionIntervalHours: 24 },
  });

  assert.equal(result.facilities[0].selected[0].operator.name, "Steady Storage");
  assert.equal(result.shiftPlan.shifts[0].facilities[0].capacity.fullnessEfficiency, 1);
});

test("converts storage and order limit bonuses into speed", () => {
  const limitReferenceCatalog = {
    ...catalog,
    operators: [
      {
        id: "vermeil",
        name: "ヴァーミル",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "storage-plus-8",
            buffName: "ウェストピッカー",
            roomType: "MANUFACTURE",
            slotIndex: 0,
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、保管上限+8、1時間ごとの体力消費量-0.25",
            effects: [],
          },
          {
            buffId: "storage-to-speed",
            buffName: "再利用",
            roomType: "MANUFACTURE",
            slotIndex: 1,
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、保管上限1上昇につき、製造効率+2%",
            effects: [],
          },
        ],
      },
      {
        id: "storage-helper",
        name: "Storage Helper",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "storage-plus-10",
            buffName: "倉庫整備",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、保管上限+10",
            effects: [],
          },
        ],
      },
      {
        id: "swire",
        name: "琳琅スワイヤー",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "trade-speed-20",
            buffName: "注文分配α",
            roomType: "TRADING",
            slotIndex: 0,
            condition: { level: 1 },
            supported: true,
            description: "貿易所配置時、受注効率+20%",
            effects: [{ type: "tradingSpeed", value: 20 }],
          },
          {
            buffId: "order-to-speed",
            buffName: "投資誘致",
            roomType: "TRADING",
            slotIndex: 1,
            condition: { level: 1 },
            supported: true,
            description: "貿易所配置時、配置貿易所の注文上限増加量1につき、受注効率+4%",
            effects: [],
          },
        ],
      },
      {
        id: "degenbrecher",
        name: "デーゲンブレヒャー",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "order-minus-6",
            buffName: "威風堂々",
            roomType: "TRADING",
            slotIndex: 0,
            slotRank: 1,
            condition: { level: 1 },
            supported: true,
            description: "貿易所配置時、受注効率+25%、注文上限-6（上限数最低1）",
            effects: [{ type: "tradingSpeed", value: 25 }],
          },
          {
            buffId: "order-step-speed",
            buffName: "王者の風格",
            roomType: "TRADING",
            slotIndex: 1,
            condition: { level: 1 },
            supported: true,
            description: "貿易所配置時、配置貿易所の注文上限増加量5につき、受注効率+25%、最大+100%まで",
            effects: [],
          },
        ],
      },
      {
        id: "order-helper",
        name: "Order Helper",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "order-plus-16",
            buffName: "交渉",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            description: "貿易所配置時、注文上限+16",
            effects: [],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(limitReferenceCatalog);

  const manufacture = simulateBase({ catalog: limitReferenceCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" }).facilities[0];
  assert.equal(manufacture.speed, 36);
  assert.equal(manufacture.capacity.bonus, 18);
  assert.equal(manufacture.selected[0].matched.some((skill) => skill.buffName.includes("再利用") && skill.value === 36), true);

  roster.degenbrecher.owned = false;
  const swireTrade = simulateBase({ catalog: limitReferenceCatalog, roster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd" }).facilities[0];
  assert.equal(swireTrade.speed, 84);
  assert.equal(swireTrade.capacity.bonus, 16);

  roster.degenbrecher.owned = true;
  roster.swire.owned = false;
  const degenTrade = simulateBase({ catalog: limitReferenceCatalog, roster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd" }).facilities[0];
  assert.equal(degenTrade.speed, 75);
  assert.equal(degenTrade.capacity.bonus, 10);
});

test("applies Bubble storage-limit conversion per operator and suppresses Reuse", () => {
  const bubbleCatalog = {
    ...catalog,
    operators: [
      {
        id: "bubble",
        name: "バブル",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "bubble-storage",
            buffName: "収集癖",
            roomType: "MANUFACTURE",
            slotIndex: 0,
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、保管上限+10、1時間ごとの体力消費量-0.25",
            effects: [],
          },
          {
            buffId: "bubble-convert",
            buffName: "大きい方がいい！",
            roomType: "MANUFACTURE",
            slotIndex: 1,
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、配属オペレーター各自の保管上限増加値が16以下の場合、増加値が1につき、製造効率+1%。保管上限増加値が16を超える場合、増加値1につき、製造効率+3%（「再利用」の効果より優先適用、重複不可）",
            effects: [],
          },
        ],
      },
      {
        id: "vermeil",
        name: "ヴァーミル",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "vermeil-storage",
            buffName: "ウェストピッカー",
            roomType: "MANUFACTURE",
            slotIndex: 0,
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、保管上限+8、1時間ごとの体力消費量-0.25",
            effects: [],
          },
          {
            buffId: "vermeil-reuse",
            buffName: "再利用",
            roomType: "MANUFACTURE",
            slotIndex: 1,
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、保管上限1上昇につき、製造効率+2%",
            effects: [],
          },
        ],
      },
      {
        id: "large-storage",
        name: "Large Storage",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "storage-plus-17",
            buffName: "大型倉庫",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、保管上限+17",
            effects: [],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(bubbleCatalog);
  const result = simulateBase({ catalog: bubbleCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  const facility = result.facilities[0];

  assert.equal(facility.capacity.bonus, 35);
  assert.equal(facility.speed, 69);
  assert.equal(facility.selected.some((candidate) => candidate.operator.name === "バブル"), true);
  assert.equal(facility.selected.some((candidate) => candidate.matched.some((skill) => skill.buffName.includes("再利用"))), false);
  assert.equal(facility.selected.find((candidate) => candidate.operator.name === "バブル").matched.some((skill) => skill.value === 69), true);
});

test("models Jaye order count and order-limit gap trading skills", () => {
  const jayeCatalog = {
    ...catalog,
    operators: [
      {
        id: "jaye",
        name: "ジェイ",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "order-gap",
            buffName: "露店の魚売り",
            roomType: "TRADING",
            slotIndex: 0,
            condition: { level: 1 },
            supported: false,
            description: "貿易所配置時、オーダー数と注文上限数の差が1につき、受注効率+4%",
            effects: [],
          },
          {
            buffId: "order-count",
            buffName: "下町の商売人",
            roomType: "TRADING",
            slotIndex: 1,
            condition: { phase: "PHASE_1", level: 1 },
            supported: false,
            description: "貿易所配置時、自身以外の配属オペレーターの受注効率が10%につき、注文上限-1（上限数最低1）。オーダー数が1につき、受注効率+4%（一部のスキルに対して特殊加算制限がある）",
            effects: [],
          },
        ],
      },
      {
        id: "helper",
        name: "Helper",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "helper-speed",
            buffName: "受注支援",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            description: "貿易所配置時、受注効率+30%",
            effects: [{ type: "tradingSpeed", value: 30 }],
          },
        ],
      },
    ],
  };

  const gapRoster = createDefaultRoster(jayeCatalog);
  gapRoster.jaye.phase = "PHASE_0";
  gapRoster.helper.owned = false;
  const gapResult = simulateBase({
    catalog: jayeCatalog,
    roster: gapRoster,
    baseLayout: { manufacture: 0, trading: 1, power: 3 },
    objective: "lmd",
    settings: { collectionIntervalHours: 6 },
  });
  assert.equal(gapResult.facilities[0].speed, 32);
  assert.equal(gapResult.facilities[0].capacity.currentOrders, 2);
  assert.equal(gapResult.facilities[0].capacity.orderLimitGap, 8);

  const countRoster = createDefaultRoster(jayeCatalog);
  const countResult = simulateBase({
    catalog: jayeCatalog,
    roster: countRoster,
    baseLayout: { manufacture: 0, trading: 1, power: 3 },
    objective: "lmd",
    settings: { collectionIntervalHours: 6 },
  });
  assert.equal(countResult.facilities[0].capacity.bonus, -3);
  assert.equal(countResult.facilities[0].capacity.effective, 7);
  assert.equal(countResult.facilities[0].capacity.currentOrders, 3);
  assert.equal(countResult.facilities[0].speed, 58);
  assert.equal(countResult.unsupported.some((warning) => warning.operators.includes("ジェイ")), false);
});

test("applies control-origin order limit bonuses to trading rooms", () => {
  const controlOrderCatalog = {
    ...catalog,
    tagDictionary: {
      "$cc.g.karlan": { tag: "$cc.g.karlan", label: "イェラグ", operatorNames: ["イェラグ商人"] },
    },
    operators: [
      {
        id: "wisadel",
        name: "ウィシャデル",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "accomplice-beta",
            buffName: "共犯者β",
            roomType: "CONTROL",
            condition: { phase: "PHASE_2", level: 1 },
            supported: false,
            description: "制御中枢配置時、ヘドリーが貿易所に配置されているとき、該当貿易所の注文上限+2",
            effects: [],
          },
        ],
      },
      {
        id: "hedley",
        name: "ヘドリー",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "hedley-trade",
            buffName: "最初の一歩β",
            roomType: "TRADING",
            condition: { phase: "PHASE_2", level: 1 },
            supported: true,
            description: "貿易所配置時、受注効率+30%",
            effects: [{ type: "tradingSpeed", value: 30 }],
          },
        ],
      },
      {
        id: "nosis",
        name: "ノーシス",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "karlan-researcher",
            buffName: "緻密な研究者",
            roomType: "CONTROL",
            condition: { phase: "PHASE_2", level: 1 },
            supported: false,
            description: "制御中枢配属時、貿易所に配属したイェラグオペレーターの受注効率-15%、注文上限+6。",
            effects: [],
          },
        ],
      },
      {
        id: "karlan-trader",
        name: "イェラグ商人",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "karlan-trade",
            buffName: "雪境物流",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            description: "貿易所配置時、受注効率+30%",
            effects: [{ type: "tradingSpeed", value: 30 }],
          },
        ],
      },
    ],
  };

  const wisadelRoster = createDefaultRoster(controlOrderCatalog);
  wisadelRoster.nosis.owned = false;
  wisadelRoster["karlan-trader"].owned = false;
  const wisadelResult = simulateBase({
    catalog: controlOrderCatalog,
    roster: wisadelRoster,
    baseLayout: { manufacture: 0, trading: 1, power: 3 },
    objective: "lmd",
    settings: { supportAssignments: { CONTROL: ["wisadel"] } },
  });
  const hedleyTrade = wisadelResult.facilities.find((facility) => facility.type === "TRADING");
  assert.equal(hedleyTrade.selected[0].operator.name, "ヘドリー");
  assert.equal(hedleyTrade.capacity.bonus, 2);
  assert.equal(hedleyTrade.capacity.bonuses.some((bonus) => bonus.buffName === "共犯者β" && bonus.operatorName === "ウィシャデル"), true);

  const nosisRoster = createDefaultRoster(controlOrderCatalog);
  nosisRoster.wisadel.owned = false;
  nosisRoster.hedley.owned = false;
  const nosisResult = simulateBase({
    catalog: controlOrderCatalog,
    roster: nosisRoster,
    baseLayout: { manufacture: 0, trading: 1, power: 3 },
    objective: "lmd",
    settings: { supportAssignments: { CONTROL: ["nosis"] } },
  });
  const karlanTrade = nosisResult.facilities.find((facility) => facility.type === "TRADING");
  assert.equal(karlanTrade.selected[0].operator.name, "イェラグ商人");
  assert.equal(karlanTrade.speed, 15);
  assert.equal(karlanTrade.capacity.bonus, 6);
  assert.equal(karlanTrade.selected[0].matched.some((skill) => skill.sourceSkillName === "緻密な研究者" && skill.value === -15), true);
});

test("models special trading order types as approximate value bonuses", () => {
  const orderTypeCatalog = {
    ...catalog,
    operators: [
      {
        id: "proviso",
        name: "プロヴァイゾ",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "contract-law",
            buffName: "契約法",
            roomType: "TRADING",
            slotIndex: 0,
            condition: { level: 1 },
            supported: false,
            description: "貿易所配置時、次に受注する金属オーダーの納品数が4を下回るならば、違約オーダーと見なす",
            effects: [],
          },
          {
            buffId: "breach-order",
            buffName: "違約金請求β",
            roomType: "TRADING",
            slotIndex: 1,
            condition: { phase: "PHASE_2", level: 1 },
            supported: false,
            description: "貿易所配置時、次に受注する金属オーダーが違約オーダーならば、純金の納品数が+2追加される",
            effects: [],
          },
        ],
      },
      {
        id: "pepe",
        name: "ペペ",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "special-order",
            buffName: "比類なき慧眼",
            roomType: "TRADING",
            condition: { phase: "PHASE_2", level: 1 },
            supported: false,
            description: "貿易所配置時、特別独占オーダー（違約オーダーと見なされない）を必ず受注し、かつこのタイプのオーダーは受注効率による影響を受けない",
            effects: [],
          },
        ],
      },
    ],
  };

  const provisoRoster = createDefaultRoster(orderTypeCatalog);
  provisoRoster.pepe.owned = false;
  const provisoResult = simulateBase({ catalog: orderTypeCatalog, roster: provisoRoster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd" });
  const proviso = provisoResult.facilities[0].selected[0];
  assert.equal(proviso.operator.name, "プロヴァイゾ");
  assert.equal(proviso.score, 44.44);
  assert.equal(proviso.approximate, true);
  assert.equal(provisoResult.unsupported.some((warning) => warning.operators.includes("プロヴァイゾ")), false);

  const pepeRoster = createDefaultRoster(orderTypeCatalog);
  pepeRoster.proviso.owned = false;
  const pepeResult = simulateBase({ catalog: orderTypeCatalog, roster: pepeRoster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd" });
  const pepe = pepeResult.facilities[0].selected[0];
  assert.equal(pepe.operator.name, "ペペ");
  assert.equal(pepe.score, 33.33);
  assert.equal(pepe.approximate, true);
  assert.equal(pepeResult.unsupported.some((warning) => warning.operators.includes("ペペ")), false);
});

test("models capacity-only storage and order limit skills", () => {
  const capacityOnlyCatalog = {
    ...catalog,
    skillFamilyDictionary: {
      "$cc.sk.manu2": { tag: "$cc.sk.manu2", label: "ラインテク系", buffIds: ["rhine-a", "rhine-b"] },
    },
    operators: [
      {
        id: "snegurochka",
        name: "スネグーラチカ",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "sneg-optimization",
            buffName: "工程最適化",
            roomType: "MANUFACTURE",
            condition: { phase: "PHASE_1", level: 1 },
            supported: false,
            description: "製造所配置時、自身以外の配属オペレーター全員の製造効率を0にする（施設の数量による製造効率上昇に影響なし）。製造所に配置中のオペレーター1名につき、配置製造所の製造効率+10%、保管上限+5",
            effects: [],
          },
        ],
      },
      { id: "filler-a", name: "Filler A", rarityValue: 3, baseSkills: [] },
      { id: "filler-b", name: "Filler B", rarityValue: 3, baseSkills: [] },
      {
        id: "astgenne",
        name: "溯光アステジーニ",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "rhine-storage",
            buffName: "探査用リュック",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: false,
            description: "製造所配置時、配置製造所のラインテク系スキルの発動数1につき、保管上限+5",
            effects: [],
          },
        ],
      },
      {
        id: "rhine-a",
        name: "Rhine A",
        rarityValue: 5,
        baseSkills: [{ buffId: "rhine-a", buffName: "ラインテクα", roomType: "MANUFACTURE", condition: { level: 1 }, supported: true, effects: [{ type: "manufactureSpeed", value: 30, products: ["GOLD", "EXP"] }] }],
      },
      {
        id: "rhine-b",
        name: "Rhine B",
        rarityValue: 5,
        baseSkills: [{ buffId: "rhine-b", buffName: "ラインテクβ", roomType: "MANUFACTURE", condition: { level: 1 }, supported: true, effects: [{ type: "manufactureSpeed", value: 30, products: ["GOLD", "EXP"] }] }],
      },
      {
        id: "fast-trader",
        name: "Fast Trader",
        rarityValue: 5,
        baseSkills: [{ buffId: "fast-trade", buffName: "高速受注", roomType: "TRADING", condition: { level: 1 }, supported: true, effects: [{ type: "tradingSpeed", value: 200 }] }],
      },
      {
        id: "pepe-host",
        name: "ペペ",
        rarityValue: 6,
        baseSkills: [{ buffId: "order-level", buffName: "招客", roomType: "TRADING", condition: { level: 1 }, supported: false, description: "貿易所配置時、配置貿易所のレベル1ごとに注文上限+1", effects: [] }],
      },
    ],
  };

  const snegRoster = createDefaultRoster(capacityOnlyCatalog);
  for (const id of ["astgenne", "rhine-a", "rhine-b", "fast-trader", "pepe-host"]) snegRoster[id].owned = false;
  const snegResult = simulateBase({ catalog: capacityOnlyCatalog, roster: snegRoster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  assert.equal(snegResult.facilities[0].speed, 30);
  assert.equal(snegResult.facilities[0].capacity.bonus, 15);
  assert.equal(snegResult.facilities[0].selected.length, 3);

  const astRoster = createDefaultRoster(capacityOnlyCatalog);
  for (const id of ["snegurochka", "filler-a", "filler-b", "fast-trader", "pepe-host"]) astRoster[id].owned = false;
  const astResult = simulateBase({ catalog: capacityOnlyCatalog, roster: astRoster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd", settings: { collectionIntervalHours: 24 } });
  assert.equal(astResult.facilities[0].capacity.bonus, 10);
  assert.equal(astResult.facilities[0].selected.some((candidate) => candidate.operator.name === "溯光アステジーニ"), true);

  const tradeRoster = createDefaultRoster(capacityOnlyCatalog);
  for (const id of ["snegurochka", "filler-a", "filler-b", "astgenne", "rhine-a", "rhine-b"]) tradeRoster[id].owned = false;
  const tradeResult = simulateBase({ catalog: capacityOnlyCatalog, roster: tradeRoster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd", settings: { collectionIntervalHours: 24 } });
  assert.equal(tradeResult.facilities[0].capacity.bonus, 3);
  assert.equal(tradeResult.facilities[0].selected.some((candidate) => candidate.operator.name === "ペペ"), true);
});


test("uses only the highest unlocked skill in the same base-skill slot", () => {
  const slotCatalog = {
    ...catalog,
    operators: [
      {
        id: "ptilopsis",
        name: "Ptilopsis",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "rh-alpha",
            buffName: "ラインテクα",
            roomType: "MANUFACTURE",
            slotIndex: 0,
            slotRank: 0,
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 15, products: ["GOLD", "EXP"] }],
          },
          {
            buffId: "rh-beta",
            buffName: "ラインテクβ",
            roomType: "MANUFACTURE",
            slotIndex: 0,
            slotRank: 1,
            condition: { phase: "PHASE_2", level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD", "EXP"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(slotCatalog);
  const result = simulateBase({ catalog: slotCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });

  assert.equal(result.facilities[0].selected[0].score, 25);
  assert.deepEqual(result.facilities[0].selected[0].matched.map((skill) => skill.buffName), ["ラインテクβ"]);
});


test("does not apply source-rock manufacture skills to gold production", () => {
  const diamondCatalog = {
    ...catalog,
    operators: [
      {
        id: "chestnut",
        name: "Chestnut",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "standard-alpha",
            buffName: "標準化α",
            roomType: "MANUFACTURE",
            slotIndex: 0,
            slotRank: 0,
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 15, products: ["GOLD", "EXP", "DIAMOND"] }],
          },
          {
            buffId: "geology-alpha",
            buffName: "地質学α",
            roomType: "MANUFACTURE",
            slotIndex: 1,
            slotRank: 0,
            condition: { phase: "PHASE_1", level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 30, products: ["DIAMOND"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(diamondCatalog);
  const result = simulateBase({ catalog: diamondCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });

  assert.equal(result.facilities[0].selected[0].score, 15);
  assert.deepEqual(result.facilities[0].selected[0].matched.map((skill) => skill.buffName), ["標準化α"]);
});


test("automation manufacture skills stack with each other but suppress normal operators", () => {
  const automationCatalog = {
    ...catalog,
    operators: [
      {
        id: "weedy",
        name: "Weedy",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "seedragon",
            buffName: "シードラゴン",
            roomType: "MANUFACTURE",
            condition: { phase: "PHASE_2", level: 1 },
            supported: true,
            effects: [{ type: "powerPlantManufacture", percentPerPowerPlant: 15, products: ["GOLD", "EXP"], suppressesOtherOperators: true }],
          },
        ],
      },
      {
        id: "automation-b",
        name: "Automation B",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "automation-b-speed",
            buffName: "自動化β",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "powerPlantManufacture", percentPerPowerPlant: 10, products: ["GOLD", "EXP"], suppressesOtherOperators: true }],
          },
        ],
      },
      {
        id: "helper-a",
        name: "Helper A",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "helper-a-speed",
            buffName: "標準化β",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD", "EXP"] }],
          },
        ],
      },
      {
        id: "helper-b",
        name: "Helper B",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "helper-b-speed",
            buffName: "ラインテクβ",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD", "EXP"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(automationCatalog);
  const result = simulateBase({ catalog: automationCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });

  assert.equal(result.facilities[0].speed, 75);
  assert.deepEqual(result.facilities[0].selected.map((candidate) => candidate.operator.name), ["Weedy", "Automation B"]);

  const normalWinsCatalog = { ...automationCatalog, operators: automationCatalog.operators.filter((operator) => operator.id !== "automation-b") };
  const normalWinsRoster = createDefaultRoster(normalWinsCatalog);
  const normalWinsResult = simulateBase({ catalog: normalWinsCatalog, roster: normalWinsRoster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  assert.equal(normalWinsResult.facilities[0].speed, 50);
  assert.deepEqual(normalWinsResult.facilities[0].selected.map((candidate) => candidate.operator.name), ["Helper A", "Helper B"]);

  const automationWinsCatalog = { ...automationCatalog, operators: automationCatalog.operators.filter((operator) => operator.id !== "helper-b") };
  const automationWinsRoster = createDefaultRoster(automationWinsCatalog);
  const automationWinsResult = simulateBase({ catalog: automationWinsCatalog, roster: automationWinsRoster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  assert.equal(automationWinsResult.facilities[0].speed, 75);
  assert.deepEqual(automationWinsResult.facilities[0].selected.map((candidate) => candidate.operator.name), ["Weedy", "Automation B"]);
});


test("generated display descriptions do not leak client markup tags", () => {
  const generated = JSON.parse(fs.readFileSync("data/base_sim_catalog.json", "utf8"));
  for (const operator of generated.operators) {
    for (const skill of operator.baseSkills) {
      assert.equal(skill.description.includes("<$cc"), false, `${operator.name} ${skill.buffName}`);
    }
  }
});

test("generated base catalog keeps raw descriptions and condition tags", () => {
  const generated = JSON.parse(fs.readFileSync("data/base_sim_catalog.json", "utf8"));
  const hoederer = generated.operators.find((operator) => operator.name === "ヘドリー");
  const skill = hoederer.baseSkills.find((baseSkill) => baseSkill.buffName === "最初の一歩β");

  assert.match(skill.rawDescription, /<\$cc\.c\.room3>/);
  assert.deepEqual(skill.conditionTags, [{ tag: "$cc.c.room3", kind: "kw", label: "作業施設" }]);
  assert.equal(skill.description.includes("<$cc"), false);
});


test("generated base catalog includes classified condition tag summary", () => {
  const generated = JSON.parse(fs.readFileSync("data/base_sim_catalog.json", "utf8"));
  const room3 = generated.tagSummary.find((tag) => tag.tag === "$cc.c.room3");
  const skillFamily = generated.tagSummary.find((tag) => tag.tag === "$cc.sk.manu2");
  const intermediate = generated.tagSummary.find((tag) => tag.tag === "$cc.bd_b1");

  assert.equal(room3.category, "roomScope");
  assert.equal(room3.implementationHint, "ready");
  assert.equal(skillFamily.category, "skillFamily");
  assert.equal(skillFamily.implementationHint, "dictionaryResolved");
  assert.equal(intermediate.category, "intermediate");
  assert.equal(intermediate.implementationHint, "ready");
  assert.ok(room3.examples.some((example) => example.operatorName === "ヘドリー"));
});


test("generated base catalog resolves faction and operator-tag dictionaries from gamedata const", () => {
  const generated = JSON.parse(fs.readFileSync("data/base_sim_catalog.json", "utf8"));
  const r6Dictionary = generated.tagDictionary["$cc.g.R6"];
  const knightDictionary = generated.tagDictionary["$cc.tag.knight"];
  const r6Summary = generated.tagSummary.find((tag) => tag.tag === "$cc.g.R6");
  const knightSummary = generated.tagSummary.find((tag) => tag.tag === "$cc.tag.knight");

  assert.equal(r6Dictionary.category, "faction");
  assert.ok(r6Dictionary.operatorNames.includes("Ela"));
  assert.equal(knightDictionary.category, "operatorTag");
  assert.ok(knightDictionary.operatorNames.includes("ヴィヴィアナ"));
  assert.equal(r6Summary.implementationHint, "dictionaryResolved");
  assert.equal(knightSummary.implementationHint, "dictionaryResolved");
});


test("applies named work-facility trading bonuses from overrides", () => {
  const hedleyCatalog = {
    ...catalog,
    operators: [
      {
        id: "hedley",
        name: "ヘドリー",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "hedley-beta",
            buffName: "最初の一歩β",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            effects: [
              { type: "tradingSpeed", value: 30 },
              { type: "tradingSpeedPerNamedOperatorInWorkFacility", valuePerOperator: 5, operatorNames: ["イネス", "W"] },
            ],
          },
        ],
      },
      { id: "ines", name: "イネス", rarityValue: 6, baseSkills: [] },
      { id: "w", name: "W", rarityValue: 6, baseSkills: [] },
    ],
  };
  const roster = createDefaultRoster(hedleyCatalog);
  const result = simulateBase({
    catalog: hedleyCatalog,
    roster,
    baseLayout: { manufacture: 0, trading: 1, power: 3 },
    objective: "balance",
    settings: { supportAssignments: { POWER: ["ines"] } },
  });

  assert.equal(result.facilities[0].selected[0].operator.name, "ヘドリー");
  assert.equal(result.facilities[0].selected[0].score, 40);
  assert.ok(result.facilities[0].selected[0].matched.some((skill) => skill.buffName.includes("イネス/W")));

  roster.w.owned = false;
  const onePartner = simulateBase({
    catalog: hedleyCatalog,
    roster,
    baseLayout: { manufacture: 0, trading: 1, power: 3 },
    objective: "balance",
    settings: { supportAssignments: { POWER: ["ines"] } },
  });
  assert.equal(onePartner.facilities[0].selected[0].score, 35);

  roster.ines.owned = false;
  const noPartner = simulateBase({ catalog: hedleyCatalog, roster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd" });
  assert.equal(noPartner.facilities[0].selected[0].score, 30);
});

test("applies control tag-dictionary manufacture bonuses to matching operators", () => {
  const tagCatalog = {
    ...catalog,
    tagDictionary: {
      "$cc.tag.knight": { tag: "$cc.tag.knight", label: "騎士", category: "operatorTag", operatorNames: ["Knight Worker"] },
    },
    operators: [
      {
        id: "viviana",
        name: "ヴィヴィアナ",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "candle-knight",
            buffName: "燭騎士の微光",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeedForTaggedOperator", value: 7, tag: "$cc.tag.knight", products: ["GOLD", "EXP"] }],
          },
        ],
      },
      {
        id: "knight-worker",
        name: "Knight Worker",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "knight-base",
            buffName: "標準化",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 20, products: ["GOLD", "EXP"] }],
          },
        ],
      },
      {
        id: "normal-worker",
        name: "Normal Worker",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "normal-base",
            buffName: "標準化β",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD", "EXP"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(tagCatalog);
  const result = simulateBase({
    catalog: tagCatalog,
    roster,
    baseLayout: { manufacture: 1, trading: 0, power: 3 },
    objective: "balance",
    settings: { supportAssignments: { CONTROL: ["viviana"], POWER: [] } },
  });
  const knight = result.facilities[0].selected.find((candidate) => candidate.operator.name === "Knight Worker");

  assert.equal(knight.score, 27);
  assert.ok(knight.matched.some((skill) => skill.buffName.includes("ヴィヴィアナ")));
});

test("applies same-room faction tag bonuses while selecting room candidates", () => {
  const glasgowCatalog = {
    ...catalog,
    tagDictionary: {
      "$cc.g.glasgow": { tag: "$cc.g.glasgow", label: "グラスゴー", category: "faction", operatorNames: ["Morgan", "Siege"] },
    },
    operators: [
      {
        id: "morgan",
        name: "Morgan",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "glasgow-compass",
            buffName: "ギャングのコンパス",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "tradingSpeedPerTaggedOperatorInSameRoom", valuePerOperator: 20, tag: "$cc.g.glasgow" }],
          },
        ],
      },
      { id: "siege", name: "Siege", rarityValue: 6, baseSkills: [] },
      {
        id: "trade-helper",
        name: "Trade Helper",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "helper-trade",
            buffName: "受注効率",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "tradingSpeed", value: 15 }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(glasgowCatalog);
  const result = simulateBase({ catalog: glasgowCatalog, roster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd" });

  assert.deepEqual(result.facilities[0].selected.map((candidate) => candidate.operator.name), ["Morgan", "Trade Helper", "Siege"]);
  assert.equal(result.facilities[0].selected[0].score, 40);
  assert.equal(result.facilities[0].speed, 55);
});


test("generated base catalog resolves manufacture skill families from buff ids and skill icons", () => {
  const generated = JSON.parse(fs.readFileSync("data/base_sim_catalog.json", "utf8"));
  const standard = generated.skillFamilyDictionary["$cc.sk.manu1"];
  const rhine = generated.skillFamilyDictionary["$cc.sk.manu2"];
  const metal = generated.skillFamilyDictionary["$cc.sk.manu4"];
  const rhineSummary = generated.tagSummary.find((tag) => tag.tag === "$cc.sk.manu2");

  assert.ok(standard.buffIds.includes("manu_prod_spd[010]"));
  assert.ok(rhine.buffIds.includes("manu_prod_spd[011]"));
  assert.ok(rhine.skillIcons.includes("bskill_man_spd2"));
  assert.ok(metal.buffIds.includes("manu_formula_spd[110]"));
  assert.equal(rhineSummary.implementationHint, "dictionaryResolved");
});

test("applies same-room manufacture skill-family bonuses", () => {
  const familyCatalog = {
    ...catalog,
    skillFamilyDictionary: {
      "$cc.sk.manu2": {
        tag: "$cc.sk.manu2",
        label: "ラインテク系スキル",
        buffIds: ["line-beta"],
        skillIcons: ["bskill_man_spd2"],
      },
    },
    operators: [
      {
        id: "dorothy",
        name: "Dorothy",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "arts-theory",
            buffName: "アーツ理論応用",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeedPerSkillFamilyInSameRoom", valuePerSkill: 5, tag: "$cc.sk.manu2", products: ["GOLD", "EXP"] }],
          },
          {
            buffId: "line-beta",
            buffName: "ラインテクβ",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD", "EXP"] }],
          },
        ],
      },
      {
        id: "line-worker",
        name: "Line Worker",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "line-beta",
            buffName: "ラインテクβ",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD", "EXP"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(familyCatalog);
  const result = simulateBase({ catalog: familyCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  const dorothy = result.facilities[0].selected.find((candidate) => candidate.operator.name === "Dorothy");

  assert.equal(dorothy.score, 35);
  assert.ok(dorothy.matched.some((skill) => skill.buffName.includes("ラインテク系スキル x2")));
});

test("applies manufacture skill-family conversion effects", () => {
  const conversionCatalog = {
    ...catalog,
    skillFamilyDictionary: {
      "$cc.sk.manu1": { tag: "$cc.sk.manu1", label: "標準化系スキル", buffIds: ["standard-beta"], skillIcons: ["bskill_man_spd2"] },
      "$cc.sk.manu2": { tag: "$cc.sk.manu2", label: "ラインテク系スキル", buffIds: ["line-beta"], skillIcons: ["bskill_man_spd2"] },
    },
    operators: [
      {
        id: "mizuki",
        name: "Mizuki",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "mind-link",
            buffName: "意識連結",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeedPerSkillFamilyInSameRoom", valuePerSkill: 5, tag: "$cc.sk.manu1", products: ["GOLD", "EXP"] }],
          },
        ],
      },
      {
        id: "highmore",
        name: "Highmore",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "skill-change",
            buffName: "意識統一",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "convertSkillFamiliesInSameRoom", fromTags: ["$cc.sk.manu2"], toTag: "$cc.sk.manu1" }],
          },
          {
            buffId: "standard-beta",
            buffName: "標準化β",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD", "EXP"] }],
          },
        ],
      },
      {
        id: "line-worker",
        name: "Line Worker",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "line-beta",
            buffName: "ラインテクβ",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD", "EXP"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(conversionCatalog);
  const result = simulateBase({ catalog: conversionCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  const mizuki = result.facilities[0].selected.find((candidate) => candidate.operator.name === "Mizuki");

  assert.equal(mizuki.score, 10);
  assert.ok(mizuki.matched.some((skill) => skill.buffName.includes("標準化系スキル x2")));
});


test("excludes training-only tags from generated condition tag summary", () => {
  const generated = JSON.parse(fs.readFileSync("data/base_sim_catalog.json", "utf8"));
  const trainingOnly = generated.tagSummary.find((tag) => tag.tag === "$cc.t.accmuguard1");
  const knight = generated.tagSummary.find((tag) => tag.tag === "$cc.tag.knight");

  assert.equal(trainingOnly, undefined);
  assert.deepEqual(knight.roomTypes, ["CONTROL"]);
});


test("generated base catalog extracts pure-gold production line effects", () => {
  const generated = JSON.parse(fs.readFileSync("data/base_sim_catalog.json", "utf8"));
  const pozyomka = generated.operators.find((operator) => operator.name === "パゼオンカ");
  const catchCopy = pozyomka.baseSkills.find((skill) => skill.buffName === "キャッチコピー");
  const kirara = generated.operators.find((operator) => operator.name === "キララ");
  const visualization = kirara.baseSkills.find((skill) => skill.buffName === "注文フロー可視化・β");
  const flowGold = generated.tagSummary.find((tag) => tag.tag === "$cc.t.flow_gold");

  assert.deepEqual(catchCopy.effects, [{ type: "tradingSpeedPerGoldLine", valuePerLine: 5, source: "autoFlowGold" }]);
  assert.ok(visualization.effects.some((effect) => effect.type === "goldLineBonusIfGoldLineCountAtLeast" && effect.threshold === 2 && effect.bonusLines === 2));
  assert.equal(flowGold.implementationHint, "ready");
});

test("applies pure-gold production line trading bonuses", () => {
  const flowCatalog = {
    ...catalog,
    operators: [
      {
        id: "gold-maker",
        name: "Gold Maker",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "gold-speed",
            buffName: "金属工芸",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 1, products: ["GOLD"] }],
          },
        ],
      },
      {
        id: "pozyomka",
        name: "Pozyomka",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "catch-copy",
            buffName: "キャッチコピー",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "tradingSpeedPerGoldLine", valuePerLine: 5 }],
          },
        ],
      },
      {
        id: "kirara",
        name: "Kirara",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "flow-visualization",
            buffName: "注文フロー可視化β",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            effects: [
              { type: "tradingSpeed", value: 5 },
              { type: "goldLineBonusIfGoldLineCountAtLeast", threshold: 2, bonusLines: 2 },
            ],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(flowCatalog);
  const result = simulateBase({ catalog: flowCatalog, roster, baseLayout: { manufacture: 2, trading: 1, power: 3 }, objective: "lmd" });

  assert.deepEqual(result.facilities[2].selected.map((candidate) => candidate.operator.name), ["Pozyomka", "Kirara"]);
  assert.equal(result.facilities[2].selected[0].score, 20);
  assert.equal(result.facilities[2].speed, 25);
  assert.ok(result.facilities[2].selected[0].matched.some((skill) => skill.buffName.includes("純金生産ライン x4")));
});

test("applies Durin-based pure-gold production line additions", () => {
  const flowCatalog = {
    ...catalog,
    tagDictionary: {
      "$cc.tag.durin": { tag: "$cc.tag.durin", label: "ドゥリン族", category: "operatorTag", operatorNames: ["Durin Support"] },
    },
    operators: [
      {
        id: "gold-maker",
        name: "Gold Maker",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "gold-speed",
            buffName: "金属工芸",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 1, products: ["GOLD"] }],
          },
        ],
      },
      {
        id: "pozyomka",
        name: "Pozyomka",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "catch-copy",
            buffName: "キャッチコピー",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            effects: [
              { type: "tradingSpeedPerGoldLine", valuePerLine: 5 },
              { type: "goldLineBonusPerTaggedBaseOperator", tag: "$cc.tag.durin", maxOperators: 4, bonusLinesPerOperator: 1 },
            ],
          },
        ],
      },
      { id: "durin", name: "Durin Support", rarityValue: 4, baseSkills: [{ buffId: "hire", buffName: "人事", roomType: "HIRE", condition: { level: 1 }, supported: false, effects: [] }] },
    ],
  };
  const roster = createDefaultRoster(flowCatalog);
  const result = simulateBase({
    catalog: flowCatalog,
    roster,
    baseLayout: { manufacture: 2, trading: 1, power: 3 },
    objective: "lmd",
    settings: { supportAssignments: { POWER: ["durin"] } },
  });

  assert.equal(result.facilities[2].selected[0].score, 15);
  assert.ok(result.facilities[2].selected[0].matched.some((skill) => skill.buffName.includes("純金生産ライン x3")));
});


test("applies meeting room level trading bonuses", () => {
  const meetingCatalog = {
    ...catalog,
    tagDictionary: {},
    skillFamilyDictionary: {},
    operators: [
      {
        id: "vigil",
        name: "ヴィジェル",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "trade_ord_spd&meet[000]",
            buffName: "新都市貿易",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "tradingSpeedPerRoomLevel", roomType: "MEETING", baseValue: 25, valuePerLevel: 5, maxValue: 40 }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(meetingCatalog);
  const levelThree = simulateBase({ catalog: meetingCatalog, roster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd", settings: { meetingRoomLevel: 3 } });
  const levelOne = simulateBase({ catalog: meetingCatalog, roster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd", settings: { meetingRoomLevel: 1 } });

  assert.equal(levelThree.facilities[0].selected[0].score, 40);
  assert.equal(levelOne.facilities[0].selected[0].score, 30);
});

test("adds base morale change and skill morale modifiers to assigned operators", () => {
  const moraleCatalog = {
    ...catalog,
    operators: [
      {
        id: "cost-saver",
        name: "Cost Saver",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "cost-saver-skill",
            buffName: "省力化",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、製造効率+20%、1時間ごとの体力消費量-0.25",
            effects: [{ type: "manufactureSpeed", value: 20, products: ["GOLD", "EXP"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(moraleCatalog);
  const result = simulateBase({ catalog: moraleCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  const assigned = result.facilities[0].selected[0];

  assert.equal(assigned.morale.changePerHour, -0.75);
  assert.equal(assigned.morale.costPerHour, 0.75);
  assert.deepEqual(result.shiftPlan.shifts[0].facilities[0].selectedOperatorMorale[0], {
    operatorId: "cost-saver",
    operatorName: "Cost Saver",
    changePerHour: -0.75,
    costPerHour: 0.75,
    projectedCost: 18,
    restHours: 0,
    recoveryPerHour: 2,
    projectedRecovery: 0,
    maxMorale: 24,
    moraleAfterShift: 6,
    moraleAfterRest: 6,
    moraleTimeline: {
      startMorale: 24,
      endMorale: 6,
      threshold: 12,
      hoursAbove12: 16,
      hoursAtOrBelow12: 8,
      hoursBelow12: 8,
      hoursAbove12Ratio: 0.6667,
      hoursAtOrBelow12Ratio: 0.3333,
      hoursBelow12Ratio: 0.3333,
    },
    canCompleteShift: true,
    canRecoverForCycle: false,
    effects: assigned.morale.effects,
  });
});

test("flags shifts that exceed available morale", () => {
  const tiredCatalog = {
    ...catalog,
    operators: [
      {
        id: "tired",
        name: "Tired Worker",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "tired-skill",
            buffName: "過負荷",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、製造効率+20%、1時間ごとの体力消費量+2",
            effects: [{ type: "manufactureSpeed", value: 20, products: ["GOLD", "EXP"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(tiredCatalog);
  const result = simulateBase({ catalog: tiredCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  const shift = result.shiftPlan.shifts[0];

  assert.equal(shift.moraleStatus.canCompleteShift, false);
  assert.equal(shift.moraleStatus.canRecoverForCycle, false);
  assert.deepEqual(shift.moraleStatus.overLimitOperatorNames, ["Tired Worker"]);
  assert.equal(shift.moraleStatus.dailyEfficiency, 0.3333);
  assert.equal(shift.facilities[0].selectedOperatorMorale[0].projectedCost, 72);
  assert.equal(shift.facilities[0].selectedOperatorMorale[0].canCompleteShift, false);
  assert.equal(shift.facilities[0].productionEfficiency, 0.3333);
  assert.equal(result.totals.goldEquivalentLmdPerDay, 12000);
  assert.equal(shift.adjustedTotals.goldEquivalentLmdPerDay, 4000);
  assert.equal(result.shiftPlan.dailyAverages.goldEquivalentLmdPerDay, 4000);
});

test("prefers lower-efficiency operators when they avoid morale shortage", () => {
  const moraleAwareCatalog = {
    ...catalog,
    operators: [
      {
        id: "high-tired",
        name: "High Tired",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "high-tired-skill",
            buffName: "過負荷生産",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、製造効率+40%、1時間ごとの体力消費量+2",
            effects: [{ type: "manufactureSpeed", value: 40, products: ["GOLD"] }],
          },
        ],
      },
      {
        id: "steady",
        name: "Steady Worker",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "steady-skill",
            buffName: "安定生産",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 20, products: ["GOLD"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(moraleAwareCatalog);
  const result = simulateBase({ catalog: moraleAwareCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  const selected = result.facilities[0].selected;

  assert.deepEqual(selected.map((candidate) => candidate.operator.name), ["Steady Worker"]);
  assert.equal(result.shiftPlan.shifts[0].moraleStatus.canCompleteShift, true);
  assert.equal(result.shiftPlan.dailyAverages.goldEquivalentLmdPerDay, 12000);
});

test("prefers morale-feasible control center support", () => {
  const controlCatalog = {
    ...catalog,
    tagDictionary: {
      "$cc.tag.worker": { tag: "$cc.tag.worker", label: "作業員", category: "operatorTag", operatorNames: ["Tagged Worker"] },
    },
    operators: [
      {
        id: "control-high-tired",
        name: "Control High Tired",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "control-high-tired-skill",
            buffName: "過負荷管制",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、作業員の製造効率+50%、1時間ごとの体力消費量+2",
            effects: [{ type: "manufactureSpeedForTaggedOperator", value: 50, tag: "$cc.tag.worker", products: ["GOLD"] }],
          },
        ],
      },
      {
        id: "control-steady",
        name: "Control Steady",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "control-steady-skill",
            buffName: "安定管制",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeedForTaggedOperator", value: 10, tag: "$cc.tag.worker", products: ["GOLD"] }],
          },
        ],
      },
      {
        id: "tagged-worker",
        name: "Tagged Worker",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "tagged-work",
            buffName: "金属工芸",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 20, products: ["GOLD"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(controlCatalog);
  const result = simulateBase({ catalog: controlCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  const control = result.facilities.at(-1);

  assert.equal(control.selected[0].operator.name, "Control Steady");
  assert.equal(result.shiftPlan.shifts[0].moraleStatus.canCompleteShift, true);
});

test("models rest recovery for two-shift cycles", () => {
  const roster = createDefaultRoster(catalog);
  roster.weedy.owned = false;
  const result = simulateBase({ catalog, roster, baseLayout: { manufacture: 1, trading: 1, power: 3 }, objective: "lmd", settings: { shiftMode: "two-shift" } });
  const morale = result.shiftPlan.shifts[0].facilities[0].selectedOperatorMorale[0];

  assert.equal(result.shiftPlan.shifts[0].restHours, 12);
  assert.equal(morale.projectedCost, 12);
  assert.equal(morale.projectedRecovery, 24);
  assert.equal(morale.moraleAfterShift, 12);
  assert.equal(morale.moraleAfterRest, 24);
  assert.equal(morale.canCompleteShift, true);
  assert.equal(morale.canRecoverForCycle, true);
  assert.equal(result.shiftPlan.shifts[0].moraleStatus.canRecoverForCycle, true);
});

test("uses morale timeline to generate worldly worry for Shu manufacture", () => {
  const worldlyCatalog = {
    ...catalog,
    operators: [
      {
        id: "ling",
        name: "リィン",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "control-cost-to-bd",
            buffName: "山河遠闊たり",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、自身の体力が12を上回る時、俗世之憂+15。自身の体力が12を下回る時、知覚情報+10",
            effects: [],
          },
        ],
      },
      {
        id: "shu",
        name: "シュウ",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "shu-worldly",
            buffName: "稲禾厚く、秋に順ひて収む",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、俗世之憂3につき、製造効率+1%",
            effects: [],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(worldlyCatalog);
  const result = simulateBase({
    catalog: worldlyCatalog,
    roster,
    baseLayout: { manufacture: 1, trading: 0, power: 3 },
    objective: "lmd",
    settings: { supportAssignments: { CONTROL: ["ling"] } },
  });

  assert.equal(result.context.intermediateParameters.worldlyWorry, 7.5);
  assert.equal(result.facilities[0].selected[0].operator.name, "シュウ");
  assert.equal(result.facilities[0].selected[0].score, 2);
  assert.equal(result.facilities[0].selected[0].matched[0].detail, "俗世之憂 7.5");
  assert.equal(result.shiftPlan.shifts[0].facilities.at(-1).selectedOperators[0].morale.moraleTimeline.hoursAbove12Ratio, 0.5);
});

test("evaluates fixed intermediate values before morale-threshold intermediate values", () => {
  const orderedCatalog = {
    ...catalog,
    operators: [
      {
        id: "saki",
        name: "豊川祥子",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "control-passion-cost-to-bd",
            buffName: "逞しいお嬢様",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、パッション+20。パッションが40以上の場合、1時間ごとの体力消費量+0.05。自身の体力が12を上回る時、俗世之憂+15",
            effects: [],
          },
        ],
      },
      {
        id: "uika",
        name: "三角初華",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "control-dorm-passion",
            buffName: "アイドルのオーラ",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、宿舎にいるオペレーター1人につきパッション+1",
            effects: [],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(orderedCatalog);
  const result = simulateBase({
    catalog: orderedCatalog,
    roster,
    baseLayout: { manufacture: 0, trading: 0, power: 3 },
    objective: "lmd",
    settings: { dormOperators: 20, supportAssignments: { CONTROL: ["saki", "uika"] } },
  });
  const order = result.context.intermediateEvaluationOrder;
  const firstWorldlyWorryIndex = order.findIndex((entry) => entry.key === "worldlyWorry");
  const lastPassionIndex = order.reduce((lastIndex, entry, index) => entry.key === "passion" ? index : lastIndex, -1);

  assert.equal(result.context.intermediateParameters.passion, 40);
  assert.equal(result.context.intermediateParameters.worldlyWorry, 7.14);
  assert.equal(firstWorldlyWorryIndex > lastPassionIndex, true);
});

test("uses morale timeline to generate perceptual information", () => {
  const perceptualCatalog = {
    ...catalog,
    operators: [
      {
        id: "dusk",
        name: "シー",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "dusk-perceptual",
            buffName: "己を以て悲しまず",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、自身の1時間ごとの体力消費量+0.5。自身の体力が12を上回る時、知覚情報+10",
            effects: [],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(perceptualCatalog);
  const result = simulateBase({ catalog: perceptualCatalog, roster, baseLayout: { manufacture: 0, trading: 0, power: 3 }, objective: "lmd", settings: { supportAssignments: { CONTROL: ["dusk"] } } });

  assert.equal(result.context.intermediateParameters.perceptualInfo, 3.33);
  assert.equal(result.context.intermediateParameters.thoughtChain, 3.33);
  assert.equal(result.context.intermediateParameters.silentResonance, 3.33);
});

test("converts perceptual information to Rosmontis and Ebenholz intermediate values", () => {
  const conversionCatalog = {
    ...catalog,
    operators: [
      {
        id: "rosmontis",
        name: "ロスモンティス",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "manu_prod_spd_bd_n1[000]",
            buffName: "超感覚",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、宿舎中のオペレーター1人につき、知覚情報+1。1の知覚情報が1の思念連鎖に転化される",
            effects: [],
          },
          {
            buffId: "manu_prod_spd_bd[010]",
            buffName: "念力",
            roomType: "MANUFACTURE",
            condition: { phase: "PHASE_2", level: 1 },
            supported: true,
            effects: [{ type: "rosmontisManufacture", percentPerThoughtChain: 1, requiresSkill: "manu_prod_spd_bd_n1[000]", products: ["GOLD", "EXP"] }],
          },
        ],
      },
      {
        id: "ebenholz",
        name: "エーベンホルツ",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "trade_ord_spd_bd_n1[000]",
            buffName: "音感",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            description: "製造所配置時、宿舎中のオペレーター1人につき、知覚情報+1。1の知覚情報が1の静かなる共鳴に転化される",
            effects: [],
          },
          {
            buffId: "trade_ord_spd_bd[010]",
            buffName: "茫然たる和声",
            roomType: "TRADING",
            condition: { phase: "PHASE_2", level: 1 },
            supported: true,
            effects: [{ type: "ebenholzTrading", percentPerSilentResonance: 0.5, requiresSkill: "trade_ord_spd_bd_n1[000]" }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(conversionCatalog);
  const result = simulateBase({ catalog: conversionCatalog, roster, baseLayout: { manufacture: 1, trading: 1, power: 3 }, objective: "balance", settings: { dormOperators: 12 } });

  assert.equal(result.context.intermediateParameters.perceptualInfo, 24);
  assert.equal(result.context.intermediateParameters.thoughtChain, 24);
  assert.equal(result.context.intermediateParameters.silentResonance, 24);
  assert.equal(result.facilities.find((facility) => facility.type === "MANUFACTURE").selected[0].score, 24);
  assert.equal(result.facilities.find((facility) => facility.type === "TRADING").selected[0].score, 12);
});

test("applies passion control bonuses to gold manufacture and trading", () => {
  const passionCatalog = {
    ...catalog,
    operators: [
      {
        id: "saki",
        name: "豊川祥子",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "control_prod_bd_spd[010]",
            buffName: "豊富な職務経験",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、金属を製造する製造所の製造効率+1%、パッション20につき、製造効率が追加で+1%",
            effects: [],
          },
        ],
      },
      {
        id: "uika",
        name: "三角初華",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "control_dorm_bd[000]",
            buffName: "アイドルのオーラ",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、宿舎にいるオペレーター1人につきパッション+1",
            effects: [],
          },
        ],
      },
      {
        id: "mutsumi",
        name: "若葉睦",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "control_mp_bd&trade[000]",
            buffName: "演技力のバケモノ",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、パッション+20。パッション8につき、1時間ごとの体力消費量+0.01、全貿易所の受注効率+1%",
            effects: [],
          },
        ],
      },
      {
        id: "gold-worker",
        name: "情熱金属工",
        rarityValue: 4,
        baseSkills: [{ buffId: "gold", buffName: "金属工芸", roomType: "MANUFACTURE", condition: { level: 1 }, supported: true, effects: [{ type: "manufactureSpeed", value: 20, products: ["GOLD"] }] }],
      },
      {
        id: "trade-worker",
        name: "情熱貿易員",
        rarityValue: 4,
        baseSkills: [{ buffId: "trade", buffName: "物流", roomType: "TRADING", condition: { level: 1 }, supported: true, effects: [{ type: "tradingSpeed", value: 20 }] }],
      },
    ],
  };
  const roster = createDefaultRoster(passionCatalog);
  const result = simulateBase({
    catalog: passionCatalog,
    roster,
    baseLayout: { manufacture: 1, trading: 1, power: 3 },
    objective: "balance",
    settings: { dormOperators: 20, supportAssignments: { CONTROL: ["saki", "uika", "mutsumi"] } },
  });

  assert.equal(result.context.intermediateParameters.passion, 40);
  assert.equal(result.facilities.find((facility) => facility.type === "MANUFACTURE").selected[0].score, 23);
  assert.equal(result.facilities.find((facility) => facility.type === "TRADING").selected[0].score, 25);
});

test("applies passion control morale penalties", () => {
  const passionMoraleCatalog = {
    ...catalog,
    operators: [
      {
        id: "saki",
        name: "豊川祥子",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "control_mp_cost&bd3[000]",
            buffName: "逞しいお嬢様",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、パッションが40以上の場合、1時間ごとの体力消費量+0.05",
            effects: [],
          },
        ],
      },
      {
        id: "uika",
        name: "三角初華",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "control_dorm_bd[000]",
            buffName: "アイドルのオーラ",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、宿舎にいるオペレーター1人につきパッション+1",
            effects: [],
          },
        ],
      },
      {
        id: "mutsumi",
        name: "若葉睦",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "control_mp_bd&trade[000]",
            buffName: "演技力のバケモノ",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、パッション+20。パッション8につき、1時間ごとの体力消費量+0.01、全貿易所の受注効率+1%",
            effects: [],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(passionMoraleCatalog);
  const result = simulateBase({
    catalog: passionMoraleCatalog,
    roster,
    baseLayout: { manufacture: 0, trading: 0, power: 3 },
    objective: "lmd",
    settings: { dormOperators: 20, supportAssignments: { CONTROL: ["saki", "uika", "mutsumi"] } },
  });
  const control = result.facilities.at(-1);
  const saki = control.selected.find((candidate) => candidate.operator.name === "豊川祥子");
  const mutsumi = control.selected.find((candidate) => candidate.operator.name === "若葉睦");

  assert.equal(result.context.intermediateParameters.passion, 40);
  assert.equal(saki.morale.changePerHour, -1.05);
  assert.equal(mutsumi.morale.changePerHour, -1.05);
  assert.equal(saki.morale.effects.some((effect) => effect.label === "逞しいお嬢様" && effect.changePerHour === -0.05), true);
  assert.equal(mutsumi.morale.effects.some((effect) => effect.label === "演技力のバケモノ" && effect.changePerHour === -0.05), true);
});

test("applies felyne catnip manufacture and trading bonuses", () => {
  const felyneCatalog = {
    ...catalog,
    tagDictionary: {
      "$cc.tag.mh": { tag: "$cc.tag.mh", label: "アイルーと愉快な仲間たち", category: "operatorTag", operatorNames: ["キリンRヤトウ", "レウスSノイルホーン", "テラ大陸調査団"] },
    },
    operators: [
      {
        id: "yato2",
        name: "キリンRヤトウ",
        rarityValue: 6,
        baseSkills: [
          { buffId: "control_mp_cost&bd2[010]", buffName: "スタミナ回復", roomType: "CONTROL", condition: { level: 1 }, supported: false, description: "制御中枢配置時、自身の1時間ごとの体力消費量+0.5、マタタビ+8", effects: [] },
          { buffId: "control_token_prod_spd2[000]", buffName: "率先垂範", roomType: "CONTROL", condition: { phase: "PHASE_2", level: 1 }, supported: false, description: "アイルーと愉快な仲間たち所属オペレーターと共に制御中枢に配置時、全製造所の製造効率+2%（同種の効果は高いほうのみ適用）", effects: [] },
        ],
      },
      {
        id: "noirc2",
        name: "レウスSノイルホーン",
        rarityValue: 5,
        baseSkills: [
          { buffId: "control_mp_bd2[000]", buffName: "チームワーク", roomType: "CONTROL", condition: { level: 1 }, supported: false, description: "制御中枢配置時、制御中枢内のアイルーと愉快な仲間たち所属オペレーター1人につき、マタタビ+2", effects: [] },
          { buffId: "control_token_tra_spd[000]", buffName: "秘伝交渉術", roomType: "CONTROL", condition: { phase: "PHASE_2", level: 1 }, supported: false, description: "アイルーと愉快な仲間たち所属オペレーターと共に制御中枢に配置時、全貿易所の受注効率+7%（同種の効果は高いほうのみ適用）", effects: [] },
        ],
      },
      {
        id: "palico",
        name: "テラ大陸調査団",
        rarityValue: 1,
        baseSkills: [
          { buffId: "trade_ord_spd&limit&bd[000]", buffName: "愛らしきアイルー", roomType: "TRADING", condition: { level: 1 }, supported: false, description: "貿易所配置時、受注効率+5%、注文上限+2、マタタビ1個につき、受注効率+3%", effects: [] },
          { buffId: "manu_prod_spd&limit&bd[000]", buffName: "頼もしきオトモたち", roomType: "MANUFACTURE", condition: { level: 30 }, supported: false, description: "製造所配置時、保管上限+8、製造効率+5%、マタタビ1個につき、製造効率+1%", effects: [] },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(felyneCatalog);
  const manufacture = simulateBase({ catalog: felyneCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd", settings: { supportAssignments: { CONTROL: ["yato2", "noirc2"] } } });
  const trading = simulateBase({ catalog: felyneCatalog, roster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd", settings: { supportAssignments: { CONTROL: ["yato2", "noirc2"] } } });

  assert.equal(manufacture.context.intermediateParameters.catnip, 12);
  assert.equal(manufacture.facilities[0].selected[0].operator.name, "テラ大陸調査団");
  assert.equal(manufacture.facilities[0].selected[0].score, 19);
  assert.equal(manufacture.facilities.at(-1).selected.find((candidate) => candidate.operator.name === "キリンRヤトウ").morale.changePerHour, -1.5);
  assert.equal(trading.context.intermediateParameters.catnip, 12);
  assert.equal(trading.facilities[0].selected[0].score, 48);
  assert.equal(trading.unsupported.some((skill) => skill.buffName === "愛らしきアイルー" || skill.buffName === "頼もしきオトモたち"), false);
});

test("applies Chongyue worldly worry recovery to non-control workers", () => {
  const chongyueCatalog = {
    ...catalog,
    operators: [
      {
        id: "chongyue",
        name: "チョンユエ",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "chongyue-recovery",
            buffName: "孤光共に照らす",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、他の施設内で仕事中のオペレーターの体力が1時間ごとに+0.05回復し、俗世之憂20につき、体力が追加で+0.05回復",
            effects: [],
          },
        ],
      },
      {
        id: "ling",
        name: "リィン",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "control-cost-to-bd",
            buffName: "山河遠闊たり",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、自身の体力が12を上回る時、俗世之憂+15。自身の体力が12を下回る時、知覚情報+10",
            effects: [],
          },
        ],
      },
      {
        id: "worker",
        name: "Worker",
        rarityValue: 4,
        baseSkills: [{ buffId: "worker", buffName: "標準化", roomType: "MANUFACTURE", condition: { level: 1 }, supported: true, effects: [{ type: "manufactureSpeed", value: 20, products: ["GOLD"] }] }],
      },
    ],
  };
  const roster = createDefaultRoster(chongyueCatalog);
  const result = simulateBase({ catalog: chongyueCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd", settings: { supportAssignments: { CONTROL: ["chongyue", "ling"] } } });
  const morale = result.facilities[0].selected[0].morale;

  assert.equal(result.context.intermediateParameters.worldlyWorry, 7.5);
  assert.equal(morale.changePerHour, -0.95);
  assert.equal(morale.effects.some((effect) => effect.label === "孤光共に照らす" && effect.changePerHour === 0.05), true);
});

test("applies Wind Chimes worldly worry trading morale reduction", () => {
  const windCatalog = {
    ...catalog,
    operators: [
      {
        id: "ling",
        name: "リィン",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "control-cost-to-bd",
            buffName: "山河遠闊たり",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、自身の体力が12を上回る時、俗世之憂+15。自身の体力が12を下回る時、知覚情報+10",
            effects: [],
          },
        ],
      },
      {
        id: "wind",
        name: "ウィンドチャイム",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "wind-trade",
            buffName: "遠き便りを手に",
            roomType: "TRADING",
            condition: { level: 1 },
            supported: true,
            description: "貿易所配置時、配属オペレーターの1時間ごとの体力消費量-0.1、俗世の憂10につき、体力消費量が追加で-0.02",
            effects: [{ type: "tradingSpeed", value: 20 }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(windCatalog);
  const result = simulateBase({ catalog: windCatalog, roster, baseLayout: { manufacture: 0, trading: 1, power: 3 }, objective: "lmd", settings: { supportAssignments: { CONTROL: ["ling"] } } });
  const morale = result.facilities[0].selected[0].morale;

  assert.equal(result.context.intermediateParameters.worldlyWorry, 7.5);
  assert.equal(morale.changePerHour, -0.9);
  assert.equal(morale.effects.some((effect) => effect.label === "遠き便りを手に" && effect.changePerHour === 0.1), true);
});

test("balances first and second shift room quality as a pair", () => {
  const balanceCatalog = {
    ...catalog,
    operators: [
      {
        id: "alpha-a",
        name: "Alpha A",
        rarityValue: 5,
        baseSkills: [{ buffId: "alpha-a", buffName: "Alpha A", roomType: "MANUFACTURE", condition: { level: 1 }, supported: true, effects: [{ type: "manufactureSpeed", value: 30, products: ["GOLD"] }] }],
      },
      {
        id: "alpha-b",
        name: "Alpha B",
        rarityValue: 5,
        baseSkills: [{ buffId: "alpha-b", buffName: "Alpha B", roomType: "MANUFACTURE", condition: { level: 1 }, supported: true, effects: [{ type: "manufactureSpeed", value: 30, products: ["GOLD"] }] }],
      },
      {
        id: "beta-a",
        name: "Beta A",
        rarityValue: 4,
        baseSkills: [{ buffId: "beta-a", buffName: "Beta A", roomType: "MANUFACTURE", condition: { level: 1 }, supported: true, effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD"] }] }],
      },
      {
        id: "beta-b",
        name: "Beta B",
        rarityValue: 4,
        baseSkills: [{ buffId: "beta-b", buffName: "Beta B", roomType: "MANUFACTURE", condition: { level: 1 }, supported: true, effects: [{ type: "manufactureSpeed", value: 25, products: ["GOLD"] }] }],
      },
    ],
  };
  const roster = createDefaultRoster(balanceCatalog);
  const result = simulateBase({ catalog: balanceCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd", settings: { shiftMode: "two-shift" } });
  const [first, second] = result.shiftPlan.shifts;

  assert.equal(first.facilities[0].speed, 55);
  assert.equal(second.facilities[0].speed, 55);
  assert.equal(first.facilities[0].selectedOperatorIds.length, 2);
  assert.equal(second.facilities[0].selectedOperatorIds.length, 2);
});

test("applies control morale shortage to daily shift efficiency", () => {
  const controlCatalog = {
    ...catalog,
    tagDictionary: {
      "$cc.tag.worker": { tag: "$cc.tag.worker", label: "作業員", category: "operatorTag", operatorNames: ["Tagged Worker"] },
    },
    operators: [
      {
        id: "control-tired",
        name: "Control Tired",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "control-overload",
            buffName: "管制過負荷",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、作業員の製造効率+10%、1時間ごとの体力消費量+1",
            effects: [{ type: "manufactureSpeedForTaggedOperator", value: 10, tag: "$cc.tag.worker", products: ["GOLD"] }],
          },
        ],
      },
      {
        id: "tagged-worker",
        name: "Tagged Worker",
        rarityValue: 4,
        baseSkills: [
          {
            buffId: "tagged-work",
            buffName: "金属工芸",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 20, products: ["GOLD"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(controlCatalog);
  const result = simulateBase({ catalog: controlCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });
  const shift = result.shiftPlan.shifts[0];

  assert.equal(shift.facilities.at(-1).facilityType, "CONTROL");
  assert.equal(shift.facilities.at(-1).moraleEfficiency, 0.5);
  assert.equal(shift.facilities[0].productionEfficiency, 0.5);
  assert.equal(result.totals.goldEquivalentLmdPerDay, 13000);
  assert.equal(result.shiftPlan.dailyAverages.goldEquivalentLmdPerDay, 6500);
});

test("exposes initial shift plan output structure", () => {
  const roster = createDefaultRoster(catalog);
  const result = simulateBase({ catalog, roster, baseLayout: "243", objective: "lmd", settings: { meetingRoomLevel: 3 } });
  const shift = result.shiftPlan.shifts[0];

  assert.equal(result.shiftPlan.mode, "single");
  assert.equal(result.shiftPlan.cycleHours, 24);
  assert.equal(shift.id, "shift-1");
  assert.equal(shift.label, "第1班");
  assert.equal(shift.startHour, 0);
  assert.equal(shift.durationHours, 24);
  assert.equal(shift.facilities.length, result.facilities.length);
  assert.equal(result.shiftPlan.dailyAverages.totalValuePerDay <= result.totals.totalValuePerDay, true);
  assert.equal(result.shiftPlan.dailyAverages.goldUnitsPerDay <= result.totals.goldUnitsPerDay, true);
  assert.deepEqual(shift.totals, result.totals);

  const firstFacility = shift.facilities[0];
  assert.equal(firstFacility.facilityId, result.facilities[0].id);
  assert.equal(firstFacility.facilityLabel, result.facilities[0].label);
  assert.equal(firstFacility.facilityType, result.facilities[0].type);
  assert.deepEqual(firstFacility.selectedOperatorIds, result.facilities[0].selected.map((candidate) => candidate.operator.id));
  assert.deepEqual(firstFacility.selectedOperatorNames, result.facilities[0].selected.map((candidate) => candidate.operator.name));
  assert.deepEqual(firstFacility.selectedOperators.map((operator) => operator.operatorId), firstFacility.selectedOperatorIds);
  assert.equal(firstFacility.selectedOperators[0].skills[0].buffName, result.facilities[0].selected[0].matched[0].buffName);
  assert.deepEqual(firstFacility.selectedOperators[0].unlockCondition, result.facilities[0].selected[0].matched[0].condition);
  assert.equal(shift.facilities.at(-1).facilityType, "CONTROL");
});

test("exposes two-shift output structure", () => {
  const roster = createDefaultRoster(catalog);
  const result = simulateBase({ catalog, roster, baseLayout: "243", objective: "lmd", settings: { shiftMode: "two-shift", meetingRoomLevel: 3 } });

  assert.equal(result.shiftPlan.mode, "two-shift");
  assert.equal(result.shiftPlan.cycleHours, 24);
  assert.equal(result.shiftPlan.shifts.length, 2);
  assert.equal(result.shiftPlan.shifts[0].startHour, 0);
  assert.equal(result.shiftPlan.shifts[0].durationHours, 12);
  assert.equal(result.shiftPlan.shifts[1].startHour, 12);
  assert.equal(result.shiftPlan.shifts[1].durationHours, 12);
  assert.notDeepEqual(result.shiftPlan.shifts[1].facilities, result.shiftPlan.shifts[0].facilities);
  assert.notDeepEqual(result.shiftPlan.shifts[1].facilities[0].selectedOperatorIds, result.shiftPlan.shifts[0].facilities[0].selectedOperatorIds);
  assert.equal(Array.isArray(result.shiftPlan.shifts[1].facilities[0].selectedOperators), true);
  assert.equal(result.shiftPlan.shifts[0].facilities[0].selectedOperators[0].skills.length > 0, true);
  assert.equal(result.shiftPlan.shifts[0].facilities[0].selectedOperators[0].skills[0].description !== undefined, true);
  assert.deepEqual(
    new Set([...result.shiftPlan.shifts[0].facilities[0].selectedOperatorIds, ...result.shiftPlan.shifts[1].facilities[0].selectedOperatorIds]).size,
    result.shiftPlan.shifts[0].facilities[0].selectedOperatorIds.length + result.shiftPlan.shifts[1].facilities[0].selectedOperatorIds.length
  );
  assert.notDeepEqual(result.shiftPlan.dailyAverages, result.totals);
});

test("exposes hourly timeline output structure", () => {
  const roster = createDefaultRoster(catalog);
  roster.weedy.owned = false;
  const result = simulateBase({ catalog, roster, baseLayout: { manufacture: 1, trading: 1, power: 3 }, objective: "lmd", settings: { shiftMode: "two-shift" } });
  const first = result.timeline.points[0];
  const second = result.timeline.points[12];
  const firstOperatorId = result.shiftPlan.shifts[0].facilities[0].selectedOperatorIds[0];

  assert.equal(result.timeline.intervalHours, 1);
  assert.equal(result.timeline.cycleHours, 24);
  assert.equal(result.timeline.points.length, 24);
  assert.equal(first.hour, 0);
  assert.equal(first.shiftId, "shift-1");
  assert.equal(second.hour, 12);
  assert.equal(second.shiftId, "shift-2");
  assert.equal(first.moraleByOperator[firstOperatorId].state, "working");
  assert.equal(first.moraleByOperator[firstOperatorId].morale, 24);
  assert.equal(second.moraleByOperator[firstOperatorId].state, "resting");
  assert.equal(first.facilities[0].facilityId, result.shiftPlan.shifts[0].facilities[0].facilityId);
  assert.equal(typeof first.facilities[0].effectiveSpeed, "number");
  assert.equal(typeof first.totals.lmdPerHour, "number");
  assert.equal(typeof first.cumulativeTotals.totalValue, "number");
  assert.equal(roundForTest(result.timeline.points.at(-1).cumulativeTotals.totalValue, 0), roundForTest(result.shiftPlan.dailyAverages.totalValuePerDay, 0));
  assert.equal(roundForTest(result.timeline.points.at(-1).cumulativeTotals.lmd, 0), roundForTest(result.shiftPlan.dailyAverages.tradingLmdPerDay, 0));
  assert.equal(roundForTest(result.timeline.points.at(-1).cumulativeTotals.goldUnits, 1), result.shiftPlan.dailyAverages.goldUnitsPerDay);
  assert.equal(typeof first.intermediateParameters.worldlyWorry, "number");
});

test("timeline recalculates morale-gated intermediate values by hour", () => {
  const timelineCatalog = {
    ...catalog,
    operators: [
      {
        id: "ling",
        name: "リィン",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "control-cost-to-bd",
            buffName: "山河遠闊たり",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            description: "制御中枢配置時、自身の体力が12を上回る時、俗世之憂+15。自身の体力が12を下回る時、知覚情報+10",
            effects: [],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(timelineCatalog);
  const result = simulateBase({ catalog: timelineCatalog, roster, baseLayout: { manufacture: 0, trading: 0, power: 3 }, objective: "lmd", settings: { supportAssignments: { CONTROL: ["ling"] } } });

  assert.equal(result.timeline.points[0].intermediateParameters.worldlyWorry, 15);
  assert.equal(result.timeline.points[0].intermediateParameters.perceptualInfo, 0);
  assert.equal(result.timeline.points[13].intermediateParameters.worldlyWorry, 0);
  assert.equal(result.timeline.points[13].intermediateParameters.perceptualInfo, 10);
});

test("auto-selects control center operators for supported global effects", () => {
  const controlCatalog = {
    ...catalog,
    tagDictionary: {
      "$cc.tag.knight": { tag: "$cc.tag.knight", label: "騎士", category: "operatorTag", operatorNames: ["Knight Worker"] },
    },
    operators: [
      {
        id: "viviana",
        name: "ヴィヴィアナ",
        rarityValue: 6,
        baseSkills: [
          {
            buffId: "candle-knight",
            buffName: "燭騎士の微光",
            roomType: "CONTROL",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeedForTaggedOperator", value: 7, tag: "$cc.tag.knight", products: ["GOLD", "EXP"] }],
          },
        ],
      },
      {
        id: "knight-worker",
        name: "Knight Worker",
        rarityValue: 5,
        baseSkills: [
          {
            buffId: "knight-base",
            buffName: "標準化",
            roomType: "MANUFACTURE",
            condition: { level: 1 },
            supported: true,
            effects: [{ type: "manufactureSpeed", value: 20, products: ["GOLD", "EXP"] }],
          },
        ],
      },
    ],
  };
  const roster = createDefaultRoster(controlCatalog);
  const result = simulateBase({ catalog: controlCatalog, roster, baseLayout: { manufacture: 1, trading: 0, power: 3 }, objective: "lmd" });

  assert.deepEqual(result.context.supportAssignments.CONTROL, ["viviana"]);
  assert.equal(result.facilities[0].selected[0].score, 27);
  const control = result.facilities.at(-1);
  assert.equal(control.selected[0].operator.name, "ヴィヴィアナ");
  assert.deepEqual(control.selected[0].impacts, [
    {
      facilityLabel: "製造所 1",
      facilityType: "MANUFACTURE",
      targetOperatorName: "Knight Worker",
      buffName: "燭騎士の微光（ヴィヴィアナ） 騎士",
      skillName: "燭騎士の微光",
      value: 7,
      detail: "騎士",
    },
  ]);
});

test("keeps representative simulateBase output stable for engine split", () => {
  const roster = createDefaultRoster(catalog);
  const result = simulateBase({
    catalog,
    roster,
    baseLayout: { manufacture: 2, trading: 1, power: 3 },
    objective: "balance",
    settings: { shiftMode: "two-shift", collectionIntervalHours: 12 },
  });

  assert.deepEqual(projectSplitSnapshot(result), {
    totals: {
      tradingLmdPerDay: 15600,
      goldEquivalentLmdPerDay: 14500,
      expValuePerDay: 10800,
      totalValuePerDay: 40900,
      lmdPerDay: 15600,
      expPerDay: 10800,
      goldUnitsPerDay: 29,
      score: 33650,
    },
    dailyAverages: {
      tradingLmdPerDay: 13800,
      goldEquivalentLmdPerDay: 13750,
      expValuePerDay: 9400,
      totalValuePerDay: 36950,
      lmdPerDay: 13800,
      expPerDay: 9400,
      goldUnitsPerDay: 27.5,
      score: 30075,
    },
    facilities: [
      { id: "manufacture-1", type: "MANUFACTURE", product: "GOLD", speed: 45, selected: ["Weedy"] },
      { id: "manufacture-2", type: "MANUFACTURE", product: "EXP", speed: 35, selected: ["Exp Worker"] },
      { id: "trading-1", type: "TRADING", product: "LMD", speed: 30, selected: ["Trade Worker"] },
      { id: "control-1", type: "CONTROL", product: "CONTROL", speed: null, selected: [] },
    ],
    shifts: [
      {
        id: "shift-1",
        durationHours: 12,
        totals: { tradingLmdPerDay: 15600, goldEquivalentLmdPerDay: 14500, expValuePerDay: 10800, totalValuePerDay: 40900, lmdPerDay: 15600, expPerDay: 10800, goldUnitsPerDay: 29, score: 33650 },
        facilities: [
          { id: "manufacture-1", type: "MANUFACTURE", product: "GOLD", speed: 45, selected: ["Weedy"] },
          { id: "manufacture-2", type: "MANUFACTURE", product: "EXP", speed: 35, selected: ["Exp Worker"] },
          { id: "trading-1", type: "TRADING", product: "LMD", speed: 30, selected: ["Trade Worker"] },
          { id: "control-1", type: "CONTROL", product: "CONTROL", speed: null, selected: [] },
        ],
      },
      {
        id: "shift-2",
        durationHours: 12,
        totals: { tradingLmdPerDay: 12000, goldEquivalentLmdPerDay: 13000, expValuePerDay: 8000, totalValuePerDay: 33000, lmdPerDay: 12000, expPerDay: 8000, goldUnitsPerDay: 26, score: 26500 },
        facilities: [
          { id: "manufacture-1", type: "MANUFACTURE", product: "GOLD", speed: 30, selected: ["Gold Worker"] },
          { id: "manufacture-2", type: "MANUFACTURE", product: "EXP", speed: 0, selected: [] },
          { id: "trading-1", type: "TRADING", product: "LMD", speed: 0, selected: [] },
          { id: "control-1", type: "CONTROL", product: "CONTROL", speed: null, selected: [] },
        ],
      },
    ],
    timeline: {
      points: 24,
      first: { hour: 0, shiftId: "shift-1", operators: { weedy: 24, exp: 24, trade: 24, gold: 24 }, totalValuePerHour: 1704.17, cumulativeTotalValue: 1704.17 },
      last: { hour: 23, shiftId: "shift-2", operators: { weedy: 24, exp: 24, trade: 24, gold: 13 }, totalValuePerHour: 1375, cumulativeTotalValue: 36950.04 },
    },
  });
});

test("keeps real base catalog representative output stable", () => {
  const realCatalog = JSON.parse(fs.readFileSync(new URL("../data/base_sim_catalog.json", import.meta.url), "utf8"));
  const roster = createDefaultRoster(realCatalog, { defaultOwned: true });
  const result = simulateBase({
    catalog: realCatalog,
    roster,
    baseLayout: { manufacture: 4, trading: 2, power: 3 },
    objective: "balance",
    settings: { shiftMode: "two-shift", collectionIntervalHours: 24, meetingRoomLevel: 3, dormOperators: 20 },
  });

  assert.deepEqual({
    totals: result.totals,
    dailyAverages: result.shiftPlan.dailyAverages,
    facilityCount: result.facilities.length,
    firstFacility: {
      type: result.facilities[0].type,
      product: result.facilities[0].product,
      speed: result.facilities[0].speed,
      selected: result.facilities[0].selected.map((candidate) => candidate.operator.name),
    },
    controlSelected: result.facilities.at(-1).selected.map((candidate) => candidate.operator.name),
    unsupportedTop: result.unsupported.slice(0, 5).map((warning) => ({
      name: warning.buffName,
      category: warning.category,
      operators: warning.operators.slice(0, 3),
    })),
    timelinePoints: result.timeline.points.length,
  }, {
    totals: { tradingLmdPerDay: 47132, goldEquivalentLmdPerDay: 38700, expValuePerDay: 30880, totalValuePerDay: 116712, lmdPerDay: 47132, expPerDay: 30880, goldUnitsPerDay: 77.4, score: 97362 },
    dailyAverages: { tradingLmdPerDay: 45185, goldEquivalentLmdPerDay: 34135, expValuePerDay: 27375, totalValuePerDay: 106695.5, lmdPerDay: 45185, expPerDay: 27375, goldUnitsPerDay: 68.25, score: 89627.5 },
    facilityCount: 7,
    firstFacility: { type: "MANUFACTURE", product: "GOLD", speed: 105, selected: ["ウィーディ", "ユーネクテス", "スネグーラチカ"] },
    controlSelected: ["ヴィヴィアナ", "八幡海鈴", "ノーシス", "滌火ジェシカ", "デルフィーン"],
    unsupportedTop: [
      { name: "赤松の騎士", category: "productFlow", operators: ["フレイムテイル"] },
      { name: "「山河遠闊たり」", category: "intermediate", operators: ["リィン"] },
      { name: "「和気生財」", category: "intermediate", operators: ["ウユウ"] },
      { name: "アイドルのオーラ", category: "intermediate", operators: ["三角初華"] },
      { name: "ウルサスドリンク", category: "intermediate", operators: ["Tachanka"] },
    ],
    timelinePoints: 24,
  });
});

function projectSplitSnapshot(result) {
  return {
    totals: result.totals,
    dailyAverages: result.shiftPlan.dailyAverages,
    facilities: result.facilities.map(projectFacility),
    shifts: result.shiftPlan.shifts.map((shift) => ({
      id: shift.id,
      durationHours: shift.durationHours,
      totals: shift.totals,
      facilities: shift.facilities.map(projectShiftFacility),
    })),
    timeline: {
      points: result.timeline.points.length,
      first: projectTimelinePoint(result.timeline.points[0]),
      last: projectTimelinePoint(result.timeline.points.at(-1)),
    },
  };
}

function projectFacility(facility) {
  return {
    id: facility.id,
    type: facility.type,
    product: facility.product,
    speed: facility.speed,
    selected: facility.selected.map((candidate) => candidate.operator.name),
  };
}

function projectShiftFacility(facility) {
  return {
    id: facility.facilityId,
    type: facility.facilityType,
    product: facility.product,
    speed: facility.speed,
    selected: facility.selectedOperatorNames,
  };
}

function projectTimelinePoint(point) {
  return {
    hour: point.hour,
    shiftId: point.shiftId,
    operators: Object.fromEntries(Object.entries(point.moraleByOperator).map(([operatorId, entry]) => [operatorId, entry.morale])),
    totalValuePerHour: point.totals.totalValuePerHour,
    cumulativeTotalValue: point.cumulativeTotals.totalValue,
  };
}
