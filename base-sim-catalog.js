window.BASE_SIM_CATALOG = {
  "generatedAt": "2026-05-17T00:24:53.244Z",
  "source": {
    "buildingData": "/Users/ottan/Downloads/outputs/building_data.json",
    "characterTable": "/Users/ottan/Downloads/outputs/character_table.json",
    "gamedataConst": "/Users/ottan/Downloads/outputs/gamedata_const.json"
  },
  "products": {
    "GOLD": {
      "label": "純金",
      "baseUnitsPerDay": 20,
      "value": 500
    },
    "EXP": {
      "label": "作戦記録",
      "baseUnitsPerDay": 8,
      "value": 1000
    }
  },
  "trade": {
    "label": "龍門幣",
    "baseLmdPerDay": 12000
  },
  "tagSummary": [
    {
      "tag": "$cc.bd_b1",
      "label": "俗世之憂",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "ready",
      "count": 11,
      "roomTypes": [
        "CONTROL",
        "MANUFACTURE",
        "TRADING",
        "HIRE"
      ],
      "examples": [
        {
          "operatorId": "char_2015_dusk",
          "operatorName": "シー",
          "buffId": "control_mp_cost&bd1[000]",
          "buffName": "「物を以て喜ばず」",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_2025_shu",
          "operatorName": "シュウ",
          "buffId": "manu_prod_spd_bd[300]",
          "buffName": "稲禾厚く、秋に順ひて収む",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_2024_chyue",
          "operatorName": "チョンユエ",
          "buffId": "control_mp_cost&bd_up[000]",
          "buffName": "我を我と知る",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_2024_chyue",
          "operatorName": "チョンユエ",
          "buffId": "control_mp_bd_cost_expand[000]",
          "buffName": "孤光共に照らす",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_2023_ling",
          "operatorName": "リィン",
          "buffId": "control_costToBD[000]",
          "buffName": "「山河遠闊たり」",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.bd_a1",
      "label": "知覚情報",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "ready",
      "count": 10,
      "roomTypes": [
        "TRADING",
        "CONTROL",
        "MANUFACTURE",
        "DORMITORY",
        "HIRE"
      ],
      "examples": [
        {
          "operatorId": "char_4046_ebnhlz",
          "operatorName": "エーベンホルツ",
          "buffId": "trade_ord_spd_bd_n1[000]",
          "buffName": "音感",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4046_ebnhlz",
          "operatorName": "エーベンホルツ",
          "buffId": "trade_ord_spd_bd_n1[000]",
          "buffName": "音感",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_2015_dusk",
          "operatorName": "シー",
          "buffId": "control_mp_cost&bd2[000]",
          "buffName": "「己を以て悲しまず」",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_2023_ling",
          "operatorName": "リィン",
          "buffId": "control_costToBD[000]",
          "buffName": "「山河遠闊たり」",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_391_rosmon",
          "operatorName": "ロスモンティス",
          "buffId": "manu_prod_spd_bd_n1[000]",
          "buffName": "超感覚",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.t.flow_gold",
      "label": "純金生産ライン",
      "kind": "kw",
      "category": "tradeOrTrainingState",
      "implementationHint": "ready",
      "count": 8,
      "roomTypes": [
        "TRADING"
      ],
      "examples": [
        {
          "operatorId": "char_4055_bgsnow",
          "operatorName": "パゼオンカ",
          "buffId": "trade_ord_spd&gold[100]",
          "buffName": "キャッチコピー",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4055_bgsnow",
          "operatorName": "パゼオンカ",
          "buffId": "trade_ord_line_durin[010]",
          "buffName": "地下の住人",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_478_kirara",
          "operatorName": "キララ",
          "buffId": "trade_ord_line_gold[000]",
          "buffName": "注文フロー可視化・α",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_478_kirara",
          "operatorName": "キララ",
          "buffId": "trade_ord_line_gold[000]",
          "buffName": "注文フロー可視化・α",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_478_kirara",
          "operatorName": "キララ",
          "buffId": "trade_ord_line_gold[010]",
          "buffName": "注文フロー可視化・β",
          "roomType": "TRADING"
        }
      ]
    },
    {
      "tag": "$cc.bd_mujica",
      "label": "パッション",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "ready",
      "count": 7,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_4182_oblvns",
          "operatorName": "豊川祥子",
          "buffId": "control_prod_bd_spd[000]",
          "buffName": "豊富な職務経験",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_4182_oblvns",
          "operatorName": "豊川祥子",
          "buffId": "control_prod_bd_spd[010]",
          "buffName": "豊富な職務経験",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_4184_dolris",
          "operatorName": "三角初華",
          "buffId": "control_dorm_bd[000]",
          "buffName": "アイドルのオーラ",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_4183_mortis",
          "operatorName": "若葉睦",
          "buffId": "control_mp_bd&trade[000]",
          "buffName": "演技力のバケモノ",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_4183_mortis",
          "operatorName": "若葉睦",
          "buffId": "control_mp_bd&trade[000]",
          "buffName": "演技力のバケモノ",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.bd_B",
      "label": "静かなる共鳴",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "ready",
      "count": 6,
      "roomTypes": [
        "DORMITORY",
        "TRADING",
        "HIRE"
      ],
      "examples": [
        {
          "operatorId": "char_245_cello",
          "operatorName": "ヴィルトゥオーサ",
          "buffId": "dorm_bd_num[000]",
          "buffName": "声なき協奏",
          "roomType": "DORMITORY"
        },
        {
          "operatorId": "char_245_cello",
          "operatorName": "ヴィルトゥオーサ",
          "buffId": "dorm_rec_all&bd[000]",
          "buffName": "言葉なき賛歌",
          "roomType": "DORMITORY"
        },
        {
          "operatorId": "char_4046_ebnhlz",
          "operatorName": "エーベンホルツ",
          "buffId": "trade_ord_spd_bd_n1[000]",
          "buffName": "音感",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4046_ebnhlz",
          "operatorName": "エーベンホルツ",
          "buffId": "trade_ord_spd_bd[000]",
          "buffName": "彷徨う旋律",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4046_ebnhlz",
          "operatorName": "エーベンホルツ",
          "buffId": "trade_ord_spd_bd[010]",
          "buffName": "茫然たる和声",
          "roomType": "TRADING"
        }
      ]
    },
    {
      "tag": "$cc.g.abyssal",
      "label": "アビサルハンター",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 5,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_474_glady",
          "operatorName": "グレイディーア",
          "buffId": "control_mp_aegir1[000]",
          "buffName": "潮汐の見張り番",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_474_glady",
          "operatorName": "グレイディーア",
          "buffId": "control_mp_aegir1[000]",
          "buffName": "潮汐の見張り番",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_474_glady",
          "operatorName": "グレイディーア",
          "buffId": "control_mp_aegir1[000]",
          "buffName": "潮汐の見張り番",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_474_glady",
          "operatorName": "グレイディーア",
          "buffId": "control_mp_aegir2[000]",
          "buffName": "集団狩猟α",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_474_glady",
          "operatorName": "グレイディーア",
          "buffId": "control_mp_aegir2[010]",
          "buffName": "集団狩猟β",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.glasgow",
      "label": "グラスゴー",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 5,
      "roomTypes": [
        "TRADING",
        "HIRE",
        "CONTROL",
        "DORMITORY"
      ],
      "examples": [
        {
          "operatorId": "char_1019_siege2",
          "operatorName": "ヴィーナ・ヴィクトリア",
          "buffId": "trade_ord_spd&par[001]",
          "buffName": "外貿決議β",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4110_delphn",
          "operatorName": "デルフィーン",
          "buffId": "hire_spd&clue2[260]",
          "buffName": "旧知と新交",
          "roomType": "HIRE"
        },
        {
          "operatorId": "char_4110_delphn",
          "operatorName": "デルフィーン",
          "buffId": "control_tra_limit&spd[010]",
          "buffName": "計算上手",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_154_morgan",
          "operatorName": "モーガン",
          "buffId": "dorm_rec_toone[000]",
          "buffName": "最高の練習相手",
          "roomType": "DORMITORY"
        },
        {
          "operatorId": "char_154_morgan",
          "operatorName": "モーガン",
          "buffId": "trade_ord_spd_par[000]",
          "buffName": "ギャングのコンパス",
          "roomType": "TRADING"
        }
      ]
    },
    {
      "tag": "$cc.g.R6",
      "label": "レインボー小隊",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 5,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_456_ash",
          "operatorName": "Ash",
          "buffId": "control_mp_cost&faction[990]",
          "buffName": "レインボー小隊",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_456_ash",
          "operatorName": "Ash",
          "buffId": "control_mp_bd[000]",
          "buffName": "情報備蓄",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_457_blitz",
          "operatorName": "Blitz",
          "buffId": "control_mp_cost&faction[990]",
          "buffName": "レインボー小隊",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_458_rfrost",
          "operatorName": "Frost",
          "buffId": "control_mp_cost&faction[990]",
          "buffName": "レインボー小隊",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_459_tachak",
          "operatorName": "Tachanka",
          "buffId": "control_mp_cost&faction[990]",
          "buffName": "レインボー小隊",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.bd_dungeon",
      "label": "魔物料理",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "needsIntermediateEvaluator",
      "count": 4,
      "roomTypes": [
        "MANUFACTURE",
        "DORMITORY",
        "TRADING",
        "MEETING"
      ],
      "examples": [
        {
          "operatorId": "char_4141_marcil",
          "operatorName": "マルシル",
          "buffId": "manu_prod_spd_bd[400]",
          "buffName": "意外に美味しい",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_4143_sensi",
          "operatorName": "センシ",
          "buffId": "dorm_rec_bd_dungeon[000]",
          "buffName": "センシの大食堂",
          "roomType": "DORMITORY"
        },
        {
          "operatorId": "char_4144_chilc",
          "operatorName": "チルチャック",
          "buffId": "trade_ord_spd_bd[100]",
          "buffName": "馴染み深い香り",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4142_laios",
          "operatorName": "ライオス",
          "buffId": "meet_spd_bd[001]",
          "buffName": "満腹時の意気込み",
          "roomType": "MEETING"
        }
      ]
    },
    {
      "tag": "$cc.bd_felyne",
      "label": "マタタビ",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "ready",
      "count": 4,
      "roomTypes": [
        "CONTROL",
        "TRADING",
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_1029_yato2",
          "operatorName": "キリンRヤトウ",
          "buffId": "control_mp_cost&bd2[010]",
          "buffName": "スタミナ回復",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_1030_noirc2",
          "operatorName": "レウスSノイルホーン",
          "buffId": "control_mp_bd2[000]",
          "buffName": "チームワーク",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_4077_palico",
          "operatorName": "テラ大陸調査団",
          "buffId": "trade_ord_spd&limit&bd[000]",
          "buffName": "愛らしきアイルー",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4077_palico",
          "operatorName": "テラ大陸調査団",
          "buffId": "manu_prod_spd&limit&bd[000]",
          "buffName": "頼もしきオトモたち",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.g.bs",
      "label": "BSW",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 4,
      "roomTypes": [
        "CONTROL",
        "MANUFACTURE",
        "MEETING"
      ],
      "examples": [
        {
          "operatorId": "char_1034_jesca2",
          "operatorName": "滌火ジェシカ",
          "buffId": "control_bd_spd[000]",
          "buffName": "旧友との再会",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_4105_almond",
          "operatorName": "アーモンド",
          "buffId": "manu_formula_spd&cost_bd[000]",
          "buffName": "大きな責任",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_4052_surfer",
          "operatorName": "サーファー",
          "buffId": "meet_spd&sami[100]",
          "buffName": "対話力",
          "roomType": "MEETING"
        },
        {
          "operatorId": "char_4052_surfer",
          "operatorName": "サーファー",
          "buffId": "meet_spd&sami[110]",
          "buffName": "情報収集",
          "roomType": "MEETING"
        }
      ]
    },
    {
      "tag": "$cc.tag.op",
      "label": "作業用プラットフォーム",
      "kind": "kw",
      "category": "operatorTag",
      "implementationHint": "dictionaryResolved",
      "count": 4,
      "roomTypes": [
        "MANUFACTURE",
        "POWER",
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_4178_alanna",
          "operatorName": "アランナ",
          "buffId": "manu_token_prod_spd[000]",
          "buffName": "機械整備α",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_4178_alanna",
          "operatorName": "アランナ",
          "buffId": "manu_token_prod_spd[010]",
          "buffName": "機械整備β",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_1027_greyy2",
          "operatorName": "承曦グレイ",
          "buffId": "power_count[000]",
          "buffName": "曙光",
          "roomType": "POWER"
        },
        {
          "operatorId": "char_4004_pudd",
          "operatorName": "プリン",
          "buffId": "control_token_prod_spd[000]",
          "buffName": "オーバークロック",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.bd_A",
      "label": "思念連鎖",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "ready",
      "count": 3,
      "roomTypes": [
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_391_rosmon",
          "operatorName": "ロスモンティス",
          "buffId": "manu_prod_spd_bd_n1[000]",
          "buffName": "超感覚",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_391_rosmon",
          "operatorName": "ロスモンティス",
          "buffId": "manu_prod_spd_bd[000]",
          "buffName": "念力",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_391_rosmon",
          "operatorName": "ロスモンティス",
          "buffId": "manu_prod_spd_bd[010]",
          "buffName": "意識実体",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.bd_a1_a1",
      "label": "記憶の欠片",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "needsIntermediateEvaluator",
      "count": 3,
      "roomTypes": [
        "HIRE"
      ],
      "examples": [
        {
          "operatorId": "char_436_whispr",
          "operatorName": "ウィスパーレイン",
          "buffId": "hire_spd_bd_n1_n1[100]",
          "buffName": "放浪の旅路",
          "roomType": "HIRE"
        },
        {
          "operatorId": "char_436_whispr",
          "operatorName": "ウィスパーレイン",
          "buffId": "hire_spd_bd_n1[000]",
          "buffName": "追憶",
          "roomType": "HIRE"
        },
        {
          "operatorId": "char_436_whispr",
          "operatorName": "ウィスパーレイン",
          "buffId": "hire_spd_bd_n1[000]",
          "buffName": "追憶",
          "roomType": "HIRE"
        }
      ]
    },
    {
      "tag": "$cc.bd_ash",
      "label": "情報備蓄",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "needsIntermediateEvaluator",
      "count": 3,
      "roomTypes": [
        "CONTROL",
        "HIRE",
        "MEETING"
      ],
      "examples": [
        {
          "operatorId": "char_456_ash",
          "operatorName": "Ash",
          "buffId": "control_mp_bd[000]",
          "buffName": "情報備蓄",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_457_blitz",
          "operatorName": "Blitz",
          "buffId": "hire_spd_blitz[000]",
          "buffName": "言語学",
          "roomType": "HIRE"
        },
        {
          "operatorId": "char_4124_iana",
          "operatorName": "Iana",
          "buffId": "meet_spd_bd[000]",
          "buffName": "情報エキスパート",
          "roomType": "MEETING"
        }
      ]
    },
    {
      "tag": "$cc.bd_C",
      "label": "巫術の結晶",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "needsIntermediateEvaluator",
      "count": 3,
      "roomTypes": [
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_4078_bdhkgt",
          "operatorName": "ジエユン",
          "buffId": "manu_bd_to_bd[000]",
          "buffName": "古の巫術",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_4078_bdhkgt",
          "operatorName": "ジエユン",
          "buffId": "manu_prod_spd_bd[200]",
          "buffName": "浮き草",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_4078_bdhkgt",
          "operatorName": "ジエユン",
          "buffId": "manu_prod_spd_bd[201]",
          "buffName": "枯栄花",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.bd_tachanka",
      "label": "ウルサスドリンク",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "needsIntermediateEvaluator",
      "count": 3,
      "roomTypes": [
        "HIRE",
        "MANUFACTURE",
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_457_blitz",
          "operatorName": "Blitz",
          "buffId": "hire_spd_blitz[000]",
          "buffName": "言語学",
          "roomType": "HIRE"
        },
        {
          "operatorId": "char_4126_fuze",
          "operatorName": "Fuze",
          "buffId": "manu_prod_bd[000]",
          "buffName": "寡黙な仕事人",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_459_tachak",
          "operatorName": "Tachanka",
          "buffId": "control_mp_bd[010]",
          "buffName": "ウルサスドリンク",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.c.room2",
      "label": "他の施設",
      "kind": "kw",
      "category": "roomScope",
      "implementationHint": "ready",
      "count": 3,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_1035_wisdel",
          "operatorName": "ウィシャデル",
          "buffId": "control_mp_expand_double[000]",
          "buffName": "バベルの旗印",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_2024_chyue",
          "operatorName": "チョンユエ",
          "buffId": "control_mp_bd_cost_expand[000]",
          "buffName": "孤光共に照らす",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_4064_mlynar",
          "operatorName": "ムリナール",
          "buffId": "control_mp_lonely[000]",
          "buffName": "事務仕事",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.karlan",
      "label": "イェラグ",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 3,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_206_gnosis",
          "operatorName": "ノーシス",
          "buffId": "control_mp_cost&faction[030]",
          "buffName": "暗躍の謀略家",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_206_gnosis",
          "operatorName": "ノーシス",
          "buffId": "control_tra_limit&spd[000]",
          "buffName": "緻密な研究者",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_1045_svash2",
          "operatorName": "凛御シルバーアッシュ",
          "buffId": "control_tra_limit&spd3[000]",
          "buffName": "事業ドメイン",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.laterano",
      "label": "ラテラーノ",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 3,
      "roomTypes": [
        "DORMITORY",
        "TRADING",
        "POWER"
      ],
      "examples": [
        {
          "operatorId": "char_1041_angel2",
          "operatorName": "新約エクシア",
          "buffId": "dorm_rec_single_power[001]",
          "buffName": "聖都事情通",
          "roomType": "DORMITORY"
        },
        {
          "operatorId": "char_1041_angel2",
          "operatorName": "新約エクシア",
          "buffId": "trade_ord_spd_par[001]",
          "buffName": "市内お急ぎ注文",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4188_confes",
          "operatorName": "CONFESS-47",
          "buffId": "power_rec_spd_ext&faction[000]",
          "buffName": "メンテナンス中",
          "roomType": "POWER"
        }
      ]
    },
    {
      "tag": "$cc.g.sp",
      "label": "異格",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "needsDictionary",
      "count": 3,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_1011_lava2",
          "operatorName": "炎獄ラヴァ",
          "buffId": "control_mp_cost&faction[900]",
          "buffName": "異格者",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_1021_kroos2",
          "operatorName": "寒芒クルース",
          "buffId": "control_mp_cost&faction[900]",
          "buffName": "異格者",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_1024_hbisc2",
          "operatorName": "濯塵ハイビスカス",
          "buffId": "control_mp_cost&faction[900]",
          "buffName": "異格者",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.sui",
      "label": "歳",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 3,
      "roomTypes": [
        "CONTROL",
        "DORMITORY"
      ],
      "examples": [
        {
          "operatorId": "char_2024_chyue",
          "operatorName": "チョンユエ",
          "buffId": "control_mp_cost&bd_up[000]",
          "buffName": "我を我と知る",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_2026_yu",
          "operatorName": "ユー",
          "buffId": "dorm_rec_all&group[000]",
          "buffName": "衆口の調え",
          "roomType": "DORMITORY"
        },
        {
          "operatorId": "char_2023_ling",
          "operatorName": "リィン",
          "buffId": "control_facCostReset[000]",
          "buffName": "杯停むること莫れ",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.sk.manu2",
      "label": "ラインテク系スキル",
      "kind": "kw",
      "category": "skillFamily",
      "implementationHint": "dictionaryResolved",
      "count": 3,
      "roomTypes": [
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_4048_doroth",
          "operatorName": "ドロシー",
          "buffId": "manu_skill_spd1[010]",
          "buffName": "アーツ理論応用",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_1047_halo2",
          "operatorName": "溯光アステジーニ",
          "buffId": "manu_skill_limit[000]",
          "buffName": "探査用リュック",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_4066_highmo",
          "operatorName": "ハイモア",
          "buffId": "manu_skill_change[000]",
          "buffName": "意識統一",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.tag.mh",
      "label": "アイルーと愉快な仲間たち",
      "kind": "kw",
      "category": "operatorTag",
      "implementationHint": "dictionaryResolved",
      "count": 3,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_1029_yato2",
          "operatorName": "キリンRヤトウ",
          "buffId": "control_token_prod_spd2[000]",
          "buffName": "率先垂範",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_1030_noirc2",
          "operatorName": "レウスSノイルホーン",
          "buffId": "control_mp_bd2[000]",
          "buffName": "チームワーク",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_1030_noirc2",
          "operatorName": "レウスSノイルホーン",
          "buffId": "control_token_tra_spd[000]",
          "buffName": "秘伝交渉術",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.bd_a1_a2",
      "label": "夢",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "needsIntermediateEvaluator",
      "count": 2,
      "roomTypes": [
        "DORMITORY"
      ],
      "examples": [
        {
          "operatorId": "char_338_iris",
          "operatorName": "アイリス",
          "buffId": "dorm_rec_bd_n1_n2[000]",
          "buffName": "寝物語",
          "roomType": "DORMITORY"
        },
        {
          "operatorId": "char_338_iris",
          "operatorName": "アイリス",
          "buffId": "dorm_rec_bd_n1[000]",
          "buffName": "夢物語",
          "roomType": "DORMITORY"
        }
      ]
    },
    {
      "tag": "$cc.bd_a1_a3",
      "label": "小節",
      "kind": "rem",
      "category": "intermediate",
      "implementationHint": "needsIntermediateEvaluator",
      "count": 2,
      "roomTypes": [
        "DORMITORY"
      ],
      "examples": [
        {
          "operatorId": "char_4047_pianst",
          "operatorName": "ツェルニー",
          "buffId": "dorm_rec_bd_n1_n3[000]",
          "buffName": "アンダンテ",
          "roomType": "DORMITORY"
        },
        {
          "operatorId": "char_4047_pianst",
          "operatorName": "ツェルニー",
          "buffId": "dorm_rec_bd_n1[100]",
          "buffName": "インプロヴィゼーション",
          "roomType": "DORMITORY"
        }
      ]
    },
    {
      "tag": "$cc.bd.costdrop",
      "label": "体力減少分",
      "kind": "kw",
      "category": "intermediate",
      "implementationHint": "ready",
      "count": 2,
      "roomTypes": [
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_4062_totter",
          "operatorName": "トター",
          "buffId": "manu_prod_spd_reduce[000]",
          "buffName": "霞む視界",
          "roomType": "MANUFACTURE"
        },
        {
          "operatorId": "char_4062_totter",
          "operatorName": "トター",
          "buffId": "manu_prod_spd_addition&cost[000]",
          "buffName": "窓外の吹雪",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.c.abyssal2_3",
      "label": "特殊加算制限",
      "kind": "rem",
      "category": "specialCondition",
      "implementationHint": "manualRule",
      "count": 2,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_474_glady",
          "operatorName": "グレイディーア",
          "buffId": "control_mp_aegir2[000]",
          "buffName": "集団狩猟α",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_474_glady",
          "operatorName": "グレイディーア",
          "buffId": "control_mp_aegir2[010]",
          "buffName": "集団狩猟β",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.c.room3",
      "label": "作業施設",
      "kind": "kw",
      "category": "roomScope",
      "implementationHint": "ready",
      "count": 2,
      "roomTypes": [
        "TRADING"
      ],
      "examples": [
        {
          "operatorId": "char_4088_hodrer",
          "operatorName": "ヘドリー",
          "buffId": "trade_ord_par&per[000]",
          "buffName": "最初の一歩α",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4088_hodrer",
          "operatorName": "ヘドリー",
          "buffId": "trade_ord_par&per[001]",
          "buffName": "最初の一歩β",
          "roomType": "TRADING"
        }
      ]
    },
    {
      "tag": "$cc.c.sui2_1",
      "label": "特殊比較方式",
      "kind": "rem",
      "category": "specialCondition",
      "implementationHint": "manualRule",
      "count": 2,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_1035_wisdel",
          "operatorName": "ウィシャデル",
          "buffId": "control_mp_expand_double[000]",
          "buffName": "バベルの旗印",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_2024_chyue",
          "operatorName": "チョンユエ",
          "buffId": "control_mp_bd_cost_expand[000]",
          "buffName": "孤光共に照らす",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.elite",
      "label": "エリートオペレーター",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 2,
      "roomTypes": [
        "TRADING",
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_4204_mantra",
          "operatorName": "マントラ",
          "buffId": "trade_ord_spd&tag[010]",
          "buffName": "E.O.小隊",
          "roomType": "TRADING"
        },
        {
          "operatorId": "char_4195_radian",
          "operatorName": "レイディアン",
          "buffId": "control_dorm_rec_tag[001]",
          "buffName": "無言の慈愛",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.lgd",
      "label": "龍門近衛局",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 2,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_010_chen",
          "operatorName": "チェン",
          "buffId": "control_mp_cost&faction[000]",
          "buffName": "才徳兼備",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_1044_hsgma2",
          "operatorName": "斬業ホシグマ",
          "buffId": "control_token_prod_spd3[000]",
          "buffName": "同僚との絆",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.sm",
      "label": "サーミ",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 2,
      "roomTypes": [
        "MEETING",
        "DORMITORY"
      ],
      "examples": [
        {
          "operatorId": "char_2012_typhon",
          "operatorName": "ティフォン",
          "buffId": "meet_spd&sami[000]",
          "buffName": "氷原の足跡",
          "roomType": "MEETING"
        },
        {
          "operatorId": "char_341_sntlla",
          "operatorName": "サンタラ",
          "buffId": "dorm_rec_single_power[000]",
          "buffName": "寒地生まれ",
          "roomType": "DORMITORY"
        }
      ]
    },
    {
      "tag": "$cc.g.ussg",
      "label": "ウルサス学生自治団",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 2,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_197_poca",
          "operatorName": "ロサ",
          "buffId": "control_mp_cost&faction[020]",
          "buffName": "生徒会長",
          "roomType": "CONTROL"
        },
        {
          "operatorId": "char_459_tachak",
          "operatorName": "Tachanka",
          "buffId": "control_mp_bd[010]",
          "buffName": "ウルサスドリンク",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.c.abyssal2_1",
      "label": "特殊効果",
      "kind": "rem",
      "category": "specialCondition",
      "implementationHint": "manualRule",
      "count": 1,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_474_glady",
          "operatorName": "グレイディーア",
          "buffId": "control_mp_aegir2[000]",
          "buffName": "集団狩猟α",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.c.abyssal2_2",
      "label": "特殊効果",
      "kind": "rem",
      "category": "specialCondition",
      "implementationHint": "manualRule",
      "count": 1,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_474_glady",
          "operatorName": "グレイディーア",
          "buffId": "control_mp_aegir2[010]",
          "buffName": "集団狩猟β",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.c.room1",
      "label": "一部の施設",
      "kind": "kw",
      "category": "roomScope",
      "implementationHint": "manualRule",
      "count": 1,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_4064_mlynar",
          "operatorName": "ムリナール",
          "buffId": "control_mp_lonely[000]",
          "buffName": "事務仕事",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.c.skill",
      "label": "一部のスキル",
      "kind": "kw",
      "category": "specialCondition",
      "implementationHint": "manualRule",
      "count": 1,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_4064_mlynar",
          "operatorName": "ムリナール",
          "buffId": "control_mp_lonely[000]",
          "buffName": "事務仕事",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.A1",
      "label": "A1小隊",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_1036_fang2",
          "operatorName": "歴陣鋭槍フェン",
          "buffId": "manu_prod_spd&fraction[000]",
          "buffName": "再会のひととき",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.g.lda",
      "label": "リー探偵事務所",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_226_hmau",
          "operatorName": "ウン",
          "buffId": "control_mp_cost&faction2[000]",
          "buffName": "温厚篤実",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.psk",
      "label": "レッドパイン騎士団",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_420_flamtl",
          "operatorName": "フレイムテイル",
          "buffId": "control_mp_psk[000]",
          "buffName": "赤松の騎士",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.g.rh",
      "label": "ライン生命",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "POWER"
      ],
      "examples": [
        {
          "operatorId": "char_249_mlyss",
          "operatorName": "ミュルジス",
          "buffId": "power_rec_rhine[000]",
          "buffName": "生態課主任",
          "roomType": "POWER"
        }
      ]
    },
    {
      "tag": "$cc.g.siracusa",
      "label": "シラクーザ",
      "kind": "kw",
      "category": "faction",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_4186_tmoris",
          "operatorName": "八幡海鈴",
          "buffId": "control_tra_limit&spd2[000]",
          "buffName": "ファミリーの許し",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.m.var1",
      "label": "「再利用」",
      "kind": "rem",
      "category": "manufactureState",
      "implementationHint": "manualRule",
      "count": 1,
      "roomTypes": [
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_381_bubble",
          "operatorName": "バブル",
          "buffId": "manu_prod_spd_variable3[000]",
          "buffName": "大きい方がいい！",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.sk.manu1",
      "label": "標準化系スキル",
      "kind": "kw",
      "category": "skillFamily",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_437_mizuki",
          "operatorName": "ミヅキ",
          "buffId": "manu_skill_spd1[000]",
          "buffName": "意識連結",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.sk.manu3",
      "label": "レッドパイン系",
      "kind": "kw",
      "category": "skillFamily",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_4066_highmo",
          "operatorName": "ハイモア",
          "buffId": "manu_skill_change[000]",
          "buffName": "意識統一",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.sk.manu4",
      "label": "金属工芸系スキル",
      "kind": "kw",
      "category": "skillFamily",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "MANUFACTURE"
      ],
      "examples": [
        {
          "operatorId": "char_4106_bryota",
          "operatorName": "ブライオファイタ",
          "buffId": "manu_skill_spd1[020]",
          "buffName": "バイトの心得",
          "roomType": "MANUFACTURE"
        }
      ]
    },
    {
      "tag": "$cc.t.strong2",
      "label": "特殊加算制限",
      "kind": "rem",
      "category": "tradeOrTrainingState",
      "implementationHint": "manualRule",
      "count": 1,
      "roomTypes": [
        "TRADING"
      ],
      "examples": [
        {
          "operatorId": "char_272_strong",
          "operatorName": "ジェイ",
          "buffId": "trade_ord_limit_count[000]",
          "buffName": "下町の商売人",
          "roomType": "TRADING"
        }
      ]
    },
    {
      "tag": "$cc.tag.dungeon",
      "label": "【ライオスパーティー】",
      "kind": "kw",
      "category": "operatorTag",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "DORMITORY"
      ],
      "examples": [
        {
          "operatorId": "char_4143_sensi",
          "operatorName": "センシ",
          "buffId": "dorm_rec_all&tag[000]",
          "buffName": "ベテラン料理人",
          "roomType": "DORMITORY"
        }
      ]
    },
    {
      "tag": "$cc.tag.durin",
      "label": "ドゥリン族",
      "kind": "kw",
      "category": "operatorTag",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "TRADING"
      ],
      "examples": [
        {
          "operatorId": "char_4055_bgsnow",
          "operatorName": "パゼオンカ",
          "buffId": "trade_ord_line_durin[010]",
          "buffName": "地下の住人",
          "roomType": "TRADING"
        }
      ]
    },
    {
      "tag": "$cc.tag.knight",
      "label": "騎士",
      "kind": "kw",
      "category": "operatorTag",
      "implementationHint": "dictionaryResolved",
      "count": 1,
      "roomTypes": [
        "CONTROL"
      ],
      "examples": [
        {
          "operatorId": "char_4098_vvana",
          "operatorName": "ヴィヴィアナ",
          "buffId": "control_prod_fraction[000]",
          "buffName": "燭騎士の微光",
          "roomType": "CONTROL"
        }
      ]
    },
    {
      "tag": "$cc.tra.pepe",
      "label": "特別独占オーダー",
      "kind": "kw",
      "category": "tradingState",
      "implementationHint": "manualRule",
      "count": 1,
      "roomTypes": [
        "TRADING"
      ],
      "examples": [
        {
          "operatorId": "char_4058_pepe",
          "operatorName": "ペペ",
          "buffId": "trade_ord_pepe[000]",
          "buffName": "比類なき慧眼",
          "roomType": "TRADING"
        }
      ]
    }
  ],
  "tagDictionary": {
    "$cc.g.lgd": {
      "tag": "$cc.g.lgd",
      "label": "龍門近衛局",
      "category": "faction",
      "operatorNames": [
        "チェン",
        "ホシグマ",
        "スワイヤー"
      ]
    },
    "$cc.g.lda": {
      "tag": "$cc.g.lda",
      "label": "リー探偵事務所",
      "category": "faction",
      "operatorNames": [
        "リー",
        "ア",
        "ウン",
        "ワイフー"
      ]
    },
    "$cc.g.ussg": {
      "tag": "$cc.g.ussg",
      "label": "ウルサス学生自治団",
      "category": "faction",
      "operatorNames": [
        "ロサ",
        "ズィマー",
        "イースチナ",
        "グム",
        "リェータ"
      ]
    },
    "$cc.g.A1": {
      "tag": "$cc.g.A1",
      "label": "A1小隊",
      "category": "faction",
      "operatorNames": [
        "ハイビスカス",
        "ラヴァ",
        "ビーグル",
        "フェン",
        "クルース"
      ]
    },
    "$cc.g.R6": {
      "tag": "$cc.g.R6",
      "label": "レインボー小隊",
      "category": "faction",
      "operatorNames": [
        "Ash",
        "Tachanka",
        "Blitz",
        "Frost",
        "Ela",
        "Doc",
        "Iana",
        "Fuze"
      ]
    },
    "$cc.g.Attack": {
      "tag": "$cc.g.Attack",
      "label": "攻撃側",
      "category": "faction",
      "operatorNames": [
        "Ash",
        "Blitz",
        "Iana",
        "Fuze"
      ]
    },
    "$cc.g.Defence": {
      "tag": "$cc.g.Defence",
      "label": "防衛側",
      "category": "faction",
      "operatorNames": [
        "Tachanka",
        "Frost",
        "Ela",
        "Doc"
      ]
    },
    "$cc.g.abyssal": {
      "tag": "$cc.g.abyssal",
      "label": "アビサルハンター",
      "category": "faction",
      "operatorNames": [
        "グレイディーア",
        "スカジ",
        "スペクター",
        "アンドレアナ",
        "ウルピアヌス"
      ]
    },
    "$cc.g.psk": {
      "tag": "$cc.g.psk",
      "label": "レッドパイン騎士団",
      "category": "faction",
      "operatorNames": [
        "フレイムテイル",
        "ファートゥース",
        "アッシュロック",
        "ワイルドメイン",
        "ジャスティスナイト"
      ]
    },
    "$cc.g.karlan": {
      "tag": "$cc.g.karlan",
      "label": "イェラグ",
      "category": "faction",
      "operatorNames": [
        "シルバーアッシュ",
        "ノーシス",
        "プラマニクス",
        "クリフハート",
        "マッターホルン",
        "クーリエ",
        "イェラ",
        "オーロラ",
        "デーゲンブレヒャー",
        "スノーハンター"
      ]
    },
    "$cc.g.sui": {
      "tag": "$cc.g.sui",
      "label": "歳",
      "category": "faction",
      "operatorNames": [
        "ニェン",
        "シー",
        "リィン",
        "チョンユエ",
        "シュウ",
        "ユー"
      ]
    },
    "$cc.g.glasgow": {
      "tag": "$cc.g.glasgow",
      "label": "グラスゴー",
      "category": "faction",
      "operatorNames": [
        "シージ",
        "モーガン",
        "ダグザ",
        "インドラ"
      ]
    },
    "$cc.g.rh": {
      "tag": "$cc.g.rh",
      "label": "ライン生命",
      "category": "faction",
      "operatorNames": [
        "サイレンス",
        "イフリータ",
        "サリア",
        "フィリオプシス",
        "メイヤー",
        "マゼラン",
        "ドロシー",
        "アステジーニ",
        "ミュルジス"
      ]
    },
    "$cc.g.sm": {
      "tag": "$cc.g.sm",
      "label": "サーミ",
      "category": "faction",
      "operatorNames": [
        "ギターノ",
        "バイビーク",
        "カニパラート",
        "ティフォン",
        "サンタラ",
        "ヴァラルクビン"
      ]
    },
    "$cc.g.bs": {
      "tag": "$cc.g.bs",
      "label": "BSW",
      "category": "faction",
      "operatorNames": [
        "リスカム",
        "フランカ",
        "ジェシカ",
        "バニラ",
        "アーモンド",
        "サーファー"
      ]
    },
    "$cc.g.siracusa": {
      "tag": "$cc.g.siracusa",
      "label": "シラクーザ",
      "category": "faction",
      "operatorNames": [
        "アンジェリーナ",
        "ラップランド",
        "プロヴァンス",
        "ヴァーミル",
        "ブローカ",
        "シャマレ",
        "スズラン",
        "キアーベ",
        "アオスタ",
        "ペナンス",
        "ルナカブ",
        "ヴィジェル",
        "アロマ",
        "ウルピスフォリア",
        "フィグリーノ",
        "荒蕪ラップランド"
      ]
    },
    "$cc.g.laterano": {
      "tag": "$cc.g.laterano",
      "label": "ラテラーノ",
      "category": "faction",
      "operatorNames": [
        "プリュム",
        "アドナキエル",
        "イグゼキュター",
        "モスティマ",
        "アンブリエル",
        "アレーン",
        "アルケット",
        "フィアメッタ",
        "エンフォーサー",
        "スプリア",
        "インサイダー",
        "ヴィルトゥオーサ",
        "レミュアン",
        "サンクタ・ミキサー",
        "CONFESS-47"
      ]
    },
    "$cc.g.elite": {
      "tag": "$cc.g.elite",
      "label": "エリートオペレーター",
      "category": "faction",
      "operatorNames": [
        "ロスモンティス",
        "ブレイズ",
        "ロゴス",
        "熾炎ブレイズ",
        "レイディアン",
        "マントラ"
      ]
    },
    "$cc.tag.op": {
      "tag": "$cc.tag.op",
      "label": "作業用プラットフォーム",
      "category": "operatorTag",
      "operatorNames": [
        "Lancet-2",
        "Castle-3",
        "THRM-EX",
        "ジャスティスナイト",
        "Friston-3",
        "PhonoR-0",
        "CONFESS-47"
      ]
    },
    "$cc.tag.knight": {
      "tag": "$cc.tag.knight",
      "label": "騎士",
      "category": "operatorTag",
      "operatorNames": [
        "耀騎士ニアール",
        "ニアール",
        "ブレミシャイン",
        "ウィスラッシュ",
        "フレイムテイル",
        "ファートゥース",
        "アッシュロック",
        "ワイルドメイン",
        "ジャスティスナイト",
        "グラベル",
        "ヴィヴィアナ"
      ]
    },
    "$cc.tag.durin": {
      "tag": "$cc.tag.durin",
      "label": "ドゥリン族",
      "category": "operatorTag",
      "operatorNames": [
        "ミニマリスト",
        "テンニンカ",
        "チェストナット",
        "ドゥリン",
        "テクノ"
      ]
    },
    "$cc.tag.mh": {
      "tag": "$cc.tag.mh",
      "label": "アイルーと愉快な仲間たち",
      "category": "operatorTag",
      "operatorNames": [
        "レウスSノイルホーン",
        "キリンRヤトウ",
        "テラ大陸調査団"
      ]
    },
    "$cc.tag.dungeon": {
      "tag": "$cc.tag.dungeon",
      "label": "ライオスパーティー",
      "category": "operatorTag",
      "operatorNames": [
        "マルシル",
        "ライオス",
        "チルチャック",
        "センシ"
      ]
    }
  },
  "skillFamilyDictionary": {
    "$cc.sk.manu1": {
      "tag": "$cc.sk.manu1",
      "label": "標準化系スキル",
      "category": "skillFamily",
      "buffIds": [
        "manu_prod_spd[000]",
        "manu_prod_spd[010]",
        "manu_prod_spd[1000]"
      ],
      "skillIcons": [
        "bskill_man_spd1",
        "bskill_man_spd2"
      ],
      "buffs": [
        {
          "buffId": "manu_prod_spd[000]",
          "buffName": "標準化α",
          "skillIcon": "bskill_man_spd1"
        },
        {
          "buffId": "manu_prod_spd[010]",
          "buffName": "標準化β",
          "skillIcon": "bskill_man_spd2"
        },
        {
          "buffId": "manu_prod_spd[1000]",
          "buffName": "標準化α",
          "skillIcon": "bskill_man_spd1"
        }
      ]
    },
    "$cc.sk.manu2": {
      "tag": "$cc.sk.manu2",
      "label": "ラインテク系スキル",
      "category": "skillFamily",
      "buffIds": [
        "manu_prod_spd[001]",
        "manu_prod_spd[011]",
        "manu_prod_spd[021]"
      ],
      "skillIcons": [
        "bskill_man_spd1",
        "bskill_man_spd2",
        "bskill_man_spd3"
      ],
      "buffs": [
        {
          "buffId": "manu_prod_spd[001]",
          "buffName": "ラインテクα",
          "skillIcon": "bskill_man_spd1"
        },
        {
          "buffId": "manu_prod_spd[011]",
          "buffName": "ラインテクβ",
          "skillIcon": "bskill_man_spd2"
        },
        {
          "buffId": "manu_prod_spd[021]",
          "buffName": "ラインテクγ",
          "skillIcon": "bskill_man_spd3"
        }
      ]
    },
    "$cc.sk.manu3": {
      "tag": "$cc.sk.manu3",
      "label": "レッドパイン系スキル",
      "category": "skillFamily",
      "buffIds": [
        "manu_prod_spd[002]",
        "manu_prod_spd[012]"
      ],
      "skillIcons": [
        "bskill_man_spd1",
        "bskill_man_spd2"
      ],
      "buffs": [
        {
          "buffId": "manu_prod_spd[002]",
          "buffName": "レッドパインα",
          "skillIcon": "bskill_man_spd1"
        },
        {
          "buffId": "manu_prod_spd[012]",
          "buffName": "レッドパインβ",
          "skillIcon": "bskill_man_spd2"
        }
      ]
    },
    "$cc.sk.manu4": {
      "tag": "$cc.sk.manu4",
      "label": "金属工芸系スキル",
      "category": "skillFamily",
      "buffIds": [
        "manu_formula_spd[100]",
        "manu_formula_spd[101]",
        "manu_formula_spd[102]",
        "manu_formula_spd[110]"
      ],
      "skillIcons": [
        "bskill_man_gold1",
        "bskill_man_gold2"
      ],
      "buffs": [
        {
          "buffId": "manu_formula_spd[100]",
          "buffName": "金属工芸α",
          "skillIcon": "bskill_man_gold1"
        },
        {
          "buffId": "manu_formula_spd[101]",
          "buffName": "金属工芸α",
          "skillIcon": "bskill_man_gold1"
        },
        {
          "buffId": "manu_formula_spd[102]",
          "buffName": "金属工芸α",
          "skillIcon": "bskill_man_gold1"
        },
        {
          "buffId": "manu_formula_spd[110]",
          "buffName": "金属工芸β",
          "skillIcon": "bskill_man_gold2"
        }
      ]
    }
  },
  "operators": [
    {
      "id": "char_456_ash",
      "name": "Ash",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[990]",
          "buffName": "レインボー小隊",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_r6",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のレインボー小隊所属オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.R6><@cc.kw>レインボー小隊</></>所属オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.R6",
              "kind": "kw",
              "label": "レインボー小隊"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_bd[000]",
          "buffName": "情報備蓄",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_ash",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のレインボー小隊所属オペレーター1人につき、情報備蓄+1",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.R6><@cc.kw>レインボー小隊</></>所属オペレーター1人につき、<$cc.bd_ash><@cc.rem>情報備蓄</></><@cc.vup>+1</>",
          "conditionTags": [
            {
              "tag": "$cc.g.R6",
              "kind": "kw",
              "label": "レインボー小隊"
            },
            {
              "tag": "$cc.bd_ash",
              "kind": "rem",
              "label": "情報備蓄"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_ash",
              "name": "情報備蓄"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4123_ela",
      "name": "Ela",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "train_spd_tag[020]",
          "buffName": "戦術指導・防衛",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_defense",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）防衛側オペレーター1人につき、訓練速度+10%（最大4人まで）",
          "rawDescription": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）<$cc.g.Defence><@cc.kw>防衛側</></>オペレーター1人につき、訓練速度<@cc.vup>+10%</>（最大<@cc.kw>4</>人まで）",
          "conditionTags": [
            {
              "tag": "$cc.g.Defence",
              "kind": "kw",
              "label": "防衛側"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_clue_cost&faction[990]",
          "buffName": "反抗者",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_ela",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、ボード上未入手の手がかりを入手しやすいが、自身を除く制御中枢内全員の1時間ごとの体力消費量+0.25",
          "rawDescription": "制御中枢配置時、ボード上未入手の手がかりを入手しやすいが、自身を除く制御中枢内全員の1時間ごとの体力消費量<@cc.vdown>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4179_monstr",
      "name": "Mon3tr",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[012]",
          "buffName": "駆け出しの識者",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_prod_spd[1000]",
          "buffName": "最高権限",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_p_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全製造所の製造効率+2%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全製造所の製造効率<@cc.vup>+2%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_113_cqbw",
      "name": "W",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[040]",
          "buffName": "狙撃エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_sniper1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[640]",
          "buffName": "最後の仕上げ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train3_sniper2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%。特化ランク3への訓練をサポートする場合、訓練速度がさらに+65%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>3</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_cost&profession[340]",
          "buffName": "飽きっぽい",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_w",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で狙撃の特化ランク3への訓練の協力者として配置時、体力消費が1時間ごと+1",
          "rawDescription": "訓練室で<@cc.kw>狙撃</>の特化ランク<@cc.vup>3</>への訓練の協力者として配置時、体力消費が1時間ごと<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_225_haak",
      "name": "ア",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "control_clue_cost[000]",
          "buffName": "神経質",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_c_wt",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、応接室配属オペレーターの手がかり捜索の傾向を強める。制御中枢内全員の1時間ごとの体力消費量+1.5",
          "rawDescription": "制御中枢配置時、応接室配属オペレーターの<@cc.kw>手がかり捜索の傾向</>を<@cc.kw>強める</>。制御中枢内全員の1時間ごとの体力消費量<@cc.vdown>+1.5</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[170]",
          "buffName": "高精度手術",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_medic3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+60%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4009_irene",
      "name": "アイリーニ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd_doubleProf[000]",
          "buffName": "剣とハンドキャノン",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR",
            "SNIPER"
          ],
          "skillIcon": "bskill_train_vanguard&sniper",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛と狙撃の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>と<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_reduceTime[000]",
          "buffName": "精神鍛錬",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_reduceTime",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置し、一度の訓練時間が5時間に達した時、協力対象の次の訓練に必要な時間が-50%（どちらか一方が訓練室を離れると効果が消える）",
          "rawDescription": "訓練室で協力者として配置し、一度の訓練時間が<@cc.vup>5</>時間に達した時、協力対象の次の訓練に必要な時間が<@cc.vup>-50%</>（どちらか一方が訓練室を離れると効果が消える）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4132_ascln",
      "name": "アスカロン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "control_train_spd[010]",
          "buffName": "S.W.E.E.P.責任者",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_train_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、訓練室で訓練を行っているオペレーターがいる場合、当該オペレーターの訓練速度+5%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、訓練室で訓練を行っているオペレーターがいる場合、当該オペレーターの訓練速度<@cc.vup>+5%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_tra_spd[030]",
          "buffName": "情報中枢",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_t_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全貿易所の受注効率+7%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全貿易所の受注効率<@cc.vup>+7%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_332_archet",
      "name": "アルケット",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&dorm&lv[000]",
          "buffName": "信仰募金α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&dorm1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、宿舎の合計レベルが1につき、受注効率+1%",
          "rawDescription": "貿易所配置時、宿舎の合計レベルが1につき、受注効率<@cc.vup>+1%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd&dorm&lv[010]",
          "buffName": "信仰募金β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&dorm2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、宿舎の合計レベルが1につき、受注効率+2%",
          "rawDescription": "貿易所配置時、宿舎の合計レベルが1につき、受注効率<@cc.vup>+2%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_291_aglina",
      "name": "アンジェリーナ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[060]",
          "buffName": "トランスポーター・ロドス",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_rhodes2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、ロドス製薬の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>ロドス製薬</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4087_ines",
      "name": "イネス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "hire_spd[001]",
          "buffName": "人事管理β",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+35%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd_hast[000]",
          "buffName": "集まる影",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd_hast1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%。その後、さらに1時間ごとに+2%（最大+30%まで）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>。その後、さらに1時間ごとに<@cc.vup>+2%</>（最大<@cc.vup>+30%</>まで）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_134_ifrit",
      "name": "イフリータ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[001]",
          "buffName": "火力発電α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[013]",
          "buffName": "高火力発電",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_400_weedy",
      "name": "ウィーディ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&power[010]",
          "buffName": "自動化β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&power2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、自身以外の配属オペレーター全員の製造効率を0にする（施設の数量による製造効率上昇に影響なし）。発電所1か所につき、製造効率+10%",
          "rawDescription": "製造所配置時、自身以外の配属オペレーター全員の製造効率を<@cc.vdown>０にする</>（施設の数量による製造効率上昇に影響なし）。<@cc.kw>発電所</>1か所につき、製造効率<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "powerPlantManufacture",
              "percentPerPowerPlant": 10,
              "products": [
                "GOLD",
                "EXP"
              ],
              "approximate": false,
              "note": "自動化系。配置先の製造所では自身以外の製造効率を0として扱う。",
              "suppressesOtherOperators": true,
              "source": "override"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd&power[020]",
          "buffName": "シードラゴン",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&power3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、自身以外の配属オペレーター全員の製造効率を0にする（施設の数量による製造効率上昇に影響なし）。発電所1か所につき、製造効率+15%",
          "rawDescription": "製造所配置時、自身以外の配属オペレーター全員の製造効率を<@cc.vdown>０にする</>（施設の数量による製造効率上昇に影響なし）。<@cc.kw>発電所</>1か所につき、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "powerPlantManufacture",
              "percentPerPowerPlant": 15,
              "products": [
                "GOLD",
                "EXP"
              ],
              "approximate": false,
              "note": "自動化系。配置先の製造所では自身以外の製造効率を0として扱う。",
              "suppressesOtherOperators": true,
              "source": "override"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_1019_siege2",
      "name": "ヴィーナ・ヴィクトリア",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&par[000]",
          "buffName": "外貿決議α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "trade_ord_spd&par1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&par[001]",
          "buffName": "外貿決議β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "trade_ord_spd&par2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%、配置貿易所にグラスゴー所属オペレーターがいる場合、追加で受注効率+10%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>、配置貿易所に<$cc.g.glasgow><@cc.kw>グラスゴー</></>所属オペレーターがいる場合、追加で受注効率<@cc.vup>+10%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.glasgow",
              "kind": "kw",
              "label": "グラスゴー"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            },
            {
              "type": "tradingSpeedIfTaggedOperatorInSameRoom",
              "value": 10,
              "tag": "$cc.g.glasgow",
              "source": "autoTagCondition"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4098_vvana",
      "name": "ヴィヴィアナ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[010]",
          "buffName": "カレンデュラの詩会",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_prod_fraction[000]",
          "buffName": "燭騎士の微光",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_fraction_knight",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、製造所に配置されている騎士オペレーター1人につき、製造効率+7%",
          "rawDescription": "制御中枢配置時、製造所に配置されている<$cc.tag.knight><@cc.kw>騎士</></>オペレーター1人につき、製造効率<@cc.vup>+7%</>",
          "conditionTags": [
            {
              "tag": "$cc.tag.knight",
              "kind": "kw",
              "label": "騎士"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeedForTaggedOperator",
              "value": 7,
              "tag": "$cc.tag.knight",
              "products": [
                "GOLD",
                "EXP"
              ],
              "source": "autoTagCondition"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_427_vigil",
      "name": "ヴィジェル",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "meet_spd[032]",
          "buffName": "統率者の外交術",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+25%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd&meet[000]",
          "buffName": "新都市貿易",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&meet1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+25%、応接室のレベル1につき、追加で受注効率+5%、最大+40%まで",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+25%</>、応接室のレベル1につき、追加で受注効率<@cc.vup>+5%</>、最大<@cc.vup>+40%</>まで",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeedPerRoomLevel",
              "roomType": "MEETING",
              "baseValue": 25,
              "valuePerLevel": 5,
              "maxValue": 40,
              "approximate": false,
              "note": "応接室レベルごとの受注効率上昇。",
              "source": "override"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_1035_wisdel",
      "name": "ウィシャデル",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "control_meeting&ord[000]",
          "buffName": "共犯者α",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_c_babel",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、イネスが応接室に配置されているとき、応接室の手がかり捜索速度+5%。ヘドリーが貿易所に配置されているとき、ヘドリーのいる貿易所の注文上限+1",
          "rawDescription": "制御中枢配置時、<@cc.kw>イネス</>が応接室に配置されているとき、応接室の手がかり捜索速度<@cc.vup>+5%</>。<@cc.kw>ヘドリー</>が貿易所に配置されているとき、ヘドリーのいる貿易所の注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_meeting&ord[001]",
          "buffName": "共犯者β",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_c_babel2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、イネスが応接室に配置されているとき、応接室の手がかり捜索速度+5%。ヘドリーが貿易所に配置されているとき、ヘドリーのいる貿易所の注文上限+2",
          "rawDescription": "制御中枢配置時、<@cc.kw>イネス</>が応接室に配置されているとき、応接室の手がかり捜索速度<@cc.vup>+5%</>。<@cc.kw>ヘドリー</>が貿易所に配置されているとき、ヘドリーのいる貿易所の注文上限<@cc.vup>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_expand_double[000]",
          "buffName": "バベルの旗印",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost_expand",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、他の施設内で仕事中のオペレーターの体力が1時間ごとに+0.1回復し、シヴィライト・エテルナを配置した場合は追加で+0.1回復（制御中枢内の他のスキル間とは特殊比較方式が適用される）",
          "rawDescription": "制御中枢配置時、<$cc.c.room2><@cc.kw>他の施設</></>内で仕事中のオペレーターの体力が1時間ごとに<@cc.vup>+0.1</>回復し、<@cc.kw>シヴィライト・エテルナ</>を配置した場合は追加で<@cc.vup>+0.1</>回復（制御中枢内の他のスキル間とは<$cc.c.sui2_1><@cc.rem>特殊比較方式</></>が適用される）",
          "conditionTags": [
            {
              "tag": "$cc.c.room2",
              "kind": "kw",
              "label": "他の施設"
            },
            {
              "tag": "$cc.c.sui2_1",
              "kind": "rem",
              "label": "特殊比較方式"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_245_cello",
      "name": "ヴィルトゥオーサ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "dorm_bd_num[000]",
          "buffName": "声なき協奏",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_bdnum",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、オペレーター1名につき、静かなる共鳴+1",
          "rawDescription": "配置宿舎内、オペレーター<@cc.vup>1</>名につき、<$cc.bd_B><@cc.rem>静かなる共鳴</></><@cc.vup>+1</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_B",
              "kind": "rem",
              "label": "静かなる共鳴"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_B",
              "name": "静かなる共鳴"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all&bd[000]",
          "buffName": "言葉なき賛歌",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_rec_allbd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.2。静かなる共鳴5ごとに、配置宿舎内の全員の1時間ごとの体力回復量が追加で+0.01（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>。<$cc.bd_B><@cc.rem>静かなる共鳴</></><@cc.vup>5</>ごとに、配置宿舎内の全員の1時間ごとの体力回復量が追加で<@cc.vup>+0.01</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.bd_B",
              "kind": "rem",
              "label": "静かなる共鳴"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_B",
              "name": "静かなる共鳴"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4145_ulpia",
      "name": "ウルピアヌス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd_doubleProf[201]",
          "buffName": "「質問は正確にせよ」",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR",
            "SUPPORT"
          ],
          "skillIcon": "bskill_train_guard&supporter",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛と補助の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>と<@cc.kw>補助</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_power_down[000]",
          "buffName": "「手段は有効であれ」",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_abyssal",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、1時間ごとの体力消費量+1。基地に配置された（補佐と活動室利用者を除く）アビサルハンターオペレーター1人につき、訓練速度+10%（最大5人まで）",
          "rawDescription": "訓練室で協力者として配置時、1時間ごとの体力消費量<@cc.vdown>+1</>。基地に配置された（補佐と活動室利用者を除く）<$cc.g.abyssal><@cc.kw>アビサルハンター</></>オペレーター1人につき、訓練速度<@cc.vup>+10%</>（最大<@cc.kw>5</>人まで）",
          "conditionTags": [
            {
              "tag": "$cc.g.abyssal",
              "kind": "kw",
              "label": "アビサルハンター"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4026_vulpis",
      "name": "ウルピスフォリア",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "meet_spd[1000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd[1010]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&bd[100]",
          "buffName": "殺し屋の休暇",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&bd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、スズランと同時に応接室に配置された場合、追加で手がかり捜索速度+30%",
          "rawDescription": "応接室配置時、<@cc.kw>スズラン</>と同時に応接室に配置された場合、追加で手がかり捜索速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_180_amgoat",
      "name": "エイヤフィヤトラ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd[213]",
          "buffName": "火山学者",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_originium2",
          "products": [
            "DIAMOND"
          ],
          "description": "製造所配置時、源石製造の製造効率+35%",
          "rawDescription": "製造所配置時、<@cc.kw>源石</>製造の製造効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 35,
              "products": [
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "hire_spd[011]",
          "buffName": "天災トランスポーターβ",
          "roomType": "HIRE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd5",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+45%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4046_ebnhlz",
      "name": "エーベンホルツ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd_bd_n1[000]",
          "buffName": "音感",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_bd_n1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、宿舎中のオペレーター1人につき、知覚情報+1。1の知覚情報が1の静かなる共鳴に転化される",
          "rawDescription": "製造所配置時、宿舎中のオペレーター<@cc.kw>1</>人につき、<$cc.bd_a1><@cc.rem>知覚情報</></><@cc.vup>+1</>。<@cc.vup>1</>の<$cc.bd_a1><@cc.rem>知覚情報</></>が<@cc.vup>1</>の<$cc.bd_B><@cc.rem>静かなる共鳴</></>に転化される",
          "conditionTags": [
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            },
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            },
            {
              "tag": "$cc.bd_B",
              "kind": "rem",
              "label": "静かなる共鳴"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            },
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            },
            {
              "tag": "$cc.bd_B",
              "name": "静かなる共鳴"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd_bd[000]",
          "buffName": "彷徨う旋律",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd_bd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、静かなる共鳴4につき、受注効率+1%",
          "rawDescription": "貿易所配置時、<$cc.bd_B><@cc.rem>静かなる共鳴</></><@cc.vup>4</>につき、受注効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_B",
              "kind": "rem",
              "label": "静かなる共鳴"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_B",
              "name": "静かなる共鳴"
            }
          ],
          "effects": [
            {
              "type": "ebenholzTrading",
              "percentPerSilentResonance": 0.25,
              "requiresSkill": "trade_ord_spd_bd_n1[000]",
              "approximate": true,
              "note": "宿舎人数から静かなる共鳴を近似計算する。",
              "source": "override"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd_bd[010]",
          "buffName": "茫然たる和声",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd_bd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、静かなる共鳴2につき、受注効率+1%",
          "rawDescription": "貿易所配置時、<$cc.bd_B><@cc.rem>静かなる共鳴</></><@cc.vup>2</>につき、受注効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_B",
              "kind": "rem",
              "label": "静かなる共鳴"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_B",
              "name": "静かなる共鳴"
            }
          ],
          "effects": [
            {
              "type": "ebenholzTrading",
              "percentPerSilentResonance": 0.5,
              "requiresSkill": "trade_ord_spd_bd_n1[000]",
              "approximate": true,
              "note": "宿舎人数から静かなる共鳴を近似計算する。",
              "source": "override"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_103_angel",
      "name": "エクシア",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd[010]",
          "buffName": "ペンギン急便α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd[020]",
          "buffName": "物流エキスパート",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+35%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 35,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4010_etlchi",
      "name": "エンテレケイア",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "dorm_hireToRecAll[001]",
          "buffName": "純粋な心α",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_hireToRecAll2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.1、公開求人の最大同時求人可能数が2より1多いごとに、体力回復量が追加で+0.05（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>、公開求人の最大同時求人可能数が2より1多いごとに、体力回復量が追加で<@cc.vup>+0.05</>（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_hireToRecAll[021]",
          "buffName": "純粋な心β",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_hireToRecAll3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.1、公開求人の最大同時求人可能数が2より1多いごとに、体力回復量が追加で+0.1（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>、公開求人の最大同時求人可能数が2より1多いごとに、体力回復量が追加で<@cc.vup>+0.1</>（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_426_billro",
      "name": "カーネリアン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[050]",
          "buffName": "術師エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_caster1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[150]",
          "buffName": "手中万象",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_caster3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+60%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1029_yato2",
      "name": "キリンRヤトウ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&bd2[010]",
          "buffName": "スタミナ回復",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost_felyne",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、自身の1時間ごとの体力消費量+0.5、マタタビ+8",
          "rawDescription": "制御中枢配置時、自身の1時間ごとの体力消費量<@cc.vdown>+0.5</>、<$cc.bd_felyne><@cc.rem>マタタビ</></><@cc.vup>+8</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_felyne",
              "kind": "rem",
              "label": "マタタビ"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_felyne",
              "name": "マタタビ"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_token_prod_spd2[000]",
          "buffName": "率先垂範",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_token_p_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "アイルーと愉快な仲間たち所属オペレーターと共に制御中枢に配置時、全製造所の製造効率+2%（同種の効果は高いほうのみ適用）",
          "rawDescription": "<$cc.tag.mh><@cc.kw>アイルーと愉快な仲間たち</></>所属オペレーターと共に制御中枢に配置時、全製造所の製造効率<@cc.vup>+2%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.tag.mh",
              "kind": "kw",
              "label": "アイルーと愉快な仲間たち"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1502_crosly",
      "name": "クラウンスレイヤー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[031]",
          "buffName": "牙の技巧",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[022]",
          "buffName": "逆境の栄光",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp3",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+35%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 35,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_474_glady",
      "name": "グレイディーア",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "control_mp_aegir1[000]",
          "buffName": "潮汐の見張り番",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost_aegir",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、宿舎以外の施設内のアビサルハンター所属オペレーター1人につき、自身の1時間ごとの体力消費量が+0.5。宿舎内のアビサルハンター所属オペレーター1人につき、自身の体力が1時間ごとに+0.5回復、宿舎内のアビサルハンター所属オペレーターの体力が最大値であれば、体力回復量が追加で+0.5",
          "rawDescription": "制御中枢配置時、宿舎以外の施設内の<$cc.g.abyssal><@cc.kw>アビサルハンター</></>所属オペレーター1人につき、自身の1時間ごとの体力消費量が<@cc.vdown>+0.5</>。宿舎内の<$cc.g.abyssal><@cc.kw>アビサルハンター</></>所属オペレーター1人につき、自身の体力が1時間ごとに<@cc.vup>+0.5</>回復、宿舎内の<$cc.g.abyssal><@cc.kw>アビサルハンター</></>所属オペレーターの体力が最大値であれば、体力回復量が追加で<@cc.vup>+0.5</>",
          "conditionTags": [
            {
              "tag": "$cc.g.abyssal",
              "kind": "kw",
              "label": "アビサルハンター"
            },
            {
              "tag": "$cc.g.abyssal",
              "kind": "kw",
              "label": "アビサルハンター"
            },
            {
              "tag": "$cc.g.abyssal",
              "kind": "kw",
              "label": "アビサルハンター"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_aegir2[000]",
          "buffName": "集団狩猟α",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_aegir",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復。基地内（補佐と活動室利用者を除く）のアビサルハンター所属オペレーターが特殊効果を得る（一部のスキルに対して特殊加算制限がある）",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復。基地内（補佐と活動室利用者を除く）の<$cc.g.abyssal><@cc.kw>アビサルハンター</></>所属オペレーターが<$cc.c.abyssal2_1><@cc.rem>特殊効果</></>を得る（一部のスキルに対して<$cc.c.abyssal2_3><@cc.rem>特殊加算制限</></>がある）",
          "conditionTags": [
            {
              "tag": "$cc.g.abyssal",
              "kind": "kw",
              "label": "アビサルハンター"
            },
            {
              "tag": "$cc.c.abyssal2_1",
              "kind": "rem",
              "label": "特殊効果"
            },
            {
              "tag": "$cc.c.abyssal2_3",
              "kind": "rem",
              "label": "特殊加算制限"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_aegir2[010]",
          "buffName": "集団狩猟β",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_aegir2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復。基地内（補佐と活動室利用者を除く）のアビサルハンター所属オペレーターが特殊効果を得る（一部のスキルに対して特殊加算制限がある）",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復。基地内（補佐と活動室利用者を除く）の<$cc.g.abyssal><@cc.kw>アビサルハンター</></>所属オペレーターが<$cc.c.abyssal2_2><@cc.rem>特殊効果</></>を得る（一部のスキルに対して<$cc.c.abyssal2_3><@cc.rem>特殊加算制限</></>がある）",
          "conditionTags": [
            {
              "tag": "$cc.g.abyssal",
              "kind": "kw",
              "label": "アビサルハンター"
            },
            {
              "tag": "$cc.c.abyssal2_2",
              "kind": "rem",
              "label": "特殊効果"
            },
            {
              "tag": "$cc.c.abyssal2_3",
              "kind": "rem",
              "label": "特殊加算制限"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_2013_cerber",
      "name": "ケオベ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "manu_prod_limit&cost[002]",
          "buffName": "「みんなほしい」",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+8、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+8</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_addition[031]",
          "buffName": "「まてない」",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_add1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、最初の1時間製造効率+20%、その後まで1時間ごと更に+1%、最終的に+25%になる",
          "rawDescription": "製造所配置時、最初の1時間製造効率<@cc.vup>+20%</>、その後まで1時間ごと更に<@cc.vup>+1%</>、最終的に<@cc.vup>+25%</>になる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_003_kalts",
      "name": "ケルシー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[040]",
          "buffName": "未知なる技術",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p5",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_prod_spd[000]",
          "buffName": "最高権限",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_p_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全製造所の製造効率+2%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全製造所の製造効率<@cc.vup>+2%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_377_gdglow",
      "name": "ゴールデングロー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[003]",
          "buffName": "電磁充電α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[023]",
          "buffName": "放電",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+20%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_479_sleach",
      "name": "サイラッハ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single[031]",
          "buffName": "ヴィクトリア文学",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.7（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.7</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_hire_spd[000]",
          "buffName": "親和力",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_h_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、事務連絡速度が30%(基本連絡速度5％を含む)を下回るとき、連絡速度が+20%増加(同類の効果は重複適用しない、他の基地スキルの影響を受けない)",
          "rawDescription": "制御中枢配置時、事務連絡速度が<@cc.vup>30%</>(基本連絡速度5％を含む)を下回るとき、連絡速度が<@cc.vup>+20%</>増加(同類の効果は重複適用しない、他の基地スキルの影響を受けない)",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_362_saga",
      "name": "サガ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[010]",
          "buffName": "先鋒エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train_vanguard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[110]",
          "buffName": "入世",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train_vanguard3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+60%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_202_demkni",
      "name": "サリア",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[010]",
          "buffName": "ウォッチマン",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_rhine2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、ライン生命の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>ライン生命</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4194_rmixer",
      "name": "サンクタ・ミキサー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "meet_spd[011]",
          "buffName": "お茶入れマスター",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+15%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd[022]",
          "buffName": "社交の達人",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd_ext&P[000]",
          "buffName": "不滅の童心",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd_confes1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、フィアメッタが宿舎に配置されている場合、追加で手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、<@cc.kw>フィアメッタ</>が宿舎に配置されている場合、追加で手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_2015_dusk",
      "name": "シー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&bd1[000]",
          "buffName": "「物を以て喜ばず」",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost_bd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復。自身の体力が12を以下の時、俗世之憂+15",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復。自身の体力が<@cc.kw>12</>を以下の時、<$cc.bd_b1><@cc.rem>俗世之憂</></><@cc.vup>+15</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世之憂"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世之憂"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_cost&bd2[000]",
          "buffName": "「己を以て悲しまず」",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost_bd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、自身の1時間ごとの体力消費量+0.5。自身の体力が12を上回る時、知覚情報+10",
          "rawDescription": "制御中枢配置時、自身の1時間ごとの体力消費量<@cc.vdown>+0.5</>。自身の体力が<@cc.kw>12</>を上回る時、<$cc.bd_a1><@cc.rem>知覚情報</></><@cc.vup>+10</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_112_siege",
      "name": "シージ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all[013]",
          "buffName": "カリスマ",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[022]",
          "buffName": "ライオンハート",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4134_cetsyr",
      "name": "シヴィライト・エテルナ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "control_mp_cost_double[000]",
          "buffName": "魔王の継承",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_amiya",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "アーミヤと共に制御中枢に配置時、自身とアーミヤの体力が1時間ごとに+0.05回復",
          "rawDescription": "<@cc.kw>アーミヤ</>と共に制御中枢に配置時、自身と<@cc.kw>アーミヤ</>の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_cost_double[001]",
          "buffName": "「未完の物語」",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_amiya1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "アーミヤと共に制御中枢に配置時、自身とアーミヤの体力が1時間ごとに+0.1回復",
          "rawDescription": "<@cc.kw>アーミヤ</>と共に制御中枢に配置時、自身と<@cc.kw>アーミヤ</>の体力が1時間ごとに<@cc.vup>+0.1</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_upMeetingSpeed[100]",
          "buffName": "希望の集い",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_c_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、応接室の手がかり捜索速度+15%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、応接室の手がかり捜索速度<@cc.vup>+15%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_147_shining",
      "name": "シャイニング",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single[010]",
          "buffName": "思いやり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single[020]",
          "buffName": "慈悲",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.75（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.75</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_2025_shu",
      "name": "シュウ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_cost[000]",
          "buffName": "春雷響き、万物長ず",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_cost_room1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、配属オペレーターの1時間ごとの体力消費量-0.1",
          "rawDescription": "製造所配置時、配属オペレーターの1時間ごとの体力消費量<@cc.vup>-0.1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_bd[300]",
          "buffName": "稲禾厚く、秋に順ひて収む",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_bd7",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、俗世之憂3につき、製造効率+1%",
          "rawDescription": "製造所配置時、<$cc.bd_b1><@cc.rem>俗世之憂</></><@cc.vup>3</>につき、製造効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世之憂"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世之憂"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_340_shwaz",
      "name": "シュヴァルツ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single_P[000]",
          "buffName": "ティーサーブ",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single_schwarz",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）。対象がセイロンの場合、更に+0.45",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）。対象が<@cc.kw>セイロン</>の場合、更に<@cc.vup>+0.45</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[140]",
          "buffName": "黒矢",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_sniper3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+60%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_172_svrash",
      "name": "シルバーアッシュ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[020]",
          "buffName": "カランド貿易α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+15%、注文上限+2",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+15%</>、注文上限<@cc.vup>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 15,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&limit[022]",
          "buffName": "カランドの主",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit5",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%、注文上限+4",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>、注文上限<@cc.vup>+4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4121_zuole",
      "name": "ズオ・ラウ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd[001]",
          "buffName": "オールラウンダーα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_all",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、訓練速度+25%",
          "rawDescription": "訓練室で協力者として配置時、訓練速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_bd&reduceTime[000]",
          "buffName": "三思後行",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_accmu_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、1回の特化に最初から最後までオペレーターを変更せず協力するたびに一定量の武道を獲得する。武道が上限に達すると、次に前衛オペレーターのスキルを特化ランク1まで上げる協力を行う際、訓練が即座に完了し、所有している武道をすべて消費する",
          "rawDescription": "訓練室で協力者として配置時、1回の特化に最初から最後までオペレーターを変更せず協力するたびに一定量の<$cc.t.accmuguard1><@cc.rem>武道</></>を獲得する。<$cc.t.accmuguard1><@cc.rem>武道</></>が上限に達すると、次に<@cc.kw>前衛</>オペレーターのスキルを特化ランク<@cc.kw>1</>まで上げる協力を行う際、訓練が即座に完了し、所有している<$cc.t.accmuguard1><@cc.rem>武道</></>をすべて消費する",
          "conditionTags": [
            {
              "tag": "$cc.t.accmuguard1",
              "kind": "rem",
              "label": "武道"
            },
            {
              "tag": "$cc.t.accmuguard1",
              "kind": "rem",
              "label": "武道"
            },
            {
              "tag": "$cc.t.accmuguard1",
              "kind": "rem",
              "label": "武道"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_263_skadi",
      "name": "スカジ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "dorm_rec_oneself[000]",
          "buffName": "一人きり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_oneself[020]",
          "buffName": "悲歌",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one5",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+1",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_358_lisa",
      "name": "スズラン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[060]",
          "buffName": "補助エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SUPPORT"
          ],
          "skillIcon": "bskill_train_supporter1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、補助の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>補助</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[160]",
          "buffName": "共鳴",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SUPPORT"
          ],
          "skillIcon": "bskill_train_supporter3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、補助の訓練速度+60%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>補助</>の訓練速度<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4072_ironmn",
      "name": "ステインレス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost&dorm[000]",
          "buffName": "以心伝心",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_cost&dorm",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、宿舎で休養中の体力が12以下のオペレーター10人につき、体力消費が4の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、宿舎で休養中の体力が<@cc.vup>12</>以下のオペレーター<@cc.kw>10</>人につき、体力消費が<@cc.kw>4</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_dorm[002]",
          "buffName": "意気投合",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_dorm2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、宿舎で休養中の体力が12以下のオペレーター1人につき、副産物の入手確率+5%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、宿舎で休養中の体力が<@cc.vup>12</>以下のオペレーター<@cc.kw>1</>人につき、副産物の入手確率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_350_surtr",
      "name": "スルト",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[120]",
          "buffName": "剣術経験",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+60%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_293_thorns",
      "name": "ソーンズ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[012]",
          "buffName": "「錬金術」",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+50%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_recovery[000]",
          "buffName": "「爆発アート」",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_recovery",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、2回連続で副産物が産出されなかった場合、自身の体力を対象素材の必要体力消費分回復（加工完成後一括計算）",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、<@cc.vup>2</>回連続で副産物が産出されなかった場合、自身の体力を<@cc.kw>対象素材の必要体力消費分回復</>（加工完成後一括計算）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_010_chen",
      "name": "チェン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[000]",
          "buffName": "才徳兼備",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_lungmen",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内の龍門近衛局所属オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.lgd><@cc.kw>龍門近衛局</></>所属オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.lgd",
              "kind": "kw",
              "label": "龍門近衛局"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[100]",
          "buffName": "警視",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+25%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4082_qiubai",
      "name": "チューバイ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession3[160]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession3[161]",
          "buffName": "実戦技術：領主",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_lord",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%。訓練者の職分が領主である場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>。訓練者の職分が<@cc.kw>領主</>である場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_2024_chyue",
      "name": "チョンユエ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&bd_up[000]",
          "buffName": "我を我と知る",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost_bd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、自身の1時間ごとの体力消費量が+0.5。宿舎と活動室以外の施設内の歳所属オペレーター1人につき、俗世之憂+5（最大5人まで）",
          "rawDescription": "制御中枢配置時、自身の1時間ごとの体力消費量が<@cc.vdown>+0.5</>。宿舎と活動室以外の施設内の<$cc.g.sui><@cc.kw>歳</></>所属オペレーター1人につき、<$cc.bd_b1><@cc.rem>俗世之憂</></><@cc.vup>+5</>（最大5人まで）",
          "conditionTags": [
            {
              "tag": "$cc.g.sui",
              "kind": "kw",
              "label": "歳"
            },
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世之憂"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世之憂"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_bd_cost_expand[000]",
          "buffName": "孤光共に照らす",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost_bd4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、他の施設内で仕事中のオペレーターの体力が1時間ごとに+0.05回復し、俗世之憂20につき、体力が追加で+0.05回復（制御中枢内の他のスキル間とは特殊比較方式が適用される）",
          "rawDescription": "制御中枢配置時、<$cc.c.room2><@cc.kw>他の施設</></>内で仕事中のオペレーターの体力が1時間ごとに<@cc.vup>+0.05</>回復し、<$cc.bd_b1><@cc.rem>俗世之憂</></><@cc.vup>20</>につき、体力が追加で<@cc.vup>+0.05</>回復（制御中枢内の他のスキル間とは<$cc.c.sui2_1><@cc.rem>特殊比較方式</></>が適用される）",
          "conditionTags": [
            {
              "tag": "$cc.c.room2",
              "kind": "kw",
              "label": "他の施設"
            },
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世之憂"
            },
            {
              "tag": "$cc.c.sui2_1",
              "kind": "rem",
              "label": "特殊比較方式"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世之憂"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_2012_typhon",
      "name": "ティフォン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "meet_spd&sami[000]",
          "buffName": "氷原の足跡",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&sami",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%。他のサーミオペレーターと同時に応接室に配置された場合、追加で手がかり捜索速度+5%、自身の1時間ごとの体力消費量+0.5",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>。他の<$cc.g.sm><@cc.kw>サーミ</></>オペレーターと同時に応接室に配置された場合、追加で手がかり捜索速度<@cc.vup>+5%</>、自身の1時間ごとの体力消費量<@cc.vdown>+0.5</>",
          "conditionTags": [
            {
              "tag": "$cc.g.sm",
              "kind": "kw",
              "label": "サーミ"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession3[170]",
          "buffName": "実戦技術：破城射手",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_siegesniper",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室に協力者として配置時、狙撃の訓練速度+30%。訓練者の職分が破城射手である場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室に協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>。訓練者の職分が<@cc.kw>破城射手</>である場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4116_blkkgt",
      "name": "デーゲンブレヒャー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[100]",
          "buffName": "威圧感",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit_down1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%、注文上限-2（上限数最低1）",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>、注文上限<@cc.vdown>-2</>（上限数最低1）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&limit[101]",
          "buffName": "威風堂々",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit_down2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+25%、注文上限-6（上限数最低1）",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+25%</>、注文上限<@cc.vdown>-6</>（上限数最低1）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 25,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd_variable3[000]",
          "buffName": "王者の風格",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_limit2spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、配置貿易所の注文上限増加量5につき、受注効率+25%、最大+100%まで",
          "rawDescription": "貿易所配置時、配置貿易所の注文上限増加量<@cc.vup>5</>につき、受注効率<@cc.vup>+25%</>、最大<@cc.vup>+100%</>まで",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1042_phatm2",
      "name": "トラゴーディア",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd&limit&cost[000]",
          "buffName": "鏡に映る像",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp&spd&limit&cost1",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+20%、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+20%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd&limit&cost[010]",
          "buffName": "劇中の人物",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp&spd&limit&cost2",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+35%、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+35%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4048_doroth",
      "name": "ドロシー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_skill_spd1[010]",
          "buffName": "アーツ理論応用",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_skill_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、配置製造所のラインテク系スキルの発動数1につき、製造効率+5%",
          "rawDescription": "製造所配置時、配置製造所の<$cc.sk.manu2><@cc.kw>ラインテク系スキル</></>の発動数1につき、製造効率<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.sk.manu2",
              "kind": "kw",
              "label": "ラインテク系スキル"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeedPerSkillFamilyInSameRoom",
              "valuePerSkill": 5,
              "tag": "$cc.sk.manu2",
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "autoSkillFamilyCondition"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[011]",
          "buffName": "ラインテクβ",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_179_cgbird",
      "name": "ナイチンゲール",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all[000]",
          "buffName": "鼓舞",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.1（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[021]",
          "buffName": "ランプの貴婦人",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4138_narant",
      "name": "ナラントゥヤ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "manu_prod_limit&cost[011]",
          "buffName": "恐れ知らずの豪気",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+10、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+10</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd&dorm&lv[000]",
          "buffName": "砂賊の団結力",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_spd&dorm1",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、宿舎の合計レベルが1につき、金属製造の製造効率+1%",
          "rawDescription": "製造所配置時、宿舎の合計レベルが1につき、<@cc.kw>金属</>製造の製造効率<@cc.vup>+1%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_2014_nian",
      "name": "ニェン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[160]",
          "buffName": "希有金属鑑定",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+100%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+100%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost[010]",
          "buffName": "やりたい放題",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_nian",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、対象素材の体力消費+2",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、対象素材の体力消費<@cc.vdown>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4146_nymph",
      "name": "ニンフ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all[017]",
          "buffName": "瞑想の儀α",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[027]",
          "buffName": "瞑想の儀β",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_dorm_rec[002]",
          "buffName": "心巡り",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_leader",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全ての宿舎内のオペレーターの1時間ごとの体力回復量+0.05（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全ての宿舎内のオペレーターの1時間ごとの体力回復量<@cc.vup>+0.05</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_450_necras",
      "name": "ネクラス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[052]",
          "buffName": "術師エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_caster1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[650]",
          "buffName": "死炎の導き",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train3_caster2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+30%。特化ランク3への訓練をサポートする場合、訓練速度がさらに+65%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>3</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_cost&profession[350]",
          "buffName": "安らぎなどいらず",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_necras",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で術師の特化ランク3への訓練の協力者として配置時、体力消費が1時間ごと+1",
          "rawDescription": "訓練室で<@cc.kw>術師</>の特化ランク<@cc.vup>3</>への訓練の協力者として配置時、体力消費が1時間ごと<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_206_gnosis",
      "name": "ノーシス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[030]",
          "buffName": "暗躍の謀略家",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_karlan",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のイェラグオペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.karlan><@cc.kw>イェラグ</></>オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.karlan",
              "kind": "kw",
              "label": "イェラグ"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_tra_limit&spd[000]",
          "buffName": "緻密な研究者",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_t_limit&spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配属時、貿易所に配属したイェラグオペレーターの受注効率-15%、注文上限+6。",
          "rawDescription": "制御中枢配属時、貿易所に配属した<$cc.g.karlan><@cc.kw>イェラグ</></>オペレーターの受注効率<@cc.vdown>-15%</>、注文上限<@cc.vup>+6</>。",
          "conditionTags": [
            {
              "tag": "$cc.g.karlan",
              "kind": "kw",
              "label": "イェラグ"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_222_bpipe",
      "name": "バグパイプ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all&oneself[021]",
          "buffName": "牧歌",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&one3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.55。配置宿舎内、全員の1時間ごとの体力回復量+0.1（同種の効果は高いほうのみ適用）",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.55</>。配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[310]",
          "buffName": "熟練",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_asc2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でSoCを加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>SoC</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4055_bgsnow",
      "name": "パゼオンカ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&gold[100]",
          "buffName": "キャッチコピー",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_flow_gs",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、純金生産ラインの数1につき、受注効率+5%",
          "rawDescription": "貿易所配置時、<$cc.t.flow_gold><@cc.kw>純金生産ライン</></>の数<@cc.kw>1</>につき、受注効率<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.t.flow_gold",
              "kind": "kw",
              "label": "純金生産ライン"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeedPerGoldLine",
              "valuePerLine": 5,
              "source": "autoFlowGold"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_line_durin[010]",
          "buffName": "地下の住人",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_flow_durin",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、基地内（補佐と活動室利用者を除く）に配置中のドゥリン族オペレーター1人につき（最大4人）、配置貿易所の純金生産ラインの数1+",
          "rawDescription": "貿易所配置時、基地内（補佐と活動室利用者を除く）に配置中の<$cc.tag.durin><@cc.kw>ドゥリン族</></>オペレーター<@cc.kw>1</>人につき（最大<@cc.kw>4</>人）、配置貿易所の<$cc.t.flow_gold><@cc.kw>純金生産ライン</></>の数<@cc.kw>1</>+",
          "conditionTags": [
            {
              "tag": "$cc.tag.durin",
              "kind": "kw",
              "label": "ドゥリン族"
            },
            {
              "tag": "$cc.t.flow_gold",
              "kind": "kw",
              "label": "純金生産ライン"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "goldLineBonusPerTaggedBaseOperator",
              "tag": "$cc.tag.durin",
              "maxOperators": 4,
              "bonusLinesPerOperator": 1,
              "source": "autoFlowGold"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_472_pasngr",
      "name": "パッセンジャー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[003]",
          "buffName": "電磁充電α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[016]",
          "buffName": "エネルギー効率化",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd&power[000]",
          "buffName": "自動化α",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&power1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、自身以外の配属オペレーター全員の製造効率を0にする（施設の数量による製造効率上昇に影響なし）。発電所1か所につき、製造効率+5%",
          "rawDescription": "製造所配置時、自身以外の配属オペレーター全員の製造効率を<@cc.vdown>０にする</>（施設の数量による製造効率上昇に影響なし）。<@cc.kw>発電所</>1か所につき、製造効率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "powerPlantManufacture",
              "percentPerPowerPlant": 5,
              "products": [
                "GOLD",
                "EXP"
              ],
              "approximate": false,
              "note": "自動化系。配置先の製造所では自身以外の製造効率を0として扱う。",
              "suppressesOtherOperators": true,
              "source": "override"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_485_pallas",
      "name": "パラス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "manu_prod_limit&cost[003]",
          "buffName": "叡智の境界",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+8、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+8</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[000]",
          "buffName": "制勝の秘策",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp1",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+25%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4202_haruka",
      "name": "ハルカ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all[028]",
          "buffName": "スターの影響力",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd[012]",
          "buffName": "番組オファー",
          "roomType": "HIRE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd5",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+45%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_430_fartth",
      "name": "ファートゥース",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all&oneself[042]",
          "buffName": "「帰郷」",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&one3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.55。配置宿舎内、全員の1時間ごとの体力回復量+0.1（同種の効果は高いほうのみ適用）",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.55</>。配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd[002]",
          "buffName": "レッドパインα",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[012]",
          "buffName": "レッドパインβ",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_250_phatom",
      "name": "ファントム",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[080]",
          "buffName": "特殊エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_specialist1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、特殊の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>特殊</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[180]",
          "buffName": "マスカレード",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_specialist3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、特殊の訓練速度+60%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>特殊</>の訓練速度<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_300_phenxi",
      "name": "フィアメッタ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "dorm_recExcludeOther[000]",
          "buffName": "自律",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_reborn",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の体力が1時間ごとに+2回復し、自身以外からの体力回復効果は適用されない",
          "rawDescription": "宿舎休養時、自身の体力が1時間ごとに<@cc.vup>+2</>回復し、自身以外からの体力回復効果は<@cc.vdown>適用されない</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_exchangeAp[000]",
          "buffName": "一蓮托生",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_exchangeAp",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の体力が最大値であれば、同じ宿舎内で一つ前に配置したオペレーター1人と体力を入れ替わる",
          "rawDescription": "宿舎休養時、自身の<@cc.kw>体力が最大値</>であれば、同じ宿舎内で<@cc.kw>一つ前に</>配置したオペレーター1人と体力を入れ替わる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_017_huang",
      "name": "ブレイズ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[001]",
          "buffName": "火力発電α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[210]",
          "buffName": "鉄を切って鋼を断つ",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_BUILDING"
          ],
          "skillIcon": "bskill_ws_build3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で建築材料を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>建築材料</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_420_flamtl",
      "name": "フレイムテイル",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[007]",
          "buffName": "小さなリーダー",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_psk[000]",
          "buffName": "赤松の騎士",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_psk",
          "products": [
            "EXP"
          ],
          "description": "制御中枢配置時、製造所に配置されたレッドパイン騎士団オペレーター1人につき、作戦記録製造の製造効率+10%、金属製造の製造効率-10%",
          "rawDescription": "制御中枢配置時、製造所に配置された<$cc.g.psk><@cc.kw>レッドパイン騎士団</></>オペレーター1人につき、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+10%</>、<@cc.kw>金属</>製造の製造効率<@cc.vdown>-10%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.psk",
              "kind": "kw",
              "label": "レッドパイン騎士団"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_423_blemsh",
      "name": "ブレミシャイン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "workshop_formula_free[000]",
          "buffName": "倹約家",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_free",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、龍門幣を消費しない",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、龍門幣を消費しない",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost2[000]",
          "buffName": "熱心な修理屋",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_cost_blemishine",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+40%、体力消費が8以上の素材の体力消費-4",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+40%</>、体力消費が<@cc.kw>8</>以上の素材の体力消費<@cc.vup>-4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4088_hodrer",
      "name": "ヘドリー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_par&per[000]",
          "buffName": "最初の一歩α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_par&per1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+25%。イネスが作業施設に配置されているとき（補佐を除く）、追加で受注効率+5%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+25%</>。<@cc.kw>イネス</>が<$cc.c.room3><@cc.kw>作業施設</></>に配置されているとき（補佐を除く）、追加で受注効率<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.c.room3",
              "kind": "kw",
              "label": "作業施設"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeedPerNamedOperatorInWorkFacility",
              "valuePerOperator": 5,
              "operatorNames": [
                "イネス"
              ],
              "roomScope": "workFacility",
              "approximate": false,
              "note": "イネスが作業施設に配置されている場合の追加受注効率。MVPでは所持済みなら作業施設支援として配置可能とみなす。",
              "source": "override"
            },
            {
              "type": "tradingSpeed",
              "value": 25,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_par&per[001]",
          "buffName": "最初の一歩β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_par&per2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%。イネス、Wが作業施設に配置されているとき（補佐を除く）、追加でそれぞれ受注効率+5%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>。<@cc.kw>イネス</>、<@cc.kw>W</>が<$cc.c.room3><@cc.kw>作業施設</></>に配置されているとき（補佐を除く）、追加でそれぞれ受注効率<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.c.room3",
              "kind": "kw",
              "label": "作業施設"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeedPerNamedOperatorInWorkFacility",
              "valuePerOperator": 5,
              "operatorNames": [
                "イネス",
                "W"
              ],
              "roomScope": "workFacility",
              "approximate": false,
              "note": "イネス/Wが作業施設に配置されている場合の追加受注効率。MVPでは所持済みなら作業施設支援として配置可能とみなす。",
              "source": "override"
            },
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4065_judge",
      "name": "ペナンス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "hire_spd_cost[210]",
          "buffName": "法の下に",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_skgoat2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+50%、1時間ごとの体力消費量+0.5",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+50%</>、1時間ごとの体力消費量<@cc.vdown>+0.5</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_hireToRecAll[000]",
          "buffName": "同志を募る",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_hireToRecAll1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15、公開求人の最大同時求人可能数が2より1多いごとに、体力回復量が追加で+0.05（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>、公開求人の最大同時求人可能数が2より1多いごとに、体力回復量が追加で<@cc.vup>+0.05</>（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4058_pepe",
      "name": "ペペ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_limit&trade&lv[000]",
          "buffName": "招客",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_limit&trade1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、配置貿易所のレベル1ごとに注文上限+1",
          "rawDescription": "貿易所配置時、配置貿易所のレベル1ごとに注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_pepe[000]",
          "buffName": "比類なき慧眼",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_pepe",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、特別独占オーダー（違約オーダーと見なされない）を必ず受注し、かつこのタイプのオーダーは受注効率による影響を受けない",
          "rawDescription": "貿易所配置時、<$cc.tra.pepe><@cc.kw>特別独占オーダー</></>（違約オーダーと見なされない）を必ず受注し、かつこのタイプのオーダーは<@cc.vdown>受注効率による影響を受けない</>",
          "conditionTags": [
            {
              "tag": "$cc.tra.pepe",
              "kind": "kw",
              "label": "特別独占オーダー"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_188_helage",
      "name": "ヘラグ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all&oneself[010]",
          "buffName": "超越",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.55",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.55</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all&oneself[011]",
          "buffName": "昇華",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.1（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all&oneself[012]",
          "buffName": "解脱",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 2,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&one3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.55。配置宿舎内、全員の1時間ごとの体力回復量+0.1（同種の効果は高いほうのみ適用）",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.55</>。配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[010]",
          "buffName": "兵は詭道なり",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_136_hsguma",
      "name": "ホシグマ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[030]",
          "buffName": "重装エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train_defender1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[130]",
          "buffName": "般若",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train_defender3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+60%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4027_heyak",
      "name": "ホルハイヤ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "meet_spd&cost_condChar[001]",
          "buffName": "「プロ意識」α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&cost_condChar2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度15%、1時間ごとの体力消費量+1",
          "rawDescription": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度<@cc.vup>15%</>、1時間ごとの体力消費量<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&cost_condChar[011]",
          "buffName": "「プロ意識」β",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&cost_condChar3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度35%、1時間ごとの体力消費量+1",
          "rawDescription": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度<@cc.vup>35%</>、1時間ごとの体力消費量<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&condChar_mustget[000]",
          "buffName": "文献学顧問",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&condChar_mustget",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、自身だけが仕事中の状態にある場合、連続で16を超える体力を消費した後、次で必ずライン生命の手がかりを入手できる",
          "rawDescription": "応接室配置時、自身だけが仕事中の状態にある場合、連続で<@cc.kw>16</>を超える体力を消費した後、次で<@cc.kw>必ず</><@cc.kw>ライン生命</>の手がかりを入手できる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4039_horn",
      "name": "ホルン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost3[112]",
          "buffName": "軍事工学",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、体力消費が4の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、体力消費が<@cc.kw>4</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_device[111]",
          "buffName": "DIY・熾合金",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_alloyBlock",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で上級熾合金を加工時、副産物の入手確率+100%",
          "rawDescription": "加工所で<@cc.kw>上級熾合金</>を加工時、副産物の入手確率<@cc.vup>+100%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_264_f12yin",
      "name": "マウンテン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "hire_spd&clue2[230]",
          "buffName": "裏事情",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&blacksteel2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%、連絡回数が1回増える度に、BSWの手がかりを入手する確率が増加（勤務時間と最大同時求人可能数が確率に影響する）",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>、連絡回数が<@cc.vup>1</>回増える度に、<@cc.kw>BSW</>の手がかりを入手する確率が増加（勤務時間と最大同時求人可能数が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_flag[010]",
          "buffName": "クルビア史",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_flag_rhine",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、捜索で入手した手がかりがライン生命でない時、ライン生命の手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、捜索で入手した手がかりが<@cc.kw>ライン生命</>でない時、<@cc.kw>ライン生命</>の手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_248_mgllan",
      "name": "マゼラン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[011]",
          "buffName": "多機能セオドライト",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+50%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost[000]",
          "buffName": "ドローン・DDF",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_cost_magallan",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、体力消費が4以上の素材の体力消費-2",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、体力消費が<@cc.kw>4</>以上の素材の体力消費<@cc.vup>-2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_311_mudrok",
      "name": "マドロック",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost4[000]",
          "buffName": "執着",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_constant",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、対象素材の体力消費が2になる",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、対象素材の体力消費が<@cc.vup>2</>になる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_device[050]",
          "buffName": "DIY・源岩",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_orirock",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で源岩系素材を加工時、副産物の入手確率+90%",
          "rawDescription": "加工所で<@cc.kw>源岩</>系素材を加工時、副産物の入手確率<@cc.vup>+90%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4141_marcil",
      "name": "マルシル",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[004]",
          "buffName": "使い魔派遣α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_marcille1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+20%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 20,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[014]",
          "buffName": "使い魔派遣β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_marcille2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+30%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd_bd[400]",
          "buffName": "意外に美味しい",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_bd_dungeon",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、魔物料理1つにつき製造効率+1%",
          "rawDescription": "製造所配置時、<$cc.bd_dungeon><@cc.rem>魔物料理</></><@cc.vup>1</>つにつき製造効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_dungeon",
              "kind": "rem",
              "label": "魔物料理"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_dungeon",
              "name": "魔物料理"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4204_mantra",
      "name": "マントラ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&tag[000]",
          "buffName": "注文分配α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&tag[010]",
          "buffName": "E.O.小隊",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ord_spd&tag1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+25%。エリートオペレーターが配置されている施設1室（補佐と活動室利用者である場合を除く）ごとに、追加で受注効率+2%（最大10室まで）",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+25%</>。<$cc.g.elite><@cc.kw>エリートオペレーター</></>が配置されている施設1室（補佐と活動室利用者である場合を除く）ごとに、追加で受注効率<@cc.vup>+2%</>（最大<@cc.kw>10</>室まで）",
          "conditionTags": [
            {
              "tag": "$cc.g.elite",
              "kind": "kw",
              "label": "エリートオペレーター"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_437_mizuki",
      "name": "ミヅキ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_skill_spd1[000]",
          "buffName": "意識連結",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_skill_spd",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、配置製造所の標準化系スキルの発動数1につき、製造効率+5%",
          "rawDescription": "製造所配置時、配置製造所の<$cc.sk.manu1><@cc.kw>標準化系スキル</></>の発動数1につき、製造効率<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.sk.manu1",
              "kind": "kw",
              "label": "標準化系スキル"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeedPerSkillFamilyInSameRoom",
              "valuePerSkill": 5,
              "tag": "$cc.sk.manu1",
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "autoSkillFamilyCondition"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[010]",
          "buffName": "標準化β",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_249_mlyss",
      "name": "ミュルジス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all&oneself[022]",
          "buffName": "天性の美貌",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&one3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.55。配置宿舎内、全員の1時間ごとの体力回復量+0.1（同種の効果は高いほうのみ適用）",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.55</>。配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_rhine[000]",
          "buffName": "生態課主任",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_power_rec_rhine",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%。基地内の自身以外（補佐と活動室利用者を除く）のライン生命オペレーター1人につき（最大5人まで）、追加でドローン回復速度+3%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>。基地内の自身以外（補佐と活動室利用者を除く）の<$cc.g.rh><@cc.kw>ライン生命</></>オペレーター1人につき（最大<@cc.kw>5</>人まで）、追加でドローン回復速度<@cc.vup>+3%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.rh",
              "kind": "kw",
              "label": "ライン生命"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4064_mlynar",
      "name": "ムリナール",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[008]",
          "buffName": "社交辞令",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_lonely[000]",
          "buffName": "事務仕事",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_lonely",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、一部の施設内で仕事中のオペレーターの体力が1時間ごとに+0.1回復し、制御中枢内の一部のスキルにより、他の施設内で仕事中のオペレーターの体力が追加で回復",
          "rawDescription": "制御中枢配置時、<$cc.c.room1><@cc.kw>一部の施設</></>内で仕事中のオペレーターの体力が1時間ごとに<@cc.vup>+0.1</>回復し、制御中枢内の<$cc.c.skill><@cc.kw>一部のスキル</></>により、<$cc.c.room2><@cc.kw>他の施設</></>内で仕事中のオペレーターの体力が追加で回復",
          "conditionTags": [
            {
              "tag": "$cc.c.room1",
              "kind": "kw",
              "label": "一部の施設"
            },
            {
              "tag": "$cc.c.skill",
              "kind": "kw",
              "label": "一部のスキル"
            },
            {
              "tag": "$cc.c.room2",
              "kind": "kw",
              "label": "他の施設"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_213_mostma",
      "name": "モスティマ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[020]",
          "buffName": "トランスポーター・ペンギン急便",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_penguin2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、ペンギン急便の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>ペンギン急便</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_2026_yu",
      "name": "ユー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all&group[000]",
          "buffName": "衆口の調え",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_sui",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、基地に配置された（補佐と活動室利用者を除く）歳オペレーター1人につき、全員の1時間ごとの体力回復量+0.06（最大4人まで、同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、基地に配置された（補佐と活動室利用者を除く）<$cc.g.sui><@cc.kw>歳</></>オペレーター1人につき、全員の1時間ごとの体力回復量<@cc.vup>+0.06</>（最大<@cc.kw>4</>人まで、同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.g.sui",
              "kind": "kw",
              "label": "歳"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_bd[000]",
          "buffName": "共に楽しむ",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_bd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、1時間ごとの体力消費量+1。俗世之憂1につき、訓練速度+1%",
          "rawDescription": "訓練室で協力者として配置時、1時間ごとの体力消費量<@cc.vdown>+1</>。<$cc.bd_b1><@cc.rem>俗世之憂</></><@cc.vup>1</>につき、訓練速度<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世之憂"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世之憂"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_416_zumama",
      "name": "ユーネクテス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&power[000]",
          "buffName": "自動化α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&power1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、自身以外の配属オペレーター全員の製造効率を0にする（施設の数量による製造効率上昇に影響なし）。発電所1か所につき、製造効率+5%",
          "rawDescription": "製造所配置時、自身以外の配属オペレーター全員の製造効率を<@cc.vdown>０にする</>（施設の数量による製造効率上昇に影響なし）。<@cc.kw>発電所</>1か所につき、製造効率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "powerPlantManufacture",
              "percentPerPowerPlant": 5,
              "products": [
                "GOLD",
                "EXP"
              ],
              "approximate": false,
              "note": "自動化系。配置先の製造所では自身以外の製造効率を0として扱う。",
              "suppressesOtherOperators": true,
              "source": "override"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd&power[010]",
          "buffName": "自動化β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&power2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、自身以外の配属オペレーター全員の製造効率を0にする（施設の数量による製造効率上昇に影響なし）。発電所1か所につき、製造効率+10%",
          "rawDescription": "製造所配置時、自身以外の配属オペレーター全員の製造効率を<@cc.vdown>０にする</>（施設の数量による製造効率上昇に影響なし）。<@cc.kw>発電所</>1か所につき、製造効率<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "powerPlantManufacture",
              "percentPerPowerPlant": 10,
              "products": [
                "GOLD",
                "EXP"
              ],
              "approximate": false,
              "note": "自動化系。配置先の製造所では自身以外の製造効率を0として扱う。",
              "suppressesOtherOperators": true,
              "source": "override"
            }
          ],
          "supported": true
        },
        {
          "buffId": "control_pow_bot[000]",
          "buffName": "なんとかなる",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_p_bot",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、Lancet-2が発電所に配置されている場合、追加で発電所の施設数+2（施設の数以外に影響なし）",
          "rawDescription": "制御中枢配置時、<@cc.kw>Lancet-2</>が<@cc.kw>発電所</>に配置されている場合、追加で<@cc.kw>発電所</>の施設数<@cc.vup>+2</>（施設の数以外に影響なし）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_322_lmlee",
      "name": "リー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "control_allCost_condChar[000]",
          "buffName": "忙中有閑",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_lda",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "アと共に制御中枢に配置時、制御中枢内全員の体力が1時間ごとに+0.25回復",
          "rawDescription": "<@cc.kw>ア</>と共に制御中枢に配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.25</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_upMeetingSpeed[000]",
          "buffName": "八面玲瓏",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_c_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、応接室の手がかり捜索速度+25%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、応接室の手がかり捜索速度<@cc.vup>+25%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_2023_ling",
      "name": "リィン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "control_facCostReset[000]",
          "buffName": "杯停むること莫れ",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_clear_sui",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、配属された歳所属オペレーターの自身に対する体力消費に関する効果が無効になる",
          "rawDescription": "制御中枢配置時、配属された<$cc.g.sui><@cc.kw>歳</></>所属オペレーターの<@cc.kw>自身</>に対する体力消費に関する効果が<@cc.kw>無効</>になる",
          "conditionTags": [
            {
              "tag": "$cc.g.sui",
              "kind": "kw",
              "label": "歳"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_costToBD[000]",
          "buffName": "「山河遠闊たり」",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost_bd1&bd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、自身の体力が12を上回る時、俗世之憂+15。自身の体力が12を下回る時、知覚情報+10",
          "rawDescription": "制御中枢配置時、自身の体力が<@cc.kw>12</>を上回る時、<$cc.bd_b1><@cc.rem>俗世之憂</></><@cc.vup>+15</>。自身の体力が<@cc.kw>12</>を下回る時、<$cc.bd_a1><@cc.rem>知覚情報</></><@cc.vup>+10</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世之憂"
            },
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世之憂"
            },
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4080_lin",
      "name": "リン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "hire_spd_cost[111]",
          "buffName": "特別ルート",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&cost4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%、1時間ごとの体力消費量-0.25",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_cost&extra[000]",
          "buffName": "唯才是挙",
          "roomType": "HIRE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&extra1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、公開求人の最大同時求人可能数が2より1多いごとに、事務連絡速度+10%",
          "rawDescription": "事務室配置時、公開求人の最大同時求人可能数が2より1多いごとに、事務連絡速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4042_lumen",
      "name": "ルーメン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "dorm_powToRecAll[000]",
          "buffName": "優しい光α",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_powToRecAll1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.1、発電所1箇所につき、更に+0.05（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>、発電所<@cc.kw>1</>箇所につき、更に<@cc.vup>+0.05</>（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_powToRecAll[010]",
          "buffName": "優しい光β",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_powToRecAll2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15、発電所1箇所につき、更に+0.05（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>、発電所<@cc.kw>1</>箇所につき、更に<@cc.vup>+0.05</>（重複後の最終値を基に同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4117_ray",
      "name": "レイ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[116]",
          "buffName": "坑道探査員α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[126]",
          "buffName": "坑道探査員β",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_drop[040]",
          "buffName": "岩石固定",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_drop_orirock",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、T3の副産物が入手できるとき、副産物が必ず中級源岩となる",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、<@cc.kw>T3</>の副産物が入手できるとき、副産物が必ず<@cc.kw>中級源岩</>となる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4195_radian",
      "name": "レイディアン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[013]",
          "buffName": "細やかな気配り",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_dorm_rec_tag[001]",
          "buffName": "無言の慈愛",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_d_r_tag",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全ての宿舎内のエリートオペレーターの体力が1時間ごとに+0.1回復（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全ての宿舎内の<$cc.g.elite><@cc.kw>エリートオペレーター</></>の体力が1時間ごとに<@cc.vup>+0.1</>回復（同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.g.elite",
              "kind": "kw",
              "label": "エリートオペレーター"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4011_lessng",
      "name": "レッシング",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost4[010]",
          "buffName": "苦行の律",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_constant2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、対象素材の体力消費が4になる",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、対象素材の体力消費が<@cc.vup>4</>になる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost4[011]",
          "buffName": "敬虔の律",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_constant3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、対象素材の体力消費が3になる",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、対象素材の体力消費が<@cc.vup>3</>になる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[139]",
          "buffName": "師の教え",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4193_lemuen",
      "name": "レミュアン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&multiPar[000]",
          "buffName": "注文分配α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&multiPar[100]",
          "buffName": "お供",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_lemuen1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%。エクシアと同じ貿易所に配置されている場合、追加で受注効率+25%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>。<@cc.kw><$cc.angel>エクシア</></>と同じ貿易所に配置されている場合、追加で受注効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4133_logos",
      "name": "ロゴス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "train_spd_doubleProf[200]",
          "buffName": "バンシーの力",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "CASTER",
            "SUPPORT"
          ],
          "skillIcon": "bskill_train_caster&supporter1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師と補助の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>と<@cc.kw>補助</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_reduceTime[001]",
          "buffName": "言葉の義",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_reduceTime",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置し、一度の訓練時間が5時間に達した時、協力対象の次の訓練に必要な時間が-50%（どちらか一方が訓練室を離れると効果が消える）",
          "rawDescription": "訓練室で協力者として配置し、一度の訓練時間が<@cc.vup>5</>時間に達した時、協力対象の次の訓練に必要な時間が<@cc.vup>-50%</>（どちらか一方が訓練室を離れると効果が消える）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_197_poca",
      "name": "ロサ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[020]",
          "buffName": "生徒会長",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_ussg",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のウルサス学生自治団所属オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.ussg><@cc.kw>ウルサス学生自治団</></>所属オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.ussg",
              "kind": "kw",
              "label": "ウルサス学生自治団"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd&clue2[250]",
          "buffName": "人望",
          "roomType": "HIRE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&ursus2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%、連絡回数が1回増える度に、ウルサス学生自治団の手がかりを入手する確率が増加（勤務時間と最大同時求人可能数が確率に影響する）",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>、連絡回数が<@cc.vup>1</>回増える度に、<@cc.kw>ウルサス学生自治団</>の手がかりを入手する確率が増加（勤務時間と最大同時求人可能数が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_391_rosmon",
      "name": "ロスモンティス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd_bd_n1[000]",
          "buffName": "超感覚",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_spd_bd_n1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、宿舎中のオペレーター1人につき、知覚情報+1。1の知覚情報が1の思念連鎖に転化される",
          "rawDescription": "製造所配置時、宿舎中のオペレーター<@cc.kw>1</>人につき、<$cc.bd_a1><@cc.rem>知覚情報</></><@cc.vup>+1</>。<@cc.vup>1</>の<$cc.bd_a1><@cc.rem>知覚情報</></>が<@cc.vup>1</>の<$cc.bd_A><@cc.rem>思念連鎖</></>に転化される",
          "conditionTags": [
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            },
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            },
            {
              "tag": "$cc.bd_A",
              "kind": "rem",
              "label": "思念連鎖"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            },
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            },
            {
              "tag": "$cc.bd_A",
              "name": "思念連鎖"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_bd[000]",
          "buffName": "念力",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_bd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、思念連鎖2につき、製造効率+1%",
          "rawDescription": "製造所配置時、<$cc.bd_A><@cc.rem>思念連鎖</></><@cc.vup>2</>につき、製造効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_A",
              "kind": "rem",
              "label": "思念連鎖"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_A",
              "name": "思念連鎖"
            }
          ],
          "effects": [
            {
              "type": "rosmontisManufacture",
              "percentPerThoughtChain": 0.5,
              "requiresSkill": "manu_prod_spd_bd_n1[000]",
              "products": [
                "GOLD",
                "EXP"
              ],
              "approximate": true,
              "note": "宿舎人数から思念連鎖を近似計算する。",
              "source": "override"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd_bd[010]",
          "buffName": "意識実体",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_bd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、思念連鎖1につき、製造効率+1%",
          "rawDescription": "製造所配置時、<$cc.bd_A><@cc.rem>思念連鎖</></><@cc.vup>1</>につき、製造効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_A",
              "kind": "rem",
              "label": "思念連鎖"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_A",
              "name": "思念連鎖"
            }
          ],
          "effects": [
            {
              "type": "rosmontisManufacture",
              "percentPerThoughtChain": 1,
              "requiresSkill": "manu_prod_spd_bd_n1[000]",
              "products": [
                "GOLD",
                "EXP"
              ],
              "approximate": true,
              "note": "宿舎人数から思念連鎖を近似計算する。",
              "source": "override"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_1039_thorn2",
      "name": "引星ソーンズ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd[102]",
          "buffName": "金属工芸α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_gold1",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、金属製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>金属</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "GOLD"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd&trade[1000]",
          "buffName": "原質錬金副産物",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_spd&trade1",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、貿易所1か所につき、配置中の製造所のみ金属製造の製造効率+3%",
          "rawDescription": "製造所配置時、<@cc.kw>貿易所</>1か所につき、配置中の製造所のみ<@cc.kw>金属</>製造の製造効率<@cc.vup>+3%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1020_reed2",
      "name": "焔影リード",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "train_spd_doubleProf[100]",
          "buffName": "赤龍の血",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "CASTER",
            "MEDIC"
          ],
          "skillIcon": "bskill_train_caster&medic1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師と医療の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>と<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_doubleProf[110]",
          "buffName": "赤龍の血",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "CASTER",
            "MEDIC"
          ],
          "skillIcon": "bskill_train_caster&medic2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師と医療の訓練速度+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>と<@cc.kw>医療</>の訓練速度<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_dorm_rec[000]",
          "buffName": "カリスマ",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_leader",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全ての宿舎内のオペレーターの1時間ごとの体力回復量+0.05（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全ての宿舎内のオペレーターの1時間ごとの体力回復量<@cc.vup>+0.05</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1023_ghost2",
      "name": "帰溟スペクター",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[080]",
          "buffName": "特殊エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_specialist1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、特殊の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>特殊</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[680]",
          "buffName": "エーギルの戦術",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train3_specialist2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、特殊の訓練速度+30%。特化ランク3への訓練をサポートする場合、訓練速度がさらに+65%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>特殊</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>3</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_cost&profession[380]",
          "buffName": "闘争への渇望",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_specter",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で特殊の特化ランク3への訓練の協力者として配置時、体力消費が1時間ごと+1",
          "rawDescription": "訓練室で<@cc.kw>特殊</>の特化ランク<@cc.vup>3</>への訓練の協力者として配置時、体力消費が1時間ごと<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1028_texas2",
      "name": "血掟テキサス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "train_spd_doubleProf2[001]",
          "buffName": "沈黙は剣なり",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SPECIAL",
            "PIONEER"
          ],
          "skillIcon": "bskill_train_specialist&pioneer1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置する際、特殊と先鋒の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置する際、<@cc.kw>特殊</>と<@cc.kw>先鋒</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_doubleProf2[000]",
          "buffName": "道を拓く刃",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SPECIAL",
            "PIONEER"
          ],
          "skillIcon": "bskill_train2_specialist&pioneer1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置する際、特殊と先鋒の訓練速度+30%。特化ランク2への訓練をサポートする場合、訓練速度がさらに+50%",
          "rawDescription": "訓練室で協力者として配置する際、<@cc.kw>特殊</>と<@cc.kw>先鋒</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>2</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1038_whitw2",
      "name": "荒蕪ラップランド",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "train_spd_doubleProf[300]",
          "buffName": "気ままな英傑",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "CASTER",
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_caster&vanguard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師と前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>と<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_tag[040]",
          "buffName": "カルネヴァーレ",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_siracusa",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）シラクーザオペレーター1人につき、訓練速度+5%（最大7人まで）",
          "rawDescription": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）<$cc.g.siracusa><@cc.kw>シラクーザ</></>オペレーター1人につき、訓練速度<@cc.vup>+5%</>（最大<@cc.kw>7</>人まで）",
          "conditionTags": [
            {
              "tag": "$cc.g.siracusa",
              "kind": "kw",
              "label": "シラクーザ"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1044_hsgma2",
      "name": "斬業ホシグマ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "control_train_spd[012]",
          "buffName": "下町の人脈",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_train_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、訓練室で訓練を行っているオペレーターがいる場合、当該オペレーターの訓練速度+5%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、訓練室で訓練を行っているオペレーターがいる場合、当該オペレーターの訓練速度<@cc.vup>+5%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_token_prod_spd3[000]",
          "buffName": "同僚との絆",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_token_prod_spd3_lungmenguard",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "龍門近衛局所属オペレーターと共に制御中枢に配置時、全製造所の製造効率+3%（同種の効果は高いほうのみ適用）",
          "rawDescription": "<$cc.g.lgd><@cc.kw>龍門近衛局</></>所属オペレーターと共に制御中枢に配置時、全製造所の製造効率<@cc.vup>+3%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.g.lgd",
              "kind": "kw",
              "label": "龍門近衛局"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1043_leizi2",
      "name": "司霆レイズ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[007]",
          "buffName": "雷法の達人",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[021]",
          "buffName": "克己厳修",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1016_agoat2",
      "name": "純燼エイヤフィヤトラ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "train_spd&profession3[180]",
          "buffName": "医療エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_medic1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession3[181]",
          "buffName": "実戦技術：放浪医",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_wandermedic",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室に協力者として配置時、医療の訓練速度+30%。訓練者の職分が放浪医である場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室に協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>。訓練者の職分が<@cc.kw>放浪医</>である場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all&profession[000]",
          "buffName": "火山温泉浴",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_rec_all&profession",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、基地に配置された（補佐と活動室利用者を除く）放浪医オペレーター1人につき、全員の1時間ごとの体力回復量+0.06（最大4人まで、同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、基地に配置された（補佐と活動室利用者を除く）<@cc.kw>放浪医</>オペレーター1人につき、全員の1時間ごとの体力回復量<@cc.vup>+0.06</>（最大<@cc.kw>4</>人まで、同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1041_angel2",
      "name": "新約エクシア",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single_power[100]",
          "buffName": "天性の楽天家",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single_power[001]",
          "buffName": "聖都事情通",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single_laterano",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎配置時、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）。対象がラテラーノオペレーターの場合、更に+0.45",
          "rawDescription": "宿舎配置時、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）。対象が<$cc.g.laterano><@cc.kw>ラテラーノ</></>オペレーターの場合、更に<@cc.vup>+0.45</>",
          "conditionTags": [
            {
              "tag": "$cc.g.laterano",
              "kind": "kw",
              "label": "ラテラーノ"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd_par[001]",
          "buffName": "市内お急ぎ注文",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_laterano1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、同じ貿易所に配置されているラテラーノオペレーター1人につき、配置貿易所の受注効率+15%",
          "rawDescription": "貿易所配置時、同じ貿易所に配置されている<$cc.g.laterano><@cc.kw>ラテラーノ</></>オペレーター1人につき、配置貿易所の受注効率<@cc.vup>+15%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.laterano",
              "kind": "kw",
              "label": "ラテラーノ"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeedPerTaggedOperatorInSameRoom",
              "valuePerOperator": 15,
              "tag": "$cc.g.laterano",
              "source": "autoTagCondition"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_1032_excu2",
      "name": "聖約イグゼキュター",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd[030]",
          "buffName": "公証人役場教習α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp4",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+20%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 20,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_formula_spd[031]",
          "buffName": "公証人役場教習β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp2",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_formula_limit[020]",
          "buffName": "合理的運用",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp&limit3",
          "products": [
            "EXP"
          ],
          "description": "製造所で作戦記録を製造時、保管上限+4",
          "rawDescription": "製造所で<@cc.kw>作戦記録</>を製造時、保管上限<@cc.vup>+4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1046_sbell2",
      "name": "聖聆プラマニクス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "hire_spd_cost&char[000]",
          "buffName": "巫女の信望",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&cost7",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%、1時間ごとの体力消費量-0.25",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_cost&char[001]",
          "buffName": "心に描く雪境",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&char1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+35%、1時間ごとの体力消費量-0.25。凛御シルバーアッシュが制御中枢に配置されている場合、事務連絡速度がさらに+10%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+35%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>。<@cc.kw>凛御シルバーアッシュ</>が<@cc.kw>制御中枢</>に配置されている場合、事務連絡速度がさらに<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1012_skadi2",
      "name": "濁心スカジ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[060]",
          "buffName": "補助エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SUPPORT"
          ],
          "skillIcon": "bskill_train_supporter1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、補助の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>補助</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[660]",
          "buffName": "同化",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SUPPORT"
          ],
          "skillIcon": "bskill_train3_supporter2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、補助の訓練速度+30%。特化ランク3への訓練をサポートする場合、訓練速度がさらに+65%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>補助</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>3</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_cost&profession[360]",
          "buffName": "変異",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SUPPORT"
          ],
          "skillIcon": "bskill_train_skadi",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で補助の特化ランク3への訓練の協力者として配置時、体力消費が1時間ごと+1",
          "rawDescription": "訓練室で<@cc.kw>補助</>の特化ランク<@cc.vup>3</>への訓練の協力者として配置時、体力消費が1時間ごと<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1026_gvial2",
      "name": "百錬ガヴィル",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[620]",
          "buffName": "実戦指導",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train3_guard2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%。特化ランク3への訓練をサポートする場合、訓練速度がさらに+65%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>3</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_cost&profession[320]",
          "buffName": "オーバートレーニング",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_gavial",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で前衛の特化ランク3への訓練の協力者として配置時、体力消費が1時間ごと+1",
          "rawDescription": "訓練室で<@cc.kw>前衛</>の特化ランク<@cc.vup>3</>への訓練の協力者として配置時、体力消費が1時間ごと<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4182_oblvns",
      "name": "豊川祥子",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_prod_bd_spd[000]",
          "buffName": "豊富な職務経験",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_p_oblvns",
          "products": [
            "GOLD"
          ],
          "description": "制御中枢配置時、金属を製造する製造所の製造効率+0.5%、パッション20につき、製造効率が追加で+0.5%",
          "rawDescription": "制御中枢配置時、<@cc.kw>金属</>を製造する製造所の製造効率<@cc.vup>+0.5%</>、<$cc.bd_mujica><@cc.rem>パッション</></><@cc.vup>20</>につき、製造効率が追加で<@cc.vup>+0.5%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_mujica",
              "kind": "rem",
              "label": "パッション"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_mujica",
              "name": "パッション"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_prod_bd_spd[010]",
          "buffName": "豊富な職務経験",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_p_oblvns",
          "products": [
            "GOLD"
          ],
          "description": "制御中枢配置時、金属を製造する製造所の製造効率+1%、パッション20につき、製造効率が追加で+1%",
          "rawDescription": "制御中枢配置時、<@cc.kw>金属</>を製造する製造所の製造効率<@cc.vup>+1%</>、<$cc.bd_mujica><@cc.rem>パッション</></><@cc.vup>20</>につき、製造効率が追加で<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_mujica",
              "kind": "rem",
              "label": "パッション"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_mujica",
              "name": "パッション"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_cost&bd3[000]",
          "buffName": "逞しいお嬢様",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_mp_oblvns",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、パッションが40以上の場合、1時間ごとの体力消費量+0.05",
          "rawDescription": "制御中枢配置時、パッションが<@cc.kw>40</>以上の場合、1時間ごとの体力消費量<@cc.vdown>+0.05</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1013_chen2",
      "name": "遊龍チェン",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[040]",
          "buffName": "狙撃エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_sniper1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[440]",
          "buffName": "率先垂範",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train1_sniper2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%。特化ランク1への訓練をサポートする場合、訓練速度がさらに+65%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>1</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_cost&profession[140]",
          "buffName": "仕事中毒",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_chen",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で狙撃の特化ランク1への訓練の協力者として配置時、体力消費が1時間ごと+1",
          "rawDescription": "訓練室で<@cc.kw>狙撃</>の特化ランク<@cc.vup>1</>への訓練の協力者として配置時、体力消費が1時間ごと<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1014_nearl2",
      "name": "耀騎士ニアール",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd_tag[000]",
          "buffName": "騎士訓練",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_knight_bd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）騎士オペレーター1人につき、訓練速度+5%（最大5人まで）",
          "rawDescription": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）<$cc.tag.knight><@cc.kw>騎士</></>オペレーター1人につき、訓練速度<@cc.vup>+5%</>（最大<@cc.kw>5</>人まで）",
          "conditionTags": [
            {
              "tag": "$cc.tag.knight",
              "kind": "kw",
              "label": "騎士"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_tag[010]",
          "buffName": "グランド・オーダー",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_knight_bd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）騎士オペレーター1人につき、訓練速度+5%（最大8人まで）",
          "rawDescription": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）<$cc.tag.knight><@cc.kw>騎士</></>オペレーター1人につき、訓練速度<@cc.vup>+5%</>（最大<@cc.kw>8</>人まで）",
          "conditionTags": [
            {
              "tag": "$cc.tag.knight",
              "kind": "kw",
              "label": "騎士"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1033_swire2",
      "name": "琳琅スワイヤー",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd[000]",
          "buffName": "注文分配α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd_variable[000]",
          "buffName": "投資誘致",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_trade_ord_spd_variable",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、配置貿易所の注文上限増加量1につき、受注効率+4%",
          "rawDescription": "貿易所配置時、配置貿易所の注文上限増加量1につき、受注効率<@cc.vup>+4%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1045_svash2",
      "name": "凛御シルバーアッシュ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "control_tra_limit&spd3[000]",
          "buffName": "事業ドメイン",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_t_limit&spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、イェラグ所属オペレーターが3人配置されている貿易所の受注効率+10%",
          "rawDescription": "制御中枢配置時、<$cc.g.karlan><@cc.kw>イェラグ</></>所属オペレーターが<@cc.vup>3</>人配置されている貿易所の受注効率<@cc.vup>+10%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.karlan",
              "kind": "kw",
              "label": "イェラグ"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[111]",
          "buffName": "先鋒エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train_spd&profession2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[112]",
          "buffName": "先駆者の共鳴",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train_spd&profession2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+30%。特化ランク3への訓練をサポートする場合、訓練速度がさらに+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>3</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1031_slent2",
      "name": "淬羽サイレンス",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "hire_spd[032]",
          "buffName": "鳴りやまない電話",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+40%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd[021]",
          "buffName": "ラインテクγ",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+30%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_1047_halo2",
      "name": "溯光アステジーニ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "manu_skill_limit[000]",
          "buffName": "探査用リュック",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_limit1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、配置製造所のラインテク系スキルの発動数1につき、保管上限+5",
          "rawDescription": "製造所配置時、配置製造所の<$cc.sk.manu2><@cc.kw>ラインテク系</></>スキルの発動数1につき、保管上限<@cc.vup>+5</>",
          "conditionTags": [
            {
              "tag": "$cc.sk.manu2",
              "kind": "kw",
              "label": "ラインテク系"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd[011]",
          "buffName": "ラインテクβ",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_1034_jesca2",
      "name": "滌火ジェシカ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[001]",
          "buffName": "注文管理β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+10%、注文上限+4",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+10%</>、注文上限<@cc.vup>+4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 10,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "control_bd_spd[000]",
          "buffName": "旧友との再会",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_bd_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、自身の1時間ごとの体力消費量+0.5、製造所に配置されたBSWオペレーター1人につき、製造効率+5%",
          "rawDescription": "制御中枢配置時、自身の1時間ごとの体力消費量<@cc.vdown>+0.5</>、製造所に配置された<$cc.g.bs><@cc.kw>BSW</></>オペレーター1人につき、製造効率<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.bs",
              "kind": "kw",
              "label": "BSW"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeedForTaggedOperator",
              "value": 5,
              "tag": "$cc.g.bs",
              "products": [
                "GOLD",
                "EXP"
              ],
              "source": "autoTagCondition"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_1040_blaze2",
      "name": "熾炎ブレイズ",
      "rarity": "TIER_6",
      "rarityValue": 6,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "control_train_spd[011]",
          "buffName": "断金の交わり",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_train_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、訓練室で訓練を行っているオペレーターがいる場合、当該オペレーターの訓練速度+5%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、訓練室で訓練を行っているオペレーターがいる場合、当該オペレーターの訓練速度<@cc.vup>+5%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[1022]",
          "buffName": "火力発電γ",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+20%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_457_blitz",
      "name": "Blitz",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[990]",
          "buffName": "レインボー小隊",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_r6",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のレインボー小隊所属オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.R6><@cc.kw>レインボー小隊</></>所属オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.R6",
              "kind": "kw",
              "label": "レインボー小隊"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_blitz[000]",
          "buffName": "言語学",
          "roomType": "HIRE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_blitz",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%、情報備蓄1につき追加で事務連絡速度+5%、ウルサスドリンク1本につき追加で事務連絡速度+5%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>、<$cc.bd_ash><@cc.rem>情報備蓄</></><@cc.vup>1</>につき追加で事務連絡速度<@cc.vup>+5%</>、<$cc.bd_tachanka><@cc.rem>ウルサスドリンク</></><@cc.vup>1</>本につき追加で事務連絡速度<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_ash",
              "kind": "rem",
              "label": "情報備蓄"
            },
            {
              "tag": "$cc.bd_tachanka",
              "kind": "rem",
              "label": "ウルサスドリンク"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_ash",
              "name": "情報備蓄"
            },
            {
              "tag": "$cc.bd_tachanka",
              "name": "ウルサスドリンク"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4125_rdoc",
      "name": "Doc",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd_tag[1020]",
          "buffName": "戦術指導・防衛",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_defense",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）防衛側オペレーター1人につき、訓練速度+10%（最大4人まで）",
          "rawDescription": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）<$cc.g.Defence><@cc.kw>防衛側</></>オペレーター1人につき、訓練速度<@cc.vup>+10%</>（最大<@cc.kw>4</>人まで）",
          "conditionTags": [
            {
              "tag": "$cc.g.Defence",
              "kind": "kw",
              "label": "防衛側"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[026]",
          "buffName": "利他主義",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_458_rfrost",
      "name": "Frost",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[990]",
          "buffName": "レインボー小隊",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_r6",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のレインボー小隊所属オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.R6><@cc.kw>レインボー小隊</></>所属オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.R6",
              "kind": "kw",
              "label": "レインボー小隊"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_frost[000]",
          "buffName": "機械工学",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_frost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率50%、情報備蓄1につき追加で入手確率5%、さらにウルサスドリンクが4本以上の場合、追加で入手確率15%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>50%</>、<$cc.bd_ash><@cc.rem>情報備蓄</></><@cc.vup>1</>につき追加で入手確率<@cc.vup>5%</>、さらに<$cc.bd_tachanka><@cc.rem>ウルサスドリンク</></>が<@cc.vup>4</>本以上の場合、追加で入手確率<@cc.vup>15%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_ash",
              "kind": "rem",
              "label": "情報備蓄"
            },
            {
              "tag": "$cc.bd_tachanka",
              "kind": "rem",
              "label": "ウルサスドリンク"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_ash",
              "name": "情報備蓄"
            },
            {
              "tag": "$cc.bd_tachanka",
              "name": "ウルサスドリンク"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4126_fuze",
      "name": "Fuze",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd_tag[1030]",
          "buffName": "﻿戦術指導・攻撃",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_attack",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）攻撃側オペレーター1人につき、訓練速度+10%（最大4人まで）",
          "rawDescription": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）<$cc.g.Attack><@cc.kw>攻撃側</></>オペレーター1人につき、訓練速度<@cc.vup>+10%</>（最大<@cc.kw>4</>人まで）",
          "conditionTags": [
            {
              "tag": "$cc.g.Attack",
              "kind": "kw",
              "label": "攻撃側"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_bd[000]",
          "buffName": "寡黙な仕事人",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_fuze",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+20%。ウルサスドリンク1本につき、保管上限+2",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+20%</>。<$cc.bd_tachanka><@cc.rem>ウルサスドリンク</></><@cc.vup>1</>本につき、保管上限<@cc.vup>+2</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_tachanka",
              "kind": "rem",
              "label": "ウルサスドリンク"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_tachanka",
              "name": "ウルサスドリンク"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4124_iana",
      "name": "Iana",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "train_spd_tag[030]",
          "buffName": "﻿戦術指導・攻撃",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_attack",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）攻撃側オペレーター1人につき、訓練速度+10%（最大4人まで）",
          "rawDescription": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）<$cc.g.Attack><@cc.kw>攻撃側</></>オペレーター1人につき、訓練速度<@cc.vup>+10%</>（最大<@cc.kw>4</>人まで）",
          "conditionTags": [
            {
              "tag": "$cc.g.Attack",
              "kind": "kw",
              "label": "攻撃側"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd_bd[000]",
          "buffName": "情報エキスパート",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_iana",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+5%。また、情報備蓄1につき、さらに+5%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+5%</>。また、<$cc.bd_ash><@cc.rem>情報備蓄</></><@cc.vup>1</>につき、さらに<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_ash",
              "kind": "rem",
              "label": "情報備蓄"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_ash",
              "name": "情報備蓄"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_459_tachak",
      "name": "Tachanka",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[990]",
          "buffName": "レインボー小隊",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_r6",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のレインボー小隊所属オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.R6><@cc.kw>レインボー小隊</></>所属オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.R6",
              "kind": "kw",
              "label": "レインボー小隊"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_bd[010]",
          "buffName": "ウルサスドリンク",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_tachanka",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のウルサス学生自治団所属オペレーター1人につき、ウルサスドリンク+1本",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.ussg><@cc.kw>ウルサス学生自治団</></>所属オペレーター1人につき、<$cc.bd_tachanka><@cc.rem>ウルサスドリンク</></><@cc.vup>+1</>本",
          "conditionTags": [
            {
              "tag": "$cc.g.ussg",
              "kind": "kw",
              "label": "ウルサス学生自治団"
            },
            {
              "tag": "$cc.bd_tachanka",
              "kind": "rem",
              "label": "ウルサスドリンク"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_tachanka",
              "name": "ウルサスドリンク"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_002_amiya",
      "name": "アーミヤ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "control_tra_spd[000]",
          "buffName": "共同作業",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_t_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全貿易所の受注効率+7%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全貿易所の受注効率<@cc.vup>+7%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[010]",
          "buffName": "バイオリン独奏",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4105_almond",
      "name": "アーモンド",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd&cost[000]",
          "buffName": "小さな発想",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_gold3",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、金属製造の製造効率+25%、1時間ごとの体力消費量+0.25",
          "rawDescription": "製造所配置時、<@cc.kw>金属</>製造の製造効率<@cc.vup>+25%</>、1時間ごとの体力消費量<@cc.vdown>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd&cost_bd[000]",
          "buffName": "大きな責任",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_gold&blacksteel",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、基地に配置された（補佐と活動室利用者を除く）BSWオペレーター1人につき（最大3人まで）、金属製造の製造効率+2%、体力消費が1時間ごと-0.15",
          "rawDescription": "製造所配置時、基地に配置された（補佐と活動室利用者を除く）<$cc.g.bs><@cc.kw>BSW</></>オペレーター1人につき（最大<@cc.kw>3</>人まで）、<@cc.kw>金属</>製造の製造効率<@cc.vup>+2%</>、体力消費が1時間ごと<@cc.vup>-0.15</>",
          "conditionTags": [
            {
              "tag": "$cc.g.bs",
              "kind": "kw",
              "label": "BSW"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_338_iris",
      "name": "アイリス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_bd_n1_n2[000]",
          "buffName": "寝物語",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&bd_n1_n2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.1（同種の効果は高いほうのみ適用）、配置宿舎のレベル1につき、夢+1",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>（同種の効果は高いほうのみ適用）、配置宿舎のレベル1につき、<$cc.bd_a1_a2><@cc.rem>夢</></><@cc.vup>+1</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_a1_a2",
              "kind": "rem",
              "label": "夢"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_a1_a2",
              "name": "夢"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_bd_n1[000]",
          "buffName": "夢物語",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&bd_n1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎配置時、1の夢が1の知覚情報に転化される",
          "rawDescription": "宿舎配置時、<@cc.vup>1</>の<$cc.bd_a1_a2><@cc.rem>夢</></>が<@cc.vup>1</>の<$cc.bd_a1><@cc.rem>知覚情報</></>に転化される",
          "conditionTags": [
            {
              "tag": "$cc.bd_a1_a2",
              "kind": "rem",
              "label": "夢"
            },
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_a1_a2",
              "name": "夢"
            },
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_346_aosta",
      "name": "アオスタ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost3[110]",
          "buffName": "ひらめき",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、体力消費が4の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、体力消費が<@cc.kw>4</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_device[030]",
          "buffName": "DIY・エステル",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_polyester",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でエステル系素材を加工時、副産物の入手確率+90%",
          "rawDescription": "加工所で<@cc.kw>エステル</>系素材を加工時、副産物の入手確率<@cc.vup>+90%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_475_akafyu",
      "name": "アカフユ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[120]",
          "buffName": "信影流",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train1_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%。特化ランク1への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>1</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_274_astesi",
      "name": "アステシア",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[110]",
          "buffName": "占星学",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+25%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_135_halo",
      "name": "アステジーニ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[001]",
          "buffName": "ラインテクα",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[011]",
          "buffName": "ラインテクβ",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_378_asbest",
      "name": "アスベストス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit&cost[011]",
          "buffName": "自主独往",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit&cost3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%、保管上限-12、1時間ごとの体力消費量+0.25",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>、保管上限<@cc.vdown>-12</>、1時間ごとの体力消費量<@cc.vdown>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_limit&cost[020]",
          "buffName": "探険者",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+16、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+16</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_129_bluep",
      "name": "アズリウス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[111]",
          "buffName": "毒理学α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[121]",
          "buffName": "毒理学β",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_431_ashlok",
      "name": "アッシュロック",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[002]",
          "buffName": "レッドパインα",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[012]",
          "buffName": "レッドパインβ",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_405_absin",
      "name": "アブサント",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "meet_team[050]",
          "buffName": "秘密調査",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_ursus1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、ウルサス学生自治団の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、<@cc.kw>ウルサス学生自治団</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_flag[050]",
          "buffName": "選別",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_flag_ursus",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、捜索で入手した手がかりがウルサス学生自治団でない時、ウルサス学生自治団の手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、捜索で入手した手がかりが<@cc.kw>ウルサス学生自治団</>でない時、<@cc.kw>ウルサス学生自治団</>の手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4178_alanna",
      "name": "アランナ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "manu_token_prod_spd[000]",
          "buffName": "機械整備α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_token_spd1",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、発電所配属中の作業用プラットフォーム1体につき、金属製造の製造効率+5%",
          "rawDescription": "製造所配置時、発電所配属中の<$cc.tag.op><@cc.kw>作業用プラットフォーム</></><@cc.vup>1</>体につき、<@cc.kw>金属</>製造の製造効率<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.tag.op",
              "kind": "kw",
              "label": "作業用プラットフォーム"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_token_prod_spd[010]",
          "buffName": "機械整備β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_token_spd2",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、発電所配属中の作業用プラットフォーム1体につき、金属製造の製造効率+10%",
          "rawDescription": "製造所配置時、発電所配属中の<$cc.tag.op><@cc.kw>作業用プラットフォーム</></><@cc.vup>1</>体につき、<@cc.kw>金属</>製造の製造効率<@cc.vup>+10%</>",
          "conditionTags": [
            {
              "tag": "$cc.tag.op",
              "kind": "kw",
              "label": "作業用プラットフォーム"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_double[000]",
          "buffName": "「手伝って！」",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_spd_double",
          "products": [
            "GOLD"
          ],
          "description": "ウォーミーと同じ製造所に配置時、金属製造の製造効率+15%",
          "rawDescription": "<@cc.kw>ウォーミー</>と同じ製造所に配置時、<@cc.kw>金属</>製造の製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_446_aroma",
      "name": "アロマ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd&cost[001]",
          "buffName": "消臭ミスト",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_gold4",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、金属製造の製造効率+25%、1時間ごとの体力消費量+0.25",
          "rawDescription": "製造所配置時、<@cc.kw>金属</>製造の製造効率<@cc.vup>+25%</>、1時間ごとの体力消費量<@cc.vdown>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_addition[100]",
          "buffName": "清掃日課",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_add3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率は1時間ごとに+2%、最大+20%まで",
          "rawDescription": "製造所配置時、製造効率は1時間ごとに<@cc.vup>+2%</>、最大<@cc.vup>+20%</>まで",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4137_udflow",
      "name": "アンダーフロー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd_ext[000]",
          "buffName": "対陸交渉使節α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_ord_spd_ext0",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+25%。ウルピアヌスが基地内に配置されているとき（補佐と活動室利用者である場合を除く）、追加で受注効率+5%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+25%</>。<@cc.kw>ウルピアヌス</>が基地内に配置されているとき（補佐と活動室利用者である場合を除く）、追加で受注効率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 25,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd_ext[001]",
          "buffName": "対陸交渉使節β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_ord_spd_ext1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%。ウルピアヌスが基地内に配置されているとき（補佐と活動室利用者である場合を除く）、追加で受注効率+10%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>。<@cc.kw>ウルピアヌス</>が基地内に配置されているとき（補佐と活動室利用者である場合を除く）、追加で受注効率<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_218_cuttle",
      "name": "アンドレアナ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_oneself[000]",
          "buffName": "一人きり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_oneself[011]",
          "buffName": "逃げるが勝ち",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.85",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.85</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_195_glassb",
      "name": "イースチナ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[060]",
          "buffName": "補助エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SUPPORT"
          ],
          "skillIcon": "bskill_train_supporter1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、補助の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>補助</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[050]",
          "buffName": "参謀",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_ursus2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、ウルサス学生自治団の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>ウルサス学生自治団</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4013_kjera",
      "name": "イェラ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[041]",
          "buffName": "雪境の守護者",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_kjerag2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、カランド貿易の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>カランド貿易</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_flag[040]",
          "buffName": "イェラガンド",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_flag_kjerag",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、捜索で入手した手がかりがカランド貿易でない時、カランド貿易の手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、捜索で入手した手がかりが<@cc.kw>カランド貿易</>でない時、<@cc.kw>カランド貿易</>の手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_279_excu",
      "name": "イグゼキュター",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[040]",
          "buffName": "狙撃エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_sniper1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_cost[003]",
          "buffName": "執行協定",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_498_inside",
      "name": "インサイダー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "hire_spd&clue[110]",
          "buffName": "広い人脈",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&clue2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+30%。公開求人の最大同時求人可能数が2より1多いごとに、応接室の手がかり捜索速度+5%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+30%</>。公開求人の最大同時求人可能数が2より1多いごとに、応接室の手がかり捜索速度<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single&oneself[040]",
          "buffName": "ドーナツパーティー",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one12",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.4（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.4",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.4</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_155_tiger",
      "name": "インドラ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[070]",
          "buffName": "メッセンジャー",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_glasgow2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、グラスゴーの手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>グラスゴー</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4102_threye",
      "name": "ヴァラルクビン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "meet_spd&bd[000]",
          "buffName": "先見",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&bd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%。ティフォンと同時に応接室に配置された場合、追加で手がかり捜索速度+15%、自身の1時間ごとの体力消費量+0.5",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>。<@cc.kw>ティフォン</>と同時に応接室に配置された場合、追加で手がかり捜索速度<@cc.vup>+15%</>、自身の1時間ごとの体力消費量<@cc.vdown>+0.5</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&bd[010]",
          "buffName": "未来の道",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&bd&notOwned",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%。ティフォンと同時に応接室に配置された場合、追加で手がかり捜索速度+15%、自身の1時間ごとの体力消費量+0.5、ボード上で未入手の手がかりを入手しやすい",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>。<@cc.kw>ティフォン</>と同時に応接室に配置された場合、追加で手がかり捜索速度<@cc.vup>+15%</>、自身の1時間ごとの体力消費量<@cc.vdown>+0.5</>、ボード上で未入手の手がかりを入手しやすい",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_163_hpsts",
      "name": "ヴァルカン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit&cost[000]",
          "buffName": "職人魂α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit&cost1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率-5%、保管上限+16、1時間ごとの体力消費量-0.15",
          "rawDescription": "製造所配置時、製造効率<@cc.vdown>-5%</>、保管上限<@cc.vup>+16</>、1時間ごとの体力消費量<@cc.vup>-0.15</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd&limit&cost[001]",
          "buffName": "職人魂β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit&cost2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率-5%、保管上限+19、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、製造効率<@cc.vdown>-5%</>、保管上限<@cc.vup>+19</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_494_vendla",
      "name": "ヴァンデラ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all[023]",
          "buffName": "アロマセラピーα",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all&tired[000]",
          "buffName": "アロマセラピーβ",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all_tired",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15。同時に体力18以下のオペレーターの1時間ごとの体力回復量が追加で+0.1（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>。同時に体力<@cc.vup>18</>以下のオペレーターの1時間ごとの体力回復量が追加で<@cc.vup>+0.1</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_436_whispr",
      "name": "ウィスパーレイン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "hire_spd_bd_n1_n1[100]",
          "buffName": "放浪の旅路",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd_bd_n1_n1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%、公開求人の最大同時求人可能数が2より1多いごとに、記憶の欠片+10",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>、公開求人の最大同時求人可能数が2より1多いごとに、<$cc.bd_a1_a1><@cc.rem>記憶の欠片</></><@cc.vup>+10</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_a1_a1",
              "kind": "rem",
              "label": "記憶の欠片"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_a1_a1",
              "name": "記憶の欠片"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_bd_n1[000]",
          "buffName": "追憶",
          "roomType": "HIRE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd_memento",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、1の記憶の欠片が1の知覚情報に転化される。体力が0になる時、記憶の欠片と自身が獲得した知覚情報も0になる",
          "rawDescription": "事務室配置時、<@cc.vup>1</>の<$cc.bd_a1_a1><@cc.rem>記憶の欠片</></>が<@cc.vup>1</>の<$cc.bd_a1><@cc.rem>知覚情報</></>に転化される。体力が０になる時、<$cc.bd_a1_a1><@cc.rem>記憶の欠片</></>と自身が獲得した<$cc.bd_a1><@cc.rem>知覚情報</></>も０になる",
          "conditionTags": [
            {
              "tag": "$cc.bd_a1_a1",
              "kind": "rem",
              "label": "記憶の欠片"
            },
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            },
            {
              "tag": "$cc.bd_a1_a1",
              "kind": "rem",
              "label": "記憶の欠片"
            },
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_a1_a1",
              "name": "記憶の欠片"
            },
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            },
            {
              "tag": "$cc.bd_a1_a1",
              "name": "記憶の欠片"
            },
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_265_sophia",
      "name": "ウィスラッシュ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd[0000]",
          "buffName": "教官",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_all",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、訓練速度+25%",
          "rawDescription": "訓練室で協力者として配置時、訓練速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4083_chimes",
      "name": "ウィンドチャイム",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_cost&bd2[000]",
          "buffName": "湖を越え山を越え",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_bd_cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、配属オペレーターの1時間ごとの体力消費量-0.1、俗世の憂10につき、体力消費量が追加で-0.01",
          "rawDescription": "貿易所配置時、配属オペレーターの1時間ごとの体力消費量<@cc.vup>-0.1</>、<$cc.bd_b1><@cc.rem>俗世の憂</></><@cc.vup>10</>につき、体力消費量が追加で<@cc.vup>-0.01</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世の憂"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世の憂"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_cost&bd2[001]",
          "buffName": "遠き便りを手に",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_bd_cost2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、配属オペレーターの1時間ごとの体力消費量-0.1、俗世の憂10につき、体力消費量が追加で-0.02",
          "rawDescription": "貿易所配置時、配属オペレーターの1時間ごとの体力消費量<@cc.vup>-0.1</>、<$cc.bd_b1><@cc.rem>俗世の憂</></><@cc.vup>10</>につき、体力消費量が追加で<@cc.vup>-0.02</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世の憂"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世の憂"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_433_windft",
      "name": "ウインドフリット",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[115]",
          "buffName": "必修科目",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd&power[000]",
          "buffName": "自動化α",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&power1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、自身以外の配属オペレーター全員の製造効率を0にする（施設の数量による製造効率上昇に影響なし）。発電所1か所につき、製造効率+5%",
          "rawDescription": "製造所配置時、自身以外の配属オペレーター全員の製造効率を<@cc.vdown>０にする</>（施設の数量による製造効率上昇に影響なし）。<@cc.kw>発電所</>1か所につき、製造効率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "powerPlantManufacture",
              "percentPerPowerPlant": 5,
              "products": [
                "GOLD",
                "EXP"
              ],
              "approximate": false,
              "note": "自動化系。配置先の製造所では自身以外の製造効率を0として扱う。",
              "suppressesOtherOperators": true,
              "source": "override"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4207_branch",
      "name": "ヴェトチキ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost5[100]",
          "buffName": "鍛冶屋の素質",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_p8",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で中級異鉄を加工時、体力消費が2の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>中級異鉄</>を加工時、体力消費が<@cc.kw>2</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_device[021]",
          "buffName": "端材活用",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_oriron",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で中級異鉄を加工時、副産物の入手確率+90%",
          "rawDescription": "加工所で<@cc.kw>中級異鉄</>を加工時、副産物の入手確率<@cc.vup>+90%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4081_warmy",
      "name": "ウォーミー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all[014]",
          "buffName": "大釜ごはんα",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[024]",
          "buffName": "大釜ごはんβ",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[101]",
          "buffName": "金属工芸α",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_gold1",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、金属製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>金属</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "GOLD"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_455_nothin",
      "name": "ウユウ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "hire_spd&clue[101]",
          "buffName": "好事家",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&clue",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+35%。公開求人の最大同時求人可能数が2より1多いごとに、応接室の手がかり捜索速度+5%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+35%</>。公開求人の最大同時求人可能数が2より1多いごとに、応接室の手がかり捜索速度<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd_bd_n2[000]",
          "buffName": "「和気生財」",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_bd_n2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、宿舎にいるオペレーター1人につき、俗世之憂+1、俗世之憂1につき、受注効率+1%",
          "rawDescription": "貿易所配置時、宿舎にいるオペレーター<@cc.kw>1</>人につき、<$cc.bd_b1><@cc.rem>俗世之憂</></><@cc.vup>+1</>、<$cc.bd_b1><@cc.rem>俗世之憂</></><@cc.vup>1</>につき、受注効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世之憂"
            },
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世之憂"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世之憂"
            },
            {
              "tag": "$cc.bd_b1",
              "name": "俗世之憂"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4171_wulfen",
      "name": "ウルフェナイト",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit&cost[300]",
          "buffName": "行動派",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit6",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+20%、保管上限-8",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+20%</>、保管上限<@cc.vdown>-8</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 20,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_limit&cost[1020]",
          "buffName": "収納の達人",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+16、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+16</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_226_hmau",
      "name": "ウン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[010]",
          "buffName": "能工巧匠",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+50%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_cost&faction2[000]",
          "buffName": "温厚篤実",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_lda_add",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のリー探偵事務所所属オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.2回復。所属オペレーターは体力回復量が更に増加",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.lda><@cc.kw>リー探偵事務所</></>所属オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.2</>回復。所属オペレーターは体力回復量が<@cc.kw>更に増加</>",
          "conditionTags": [
            {
              "tag": "$cc.g.lda",
              "kind": "kw",
              "label": "リー探偵事務所"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_294_ayer",
      "name": "エアースカーペ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "meet_spd[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd[020]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_365_aprl",
      "name": "エイプリル",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[000]",
          "buffName": "注文管理α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+10%、注文上限+2",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+10%</>、注文上限<@cc.vup>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 10,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&limit[001]",
          "buffName": "注文管理β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+10%、注文上限+4",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+10%</>、注文上限<@cc.vup>+4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 10,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "dorm_rec_all[000]",
          "buffName": "鼓舞",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.1（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.1</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_241_panda",
      "name": "エフイーター",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd[010]",
          "buffName": "作戦記録指導",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp2",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_formula_spd[020]",
          "buffName": "拳術記録指導",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp3",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+35%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 35,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4043_erato",
      "name": "エラト",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[040]",
          "buffName": "狙撃エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_sniper1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[240]",
          "buffName": "爪弾かれる調べ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train2_sniper1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%。特化ランク2への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>2</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_401_elysm",
      "name": "エリジウム",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "meet_team[060]",
          "buffName": "通信員",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_rhodes1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、ロドス製薬の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、<@cc.kw>ロドス製薬</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_flag[060]",
          "buffName": "旗印",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_flag_rhodes",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、捜索で入手した手がかりがロドス製薬でない時、ロドス製薬の手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、捜索で入手した手がかりが<@cc.kw>ロドス製薬</>でない時、<@cc.kw>ロドス製薬</>の手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_131_flameb",
      "name": "エンカク",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[000]",
          "buffName": "アーツ理論",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[020]",
          "buffName": "剣技の粋",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4036_forcer",
      "name": "エンフォーサー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "meet_spd&cost[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&cost[100]",
          "buffName": "ロジックシンキング",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+35%、1時間ごとの体力消費量+2",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+35%</>、1時間ごとの体力消費量<@cc.vdown>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_422_aurora",
      "name": "オーロラ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[030]",
          "buffName": "重装エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train_defender1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[130]",
          "buffName": "生存術訓練（極寒地）",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train1_defender1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+30%。特化ランク1への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>1</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4131_odda",
      "name": "オッダ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "meet_spd&cost_condChar[001]",
          "buffName": "「プロ意識」α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&cost_condChar2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度15%、1時間ごとの体力消費量+1",
          "rawDescription": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度<@cc.vup>15%</>、1時間ごとの体力消費量<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&cost_condChar[011]",
          "buffName": "「プロ意識」β",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&cost_condChar3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度35%、1時間ごとの体力消費量+1",
          "rawDescription": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度<@cc.vup>35%</>、1時間ごとの体力消費量<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&condChar_mustget[100]",
          "buffName": "諜報員",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&condChar_mustget2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、自身だけが仕事中であると、連続で16を超える体力を消費した後、次で必ずロドスの手がかりを入手できる",
          "rawDescription": "応接室配置時、自身だけが仕事中であると、連続で<@cc.kw>16</>を超える体力を消費した後、次で<@cc.kw>必ず</><@cc.kw>ロドス</>の手がかりを入手できる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4016_kazema",
      "name": "カゼマル",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "meet_spd[010]",
          "buffName": "影に潜む",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+15%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd_condChar[000]",
          "buffName": "仕事上手",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_condChar",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度35%",
          "rawDescription": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度<@cc.vup>35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_466_qanik",
      "name": "カニパラート",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "hire_spd_cost&clue[001]",
          "buffName": "救助隊・連絡要員",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+30%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_cost&clue[000]",
          "buffName": "救助隊・体力温存",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&cost3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+35%、公開求人の最大同時求人可能数が2より1多いごとに、1時間ごとの体力消費量-0.1",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+35%</>、公開求人の最大同時求人可能数が2より1多いごとに、1時間ごとの体力消費量<@cc.vup>-0.1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_214_kafka",
      "name": "カフカ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "trade_ord_wt&cost[001]",
          "buffName": "手芸α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率がわずかに上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>わずかに上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_wt&cost[011]",
          "buffName": "手芸β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost2",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率が上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_497_ctable",
      "name": "カンタービレ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "meet_spd_notOwned[000]",
          "buffName": "しらみ潰しα",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spdNotOwned1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、ボード上未入手の手がかりを入手しやすい",
          "rawDescription": "応接室配置時、ボード上未入手の手がかりを入手しやすい",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd_notOwned[010]",
          "buffName": "しらみ潰しβ",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spdNotOwned2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、ボード上未入手の手がかりを入手しやすい",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、ボード上未入手の手がかりを入手しやすい",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_349_chiave",
      "name": "キアーベ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost3[110]",
          "buffName": "ひらめき",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、体力消費が4の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、体力消費が<@cc.kw>4</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_device[000]",
          "buffName": "DIY・装置",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_device",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で装置系素材を加工時、副産物の入手確率+90%",
          "rawDescription": "加工所で<@cc.kw>装置</>系素材を加工時、副産物の入手確率<@cc.vup>+90%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4203_kichi",
      "name": "キチセイ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&share[001]",
          "buffName": "倹約経営α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_share2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、自身を除く仕事に配属されているオペレーター1人につき、受注効率+10%",
          "rawDescription": "貿易所配置時、自身を除く仕事に配属されているオペレーター1人につき、受注効率<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd&share[002]",
          "buffName": "倹約経営β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_share3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、自身を除く仕事に配属されているオペレーター1人につき、受注効率+20%",
          "rawDescription": "貿易所配置時、自身を除く仕事に配属されているオペレーター1人につき、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4162_cathy",
      "name": "キャサリン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability&ext[000]",
          "buffName": "作業効率モデルα",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+50%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_proc_probability&ext[001]",
          "buffName": "作業効率モデルβ",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p7",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+50%。ステインレスを宿舎に配置している場合、追加で入手確率+10%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+50%</>。<@cc.kw>ステインレス</>を宿舎に配置している場合、追加で入手確率<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost[001]",
          "buffName": "オートメーション",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、体力消費が4以上の素材の体力消費-2",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、体力消費が<@cc.kw>4</>以上の素材の体力消費<@cc.vup>-2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_478_kirara",
      "name": "キララ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "trade_ord_line_gold[000]",
          "buffName": "注文フロー可視化・α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_flow_gc1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、受注効率+5%、純金生産ラインの数4につき、配置貿易所の純金生産ラインの数追加で+2",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+5%</>、<$cc.t.flow_gold><@cc.kw>純金生産ライン</></>の数<@cc.kw>4</>につき、配置貿易所の<$cc.t.flow_gold><@cc.kw>純金生産ライン</></>の数追加で<@cc.vup>+2</>",
          "conditionTags": [
            {
              "tag": "$cc.t.flow_gold",
              "kind": "kw",
              "label": "純金生産ライン"
            },
            {
              "tag": "$cc.t.flow_gold",
              "kind": "kw",
              "label": "純金生産ライン"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 5,
              "source": "auto"
            },
            {
              "type": "goldLineBonusIfGoldLineCountAtLeast",
              "threshold": 4,
              "bonusLines": 2,
              "source": "autoFlowGold"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_line_gold[010]",
          "buffName": "注文フロー可視化・β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_flow_gc2",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、受注効率+5%、純金生産ラインの数2につき、配置貿易所の純金生産ラインの数追加で+2",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+5%</>、<$cc.t.flow_gold><@cc.kw>純金生産ライン</></>の数<@cc.kw>2</>につき、配置貿易所の<$cc.t.flow_gold><@cc.kw>純金生産ライン</></>の数追加で<@cc.vup>+2</>",
          "conditionTags": [
            {
              "tag": "$cc.t.flow_gold",
              "kind": "kw",
              "label": "純金生産ライン"
            },
            {
              "tag": "$cc.t.flow_gold",
              "kind": "kw",
              "label": "純金生産ライン"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 5,
              "source": "auto"
            },
            {
              "type": "goldLineBonusIfGoldLineCountAtLeast",
              "threshold": 2,
              "bonusLines": 2,
              "source": "autoFlowGold"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_492_quercu",
      "name": "クエルクス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "meet_team[070]",
          "buffName": "風の便り",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_glasgow1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、グラスゴーの手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、<@cc.kw>グラスゴー</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_flag[070]",
          "buffName": "情報整理",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_flag_glasgow",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、捜索で入手した手がかりがグラスゴーでない時、グラスゴーの手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、捜索で入手した手がかりが<@cc.kw>グラスゴー</>でない時、<@cc.kw>グラスゴー</>の手がかりを入手する確率が更に増加（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_326_glacus",
      "name": "グラウコス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[003]",
          "buffName": "電磁充電α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[015]",
          "buffName": "電磁充電β",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_220_grani",
      "name": "グラニ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[010]",
          "buffName": "先鋒エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train_vanguard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[011]",
          "buffName": "先鋒エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train_vanguard2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_173_slchan",
      "name": "クリフハート",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single&oneself[001]",
          "buffName": "探検家の情熱",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one02",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.25（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.5",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.25</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.5</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd&limit[021]",
          "buffName": "カランド貿易β",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+15%、注文上限+4",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+15%</>、注文上限<@cc.vup>+4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 15,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4122_grabds",
      "name": "グレインバッズ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single[1010]",
          "buffName": "思いやり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[025]",
          "buffName": "﻿悠々たる牧歌",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4187_graceb",
      "name": "グレースベアラー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single[033]",
          "buffName": "恩恵の讃歌",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.7（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.7</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[1020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_367_swllow",
      "name": "グレースロート",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[005]",
          "buffName": "責任感",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_oneself[000]",
          "buffName": "一人きり",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_201_moeshd",
      "name": "クロワッサン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[030]",
          "buffName": "ペンギン急便α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&limit[031]",
          "buffName": "絶対に、確実に",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit7",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%、注文上限+1",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>、注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4023_rfalcn",
      "name": "ケストレル",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "control_dorm_rec[001]",
          "buffName": "「歯形」",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_leader",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全ての宿舎内のオペレーターの1時間ごとの体力回復量+0.05（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全ての宿舎内のオペレーターの1時間ごとの体力回復量<@cc.vup>+0.05</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_cost[011]",
          "buffName": "守護の決意",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4104_coldst",
      "name": "コールドショット",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[009]",
          "buffName": "癒しの微笑み",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all&single[000]",
          "buffName": "甘美な一杯",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&single",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、体力が満タンではない全員の1時間ごとの体力回復量が合計で+0.8になる（単体/複数オペレーターに有効となる時、同種の効果はそれぞれ高いほうのみ適用）",
          "rawDescription": "配置宿舎内、体力が満タンではない全員の1時間ごとの体力回復量が合計で<@cc.vup>+0.8</>になる（単体/複数オペレーターに有効となる時、同種の効果はそれぞれ高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_489_serum",
      "name": "コロセラム",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[113]",
          "buffName": "腐蝕科学α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[123]",
          "buffName": "腐蝕科学β",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_drop[030]",
          "buffName": "腐蝕阻害技術",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_drop_oriron",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、T3の副産物が入手できるとき、副産物が必ず中級異鉄となる",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、<@cc.kw>T3</>の副産物が入手できるとき、副産物が必ず<@cc.kw>中級異鉄</>となる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4052_surfer",
      "name": "サーファー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "meet_spd&sami[100]",
          "buffName": "対話力",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&blacksteel1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%。他のBSWオペレーターと同時に応接室に配置された場合、追加で手がかり捜索速度15%、自身の1時間ごとの体力消費量+0.5",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>。他の<$cc.g.bs><@cc.kw>BSW</></>オペレーターと同時に応接室に配置された場合、追加で手がかり捜索速度<@cc.vup>15%</>、自身の1時間ごとの体力消費量<@cc.vdown>+0.5</>",
          "conditionTags": [
            {
              "tag": "$cc.g.bs",
              "kind": "kw",
              "label": "BSW"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&sami[110]",
          "buffName": "情報収集",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&blacksteel2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%。他のBSWオペレーターと同時に応接室に配置された場合、追加で手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>。他の<$cc.g.bs><@cc.kw>BSW</></>オペレーターと同時に応接室に配置された場合、追加で手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.bs",
              "kind": "kw",
              "label": "BSW"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_108_silent",
      "name": "サイレンス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[001]",
          "buffName": "ラインテクα",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[011]",
          "buffName": "ラインテクβ",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_230_savage",
      "name": "サベージ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[000]",
          "buffName": "アーツ理論",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single&oneself[011]",
          "buffName": "調理",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one12",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.35（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.35",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.35</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.35</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_341_sntlla",
      "name": "サンタラ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single_power[000]",
          "buffName": "寒地生まれ",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single_sami",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎配置時、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）。対象がサーミオペレーターの場合、更に+0.45",
          "rawDescription": "宿舎配置時、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）。対象が<$cc.g.sm><@cc.kw>サーミ</></>オペレーターの場合、更に<@cc.vup>+0.45</>",
          "conditionTags": [
            {
              "tag": "$cc.g.sm",
              "kind": "kw",
              "label": "サーミ"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd_power[000]",
          "buffName": "雪祭司候補",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_sami",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）サーミオペレーター1人につき、訓練速度+10%（最大3人まで）",
          "rawDescription": "訓練室で協力者として配置時、基地に配置された（補佐と活動室利用者を除く）<$cc.g.sm><@cc.kw>サーミ</></>オペレーター1人につき、訓練速度<@cc.vup>+10%</>（最大<@cc.kw>3</>人まで）",
          "conditionTags": [
            {
              "tag": "$cc.g.sm",
              "kind": "kw",
              "label": "サーミ"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4140_lasher",
      "name": "サンドレコナー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[034]",
          "buffName": "注文分配α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&limit[035]",
          "buffName": "大バザール管理学",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit7",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%、注文上限+1",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>、注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_336_folivo",
      "name": "シーン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd_addition[041]",
          "buffName": "タイムラプス",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_add2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、最初の1時間製造効率+15%、その後まで1時間ごと更に+2%、最終的に+25%になる",
          "rawDescription": "製造所配置時、最初の1時間製造効率<@cc.vup>+15%</>、その後まで1時間ごと更に<@cc.vup>+2%</>、最終的に<@cc.vup>+25%</>になる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_limit[0000]",
          "buffName": "映像編集α",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp&limit1",
          "products": [
            "EXP"
          ],
          "description": "製造所で作戦記録を製造時、保管上限+12",
          "rawDescription": "製造所で<@cc.kw>作戦記録</>を製造時、保管上限<@cc.vup>+12</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4172_xingzh",
      "name": "シィンズゥ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "hire_spd_cost[112]",
          "buffName": "美食紀行α",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&cost4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%、1時間ごとの体力消費量-0.25",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_cost[121]",
          "buffName": "美食紀行β",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&cost6",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+30%、1時間ごとの体力消費量-0.25",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+30%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd[1020]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_379_sesa",
      "name": "シェーシャ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost3[120]",
          "buffName": "ミニマリスト",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、体力消費が4の素材の体力消費-2",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、体力消費が<@cc.kw>4</>の素材の体力消費<@cc.vup>-2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[119]",
          "buffName": "工業設計",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4078_bdhkgt",
      "name": "ジエユン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "manu_bd_to_bd[000]",
          "buffName": "古の巫術",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_bd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、5の俗世之憂が1の巫術の結晶に転化される",
          "rawDescription": "製造所配置時、<@cc.vup>5</>の<$cc.bd_b1><@cc.rem>俗世之憂</></>が<@cc.vup>1</>の<$cc.bd_C><@cc.rem>巫術の結晶</></>に転化される",
          "conditionTags": [
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世之憂"
            },
            {
              "tag": "$cc.bd_C",
              "kind": "rem",
              "label": "巫術の結晶"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世之憂"
            },
            {
              "tag": "$cc.bd_C",
              "name": "巫術の結晶"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_bd[200]",
          "buffName": "浮き草",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_bd5",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、巫術の結晶1につき、製造効率+1%",
          "rawDescription": "製造所配置時、<$cc.bd_C><@cc.rem>巫術の結晶</></><@cc.vup>1</>につき、製造効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_C",
              "kind": "rem",
              "label": "巫術の結晶"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_C",
              "name": "巫術の結晶"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_bd[201]",
          "buffName": "枯栄花",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_bd6",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、巫術の結晶1につき、製造効率+2%",
          "rawDescription": "製造所配置時、<$cc.bd_C><@cc.rem>巫術の結晶</></><@cc.vup>1</>につき、製造効率<@cc.vup>+2%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_C",
              "kind": "rem",
              "label": "巫術の結晶"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_C",
              "name": "巫術の結晶"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_333_sidero",
      "name": "シデロカ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[320]",
          "buffName": "粉骨砕身",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train3_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%。特化ランク3への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>3</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_254_vodfox",
      "name": "シャマレ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "trade_ord_wt&cost[000]",
          "buffName": "裁縫α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率がわずかに上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>わずかに上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_vodfox[000]",
          "buffName": "ひそひそ話",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_vodfox",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、自身以外の配属オペレーター全員の受注効率を0にする。自身以外の配属オペレーター1人につき、受注効率+45%。配属オペレーター全員の体力消費が1時間ごと+0.25",
          "rawDescription": "貿易所配置時、自身以外の配属オペレーター全員の受注効率を<@cc.vdown>0にする</>。自身以外の配属オペレーター1人につき、受注効率<@cc.vup>+45%</>。配属オペレーター全員の体力消費が1時間ごと<@cc.vdown>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4025_aprot2",
      "name": "シャレム",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "train_spd&profession3[130]",
          "buffName": "重装エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train_defender1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession3[131]",
          "buffName": "実戦技術：術技衛士",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train_artsprotector",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+30%。訓練者の職分が術技衛士である場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+30%</>。訓練者の職分が<@cc.kw>術技衛士</>である場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_115_headbr",
      "name": "ズィマー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all[013]",
          "buffName": "カリスマ",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[020]",
          "buffName": "冬将軍",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_166_skfire",
      "name": "スカイフレア",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[050]",
          "buffName": "術師エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_caster1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[051]",
          "buffName": "術師エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_caster2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_383_snsant",
      "name": "スノーズント",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd_variable2[000]",
          "buffName": "天性の努力家α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd_variable21",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、配置貿易所の受注効率が5%上昇につき、受注効率+5%、最大25%",
          "rawDescription": "貿易所配置時、配置貿易所の受注効率が<@cc.vup>5%</>上昇につき、受注効率<@cc.vup>+5%</>、最大<@cc.vup>25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd_variable2[001]",
          "buffName": "天性の努力家β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd_variable22",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、配置貿易所の受注効率が5%上昇につき、受注効率+5%、最大35%",
          "rawDescription": "貿易所配置時、配置貿易所の受注効率が<@cc.vup>5%</>上昇につき、受注効率<@cc.vup>+5%</>、最大<@cc.vup>35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4211_snhunt",
      "name": "スノーハンター",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit&cost[101]",
          "buffName": "敬虔なる民",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&cost2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+20%、1時間ごとの体力消費量+0.25",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+20%</>、1時間ごとの体力消費量<@cc.vdown>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd&limit&cost[110]",
          "buffName": "一人前",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&cost3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+30%、1時間ごとの体力消費量+0.25",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+30%</>、1時間ごとの体力消費量<@cc.vdown>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4015_spuria",
      "name": "スプリア",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "power_rec_spd&addition[000]",
          "buffName": "技術交流α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_power_rec_spd&addition1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置後から1時間の間、ドローンの回復速度+10%。その後、1時間ごとに+1%（最大+15%まで上昇可能）",
          "rawDescription": "発電所配置後から1時間の間、ドローンの回復速度<@cc.vup>+10%</>。その後、1時間ごとに<@cc.vup>+1%</>（最大<@cc.vup>+15%</>まで上昇可能）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd&addition[001]",
          "buffName": "技術交流β",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_power_rec_spd&addition2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置後から1時間の間、ドローンの回復速度+15%。その後、1時間ごとに+1%（最大+20%まで上昇可能）",
          "rawDescription": "発電所配置後から1時間の間、ドローンの回復速度<@cc.vup>+15%</>。その後、1時間ごとに<@cc.vup>+1%</>（最大<@cc.vup>+20%</>まで上昇可能）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd&cost[010]",
          "buffName": "スイーツタイム",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd&cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、1時間ごとの体力消費量-0.3",
          "rawDescription": "発電所配置時、1時間ごとの体力消費量<@cc.vup>-0.3</> ",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_143_ghost",
      "name": "スペクター",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "dorm_rec_oneself[000]",
          "buffName": "一人きり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_oneself[010]",
          "buffName": "狂熱",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.85",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.85</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_308_swire",
      "name": "スワイヤー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_tra_spd[010]",
          "buffName": "お嬢様",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_t_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全貿易所の受注効率+7%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全貿易所の受注効率<@cc.vup>+7%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd[000]",
          "buffName": "教官",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_all",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、訓練速度+25%",
          "rawDescription": "訓練室で協力者として配置時、訓練速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_348_ceylon",
      "name": "セイロン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[129]",
          "buffName": "学者",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[212]",
          "buffName": "源石研究",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_originium2",
          "products": [
            "DIAMOND"
          ],
          "description": "製造所配置時、源石製造の製造効率+35%",
          "rawDescription": "製造所配置時、<@cc.kw>源石</>製造の製造効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 35,
              "products": [
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_464_cement",
      "name": "セメント",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[000]",
          "buffName": "標準化α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_limit&cost[021]",
          "buffName": "掘削作業",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost5",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+10、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+10</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4143_sensi",
      "name": "センシ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all&tag[000]",
          "buffName": "ベテラン料理人",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_senshi",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）。対象が【ライオスパーティー】所属オペレーターの場合、更に+0.15",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）。対象が<$cc.tag.dungeon><@cc.kw>【ライオスパーティー】</></>所属オペレーターの場合、更に<@cc.vup>+0.15</>",
          "conditionTags": [
            {
              "tag": "$cc.tag.dungeon",
              "kind": "kw",
              "label": "【ライオスパーティー】"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_bd_dungeon[000]",
          "buffName": "センシの大食堂",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_bd_dungeon",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎配置時、配置宿舎のレベル1につき、魔物料理+1",
          "rawDescription": "宿舎配置時、配置宿舎のレベル1につき、<$cc.bd_dungeon><@cc.rem>魔物料理</></><@cc.vup>+1</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_dungeon",
              "kind": "rem",
              "label": "魔物料理"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_dungeon",
              "name": "魔物料理"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_101_sora",
      "name": "ソラ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all[011]",
          "buffName": "アイドル",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd[011]",
          "buffName": "ペンギン急便β",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_157_dagda",
      "name": "ダグザ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession3[150]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession3[151]",
          "buffName": "実戦技術：闘士",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_fighter",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%。訓練者の職分が闘士である場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>。訓練者の職分が<@cc.kw>闘士</>である場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4144_chilc",
      "name": "チルチャック",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[036]",
          "buffName": "組合の顔役",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit7",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%、注文上限+1",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>、注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd_bd[100]",
          "buffName": "馴染み深い香り",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd_bd_dungeon",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、魔物料理1つにつき受注効率+1%",
          "rawDescription": "貿易所配置時、<$cc.bd_dungeon><@cc.rem>魔物料理</></><@cc.vup>1</>つにつき受注効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_dungeon",
              "kind": "rem",
              "label": "魔物料理"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_dungeon",
              "name": "魔物料理"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4047_pianst",
      "name": "ツェルニー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "dorm_rec_bd_n1_n3[000]",
          "buffName": "アンダンテ",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&bd_n1_n3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.65（同種の効果は高いほうのみ適用）、配置宿舎のレベル1につき、小節+1",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.65</>（同種の効果は高いほうのみ適用）、配置宿舎のレベル1につき、<$cc.bd_a1_a3><@cc.rem>小節</></><@cc.vup>+1</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_a1_a3",
              "kind": "rem",
              "label": "小節"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_a1_a3",
              "name": "小節"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_bd_n1[100]",
          "buffName": "インプロヴィゼーション",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&bd_n1_2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎配置時、1の小節が1の知覚情報に転化される",
          "rawDescription": "宿舎配置時、<@cc.vup>1</>の<$cc.bd_a1_a3><@cc.rem>小節</></>が<@cc.vup>1</>の<$cc.bd_a1><@cc.rem>知覚情報</></>に転化される",
          "conditionTags": [
            {
              "tag": "$cc.bd_a1_a3",
              "kind": "rem",
              "label": "小節"
            },
            {
              "tag": "$cc.bd_a1",
              "kind": "rem",
              "label": "知覚情報"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_a1_a3",
              "name": "小節"
            },
            {
              "tag": "$cc.bd_a1",
              "name": "知覚情報"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_343_tknogi",
      "name": "ツキノギ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "hire_spd&clue[010]",
          "buffName": "天災トランスポーターα",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+30%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd&clue[100]",
          "buffName": "人心把握",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&clue",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+35%。公開求人の最大同時求人可能数が2より1多いごとに、応接室の手がかり捜索速度+5%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+35%</>。公開求人の最大同時求人可能数が2より1多いごとに、応接室の手がかり捜索速度<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_499_kaitou",
      "name": "ディアマンテ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "trade_ord_wt&cost[002]",
          "buffName": "鑑定眼",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率がわずかに上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>わずかに上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_wt&cost[012]",
          "buffName": "鑑定師の手際",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost2",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率が上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4191_tippi",
      "name": "ティッピ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[033]",
          "buffName": "ランクウッドの何でも屋",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+65%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost3[500]",
          "buffName": "楽しい撮影日",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_all_cost2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、体力消費が2の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、体力消費が<@cc.kw>2</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_486_takila",
      "name": "テキーラ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_long[000]",
          "buffName": "資金運用α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_long1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、次に受注する金属オーダーの納品数が3を上回るならば（違約オーダーは金属オーダーと見なされない）、当該オーダーの報酬金額が+250追加され、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、次に受注する<@cc.kw>金属オーダー</>の納品数が<@cc.kw>3</>を上回るならば（違約オーダーは金属オーダーと見なされない）、当該オーダーの報酬金額が<@cc.kw>+250</>追加され、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_long[010]",
          "buffName": "資金運用β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_long2",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、次に受注する金属オーダーの納品数が3を上回るならば（違約オーダーは金属オーダーと見なされない）、当該オーダーの報酬金額が+500追加され、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、次に受注する<@cc.kw>金属オーダー</>の納品数が<@cc.kw>3</>を上回るならば（違約オーダーは金属オーダーと見なされない）、当該オーダーの報酬金額が<@cc.kw>+500</>追加され、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_102_texas",
      "name": "テキサス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&cost_P[000]",
          "buffName": "因縁",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_texas1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "ラップランドと同じ貿易所に配置時、1時間ごとの体力消費量+0.3、受注効率+65%",
          "rawDescription": "<@cc.kw>ラップランド</>と同じ貿易所に配置時、1時間ごとの体力消費量<@cc.vdown>+0.3</>、受注効率<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_limit&cost_P[010]",
          "buffName": "チームワーク",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_texas2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "エクシアと同じ貿易所に配置時、1時間ごとの体力消費量-0.3",
          "rawDescription": "<@cc.kw>エクシア</>と同じ貿易所に配置時、1時間ごとの体力消費量<@cc.vup>-0.3</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4164_tecno",
      "name": "テクノ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost5[000]",
          "buffName": "円熟の境地",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で結晶系素材を加工時、対象素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>結晶</>系素材を加工時、対象素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_device[070]",
          "buffName": "DIY・結晶",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_Crystalline",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で結晶系素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>結晶</>系素材を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4110_delphn",
      "name": "デルフィーン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "hire_spd&clue2[260]",
          "buffName": "旧知と新交",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&glasgow",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%、連絡回数が1回増えるたびに、グラスゴーの手がかりを入手する確率が増加（勤務時間と最大同時求人可能数が確率に影響する）",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>、連絡回数が<@cc.vup>1</>回増えるたびに、<$cc.g.glasgow><@cc.kw>グラスゴー</></>の手がかりを入手する確率が増加（勤務時間と最大同時求人可能数が確率に影響する）",
          "conditionTags": [
            {
              "tag": "$cc.g.glasgow",
              "kind": "kw",
              "label": "グラスゴー"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_tra_limit&spd[010]",
          "buffName": "計算上手",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_g_limit&spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配属時、貿易所に配置されたグラスゴーオペレーター1人につき、受注効率+10%",
          "rawDescription": "制御中枢配属時、貿易所に配置された<$cc.g.glasgow><@cc.kw>グラスゴー</></>オペレーター<@cc.vup>1</>人につき、受注効率<@cc.vup>+10%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.glasgow",
              "kind": "kw",
              "label": "グラスゴー"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeedForTaggedOperator",
              "value": 10,
              "tag": "$cc.g.glasgow",
              "source": "autoTagCondition"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_402_tuye",
      "name": "トゥイエ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&gold[000]",
          "buffName": "物流計画α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_flow_gs1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、受注効率+5%、純金生産ラインの数4につき、追加で受注効率+15%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+5%</>、<$cc.t.flow_gold><@cc.kw>純金生産ライン</></>の数<@cc.kw>4</>につき、追加で受注効率<@cc.vup>+15%</>",
          "conditionTags": [
            {
              "tag": "$cc.t.flow_gold",
              "kind": "kw",
              "label": "純金生産ライン"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 5,
              "source": "auto"
            },
            {
              "type": "tradingSpeedIfGoldLineCountAtLeast",
              "threshold": 4,
              "value": 15,
              "source": "autoFlowGold"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&gold[010]",
          "buffName": "物流計画β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_flow_gs2",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、受注効率+5%、純金生産ラインの数2につき、追加で受注効率+15%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+5%</>、<$cc.t.flow_gold><@cc.kw>純金生産ライン</></>の数<@cc.kw>2</>につき、追加で受注効率<@cc.vup>+15%</>",
          "conditionTags": [
            {
              "tag": "$cc.t.flow_gold",
              "kind": "kw",
              "label": "純金生産ライン"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 5,
              "source": "auto"
            },
            {
              "type": "tradingSpeedIfGoldLineCountAtLeast",
              "threshold": 2,
              "value": 15,
              "source": "autoFlowGold"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_363_toddi",
      "name": "トギフォンス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost3[111]",
          "buffName": "熔鋳",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、体力消費が4の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、体力消費が<@cc.kw>4</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_device[020]",
          "buffName": "DIY・異鉄",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_oriron",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で異鉄系素材を加工時、副産物の入手確率+90%",
          "rawDescription": "加工所で<@cc.kw>異鉄</>系素材を加工時、副産物の入手確率<@cc.vup>+90%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_411_tomimi",
      "name": "トミミ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single_P[001]",
          "buffName": "焼肉の達人",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single_tomimi",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）。対象がガヴィルの場合、更に+0.45",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）。対象が<@cc.kw><$cc.gvial>ガヴィル</></>の場合、更に<@cc.vup>+0.45</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[150]",
          "buffName": "なまかじり",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train1_caster1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+30%。特化ランク1への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>1</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_164_nightm",
      "name": "ナイトメア",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[050]",
          "buffName": "術師エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_caster1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd[020]",
          "buffName": "心理学",
          "roomType": "HIRE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+40%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_148_nearl",
      "name": "ニアール",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[000]",
          "buffName": "腹心",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single&oneself[030]",
          "buffName": "使徒",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one22",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.5（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.25",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.5</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4173_nowell",
      "name": "ノウエル",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[117]",
          "buffName": "職人の誇り",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost3[102]",
          "buffName": "長命の余裕",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、体力消費が2の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、体力消費が<@cc.kw>2</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_297_hamoni",
      "name": "ハーモニー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_oneself[000]",
          "buffName": "一人きり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&cost_condChar[000]",
          "buffName": "二重スパイ",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd&cost_condChar",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度50%、1時間ごとの体力消費量+2",
          "rawDescription": "応接室配置時、自身だけが仕事中であると、手がかり捜索速度<@cc.vup>50%</>、1時間ごとの体力消費量<@cc.vdown>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_325_bison",
      "name": "バイソン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[032]",
          "buffName": "フェンツ運輸",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&limit[033]",
          "buffName": "御曹司",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit7",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%、注文上限+1",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>、注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4045_heidi",
      "name": "ハイディ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd[000]",
          "buffName": "注文分配α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd[021]",
          "buffName": "セレブパーティー",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+35%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 35,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "control_clue_faction[070]",
          "buffName": "「千の便り」",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_c_victoria",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、応接室でグラスゴーの手がかりを入手しやすくなる（勤務時間が確率に影響する）",
          "rawDescription": "制御中枢配置時、応接室で<@cc.kw>グラスゴー</>の手がかりを入手しやすくなる（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_252_bibeak",
      "name": "バイビーク",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_wt&cost[000]",
          "buffName": "裁縫α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率がわずかに上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>わずかに上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_wt&cost[010]",
          "buffName": "裁縫β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost2",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率が上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4066_highmo",
      "name": "ハイモア",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "manu_skill_change[000]",
          "buffName": "意識統一",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_skill_change",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、配属オペレーター全員のラインテク系、レッドパイン系スキルがすべて標準化系スキルと見なされる",
          "rawDescription": "製造所配置時、配属オペレーター全員の<$cc.sk.manu2><@cc.kw>ラインテク系</></>、<$cc.sk.manu3><@cc.kw>レッドパイン系</></>スキルがすべて<@cc.kw>標準化系</>スキルと見なされる",
          "conditionTags": [
            {
              "tag": "$cc.sk.manu2",
              "kind": "kw",
              "label": "ラインテク系"
            },
            {
              "tag": "$cc.sk.manu3",
              "kind": "kw",
              "label": "レッドパイン系"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "convertSkillFamiliesInSameRoom",
              "fromTags": [
                "$cc.sk.manu2",
                "$cc.sk.manu3"
              ],
              "toTag": "$cc.sk.manu1",
              "source": "autoSkillFamilyCondition"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[010]",
          "buffName": "標準化β",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4017_puzzle",
      "name": "パズル",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd_notOwned[001]",
          "buffName": "情報分析",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spdNotOwned1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、ボード上未入手の手がかりを入手しやすい",
          "rawDescription": "応接室配置時、ボード上未入手の手がかりを入手しやすい",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_394_hadiya",
      "name": "ハディヤ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[321]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[322]",
          "buffName": "受け継がれる勇気",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train3_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%。特化ランク3への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>3</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_449_glider",
      "name": "ハニーベリー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[114]",
          "buffName": "薬草学α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[124]",
          "buffName": "薬草学β",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single[032]",
          "buffName": "カウンセリング",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.7（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.7</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4139_papyrs",
      "name": "パピルス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "train_spd&profession3[182]",
          "buffName": "医療エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_medic1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession3[183]",
          "buffName": "実戦技術：連鎖癒師",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_chainhealer",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+30%。訓練者の職分が連鎖癒師である場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>。訓練者の職分が<@cc.kw>連鎖癒師</>である場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4071_peper",
      "name": "パプリカ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "control_tra_spd[020]",
          "buffName": "やる気十分",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_t_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全貿易所の受注効率+7%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、全貿易所の受注効率<@cc.vup>+7%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_wt&cost[000]",
          "buffName": "裁縫α",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率がわずかに上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>わずかに上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_wt&cost[010]",
          "buffName": "裁縫β",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost2",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率が上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4114_harold",
      "name": "ハロルド",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "meet_spd[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_team&char[000]",
          "buffName": "交友巧者",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskil_meet_team&char",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、同室するもう一人のオペレーターの手がかり捜索の傾向を強める（配属人数が1のみの場合は発動しない）",
          "rawDescription": "応接室配置時、同室するもう一人のオペレーターの<@cc.kw>手がかり捜索の傾向</>を<@cc.kw>強める</>（配属人数が1のみの場合は発動しない）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_344_beewax",
      "name": "ビーズワクス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[050]",
          "buffName": "術師エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_caster1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[051]",
          "buffName": "術師エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_caster2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_158_milu",
      "name": "ファイヤーウォッチ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "meet_spd[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd[020]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_493_firwhl",
      "name": "ファイヤーホイッスル",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "trade_cost[000]",
          "buffName": "ムードメーカー",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、配属オペレーターの1時間ごとの体力消費量-0.1",
          "rawDescription": "貿易所配置時、配属オペレーターの1時間ごとの体力消費量<@cc.vup>-0.1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd&share[000]",
          "buffName": "褒め上手",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_share1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、自身を除く仕事に配属されているオペレーター1人につき、受注効率+15%",
          "rawDescription": "貿易所配置時、自身を除く仕事に配属されているオペレーター1人につき、受注効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4155_talr",
      "name": "フィグリーノ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit&cost[100]",
          "buffName": "オーダーメイド",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&cost1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+20%、1時間ごとの体力消費量+0.25",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+20%</>、1時間ごとの体力消費量<@cc.vdown>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd&limit&cost[200]",
          "buffName": "仕事上手",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit5",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%、保管上限+6",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>、保管上限<@cc.vup>+6</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4148_philae",
      "name": "フィラエ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[005]",
          "buffName": "霊河発電α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd&dorm&lv[000]",
          "buffName": "霊河共鳴",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_power_rec_spd&dorm&lv",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、宿舎の合計レベルが1につき、追加でドローンの回復速度+0.5%",
          "rawDescription": "発電所配置時、宿舎の合計レベルが1につき、追加でドローンの回復速度<@cc.vup>+0.5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_128_plosis",
      "name": "フィリオプシス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[001]",
          "buffName": "ラインテクα",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[011]",
          "buffName": "ラインテクβ",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_345_folnic",
      "name": "フォリニック",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[111]",
          "buffName": "毒理学α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost3[100]",
          "buffName": "一意専心",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、体力消費が2の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、体力消費が<@cc.kw>2</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4106_bryota",
      "name": "ブライオファイタ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd[100]",
          "buffName": "金属工芸α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_gold1",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、金属製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>金属</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "GOLD"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_skill_spd1[020]",
          "buffName": "バイトの心得",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_skill_spd3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、配置製造所の金属工芸系スキルの発動数1につき、製造効率+5%",
          "rawDescription": "製造所配置時、配置製造所の<$cc.sk.manu4><@cc.kw>金属工芸系スキル</></>の発動数1につき、製造効率<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.sk.manu4",
              "kind": "kw",
              "label": "金属工芸系スキル"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeedPerSkillFamilyInSameRoom",
              "valuePerSkill": 5,
              "tag": "$cc.sk.manu4",
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "autoSkillFamilyCondition"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_204_platnm",
      "name": "プラチナ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[040]",
          "buffName": "狙撃エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_sniper1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[041]",
          "buffName": "狙撃エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_sniper2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_476_blkngt",
      "name": "ブラックナイト",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[010]",
          "buffName": "先鋒エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train_vanguard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[110]",
          "buffName": "戦術研鑽",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train1_vanguard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+30%。特化ランク1への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>1</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_174_slbell",
      "name": "プラマニクス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single&oneself[021]",
          "buffName": "カランドの聖女",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one22",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.5（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.25",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.5</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[061]",
          "buffName": "補助エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SUPPORT"
          ],
          "skillIcon": "bskill_train_supporter2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、補助の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>補助</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_106_franka",
      "name": "フランカ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[021]",
          "buffName": "前衛エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[031]",
          "buffName": "B.P.R.S.",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_blacksteel2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、BSWの手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>BSW</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_275_breeze",
      "name": "ブリーズ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&team[071]",
          "buffName": "没落貴族",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_glasgow2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、グラスゴーの手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>グラスゴー</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4151_tinman",
      "name": "ブリキ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "hire_spd_dorm&lv[000]",
          "buffName": "マイレンダーの探偵α",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&dorm1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+5%。宿舎の合計レベルが1につき、事務連絡速度がさらに+1%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+5%</>。宿舎の合計レベルが1につき、事務連絡速度がさらに<@cc.vup>+1%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_dorm&lv[010]",
          "buffName": "マイレンダーの探偵β",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&dorm2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+5%。宿舎の合計レベルが1につき、事務連絡速度がさらに+2%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+5%</>。宿舎の合計レベルが1につき、事務連絡速度がさらに<@cc.vup>+2%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4177_brigid",
      "name": "ブリギッド",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "hire_spd_cost[220]",
          "buffName": "ノマドの流儀α",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_skgoat3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+30%、1時間ごとの体力消費量+1",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+30%</>、1時間ごとの体力消費量<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_cost[230]",
          "buffName": "ノマドの流儀β",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_skgoat4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+45%、1時間ごとの体力消費量+1",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+45%</>、1時間ごとの体力消費量<@cc.vdown>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_415_flint",
      "name": "フリント",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[220]",
          "buffName": "難行苦行",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train2_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%。特化ランク2への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>2</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4032_provs",
      "name": "プロヴァイゾ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "trade_ord_law[000]",
          "buffName": "契約法",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_law",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、次に受注する金属オーダーの納品数が4を下回るならば、違約オーダーと見なす",
          "rawDescription": "貿易所配置時、次に受注する<@cc.kw>金属オーダー</>の納品数が<@cc.kw>4</>を下回るならば、<@cc.kw>違約オーダー</>と見なす",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_against[000]",
          "buffName": "違約金請求α",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_against",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、次に受注する金属オーダーが違約オーダーならば、純金の納品数が+1追加される",
          "rawDescription": "貿易所配置時、次に受注する<@cc.kw>金属オーダー</>が<@cc.kw>違約オーダー</>ならば、<@cc.kw>純金</>の納品数が<@cc.vup>+1</>追加される",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_against[010]",
          "buffName": "違約金請求β",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_against2",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、次に受注する金属オーダーが違約オーダーならば、純金の納品数が+2追加される",
          "rawDescription": "貿易所配置時、次に受注する<@cc.kw>金属オーダー</>が<@cc.kw>違約オーダー</>ならば、<@cc.kw>純金</>の納品数が<@cc.vup>+2</>追加される",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_145_prove",
      "name": "プロヴァンス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "hire_spd[010]",
          "buffName": "天災トランスポーターα",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+30%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd[011]",
          "buffName": "天災トランスポーターβ",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd5",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+45%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_356_broca",
      "name": "ブローカ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[021]",
          "buffName": "前衛エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4109_baslin",
      "name": "ベースライン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "hire_spd_cost[101]",
          "buffName": "礼儀作法",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&cost5",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+10%、1時間ごとの体力消費量-0.25",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+10%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_cost[120]",
          "buffName": "大権の布告",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&cost6",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+30%、1時間ごとの体力消費量-0.25",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+30%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_bd_n1_n1[300]",
          "buffName": "心声を描く",
          "roomType": "HIRE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_bd_B",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、公開求人の最大同時求人可能数が2より1多いごとに、静かなる共鳴+15",
          "rawDescription": "事務室配置時、公開求人の最大同時求人可能数が2より1多いごとに、<$cc.bd_B><@cc.rem>静かなる共鳴</></><@cc.vup>+15</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_B",
              "kind": "rem",
              "label": "静かなる共鳴"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_B",
              "name": "静かなる共鳴"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_369_bena",
      "name": "ベナ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit&cost[020]",
          "buffName": "「頼れる」助手",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit&cost4",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率-20%、保管上限+17、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、製造効率<@cc.vdown>-20%</>、保管上限<@cc.vup>+17</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_wt&cost[000]",
          "buffName": "裁縫α",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率がわずかに上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>わずかに上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_304_zebra",
      "name": "ヘビーレイン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[006]",
          "buffName": "ボディガード",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[030]",
          "buffName": "重装エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train_defender1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[230]",
          "buffName": "陣地戦熟練者",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train2_defender1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+30%。特化ランク2への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>2</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_487_bobb",
      "name": "ボビング",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all&unfull[000]",
          "buffName": "聞き手",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all&unfull[001]",
          "buffName": "話し手",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_unfull",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.2。同時に体力が最大ではないオペレーター1名ごとに、更に+0.01（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>。同時に体力が最大ではないオペレーター<@cc.kw>1</>名ごとに、更に<@cc.vup>+0.01</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_488_buildr",
      "name": "ポンシラス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[221]",
          "buffName": "予期せぬ幸運",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING"
          ],
          "skillIcon": "bskill_ws_build2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で建築材料を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>建築材料</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost3[221]",
          "buffName": "不運じゃない一日",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING"
          ],
          "skillIcon": "bskill_ws_build_cost2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で建築材料を加工時、体力消費が4の素材の体力消費-2",
          "rawDescription": "加工所で<@cc.kw>建築材料</>を加工時、体力消費が<@cc.kw>4</>の素材の体力消費<@cc.vup>-2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4199_makiri",
      "name": "マツキリ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "meet_spd[1000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd_notOwned[002]",
          "buffName": "情報屋",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spdNotOwned1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、ボード上未入手の手がかりを入手しやすい",
          "rawDescription": "応接室配置時、ボード上未入手の手がかりを入手しやすい",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_473_mberry",
      "name": "マルベリー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "hire_spd_cost[100]",
          "buffName": "救援隊業務・算盤術",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+10%、1時間ごとの体力消費量-0.25",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+10%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_cost[110]",
          "buffName": "救援隊業務・物資点検",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd&cost2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%、1時間ごとの体力消費量-0.25",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_bd_n1_n1[200]",
          "buffName": "救援隊業務・災後検診",
          "roomType": "HIRE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd_bd_n2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、公開求人の最大同時求人可能数が2より1多いごとに、俗世の憂+10",
          "rawDescription": "事務室配置時、公開求人の最大同時求人可能数が2より1多いごとに、<$cc.bd_b1><@cc.rem>俗世の憂</></><@cc.vup>+10</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_b1",
              "kind": "rem",
              "label": "俗世の憂"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_b1",
              "name": "俗世の憂"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_215_mantic",
      "name": "マンティコア",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[080]",
          "buffName": "特殊エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_specialist1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、特殊の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>特殊</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[081]",
          "buffName": "特殊エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_specialist2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、特殊の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>特殊</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4198_christ",
      "name": "ミス・クリスティーン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "manu_prod_limit&cost[012]",
          "buffName": "お昼休みにピッタリの場所",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+10、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+10</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_double[100]",
          "buffName": "ご馳走へのお返し",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_spd_double2",
          "products": [
            "EXP"
          ],
          "description": "トラゴーディアと同じ製造所に配置時、作戦記録製造の製造効率+30%",
          "rawDescription": "<@cc.kw>トラゴーディア</>と同じ製造所に配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4147_mitm",
      "name": "ミトム",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "trade_ord_wt&cost[003]",
          "buffName": "目利き上手",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_wt&cost1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、配置貿易所の高価値な金属オーダーの獲得率がわずかに上昇（勤務時間が確率に影響する）、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、配置貿易所の<@cc.kw>高価値な金属オーダー</>の獲得率が<@cc.kw>わずかに上昇</>（勤務時間が確率に影響する）、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd&meet[010]",
          "buffName": "顧問の才能",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&meet",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+15%、応接室のレベル1につき、追加で受注効率+5%、最大+30%まで",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+15%</>、応接室のレベル1につき、追加で受注効率<@cc.vup>+5%</>、最大<@cc.vup>+30%</>まで",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeedPerRoomLevel",
              "roomType": "MEETING",
              "baseValue": 15,
              "valuePerLevel": 5,
              "maxValue": 30,
              "approximate": false,
              "note": "応接室レベルごとの受注効率上昇。",
              "source": "override"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4054_malist",
      "name": "ミニマリスト",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "manu_constrLv[000]",
          "buffName": "図面デザイン",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_constrLv",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、基地内の施設（活動室を除く）のレベル合計値1につき、建設ロボット+1、上限数は64",
          "rawDescription": "製造所配置時、基地内の施設（活動室を除く）のレベル合計値1につき、<@cc.kw><$cc.bd_malist>建設ロボット</></><@cc.vup>+1</>、上限数は<@cc.vup>64</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_bd[100]",
          "buffName": "サポートロボα",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_bd3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、建設ロボット16につき、製造効率+5%",
          "rawDescription": "製造所配置時、<@cc.kw><$cc.bd_malist>建設ロボット</></><@cc.vup>16</>につき、製造効率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_bd[110]",
          "buffName": "サポートロボβ",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_bd4",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、建設ロボット8につき、製造効率+5%",
          "rawDescription": "製造所配置時、<@cc.kw><$cc.bd_malist>建設ロボット</></><@cc.vup>8</>につき、製造効率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_388_mint",
      "name": "ミント",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[050]",
          "buffName": "術師エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train_caster1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[250]",
          "buffName": "博覧強記",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "CASTER"
          ],
          "skillIcon": "bskill_train2_caster1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、術師の訓練速度+30%。特化ランク2への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>術師</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>2</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[201]",
          "buffName": "地質学α",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_originium1",
          "products": [
            "DIAMOND"
          ],
          "description": "製造所配置時、源石製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>源石</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_242_otter",
      "name": "メイヤー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[030]",
          "buffName": "ミーボ加工型",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+65%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd[020]",
          "buffName": "ミーボ製造型",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+30%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_219_meteo",
      "name": "メテオリーテ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[112]",
          "buffName": "火薬学α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[122]",
          "buffName": "火薬学β",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4006_melnte",
      "name": "メラナイト",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[040]",
          "buffName": "狙撃エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_sniper1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[630]",
          "buffName": "最終調整",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train3_sniper1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%。特化ランク3への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>3</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_154_morgan",
      "name": "モーガン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "dorm_rec_toone[000]",
          "buffName": "最高の練習相手",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_toone1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、シージが同じ宿舎内にいるグラスゴーオペレーターに対する1時間ごとの体力回復量が追加で+0.3",
          "rawDescription": "配置宿舎内、<@cc.kw>シージ</>が同じ宿舎内にいる<$cc.g.glasgow><@cc.kw>グラスゴー</></>オペレーターに対する1時間ごとの体力回復量が追加で<@cc.vup>+0.3</>",
          "conditionTags": [
            {
              "tag": "$cc.g.glasgow",
              "kind": "kw",
              "label": "グラスゴー"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd_par[000]",
          "buffName": "ギャングのコンパス",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_par1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、同じ貿易所に配置されているグラスゴーオペレーター1人につき、配置貿易所の受注効率+20%。シージと同じ貿易所に配置されている場合、追加で受注効率+35%",
          "rawDescription": "貿易所配置時、同じ貿易所に配置されている<$cc.g.glasgow><@cc.kw>グラスゴー</></>オペレーター1人につき、配置貿易所の受注効率<@cc.vup>+20%</>。<@cc.kw>シージ</>と同じ貿易所に配置されている場合、追加で受注効率<@cc.vup>+35%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.glasgow",
              "kind": "kw",
              "label": "グラスゴー"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeedPerTaggedOperatorInSameRoom",
              "valuePerOperator": 20,
              "tag": "$cc.g.glasgow",
              "source": "autoTagCondition"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_421_crow",
      "name": "ラ・プルマ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost3[000]",
          "buffName": "ぼんやり",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill_cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、体力消費が2の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、体力消費が<@cc.kw>2</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[030]",
          "buffName": "適応力",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4142_laios",
      "name": "ライオス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "meet_spd[021]",
          "buffName": "好奇心",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd_bd[001]",
          "buffName": "満腹時の意気込み",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_bd_dungeon",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、魔物料理1つにつき手がかり捜索速度+2%",
          "rawDescription": "応接室配置時、<$cc.bd_dungeon><@cc.rem>魔物料理</></><@cc.vup>1</>つにつき手がかり捜索速度<@cc.vup>+2%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_dungeon",
              "kind": "rem",
              "label": "魔物料理"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_dungeon",
              "name": "魔物料理"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_140_whitew",
      "name": "ラップランド",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_limit&cost_P[000]",
          "buffName": "酔翁の意α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_Lappland1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "テキサスと同じ貿易所に配置時、1時間ごとの体力消費量-0.1、注文上限+2",
          "rawDescription": "<@cc.kw>テキサス</>と同じ貿易所に配置時、1時間ごとの体力消費量<@cc.vup>-0.1</>、注文上限<@cc.vup>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_limit&cost_P[001]",
          "buffName": "酔翁の意β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_Lappland2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "テキサスと同じ貿易所に配置時、1時間ごとの体力消費量-0.1、注文上限+4",
          "rawDescription": "<@cc.kw>テキサス</>と同じ貿易所に配置時、1時間ごとの体力消費量<@cc.vup>-0.1</>、注文上限<@cc.vup>+4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_261_sddrag",
      "name": "リード",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_oneself[000]",
          "buffName": "一人きり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_cost[004]",
          "buffName": "影武者",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_194_leto",
      "name": "リェータ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd_P[000]",
          "buffName": "苦難を共に",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_formula_spd_sunbr",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、グムが貿易所に配属されている場合、作戦記録製造の製造効率+35%",
          "rawDescription": "製造所配置時、<@cc.kw>グム</>が貿易所に配属されている場合、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 35,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_107_liskam",
      "name": "リスカム",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[014]",
          "buffName": "電弧放電α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[021]",
          "buffName": "電弧放電β",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+20%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4079_haini",
      "name": "ルシーラ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[025]",
          "buffName": "ドーム物流管理α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[026]",
          "buffName": "ドーム物流管理β",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+20%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4014_lunacu",
      "name": "ルナカブ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_oneself[001]",
          "buffName": "幼き狼",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[011]",
          "buffName": "荒野の技術",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_306_leizi",
      "name": "レイズ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "control_clue_cost[010]",
          "buffName": "明察",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_c_wt1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、応接室配属オペレーターの手がかり捜索の傾向をわずかに強める。制御中枢内全員の1時間ごとの体力消費量+0.5",
          "rawDescription": "制御中枢配置時、応接室配属オペレーターの<@cc.kw>手がかり捜索の傾向</>を<@cc.kw>わずかに強める</>。制御中枢内全員の1時間ごとの体力消費量<@cc.vdown>+0.5</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_clue_cost[011]",
          "buffName": "明察秋毫",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_c_wt2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、応接室配属オペレーターの手がかり捜索の傾向をわずかに強める。",
          "rawDescription": "制御中枢配置時、応接室配属オペレーターの<@cc.kw>手がかり捜索の傾向</>を<@cc.kw>わずかに強める</>。",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1030_noirc2",
      "name": "レウスSノイルホーン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_mp_bd2[000]",
          "buffName": "チームワーク",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_felyne",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内のアイルーと愉快な仲間たち所属オペレーター1人につき、マタタビ+2",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.tag.mh><@cc.kw>アイルーと愉快な仲間たち</></>所属オペレーター1人につき、<$cc.bd_felyne><@cc.rem>マタタビ</></><@cc.vup>+2</>",
          "conditionTags": [
            {
              "tag": "$cc.tag.mh",
              "kind": "kw",
              "label": "アイルーと愉快な仲間たち"
            },
            {
              "tag": "$cc.bd_felyne",
              "kind": "rem",
              "label": "マタタビ"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_felyne",
              "name": "マタタビ"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_token_tra_spd[000]",
          "buffName": "秘伝交渉術",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_token_t_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "アイルーと愉快な仲間たち所属オペレーターと共に制御中枢に配置時、全貿易所の受注効率+7%（同種の効果は高いほうのみ適用）",
          "rawDescription": "<$cc.tag.mh><@cc.kw>アイルーと愉快な仲間たち</></>所属オペレーターと共に制御中枢に配置時、全貿易所の受注効率<@cc.vup>+7%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.tag.mh",
              "kind": "kw",
              "label": "アイルーと愉快な仲間たち"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_373_lionhd",
      "name": "レオンハルト",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[220]",
          "buffName": "構造力学",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING"
          ],
          "skillIcon": "bskill_ws_build2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で建築材料を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>建築材料</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost3[220]",
          "buffName": "資源処理工学",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING"
          ],
          "skillIcon": "bskill_ws_build_cost2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で建築材料を加工時、体力消費が4の素材の体力消費-2",
          "rawDescription": "加工所で<@cc.kw>建築材料</>を加工時、体力消費が<@cc.kw>4</>の素材の体力消費<@cc.vup>-2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4196_reckpr",
      "name": "レコードキーパー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "train_spd&profession3[184]",
          "buffName": "医療エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_medic1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd[002]",
          "buffName": "オールラウンダーα",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_all",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、訓練速度+25%",
          "rawDescription": "訓練室で協力者として配置時、訓練速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_144_red",
      "name": "レッド",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[001]",
          "buffName": "S.W.E.E.P.",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd[031]",
          "buffName": "追跡者",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+25%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4163_rosesa",
      "name": "ローズソルト",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "trade_ord_limit&trade&lv[001]",
          "buffName": "書き入れ時",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_limit&trade2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、配置貿易所のレベル1ごとに注文上限+1",
          "rawDescription": "貿易所配置時、配置貿易所のレベル1ごとに注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd[1001]",
          "buffName": "注文分配β",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4040_rockr",
      "name": "ロックロック",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[031]",
          "buffName": "手放すべき剰余",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+65%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_drop[020]",
          "buffName": "不要な譲り渡し",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_drop_polyester",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、T3の副産物が入手できるとき、副産物が必ず中級エステルとなる",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、<@cc.kw>T3</>の副産物が入手できるとき、副産物が必ず<@cc.kw>中級エステル</>となる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_451_robin",
      "name": "ロビン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "train_spd&profession2[080]",
          "buffName": "特殊エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_specialist1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、特殊の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>特殊</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[180]",
          "buffName": "フォーカストラップ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train1_specialist1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、特殊の訓練速度+30%。特化ランク1への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>特殊</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>1</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_243_waaifu",
      "name": "ワイフー",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "manu_cost_all[000]",
          "buffName": "チームワーク",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_cost_all",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、配属オペレーターの自身に対する体力消費に関する効果が無効になる",
          "rawDescription": "製造所配置時、配属オペレーターの<@cc.kw>自身</>に対する体力消費に関する効果が<@cc.kw>無効</>になる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_variable2[000]",
          "buffName": "コンビネーション",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_variable21",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、配置製造所の製造効率5%上昇（施設の数量による製造効率上昇を含めず）につき、製造効率+5%、最大40%",
          "rawDescription": "製造所配置時、配置製造所の製造効率<@cc.vup>5%</>上昇（施設の数量による製造効率上昇を含めず）につき、製造効率<@cc.vup>+5%</>、最大<@cc.vup>40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_496_wildmn",
      "name": "ワイルドメイン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[002]",
          "buffName": "レッドパインα",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[012]",
          "buffName": "レッドパインβ",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_171_bldsk",
      "name": "ワルファリン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[070]",
          "buffName": "医療エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_medic1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[071]",
          "buffName": "医療エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_medic2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4119_wanqin",
      "name": "ワンチィン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[032]",
          "buffName": "天師府の工芸",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+65%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+65%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost3[400]",
          "buffName": "刻苦勉励",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_all_cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、体力消費が4の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、体力消費が<@cc.kw>4</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1011_lava2",
      "name": "炎獄ラヴァ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[900]",
          "buffName": "異格者",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_sp",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内の異格オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.sp><@cc.kw>異格</></>オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.sp",
              "kind": "kw",
              "label": "異格"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[022]",
          "buffName": "火力発電γ",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+20%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1021_kroos2",
      "name": "寒芒クルース",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[900]",
          "buffName": "異格者",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_sp",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内の異格オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.sp><@cc.kw>異格</></>オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.sp",
              "kind": "kw",
              "label": "異格"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession3[140]",
          "buffName": "実戦技術：速射手",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SNIPER"
          ],
          "skillIcon": "bskill_train_fastshot",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、狙撃の訓練速度+30%。訓練者の職分が速射手である場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>狙撃</>の訓練速度<@cc.vup>+30%</>。訓練者の職分が<@cc.kw>速射手</>である場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4019_ncdeer",
      "name": "九色鹿",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "workshop_formula_bonus1[000]",
          "buffName": "因果",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_bonus1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所に配置時、因果の累積値が40に達する時必ず副産物を1回獲得する",
          "rawDescription": "加工所に配置時、<$cc.w.ncdeer1><@cc.rem>因果</></>の累積値が<@cc.kw>40</>に達する時必ず副産物を1回獲得する",
          "conditionTags": [
            {
              "tag": "$cc.w.ncdeer1",
              "kind": "rem",
              "label": "因果"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_bonus2[000]",
          "buffName": "応報",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_bonus2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所に配置時、応報の累積値が80に達する時必ず副産物を1回獲得する",
          "rawDescription": "加工所に配置時、<$cc.w.ncdeer2><@cc.rem>応報</></>の累積値が<@cc.kw>80</>に達する時必ず副産物を1回獲得する",
          "conditionTags": [
            {
              "tag": "$cc.w.ncdeer2",
              "kind": "rem",
              "label": "応報"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4184_dolris",
      "name": "三角初華",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "control_dorm_bd[000]",
          "buffName": "アイドルのオーラ",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_dorm_uika1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、宿舎にいるオペレーター1人につきパッション+1",
          "rawDescription": "制御中枢配置時、宿舎にいるオペレーター<@cc.vup>1</>人につき<$cc.bd_mujica><@cc.rem>パッション</></><@cc.vup>+1</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_mujica",
              "kind": "rem",
              "label": "パッション"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_mujica",
              "name": "パッション"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_dorm_rec2[000]",
          "buffName": "共鳴する絆",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_dorm_uika2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、全ての宿舎内のオペレーターの1時間ごとの体力回復量+0.05（同種の効果は高いほうのみ適用）、豊川祥子と共に制御中枢に配置時、豊川祥子の体力が1時間ごとに+0.1回復",
          "rawDescription": "制御中枢配置時、全ての宿舎内のオペレーターの1時間ごとの体力回復量<@cc.vup>+0.05</>（同種の効果は高いほうのみ適用）、<@cc.kw>豊川祥子</>と共に制御中枢に配置時、<@cc.kw>豊川祥子</>の体力が1時間ごとに<@cc.vup>+0.1</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4183_mortis",
      "name": "若葉睦",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "control_mp_bd&trade[000]",
          "buffName": "演技力のバケモノ",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_trade_mortis",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、パッション+20。パッション8につき、1時間ごとの体力消費量+0.01、全貿易所の受注効率+1%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、<$cc.bd_mujica><@cc.rem>パッション</></><@cc.vup>+20</>。<$cc.bd_mujica><@cc.rem>パッション</></><@cc.vup>8</>につき、1時間ごとの体力消費量<@cc.vdown>+0.01</>、全貿易所の受注効率<@cc.vup>+1%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.bd_mujica",
              "kind": "rem",
              "label": "パッション"
            },
            {
              "tag": "$cc.bd_mujica",
              "kind": "rem",
              "label": "パッション"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_mujica",
              "name": "パッション"
            },
            {
              "tag": "$cc.bd_mujica",
              "name": "パッション"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_cost_reset[000]",
          "buffName": "互いの半身",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_mp_mortis",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "豊川祥子と共に制御中枢に配置時、自身の基地スキルによる体力消費量増加を打ち消す",
          "rawDescription": "<@cc.kw>豊川祥子</>と共に制御中枢に配置時、自身の基地スキルによる体力消費量増加を打ち消す",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1027_greyy2",
      "name": "承曦グレイ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "power_rec_drone[000]",
          "buffName": "配電工事",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_drone",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの上限数10につき、ドローンの回復速度+1%（最大+25%まで）",
          "rawDescription": "発電所配置時、ドローンの上限数<@cc.vup>10</>につき、ドローンの回復速度<@cc.vup>+1%</>（最大<@cc.vup>+25%</>まで）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_count[000]",
          "buffName": "曙光",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_count",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、他の発電所に作業用プラットフォーム が配置されていない場合、発電所の施設数+1（施設の数以外に影響なし）",
          "rawDescription": "発電所配置時、他の<@cc.kw>発電所</>に<$cc.tag.op><@cc.kw>作業用プラットフォーム </></>が配置されていない場合、<@cc.kw>発電所</>の施設数<@cc.vup>+1</>（施設の数以外に影響なし）",
          "conditionTags": [
            {
              "tag": "$cc.tag.op",
              "kind": "kw",
              "label": "作業用プラットフォーム"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1024_hbisc2",
      "name": "濯塵ハイビスカス",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "control_mp_cost&faction[900]",
          "buffName": "異格者",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_sp",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内の異格オペレーター1人につき、中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内の<$cc.g.sp><@cc.kw>異格</></>オペレーター1人につき、中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [
            {
              "tag": "$cc.g.sp",
              "kind": "kw",
              "label": "異格"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession2[270]",
          "buffName": "健康管理",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train2_medic1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+30%。特化ランク2への訓練をサポートする場合、訓練速度がさらに+45%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>。特化ランク<@cc.vup>2</>への訓練をサポートする場合、訓練速度がさらに<@cc.vup>+45%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4186_tmoris",
      "name": "八幡海鈴",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "control_hire_spd&bd[000]",
          "buffName": "頼れる仲間",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_hire_tmoris",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、パッション+10。事務連絡速度+10%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、<$cc.bd_mujica><@cc.rem>パッション</></><@cc.vup>+10</>。事務連絡速度<@cc.vup>+10%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.bd_mujica",
              "kind": "rem",
              "label": "パッション"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_mujica",
              "name": "パッション"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_tra_limit&spd2[000]",
          "buffName": "ファミリーの許し",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_t_limit&spd_tmoris",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、貿易所に配置中のシラクーザオペレーター1人につき、受注効率+5%",
          "rawDescription": "制御中枢配置時、貿易所に配置中の<$cc.g.siracusa><@cc.kw>シラクーザ</></>オペレーター1人につき、受注効率<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.siracusa",
              "kind": "kw",
              "label": "シラクーザ"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeedForTaggedOperator",
              "value": 5,
              "tag": "$cc.g.siracusa",
              "source": "autoTagCondition"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4185_amoris",
      "name": "祐天寺にゃむ",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_meeting_spd&bd[000]",
          "buffName": "努力家",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_meet_amoris1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、パッション+10。応接室の手がかり捜索速度+5%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、<$cc.bd_mujica><@cc.rem>パッション</></><@cc.vup>+10</>。応接室の手がかり捜索速度<@cc.vup>+5%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.bd_mujica",
              "kind": "rem",
              "label": "パッション"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_mujica",
              "name": "パッション"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp&meet_spd[000]",
          "buffName": "結果主義",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_meet_amoris2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "豊川祥子と共に制御中枢に配置時、豊川祥子の1時間ごとの体力消費量+0.05。応接室の手がかり捜索速度+5%（同種の効果は高いほうのみ適用）",
          "rawDescription": "<@cc.kw>豊川祥子</>と共に制御中枢に配置時、<@cc.kw>豊川祥子</>の1時間ごとの体力消費量<@cc.vdown>+0.05</>。応接室の手がかり捜索速度<@cc.vup>+5%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_1036_fang2",
      "name": "歴陣鋭槍フェン",
      "rarity": "TIER_5",
      "rarityValue": 5,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[1000]",
          "buffName": "標準化α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd&fraction[000]",
          "buffName": "再会のひととき",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_A1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、配置製造所のA1小隊のオペレーター数1につき、製造効率+10%",
          "rawDescription": "製造所配置時、配置製造所の<$cc.g.A1><@cc.kw>A1小隊</></>のオペレーター数1につき、製造効率<@cc.vup>+10%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.A1",
              "kind": "kw",
              "label": "A1小隊"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeedPerTaggedOperatorInSameRoom",
              "valuePerOperator": 10,
              "tag": "$cc.g.A1",
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "autoTagCondition"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_183_skgoat",
      "name": "アーススピリット",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "hire_spd_cost[010]",
          "buffName": "天災トランスポーターα",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+30%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "hire_spd_cost[200]",
          "buffName": "定時退勤",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_skgoat",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+45%、1時間ごとの体力消費量+2",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+45%</>、1時間ごとの体力消費量<@cc.vdown>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[211]",
          "buffName": "地質学β",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_originium2",
          "products": [
            "DIAMOND"
          ],
          "description": "製造所配置時、源石製造の製造効率+35%",
          "rawDescription": "製造所配置時、<@cc.kw>源石</>製造の製造効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 35,
              "products": [
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4051_akkord",
      "name": "アコルト",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[008]",
          "buffName": "はやる乱奏",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[009]",
          "buffName": "はやる乱奏",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_oneself2[001]",
          "buffName": "とけあう追奏",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7。配置宿舎内、他のオペレーター1人につき、自身の1時間ごとの体力回復量が追加で+0.05",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>。配置宿舎内、他のオペレーター1人につき、自身の1時間ごとの体力回復量が追加で<@cc.vup>+0.05</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_366_acdrop",
      "name": "アシッドドロップ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "hire_spd[031]",
          "buffName": "B-girl",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+40%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single&oneself[012]",
          "buffName": "Give me five",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one12",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.35（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.35",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.35</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.35</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_271_spikes",
      "name": "アレーン",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_formula_dorm[000]",
          "buffName": "「無用の用」",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_dorm1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、宿舎で休養中の体力が4以下のオペレーター1人につき、副産物の入手確率+5%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、宿舎で休養中の体力が<@cc.vup>4</>以下のオペレーター<@cc.kw>1</>人につき、副産物の入手確率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_dorm[001]",
          "buffName": "「適材適所」",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_dorm3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、宿舎で休養中の体力が20以下のオペレーター1人につき、副産物の入手確率+5%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、宿舎で休養中の体力が<@cc.vup>20</>以下のオペレーター<@cc.kw>1</>人につき、副産物の入手確率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_oneself2[000]",
          "buffName": "「一人きり」",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7。配置宿舎内、他のオペレーター1人につき、自身の1時間ごとの体力回復量が追加で+0.05",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>。配置宿舎内、他のオペレーター1人につき、自身の1時間ごとの体力回復量が追加で<@cc.vup>+0.05</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_302_glaze",
      "name": "アンブリエル",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all&oneself[000]",
          "buffName": "怠惰",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&one1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量-0.1。配置宿舎内、全員の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vdown>-0.1</>。配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd[001]",
          "buffName": "注文分配β",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_355_ethan",
      "name": "イーサン",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "hire_spd[030]",
          "buffName": "WRITER",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+40%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_oneself[030]",
          "buffName": "見えない美食家",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.75",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.75</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_469_indigo",
      "name": "インディゴ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single_P[002]",
          "buffName": "毒使いの友",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single_indigo",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、オペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）。対象がアズリウスの場合、更に+0.45",
          "rawDescription": "配置宿舎内、オペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）。対象が<@cc.kw>アズリウス</>の場合、更に<@cc.vup>+0.45</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[002]",
          "buffName": "光力発電・α",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[017]",
          "buffName": "灯台供給モジュール",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4107_vrdant",
      "name": "ヴァーダント",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost3[101]",
          "buffName": "手慣れた作業",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、体力消費が2の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、体力消費が<@cc.kw>2</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_device[060]",
          "buffName": "DIY・初級アケトンα",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_Ketone",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアケトン系素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>アケトン</>系素材を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_190_clour",
      "name": "ヴァーミル",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "manu_prod_limit&cost[0000]",
          "buffName": "ウェストピッカー",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+8、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+8</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_variable[000]",
          "buffName": "再利用",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_variable11",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、保管上限1上昇につき、製造効率+2%",
          "rawDescription": "製造所配置時、保管上限1上昇につき、製造効率<@cc.vup>+2%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_290_vigna",
      "name": "ヴィグナ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd[010]",
          "buffName": "作戦記録指導",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp2",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "train_spd&profession[011]",
          "buffName": "先鋒エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train_vanguard2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_445_wscoot",
      "name": "ウィンドスクート",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "meet_spd&clue[000]",
          "buffName": "義侠の人脈",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd_clue",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、公開求人の最大同時求人可能数が2より1多いごとに、事務連絡速度+5%",
          "rawDescription": "応接室配置時、公開求人の最大同時求人可能数が2より1多いごとに、事務連絡速度<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd_notOwned&exchange[000]",
          "buffName": "鋭い観察眼",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd_notOwned_exchange",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、情報共有中にボード上未入手の手がかりを入手しやすい",
          "rawDescription": "応接室配置時、情報共有中にボード上未入手の手がかりを入手しやすい",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_337_utage",
      "name": "ウタゲ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "hire_spd[020]",
          "buffName": "心理学",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+40%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd[020]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_127_estell",
      "name": "エステル",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[020]",
          "buffName": "集中β",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+60%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_oneself[000]",
          "buffName": "一人きり",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_187_ccheal",
      "name": "ガヴィル",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[110]",
          "buffName": "薬理学α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[070]",
          "buffName": "医療エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_medic1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_328_cammou",
      "name": "カシャ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "manu_formula_cost[000]",
          "buffName": "Vlog",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp&cost",
          "products": [
            "EXP"
          ],
          "description": "製造所で作戦記録を製造時、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所で<@cc.kw>作戦記録</>を製造時、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_limit[010]",
          "buffName": "映像編集β",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp&limit2",
          "products": [
            "EXP"
          ],
          "description": "製造所で作戦記録を製造時、保管上限+15",
          "rawDescription": "製造所で<@cc.kw>作戦記録</>を製造時、保管上限<@cc.vup>+15</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_301_cutter",
      "name": "カッター",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[300]",
          "buffName": "特訓記録",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_asc1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でSoCを加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>SoC</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost3[300]",
          "buffName": "無心",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_asc_cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でSoCを加工時、体力消費が2の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>SoC</>を加工時、体力消費が<@cc.kw>2</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_109_fmout",
      "name": "ギターノ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[010]",
          "buffName": "供給管理",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit6",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+25%、注文上限+1",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+25%</>、注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 25,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "meet_spd[030]",
          "buffName": "占い",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+25%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_198_blackd",
      "name": "クーリエ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[020]",
          "buffName": "カランド貿易α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+15%、注文上限+2",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+15%</>、注文上限<@cc.vup>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 15,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "meet_spd&team[040]",
          "buffName": "クーリエ",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_kjerag2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、カランド貿易の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>カランド貿易</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4063_quartz",
      "name": "クォーツ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[000]",
          "buffName": "標準化α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&formula[000]",
          "buffName": "分刻みの予定表",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&formula1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%、製造所での生産ラインの種類1につき、受注効率が追加で+2%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>、製造所での生産ラインの種類<@cc.kw>1</>につき、受注効率が追加で<@cc.vup>+2%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_150_snakek",
      "name": "クオーラ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit[001]",
          "buffName": "倉庫整備β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、保管上限+10、製造効率+10%",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+10</>、製造効率<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 10,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd[000]",
          "buffName": "注文分配α",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_196_sunbr",
      "name": "グム",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&cost[000]",
          "buffName": "コミュニケーション",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single&oneself[011]",
          "buffName": "調理",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one12",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.35（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.35",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.35</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.35</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_237_gravel",
      "name": "グラベル",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[000]",
          "buffName": "集中α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+40%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[110]",
          "buffName": "金属工芸β",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_gold2",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、金属製造の製造効率+35%",
          "rawDescription": "製造所配置時、<@cc.kw>金属</>製造の製造効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 35,
              "products": [
                "GOLD"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_253_greyy",
      "name": "グレイ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[020]",
          "buffName": "静電場",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+20%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_proc_probability[010]",
          "buffName": "能工巧匠",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+50%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4100_caper",
      "name": "ケイパー",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "meet_spd&team[000]",
          "buffName": "情報収集α",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd&exchange[000]",
          "buffName": "無垢な笑顔",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_exchange",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、情報共有中の手がかり捜索速度+30%",
          "rawDescription": "応接室配置時、情報共有中の手がかり捜索速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4165_ctrail",
      "name": "コントレイル",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[102]",
          "buffName": "気流伝動",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd&profession[1081]",
          "buffName": "特殊エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_2",
            "level": 1
          },
          "targets": [
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_specialist2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、特殊の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>特殊</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_159_peacok",
      "name": "コンビクション",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single[030]",
          "buffName": "天啓",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.7（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.7</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[020]",
          "buffName": "拳術記録指導",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp3",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+35%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 35,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_272_strong",
      "name": "ジェイ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "trade_ord_limit_diff[000]",
          "buffName": "露店の魚売り",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_limit_diff",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、オーダー数と注文上限数の差が1につき、受注効率+4%",
          "rawDescription": "貿易所配置時、オーダー数と注文上限数の差が<@cc.vup>1</>につき、受注効率<@cc.vup>+4%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_limit_count[000]",
          "buffName": "下町の商売人",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_limit_count",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、自身以外の配属オペレーターの受注効率が10%につき、注文上限-1（上限数最低1）。オーダー数が1につき、受注効率+4%（一部のスキルに対して特殊加算制限がある）",
          "rawDescription": "貿易所配置時、自身以外の配属オペレーターの受注効率が<@cc.vup>10%</>につき、注文上限<@cc.vdown>-1</>（上限数最低1）。オーダー数が<@cc.vup>1</>につき、受注効率<@cc.vup>+4%</>（一部のスキルに対して<$cc.t.strong2><@cc.rem>特殊加算制限</></>がある）",
          "conditionTags": [
            {
              "tag": "$cc.t.strong2",
              "kind": "rem",
              "label": "特殊加算制限"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_235_jesica",
      "name": "ジェシカ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[010]",
          "buffName": "標準化β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "meet_spd&team[030]",
          "buffName": "連絡員",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_blacksteel2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+10%、BSWの手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+10%</>、<@cc.kw>BSW</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_347_jaksel",
      "name": "ジャッキー",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single&oneself[000]",
          "buffName": "活発",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one01",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.4",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_spd[0020]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_260_durnar",
      "name": "ジュナー",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[030]",
          "buffName": "重装エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train_defender1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_mp_cost[002]",
          "buffName": "おやつネット",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_277_sqrrel",
      "name": "ショウ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[200]",
          "buffName": "工学",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING"
          ],
          "skillIcon": "bskill_ws_build1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で建築材料を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>建築材料</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd[010]",
          "buffName": "メンテナンス",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_118_yuki",
      "name": "シラユキ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "meet_spd[020]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[010]",
          "buffName": "作戦記録指導",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp2",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_149_scave",
      "name": "スカベンジャー",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[001]",
          "buffName": "S.W.E.E.P.",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_limit&cost[000]",
          "buffName": "ウェストピッカー",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+8、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+8</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_298_susuro",
      "name": "ススーロ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[070]",
          "buffName": "医療エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "MEDIC"
          ],
          "skillIcon": "bskill_train_medic1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、医療の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>医療</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[120]",
          "buffName": "薬理学β",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4208_wintim",
      "name": "スネグーラチカ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&manu[000]",
          "buffName": "科学的改造",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_manu1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、自身以外の配属オペレーター全員の製造効率を0にする（施設の数量による製造効率上昇に影響なし）。製造所に配置中のオペレーター1名につき、配置製造所の保管上限+5",
          "rawDescription": "製造所配置時、自身以外の配属オペレーター全員の製造効率を<@cc.vdown>0にする</>（施設の数量による製造効率上昇に影響なし）。製造所に配置中のオペレーター1名につき、配置製造所の保管上限<@cc.vup>+5</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd&manu[100]",
          "buffName": "工程最適化",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_manu2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、自身以外の配属オペレーター全員の製造効率を0にする（施設の数量による製造効率上昇に影響なし）。製造所に配置中のオペレーター1名につき、配置製造所の製造効率+10%、保管上限+5",
          "rawDescription": "製造所配置時、自身以外の配属オペレーター全員の製造効率を<@cc.vdown>0にする</>（施設の数量による製造効率上昇に影響なし）。製造所に配置中のオペレーター1名につき、配置製造所の製造効率<@cc.vup>+10%</>、保管上限<@cc.vup>+5</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_385_finlpp",
      "name": "セイリュウ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[011]",
          "buffName": "クリーンエネルギー",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd&trade[000]",
          "buffName": "再生エネルギー",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_spd&trade",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、貿易所1か所につき、配置中の製造所のみ金属製造の製造効率+20%",
          "rawDescription": "製造所配置時、<@cc.kw>貿易所</>1か所につき、配置中の製造所のみ<@cc.kw>金属</>製造の製造効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4041_chnut",
      "name": "チェストナット",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[000]",
          "buffName": "標準化α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_formula_spd[201]",
          "buffName": "地質学α",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_originium1",
          "products": [
            "DIAMOND"
          ],
          "description": "製造所配置時、源石製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>源石</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_110_deepcl",
      "name": "ディピカ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd[000]",
          "buffName": "注文分配α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "workshop_proc_probability[020]",
          "buffName": "集中β",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+60%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_151_myrtle",
      "name": "テンニンカ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "trade_ord_limit&cost[000]",
          "buffName": "交渉",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_limit&cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、注文上限+5、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、注文上限<@cc.vup>+5</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[013]",
          "buffName": "カリスマ",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_130_doberm",
      "name": "ドーベルマン",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "control_mp_cost[000]",
          "buffName": "腹心",
          "roomType": "CONTROL",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに+0.05回復",
          "rawDescription": "制御中枢配置時、制御中枢内全員の体力が1時間ごとに<@cc.vup>+0.05</>回復",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "train_spd[000]",
          "buffName": "教官",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "PIONEER",
            "WARRIOR",
            "TANK",
            "SNIPER",
            "CASTER",
            "MEDIC",
            "SUPPORT",
            "SPECIAL"
          ],
          "skillIcon": "bskill_train_all",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、訓練速度+25%",
          "rawDescription": "訓練室で協力者として配置時、訓練速度<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4062_totter",
      "name": "トター",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd_reduce[000]",
          "buffName": "霞む視界",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_reduce",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+30%、自身の体力減少分が4ごとに、製造効率-5%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+30%</>、自身の<$cc.bd.costdrop><@cc.kw>体力減少分</></>が<@cc.kw>4</>ごとに、製造効率<@cc.vdown>-5%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd.costdrop",
              "kind": "kw",
              "label": "体力減少分"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_addition&cost[000]",
          "buffName": "窓外の吹雪",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_add&cost",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、自身の体力減少分が12を上回る時、製造効率+10%、保管上限+6",
          "rawDescription": "製造所配置時、自身の<$cc.bd.costdrop><@cc.kw>体力減少分</></>が<@cc.kw>12</>を上回る時、製造効率<@cc.vup>+10%</>、保管上限<@cc.vup>+6</>",
          "conditionTags": [
            {
              "tag": "$cc.bd.costdrop",
              "kind": "kw",
              "label": "体力減少分"
            }
          ],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 10,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_440_pinecn",
      "name": "パインコーン",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[200]",
          "buffName": "工学",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING"
          ],
          "skillIcon": "bskill_ws_build1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で建築材料を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>建築材料</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_cost3[200]",
          "buffName": "ポータブル蓄電池",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_BUILDING"
          ],
          "skillIcon": "bskill_ws_build_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で建築材料を加工時、体力消費が2の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>建築材料</>を加工時、体力消費が<@cc.kw>2</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_181_flower",
      "name": "パフューマー",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[110]",
          "buffName": "薬理学α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd[010]",
          "buffName": "標準化β",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_381_bubble",
      "name": "バブル",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_limit&cost[010]",
          "buffName": "収集癖",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+10、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+10</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd_variable3[000]",
          "buffName": "大きい方がいい！",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_variable31",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、配属オペレーター各自の保管上限増加値が16以下の場合、増加値が1につき、製造効率+1%。保管上限増加値が16を超える場合、増加値1につき、製造効率+3%（「再利用」の効果より優先適用、重複不可）",
          "rawDescription": "製造所配置時、配属オペレーター各自の保管上限増加値が<@cc.vup>16</>以下の場合、増加値が1につき、製造効率<@cc.vup>+1%</>。保管上限増加値が<@cc.vup>16</>を超える場合、増加値1につき、製造効率<@cc.vup>+3%</>（<$cc.m.var1><@cc.rem>「再利用」</></>の効果より優先適用、重複不可）",
          "conditionTags": [
            {
              "tag": "$cc.m.var1",
              "kind": "rem",
              "label": "「再利用」"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_137_brownb",
      "name": "ビーハンター",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[020]",
          "buffName": "前衛エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "WARRIOR"
          ],
          "skillIcon": "bskill_train_guard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、前衛の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>前衛</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[300]",
          "buffName": "特訓記録",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_asc1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でSoCを加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>SoC</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_452_bstalk",
      "name": "ビーンストーク",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[003]",
          "buffName": "ぴーちゃん",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_limit&cost[001]",
          "buffName": "トレイちゃん",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_man_limit&cost1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "製造所配置時、保管上限+8、1時間ごとの体力消費量-0.25",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+8</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_491_humus",
      "name": "ヒューマス",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[013]",
          "buffName": "直せばまだ使える",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+50%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_rub[000]",
          "buffName": "捨てて勿体ない",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_rub",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で体力消費が2の昇進素材を加工する際、追加で副産物の入手確率+40%",
          "rawDescription": "加工所で体力消費が<@cc.kw>2</>の<@cc.kw>昇進素材</>を加工する際、追加で副産物の入手確率<@cc.vup>+40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4004_pudd",
      "name": "プリン",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[010]",
          "buffName": "メンテナンス",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+15%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "control_token_prod_spd[000]",
          "buffName": "オーバークロック",
          "roomType": "CONTROL",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_ctrl_token_p_spd",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "制御中枢配置時、2台以上の作業用プラットフォームが発電所に配置されている時、全製造所の製造効率+2%（同種の効果は高いほうのみ適用）",
          "rawDescription": "制御中枢配置時、<@cc.kw>2</>台以上の<$cc.tag.op><@cc.kw>作業用プラットフォーム</></>が<@cc.kw>発電所</>に配置されている時、全製造所の製造効率<@cc.vup>+2%</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [
            {
              "tag": "$cc.tag.op",
              "kind": "kw",
              "label": "作業用プラットフォーム"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_193_frostl",
      "name": "フロストリーフ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "dorm_rec_oneself[000]",
          "buffName": "一人きり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[010]",
          "buffName": "作戦記録指導",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp2",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_141_nights",
      "name": "ヘイズ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "manu_formula_spd[100]",
          "buffName": "金属工芸α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_gold1",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、金属製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>金属</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "GOLD"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd[001]",
          "buffName": "注文分配β",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_258_podego",
      "name": "ポデンコ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single[010]",
          "buffName": "思いやり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single[001]",
          "buffName": "セラピー",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.65（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.65</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all[012]",
          "buffName": "花の香り",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、全員の1時間ごとの体力回復量+0.15（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.15</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_199_yak",
      "name": "マッターホルン",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[020]",
          "buffName": "カランド貿易α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+15%、注文上限+2",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+15%</>、注文上限<@cc.vup>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 15,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "train_spd&profession[031]",
          "buffName": "重装エキスパートβ",
          "roomType": "TRAINING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "TANK"
          ],
          "skillIcon": "bskill_train_defender2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、重装の訓練速度+50%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>重装</>の訓練速度<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_289_gyuki",
      "name": "マトイマル",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[000]",
          "buffName": "アーツ理論",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_SKILL"
          ],
          "skillIcon": "bskill_ws_skill1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でアーツ学を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>アーツ学</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd[001]",
          "buffName": "注文分配β",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_117_myrrh",
      "name": "ミルラ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[110]",
          "buffName": "薬理学α",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single[010]",
          "buffName": "思いやり",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_185_frncat",
      "name": "ムース",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd[001]",
          "buffName": "注文分配β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "dorm_rec_single&oneself[010]",
          "buffName": "ベーキング",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one11",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.3（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.3",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.3</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.3</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_133_mm",
      "name": "メイ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "meet_spd[0020]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "meet_team[020]",
          "buffName": "皇室探偵（自称）",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_penguin1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、ペンギン急便の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "rawDescription": "応接室配置時、<@cc.kw>ペンギン急便</>の手がかりを入手しやすい（勤務時間が確率に影響する）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_126_shotst",
      "name": "メテオ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[000]",
          "buffName": "標準化α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "dorm_rec_single[010]",
          "buffName": "思いやり",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4130_luton",
      "name": "ルトナダ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "workshop_formula_cost3[100]",
          "buffName": "一意専心",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve_cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、体力消費が2の素材の体力消費-1",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、体力消費が<@cc.kw>2</>の素材の体力消費<@cc.vup>-1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[101]",
          "buffName": "効率的再利用",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_236_rope",
      "name": "ロープ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "meet_spd[020]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_limit&cost[000]",
          "buffName": "交渉",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_limit&cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、注文上限+5、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、注文上限<@cc.vup>+5</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_484_robrta",
      "name": "ロベルタ",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "workshop_formula_probability[200]",
          "buffName": "工学",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING"
          ],
          "skillIcon": "bskill_ws_build1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で建築材料を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>建築材料</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd[010]",
          "buffName": "標準化β",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4067_lolxh",
      "name": "羅小黒",
      "rarity": "TIER_4",
      "rarityValue": 4,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "workshop_proc_cost[000]",
          "buffName": "金属使い",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_lolxh",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で体力消費が8の任意の素材を加工時、副産物の入手確率50%",
          "rawDescription": "加工所で体力消費が<@cc.kw>8</>の<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_lolxh[000]",
          "buffName": "ネコの妖精",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_cost_lolxh",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、体力消費が4以上の素材すべての体力消費が4で割った値になる",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、体力消費が<@cc.kw>4</>以上の素材すべての体力消費が<@cc.vup>4</>で割った値になる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_211_adnach",
      "name": "アドナキエル",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd[000]",
          "buffName": "注文分配α",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "workshop_proc_probability[010]",
          "buffName": "能工巧匠",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+50%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_212_ansel",
      "name": "アンセル",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single[010]",
          "buffName": "思いやり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[110]",
          "buffName": "薬理学α",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+75%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+75%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_278_orchid",
      "name": "オーキッド",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "hire_spd[020]",
          "buffName": "心理学",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd4",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+40%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd&limit[010]",
          "buffName": "供給管理",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit6",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+25%、注文上限+1",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+25%</>、注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 25,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_209_ardign",
      "name": "カーディ",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit[000]",
          "buffName": "倉庫整備α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、保管上限+6、製造効率+10%",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+6</>、製造効率<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 10,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "dorm_rec_single&oneself[000]",
          "buffName": "活発",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one01",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.4",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_282_catap",
      "name": "カタパルト",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&cost[000]",
          "buffName": "コミュニケーション",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[122]",
          "buffName": "火薬学β",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+80%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+80%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_124_kroos",
      "name": "クルース",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd_addition[040]",
          "buffName": "のんびり",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_add2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、最初の1時間製造効率+15%、その後まで1時間ごと更に+2%、最終的に+25%になる",
          "rawDescription": "製造所配置時、最初の1時間製造効率<@cc.vup>+15%</>、その後まで1時間ごと更に<@cc.vup>+2%</>、最終的に<@cc.vup>+25%</>になる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_oneself[000]",
          "buffName": "一人きり",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量+0.7",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vup>+0.7</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_210_stward",
      "name": "スチュワード",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "trade_ord_limit&cost[000]",
          "buffName": "交渉",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_limit&cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、注文上限+5、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、注文上限<@cc.vup>+5</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd[010]",
          "buffName": "標準化β",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_284_spot",
      "name": "スポット",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "workshop_proc_probability[010]",
          "buffName": "能工巧匠",
          "roomType": "WORKSHOP",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+50%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+50%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[100]",
          "buffName": "金属工芸α",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_GOLD"
          ],
          "skillIcon": "bskill_man_gold1",
          "products": [
            "GOLD"
          ],
          "description": "製造所配置時、金属製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>金属</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "GOLD"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_120_hibisc",
      "name": "ハイビスカス",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "dorm_rec_single[010]",
          "buffName": "思いやり",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.55（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.55</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[100]",
          "buffName": "栄養学",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_EVOLVE"
          ],
          "skillIcon": "bskill_ws_evolve1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で昇進素材を加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>昇進素材</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_240_wyvern",
      "name": "バニラ",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd[010]",
          "buffName": "標準化β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd2",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 25,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd[000]",
          "buffName": "注文分配α",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+20%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 20,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_122_beagle",
      "name": "ビーグル",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit[000]",
          "buffName": "倉庫整備α",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、保管上限+6、製造効率+10%",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+6</>、製造効率<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 10,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "dorm_rec_single&oneself[000]",
          "buffName": "活発",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one01",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.4",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.4</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_123_fang",
      "name": "フェン",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd_addition[030]",
          "buffName": "せっかち",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd_add1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、最初の1時間製造効率+20%、その後まで1時間ごと更に+1%、最終的に+25%になる",
          "rawDescription": "製造所配置時、最初の1時間製造効率<@cc.vup>+20%</>、その後まで1時間ごと更に<@cc.vup>+1%</>、最終的に<@cc.vup>+25%</>になる",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd[001]",
          "buffName": "注文分配β",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_192_falco",
      "name": "プリュム",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "train_spd&profession[010]",
          "buffName": "先鋒エキスパートα",
          "roomType": "TRAINING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "PIONEER"
          ],
          "skillIcon": "bskill_train_vanguard1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "訓練室で協力者として配置時、先鋒の訓練速度+30%",
          "rawDescription": "訓練室で協力者として配置時、<@cc.kw>先鋒</>の訓練速度<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "trade_ord_spd&limit[000]",
          "buffName": "注文管理α",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+10%、注文上限+2",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+10%</>、注文上限<@cc.vup>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 10,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_281_popka",
      "name": "ポプカル",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit&cost[010]",
          "buffName": "トラブルメーカー",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit&cost3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+25%、保管上限-12、1時間ごとの体力消費量+0.25",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+25%</>、保管上限<@cc.vdown>-12</>、1時間ごとの体力消費量<@cc.vdown>+0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single&oneself[020]",
          "buffName": "調和",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single&one21",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.4（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量+0.2",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.4</>（同種の効果は高いほうのみ適用）。自身の1時間ごとの体力回復量<@cc.vup>+0.2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_283_midn",
      "name": "ミッドナイト",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&cost[000]",
          "buffName": "コミュニケーション",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%、1時間ごとの体力消費量-0.25",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>、1時間ごとの体力消費量<@cc.vup>-0.25</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[200]",
          "buffName": "源石工芸α",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_originium1",
          "products": [
            "DIAMOND"
          ],
          "description": "製造所配置時、源石製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>源石</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_208_melan",
      "name": "メランサ",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit[010]",
          "buffName": "供給管理",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit6",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+25%、注文上限+1",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+25%</>、注文上限<@cc.vup>+1</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 25,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "workshop_proc_probability[000]",
          "buffName": "集中α",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+40%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+40%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_121_lava",
      "name": "ラヴァ",
      "rarity": "TIER_3",
      "rarityValue": 3,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[001]",
          "buffName": "火力発電α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[210]",
          "buffName": "源石工芸β",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "phase": "PHASE_1",
            "level": 1
          },
          "targets": [
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_originium2",
          "products": [
            "DIAMOND"
          ],
          "description": "製造所配置時、源石製造の製造効率+35%",
          "rawDescription": "製造所配置時、<@cc.kw>源石</>製造の製造効率<@cc.vup>+35%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 35,
              "products": [
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_009_12fce",
      "name": "12F",
      "rarity": "TIER_2",
      "rarityValue": 2,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "meet_spd[020]",
          "buffName": "情報収集β",
          "roomType": "MEETING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_meet_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、手がかり捜索速度+20%",
          "rawDescription": "応接室配置時、手がかり捜索速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_formula_probability[300]",
          "buffName": "特訓記録",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_asc1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所でSoCを加工時、副産物の入手確率+70%",
          "rawDescription": "加工所で<@cc.kw>SoC</>を加工時、副産物の入手確率<@cc.vup>+70%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_501_durin",
      "name": "ドゥリン",
      "rarity": "TIER_2",
      "rarityValue": 2,
      "profession": "CASTER",
      "baseSkills": [
        {
          "buffId": "dorm_rec_all&oneself[000]",
          "buffName": "怠惰",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&one1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量-0.1。配置宿舎内、全員の1時間ごとの体力回復量+0.2（同種の効果は高いほうのみ適用）",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vdown>-0.1</>。配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.2</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_all&oneself[001]",
          "buffName": "過眠",
          "roomType": "DORMITORY",
          "slotIndex": 0,
          "slotRank": 1,
          "condition": {
            "level": 30
          },
          "targets": [],
          "skillIcon": "bskill_dorm_all&one2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "宿舎休養時、自身の1時間ごとの体力回復量-0.1。配置宿舎内、全員の1時間ごとの体力回復量+0.25（同種の効果は高いほうのみ適用）",
          "rawDescription": "宿舎休養時、自身の1時間ごとの体力回復量<@cc.vdown>-0.1</>。配置宿舎内、全員の1時間ごとの体力回復量<@cc.vup>+0.25</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_500_noirc",
      "name": "ノイルホーン",
      "rarity": "TIER_2",
      "rarityValue": 2,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "manu_prod_spd&limit[001]",
          "buffName": "倉庫整備β",
          "roomType": "MANUFACTURE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit3",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、保管上限+10、製造効率+10%",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+10</>、製造効率<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 10,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "trade_ord_spd&limit[000]",
          "buffName": "注文管理α",
          "roomType": "TRADING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+10%、注文上限+2",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+10%</>、注文上限<@cc.vup>+2</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 10,
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_502_nblade",
      "name": "ヤトウ",
      "rarity": "TIER_2",
      "rarityValue": 2,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd[001]",
          "buffName": "注文分配β",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+30%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 30,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "manu_prod_spd[000]",
          "buffName": "標準化α",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd1",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、製造効率+15%",
          "rawDescription": "製造所配置時、製造効率<@cc.vup>+15%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 15,
              "products": [
                "GOLD",
                "EXP",
                "DIAMOND"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_503_rang",
      "name": "レンジャー",
      "rarity": "TIER_2",
      "rarityValue": 2,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "hire_spd[000]",
          "buffName": "人事管理α",
          "roomType": "HIRE",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_hire_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "事務室配置時、事務連絡速度+20%",
          "rawDescription": "事務室配置時、事務連絡速度<@cc.vup>+20%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "workshop_proc_probability[021]",
          "buffName": "矍鑠",
          "roomType": "WORKSHOP",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [
            "F_BUILDING",
            "F_EVOLVE",
            "F_SKILL",
            "F_ASC"
          ],
          "skillIcon": "bskill_ws_p3",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "加工所で任意の素材を加工時、副産物の入手確率+60%",
          "rawDescription": "加工所で<@cc.kw>任意の素材</>を加工時、副産物の入手確率<@cc.vup>+60%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_286_cast3",
      "name": "Castle-3",
      "rarity": "TIER_1",
      "rarityValue": 1,
      "profession": "WARRIOR",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[000]",
          "buffName": "予備電源",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_formula_spd[010]",
          "buffName": "作戦記録指導",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [
            "F_EXP"
          ],
          "skillIcon": "bskill_man_exp2",
          "products": [
            "EXP"
          ],
          "description": "製造所配置時、作戦記録製造の製造効率+30%",
          "rawDescription": "製造所配置時、<@cc.kw>作戦記録</>製造の製造効率<@cc.vup>+30%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "manufactureSpeed",
              "value": 30,
              "products": [
                "EXP"
              ],
              "source": "auto"
            }
          ],
          "supported": true
        }
      ]
    },
    {
      "id": "char_4188_confes",
      "name": "CONFESS-47",
      "rarity": "TIER_1",
      "rarityValue": 1,
      "profession": "PIONEER",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[006]",
          "buffName": "チャージ中",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd_ext&faction[000]",
          "buffName": "メンテナンス中",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [],
          "skillIcon": "bskill_power_rec_spd_ext&faction",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、他のラテラーノオペレーターが発電所に配置されている場合、ドローンの回復速度+5%",
          "rawDescription": "発電所配置時、他の<$cc.g.laterano><@cc.kw>ラテラーノ</></>オペレーターが発電所に配置されている場合、ドローンの回復速度<@cc.vup>+5%</>",
          "conditionTags": [
            {
              "tag": "$cc.g.laterano",
              "kind": "kw",
              "label": "ラテラーノ"
            }
          ],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4093_frston",
      "name": "Friston-3",
      "rarity": "TIER_1",
      "rarityValue": 1,
      "profession": "TANK",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[000]",
          "buffName": "予備電源",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd_P[000]",
          "buffName": "「愉快な対談」",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd_P",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ケルシーが制御中枢に配置されている場合、ドローンの回復速度+5%",
          "rawDescription": "発電所配置時、<@cc.kw>ケルシー</>が制御中枢に配置されている場合、ドローンの回復速度<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_285_medic2",
      "name": "Lancet-2",
      "rarity": "TIER_1",
      "rarityValue": 1,
      "profession": "MEDIC",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[000]",
          "buffName": "予備電源",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "dorm_rec_single[000]",
          "buffName": "医療サービス",
          "roomType": "DORMITORY",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [],
          "skillIcon": "bskill_dorm_single2",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量+0.65（同種の効果は高いほうのみ適用）",
          "rawDescription": "配置宿舎内、自身以外のオペレーター1人の1時間ごとの体力回復量<@cc.vup>+0.65</>（同種の効果は高いほうのみ適用）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4136_phonor",
      "name": "PhonoR-0",
      "rarity": "TIER_1",
      "rarityValue": 1,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[004]",
          "buffName": "挽歌充電α",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd_P[001]",
          "buffName": "呪文共鳴",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd_P1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ロゴスが訓練室で協力者として配置されている場合、ドローンの回復速度+5%",
          "rawDescription": "発電所配置時、<@cc.kw>ロゴス</>が訓練室で協力者として配置されている場合、ドローンの回復速度<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_376_therex",
      "name": "THRM-EX",
      "rarity": "TIER_1",
      "rarityValue": 1,
      "profession": "SPECIAL",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[000]",
          "buffName": "予備電源",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_rec_spd&cost[000]",
          "buffName": "みなぎる情熱",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd&cost",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、1時間ごとの体力消費量-0.52",
          "rawDescription": "発電所配置時、1時間ごとの体力消費量<@cc.vup>-0.52</> ",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4091_ulika",
      "name": "U-Official",
      "rarity": "TIER_1",
      "rarityValue": 1,
      "profession": "SUPPORT",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&wt[000]",
          "buffName": "未熟な交渉人",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&wt1",
          "products": [
            "GOLD"
          ],
          "description": "貿易所配置時、受注効率+10%。配置貿易所の金属オーダーの純金の納品数が必ず2になる（違約オーダーと見なされない）",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+10%</>。配置貿易所の<@cc.kw>金属オーダー</>の<@cc.kw>純金</>の納品数が必ず<@cc.kw>2</>になる（違約オーダーと見なされない）",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [
            {
              "type": "tradingSpeed",
              "value": 10,
              "source": "auto"
            }
          ],
          "supported": true
        },
        {
          "buffId": "meet_spd_Owned[000]",
          "buffName": "目立つ調査人",
          "roomType": "MEETING",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [],
          "skillIcon": "bskill_meet_spdOwned1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "応接室配置時、ボード上入手済の手がかりを入手しやすい",
          "rawDescription": "応接室配置時、ボード上入手済の手がかりを入手しやすい",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4000_jnight",
      "name": "ジャスティスナイト",
      "rarity": "TIER_1",
      "rarityValue": 1,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "power_rec_spd[000]",
          "buffName": "予備電源",
          "roomType": "POWER",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_pow_spd1",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ドローンの回復速度+10%",
          "rawDescription": "発電所配置時、ドローンの回復速度<@cc.vup>+10%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "power_prod_spd_P[000]",
          "buffName": "“Di-di、作業開始ー！”",
          "roomType": "POWER",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [],
          "skillIcon": "bskill_pow_jnight",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "発電所配置時、ワイルドメインの配置された製造所の製造効率+5%",
          "rawDescription": "発電所配置時、<@cc.kw>ワイルドメイン</>の配置された製造所の製造効率<@cc.vup>+5%</>",
          "conditionTags": [],
          "intermediateRefs": [],
          "effects": [],
          "supported": false
        }
      ]
    },
    {
      "id": "char_4077_palico",
      "name": "テラ大陸調査団",
      "rarity": "TIER_1",
      "rarityValue": 1,
      "profession": "SNIPER",
      "baseSkills": [
        {
          "buffId": "trade_ord_spd&limit&bd[000]",
          "buffName": "愛らしきアイルー",
          "roomType": "TRADING",
          "slotIndex": 0,
          "slotRank": 0,
          "condition": {
            "level": 1
          },
          "targets": [],
          "skillIcon": "bskill_tra_spd&limit_felyne",
          "products": [
            "GOLD",
            "EXP"
          ],
          "description": "貿易所配置時、受注効率+5%、注文上限+2、マタタビ1個につき、受注効率+3%",
          "rawDescription": "貿易所配置時、受注効率<@cc.vup>+5%</>、注文上限<@cc.vup>+2</>、<$cc.bd_felyne><@cc.rem>マタタビ</></>1個につき、受注効率<@cc.vup>+3%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_felyne",
              "kind": "rem",
              "label": "マタタビ"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_felyne",
              "name": "マタタビ"
            }
          ],
          "effects": [],
          "supported": false
        },
        {
          "buffId": "manu_prod_spd&limit&bd[000]",
          "buffName": "頼もしきオトモたち",
          "roomType": "MANUFACTURE",
          "slotIndex": 1,
          "slotRank": 0,
          "condition": {
            "level": 30
          },
          "targets": [
            "F_GOLD",
            "F_EXP",
            "F_DIAMOND"
          ],
          "skillIcon": "bskill_man_spd&limit_felyne",
          "products": [
            "GOLD",
            "EXP",
            "DIAMOND"
          ],
          "description": "製造所配置時、保管上限+8、製造効率+5%、マタタビ1個につき、製造効率+1%",
          "rawDescription": "製造所配置時、保管上限<@cc.vup>+8</>、製造効率<@cc.vup>+5%</>、<$cc.bd_felyne><@cc.rem>マタタビ</></>1個につき、製造効率<@cc.vup>+1%</>",
          "conditionTags": [
            {
              "tag": "$cc.bd_felyne",
              "kind": "rem",
              "label": "マタタビ"
            }
          ],
          "intermediateRefs": [
            {
              "tag": "$cc.bd_felyne",
              "name": "マタタビ"
            }
          ],
          "effects": [],
          "supported": false
        }
      ]
    }
  ]
};
