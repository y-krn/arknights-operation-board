const squads = [
  {
    id: 1,
    stage: "HS-8",
    title: "2ルート封鎖の置くだけ周回",
    author: "Dr. Kisaragi",
    saved: 412,
    clears: 96,
    created: "2026-05-04",
    tags: ["周回", "放置", "高速"],
    operators: ["マウンテン", "ティフォン", "サリア", "エイヤフィヤトラ", "フィリオプシス"],
    note: "左をマウンテン、中央をサリアで止めてティフォンで後方処理。スキル起動は初回のみ。",
    featured: true,
  },
  {
    id: 2,
    stage: "HS-8",
    title: "星4中心の安定クリア",
    author: "低レア記録班",
    saved: 286,
    clears: 88,
    created: "2026-05-03",
    tags: ["低レア", "初心者向け"],
    operators: ["クオーラ", "グム", "クルース", "メテオ", "ススーロ", "パフューマー", "ヴィグナ"],
    note: "重装2枚で抱えて狙撃で削る形。火力不足ならサポートに術師を借りる。",
  },
  {
    id: 3,
    stage: "HS-9",
    title: "勲章加工対応 9人編成",
    author: "Tactical Notes",
    saved: 365,
    clears: 91,
    created: "2026-05-04",
    tags: ["勲章", "安定", "9人"],
    operators: ["ムリナール", "スズラン", "サリア", "ナイチンゲール", "テキサス"],
    note: "加工条件のため撃破タイミングを調整。ムリナールS3はボス合流後。",
  },
  {
    id: 4,
    stage: "HS-EX-8",
    title: "強襲 少人数リレー",
    author: "EX Lab",
    saved: 198,
    clears: 74,
    created: "2026-05-02",
    tags: ["少人数", "強襲"],
    operators: ["血掟テキサス", "キリンRヤトウ", "ムリナール", "濁心スカジ", "サリア"],
    note: "差し込み2枚で危険敵を処理。再配置タイミングがややシビア。",
  },
  {
    id: 5,
    stage: "S-5",
    title: "耐久寄せの初回突破",
    author: "Rhodes Archive",
    saved: 144,
    clears: 68,
    created: "2026-05-01",
    tags: ["高難度", "初回"],
    operators: ["ホシグマ", "サリア", "シャイニング", "エイヤフィヤトラ", "イフリータ", "スズラン"],
    note: "医療厚め。火力より事故防止を優先した初回クリア用。",
  },
];

const allOperators = [...new Set(squads.flatMap((squad) => squad.operators))].sort((a, b) =>
  a.localeCompare(b, "ja")
);

let activeStage = "HS-8";
let activeTag = "all";
let owned = new Set(allOperators);

const squadList = document.querySelector("#squadList");
const stageTitle = document.querySelector("#stageTitle");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const ownedOnly = document.querySelector("#ownedOnly");
const operatorRanking = document.querySelector("#operatorRanking");
const ownedGrid = document.querySelector("#ownedGrid");
const clearRate = document.querySelector("#clearRate");
const avgOps = document.querySelector("#avgOps");
const operatorCount = document.querySelector("#operatorCount");
const composer = document.querySelector("#composer");

function formatDate(dateText) {
  return new Intl.DateTimeFormat("ja-JP", { month: "numeric", day: "numeric" }).format(new Date(dateText));
}

function filteredSquads() {
  const query = searchInput.value.trim().toLowerCase();
  return squads
    .filter((squad) => squad.stage === activeStage)
    .filter((squad) => activeTag === "all" || squad.tags.includes(activeTag))
    .filter((squad) => {
      if (!query) return true;
      const haystack = [squad.title, squad.author, squad.note, ...squad.tags, ...squad.operators].join(" ").toLowerCase();
      return haystack.includes(query);
    })
    .filter((squad) => !ownedOnly.checked || squad.operators.every((operator) => owned.has(operator)))
    .sort((a, b) => {
      if (sortSelect.value === "clear") return b.clears - a.clears;
      if (sortSelect.value === "new") return new Date(b.created) - new Date(a.created);
      return b.saved - a.saved;
    });
}

function renderSquads() {
  const visibleSquads = filteredSquads();
  stageTitle.textContent = `${activeStage} 攻略編成`;

  if (!visibleSquads.length) {
    squadList.innerHTML = `<div class="empty-state">条件に合う編成がありません。タグや手持ちフィルターを調整してください。</div>`;
    renderInsights([]);
    return;
  }

  squadList.innerHTML = visibleSquads
    .map(
      (squad) => `
        <article class="squad-card ${squad.featured ? "featured" : ""}">
          <div class="squad-head">
            <div>
              <h3 class="squad-title">${squad.title}</h3>
              <div class="squad-meta">
                <span>${squad.author}</span>
                <span>${formatDate(squad.created)}</span>
                <span>保存 ${squad.saved}</span>
                <span>成功報告 ${squad.clears}%</span>
              </div>
            </div>
            <button class="ghost-action" type="button">共有URL</button>
          </div>
          <div class="operator-row">
            ${squad.operators
              .map(
                (operator) =>
                  `<span class="operator-chip ${owned.has(operator) ? "" : "missing"}">${operator}</span>`
              )
              .join("")}
          </div>
          <p>${squad.note}</p>
          <div class="squad-foot">
            <div class="tag-row">${squad.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
            <button class="ghost-action" type="button">成功報告</button>
          </div>
        </article>
      `
    )
    .join("");

  renderInsights(visibleSquads);
}

function renderInsights(visibleSquads) {
  const base = visibleSquads.length ? visibleSquads : squads.filter((squad) => squad.stage === activeStage);
  const counts = new Map();
  base.forEach((squad) => squad.operators.forEach((operator) => counts.set(operator, (counts.get(operator) || 0) + 1)));
  const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  const max = Math.max(...ranked.map(([, count]) => count), 1);

  operatorRanking.innerHTML = ranked
    .map(
      ([operator, count]) => `
        <div class="operator-line">
          <strong>${operator}</strong>
          <div class="meter"><span style="width:${(count / max) * 100}%"></span></div>
          <span>${Math.round((count / base.length) * 100)}%</span>
        </div>
      `
    )
    .join("");

  const avgClear = base.reduce((sum, squad) => sum + squad.clears, 0) / Math.max(base.length, 1);
  const avgOperatorCount = base.reduce((sum, squad) => sum + squad.operators.length, 0) / Math.max(base.length, 1);
  clearRate.textContent = `${Math.round(avgClear)}%`;
  avgOps.textContent = avgOperatorCount.toFixed(1);
  operatorCount.textContent = `${counts.size}名`;
}

function renderOwnedGrid() {
  ownedGrid.innerHTML = allOperators
    .map(
      (operator) => `
        <button class="owned-toggle ${owned.has(operator) ? "" : "off"}" data-operator="${operator}" type="button">
          ${operator}
        </button>
      `
    )
    .join("");
}

document.querySelectorAll(".stage-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeStage = button.dataset.stage;
    document.querySelectorAll(".stage-button").forEach((item) => item.classList.toggle("active", item === button));
    renderSquads();
  });
});

document.querySelectorAll(".tag-filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeTag = button.dataset.tag;
    document.querySelectorAll(".tag-filter").forEach((item) => item.classList.toggle("active", item === button));
    renderSquads();
  });
});

[searchInput, sortSelect, ownedOnly].forEach((element) => element.addEventListener("input", renderSquads));

ownedGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".owned-toggle");
  if (!button) return;
  const operator = button.dataset.operator;
  if (owned.has(operator)) {
    owned.delete(operator);
  } else {
    owned.add(operator);
  }
  renderOwnedGrid();
  renderSquads();
});

document.querySelector("#openComposer").addEventListener("click", () => composer.showModal());

document.querySelector("#composerForm").addEventListener("submit", (event) => {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault();
  const operators = document
    .querySelector("#operatorsField")
    .value.split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const tags = document
    .querySelector("#tagsField")
    .value.split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  squads.unshift({
    id: Date.now(),
    stage: activeStage,
    title: document.querySelector("#titleField").value.trim(),
    author: "You",
    saved: 0,
    clears: 0,
    created: new Date().toISOString(),
    tags: tags.length ? tags : ["投稿"],
    operators,
    note: document.querySelector("#noteField").value.trim() || "攻略メモは未入力です。",
  });

  operators.forEach((operator) => {
    if (!allOperators.includes(operator)) allOperators.push(operator);
    owned.add(operator);
  });
  allOperators.sort((a, b) => a.localeCompare(b, "ja"));
  renderOwnedGrid();
  renderSquads();
  event.target.reset();
  composer.close();
});

renderOwnedGrid();
renderSquads();
