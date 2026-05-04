const STORAGE_KEYS = {
  squads: "operation-board:squads:v2",
  owned: "operation-board:owned:v2",
  saved: "operation-board:saved:v2",
  clientToken: "operation-board:client-token:v1",
  legacySquads: "operation-board:squads:v1",
  legacyOwned: "operation-board:owned:v1",
  legacySaved: "operation-board:saved:v1",
};

const activeEvent = {
  id: "cloudless-red-smoke",
  title: "曇りなき紅煙",
  description: "周回、勲章加工、少人数、低レア。投稿編成をステージ単位で探せます。",
  startsAt: "2026-05-01",
  endsAt: "2026-05-15",
  stages: [
    { code: "HS-8", label: "周回 / 素材" },
    { code: "HS-9", label: "勲章加工" },
    { code: "HS-EX-8", label: "強襲" },
    { code: "S-5", label: "高難度" },
  ],
};

const seedSquads = [
  {
    id: 1,
    eventId: activeEvent.id,
    stage: "HS-8",
    title: "2ルート封鎖の置くだけ周回",
    author: "Dr. Kisaragi",
    saved: 412,
    successReports: 96,
    attempts: 104,
    created: "2026-05-04",
    tags: ["周回", "放置", "高速"],
    operators: ["マウンテン", "ティフォン", "サリア", "エイヤフィヤトラ", "フィリオプシス"],
    note: "左をマウンテン、中央をサリアで止めてティフォンで後方処理。スキル起動は初回のみ。",
    link: "",
    featured: true,
  },
  {
    id: 2,
    eventId: activeEvent.id,
    stage: "HS-8",
    title: "星4中心の安定クリア",
    author: "低レア記録班",
    saved: 286,
    successReports: 88,
    attempts: 100,
    created: "2026-05-03",
    tags: ["低レア", "初心者向け"],
    operators: ["クオーラ", "グム", "クルース", "メテオ", "ススーロ", "パフューマー", "ヴィグナ"],
    note: "重装2枚で抱えて狙撃で削る形。火力不足ならサポートに術師を借りる。",
    link: "",
  },
  {
    id: 3,
    eventId: activeEvent.id,
    stage: "HS-9",
    title: "勲章加工対応 9人編成",
    author: "Tactical Notes",
    saved: 365,
    successReports: 91,
    attempts: 100,
    created: "2026-05-04",
    tags: ["勲章", "安定", "9人"],
    operators: ["ムリナール", "スズラン", "サリア", "ナイチンゲール", "テキサス"],
    note: "加工条件のため撃破タイミングを調整。ムリナールS3はボス合流後。",
    link: "",
  },
  {
    id: 4,
    eventId: activeEvent.id,
    stage: "HS-EX-8",
    title: "強襲 少人数リレー",
    author: "EX Lab",
    saved: 198,
    successReports: 74,
    attempts: 100,
    created: "2026-05-02",
    tags: ["少人数", "強襲"],
    operators: ["血掟テキサス", "キリンRヤトウ", "ムリナール", "濁心スカジ", "サリア"],
    note: "差し込み2枚で危険敵を処理。再配置タイミングがややシビア。",
    link: "",
  },
  {
    id: 5,
    eventId: activeEvent.id,
    stage: "S-5",
    title: "耐久寄せの初回突破",
    author: "Rhodes Archive",
    saved: 144,
    successReports: 68,
    attempts: 100,
    created: "2026-05-01",
    tags: ["高難度", "初回"],
    operators: ["ホシグマ", "サリア", "シャイニング", "エイヤフィヤトラ", "イフリータ", "スズラン"],
    note: "医療厚め。火力より事故防止を優先した初回クリア用。",
    link: "",
  },
];

function createLocalStorageAdapter() {
  return {
    mode: "local",
    async loadSquads() {
      return loadJson(STORAGE_KEYS.squads, STORAGE_KEYS.legacySquads, seedSquads).map(normalizeSquad).filter(Boolean);
    },
    async saveSquads(squads) {
      localStorage.setItem(STORAGE_KEYS.squads, JSON.stringify(squads));
    },
    async loadOwned(defaultOperators) {
      return new Set(loadJson(STORAGE_KEYS.owned, STORAGE_KEYS.legacyOwned, defaultOperators));
    },
    async saveOwned(owned) {
      localStorage.setItem(STORAGE_KEYS.owned, JSON.stringify([...owned]));
    },
    async loadSavedSquads() {
      return new Set(loadJson(STORAGE_KEYS.saved, STORAGE_KEYS.legacySaved, []).map(String));
    },
    async saveSavedSquads(savedSquads) {
      localStorage.setItem(STORAGE_KEYS.saved, JSON.stringify([...savedSquads]));
    },
    async createSquad(squad) {
      return normalizeSquad(squad);
    },
    async setSaved(squad, shouldSave, savedSquads) {
      if (shouldSave) {
        savedSquads.add(String(squad.id));
        squad.saved += 1;
      } else {
        savedSquads.delete(String(squad.id));
        squad.saved = Math.max(0, squad.saved - 1);
      }
      await this.saveSavedSquads(savedSquads);
      await this.saveSquads(squads);
      return squad;
    },
    async reportSuccess(squad) {
      squad.successReports += 1;
      squad.attempts += 1;
      await this.saveSquads(squads);
      return squad;
    },
  };
}

function createSupabaseAdapter({ url, anonKey }) {
  const endpoint = url.replace(/\/$/, "");
  const clientToken = getClientToken();

  async function request(path, options = {}) {
    const response = await fetch(`${endpoint}/rest/v1/${path}`, {
      ...options,
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || `Supabase request failed: ${response.status}`);
    }
    if (response.status === 204) return null;
    return response.json();
  }

  async function rpc(name, body) {
    const rows = await request(`rpc/${name}`, {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(body),
    });
    return Array.isArray(rows) ? rows[0] : rows;
  }

  return {
    mode: "supabase",
    async loadSquads() {
      const rows = await request(
        `squads?select=*,squad_operators(name,slot_order),squad_tags(tag)&event_id=eq.${encodeURIComponent(
          activeEvent.id
        )}&order=created_at.desc`
      );
      return rows.map(mapSupabaseSquad).map(normalizeSquad).filter(Boolean);
    },
    async saveSquads() {},
    async loadOwned(defaultOperators) {
      return new Set(loadJson(STORAGE_KEYS.owned, STORAGE_KEYS.legacyOwned, defaultOperators));
    },
    async saveOwned(owned) {
      localStorage.setItem(STORAGE_KEYS.owned, JSON.stringify([...owned]));
    },
    async loadSavedSquads() {
      return new Set(loadJson(STORAGE_KEYS.saved, STORAGE_KEYS.legacySaved, []).map(String));
    },
    async saveSavedSquads(savedSquads) {
      localStorage.setItem(STORAGE_KEYS.saved, JSON.stringify([...savedSquads]));
    },
    async createSquad(squad) {
      const [created] = await request("squads", {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify({
          event_id: squad.eventId,
          stage_code: squad.stage,
          title: squad.title,
          author: squad.author,
          note: squad.note,
          link: squad.link,
          saved_count: squad.saved,
          success_reports: squad.successReports,
          attempts: squad.attempts,
          featured: squad.featured,
        }),
      });
      await request("squad_operators", {
        method: "POST",
        body: JSON.stringify(
          squad.operators.map((name, index) => ({
            squad_id: created.id,
            name,
            slot_order: index,
          }))
        ),
      });
      await request("squad_tags", {
        method: "POST",
        body: JSON.stringify(squad.tags.map((tag) => ({ squad_id: created.id, tag }))),
      });
      return normalizeSquad({ ...squad, id: created.id, created: created.created_at });
    },
    async setSaved(squad, shouldSave, savedSquads) {
      const result = await rpc("set_squad_saved", {
        p_squad_id: squad.id,
        p_client_token: clientToken,
        p_saved: shouldSave,
      });
      if (shouldSave) {
        savedSquads.add(String(squad.id));
      } else {
        savedSquads.delete(String(squad.id));
      }
      await this.saveSavedSquads(savedSquads);
      squad.saved = Number(result?.saved_count ?? squad.saved);
      return squad;
    },
    async reportSuccess(squad) {
      const result = await rpc("report_squad_success", {
        p_squad_id: squad.id,
        p_client_token: clientToken,
      });
      squad.successReports = Number(result?.success_reports ?? squad.successReports);
      squad.attempts = Number(result?.attempts ?? squad.attempts);
      return squad;
    },
  };
}

function loadJson(primaryKey, legacyKey, fallback) {
  for (const key of [primaryKey, legacyKey]) {
    try {
      const stored = JSON.parse(localStorage.getItem(key));
      if (Array.isArray(stored)) return stored;
    } catch {
      localStorage.removeItem(key);
    }
  }
  return structuredClone(fallback);
}

function normalizeSquad(squad) {
  if (!squad?.id || !squad?.stage || !squad?.title || !Array.isArray(squad?.operators)) return null;
  const successReports = Number(squad.successReports ?? squad.clears ?? 0);
  const attempts = Number(squad.attempts ?? 100);
  return {
    id: squad.id,
    eventId: String(squad.eventId || activeEvent.id),
    stage: String(squad.stage),
    title: String(squad.title),
    author: String(squad.author || "Anonymous"),
    saved: Number(squad.saved || 0),
    successReports,
    attempts: Math.max(attempts, successReports, 1),
    created: String(squad.created || new Date().toISOString()),
    tags: Array.isArray(squad.tags) ? squad.tags.map(String).filter(Boolean) : ["投稿"],
    operators: squad.operators.map(String).filter(Boolean),
    note: String(squad.note || "攻略メモは未入力です。"),
    link: typeof squad.link === "string" ? squad.link : "",
    featured: Boolean(squad.featured),
  };
}

function mapSupabaseSquad(row) {
  return {
    id: row.id,
    eventId: row.event_id,
    stage: row.stage_code,
    title: row.title,
    author: row.author,
    saved: row.saved_count,
    successReports: row.success_reports,
    attempts: row.attempts,
    created: row.created_at,
    tags: (row.squad_tags || []).map((item) => item.tag),
    operators: (row.squad_operators || [])
      .sort((a, b) => Number(a.slot_order || 0) - Number(b.slot_order || 0))
      .map((item) => item.name),
    note: row.note,
    link: row.link,
    featured: row.featured,
  };
}

function getClientToken() {
  const existing = localStorage.getItem(STORAGE_KEYS.clientToken);
  if (existing) return existing;
  const token = crypto.randomUUID();
  localStorage.setItem(STORAGE_KEYS.clientToken, token);
  return token;
}

function getStore() {
  const supabase = window.OPERATION_BOARD_CONFIG?.supabase;
  if (supabase?.url && supabase?.anonKey) return createSupabaseAdapter(supabase);
  return createLocalStorageAdapter();
}

const store = getStore();
let squads = [];
let allOperators = [];
let activeStage = activeEvent.stages[0].code;
let activeTag = "all";
let owned = new Set();
let savedSquads = new Set();
let highlightedSquadId = new URLSearchParams(window.location.search).get("squad") || null;

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
const postCount = document.querySelector("#postCount");
const toast = document.querySelector("#toast");
const eventTitle = document.querySelector("#eventTitle");
const eventDescription = document.querySelector("#eventDescription");
const eventDaysLeft = document.querySelector("#eventDaysLeft");
const stageList = document.querySelector("#stageList");

function getAllOperators(source) {
  return [...new Set(source.flatMap((squad) => squad.operators))].sort((a, b) => a.localeCompare(b, "ja"));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isSafeUrl(value) {
  if (!value) return true;
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

function formatDate(dateText) {
  return new Intl.DateTimeFormat("ja-JP", { month: "numeric", day: "numeric" }).format(new Date(dateText));
}

function daysLeft(dateText) {
  const today = new Date();
  const endDate = new Date(`${dateText}T23:59:59`);
  return Math.max(Math.ceil((endDate - today) / 86400000), 0);
}

function clearPercent(squad) {
  return Math.round((squad.successReports / Math.max(squad.attempts, 1)) * 100);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function filteredSquads() {
  const query = searchInput.value.trim().toLowerCase();
  return squads
    .filter((squad) => squad.eventId === activeEvent.id)
    .filter((squad) => squad.stage === activeStage)
    .filter((squad) => activeTag === "all" || squad.tags.includes(activeTag))
    .filter((squad) => {
      if (!query) return true;
      const haystack = [squad.title, squad.author, squad.note, ...squad.tags, ...squad.operators].join(" ").toLowerCase();
      return haystack.includes(query);
    })
    .filter((squad) => !ownedOnly.checked || squad.operators.every((operator) => owned.has(operator)))
    .sort((a, b) => {
      if (sortSelect.value === "clear") return clearPercent(b) - clearPercent(a);
      if (sortSelect.value === "new") return new Date(b.created) - new Date(a.created);
      return b.saved - a.saved;
    });
}

function renderEvent() {
  eventTitle.textContent = activeEvent.title;
  eventDescription.textContent = activeEvent.description;
  eventDaysLeft.textContent = `残り ${daysLeft(activeEvent.endsAt)}日`;
  postCount.textContent = `投稿 ${squads.filter((squad) => squad.eventId === activeEvent.id).length}`;
}

function renderStages() {
  const label = stageList.querySelector(".section-label").outerHTML;
  stageList.innerHTML =
    label +
    activeEvent.stages
      .map(
        (stage) => `
          <button class="stage-button ${stage.code === activeStage ? "active" : ""}" data-stage="${stage.code}" type="button">
            <span>${escapeHtml(stage.code)}</span>
            <small>${escapeHtml(stage.label)}</small>
          </button>
        `
      )
      .join("");
}

function renderSquads() {
  const visibleSquads = filteredSquads();
  stageTitle.textContent = `${activeStage} 攻略編成`;
  renderEvent();

  if (!visibleSquads.length) {
    squadList.innerHTML = `<div class="empty-state">条件に合う編成がありません。タグや手持ちフィルターを調整してください。</div>`;
    renderInsights([]);
    return;
  }

  squadList.innerHTML = visibleSquads
    .map(
      (squad) => `
        <article class="squad-card ${squad.featured ? "featured" : ""} ${
        highlightedSquadId === String(squad.id) ? "linked" : ""
      }" data-squad-id="${squad.id}">
          <div class="squad-head">
            <div>
              <h3 class="squad-title">${escapeHtml(squad.title)}</h3>
              <div class="squad-meta">
                <span>${escapeHtml(squad.author)}</span>
                <span>${formatDate(squad.created)}</span>
                <span>保存 ${squad.saved}</span>
                <span>成功報告 ${clearPercent(squad)}%</span>
              </div>
            </div>
            <button class="ghost-action" data-action="share" data-id="${squad.id}" type="button">共有URL</button>
          </div>
          <div class="operator-row">
            ${squad.operators
              .map(
                (operator) =>
                  `<span class="operator-chip ${owned.has(operator) ? "" : "missing"}">${escapeHtml(operator)}</span>`
              )
              .join("")}
          </div>
          <p>${escapeHtml(squad.note)}</p>
          ${
            squad.link && isSafeUrl(squad.link)
              ? `<a class="resource-link" href="${escapeHtml(squad.link)}" target="_blank" rel="noreferrer">攻略リンクを開く</a>`
              : ""
          }
          <div class="squad-foot">
            <div class="tag-row">${squad.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
            <div class="action-cluster">
              <button class="ghost-action" data-action="save" data-id="${squad.id}" type="button">
                ${savedSquads.has(String(squad.id)) ? "保存済み" : "保存"}
              </button>
              <button class="ghost-action" data-action="clear" data-id="${squad.id}" type="button">成功報告</button>
            </div>
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
          <strong>${escapeHtml(operator)}</strong>
          <div class="meter"><span style="width:${(count / max) * 100}%"></span></div>
          <span>${Math.round((count / Math.max(base.length, 1)) * 100)}%</span>
        </div>
      `
    )
    .join("");

  const avgClear = base.reduce((sum, squad) => sum + clearPercent(squad), 0) / Math.max(base.length, 1);
  const avgOperatorCount = base.reduce((sum, squad) => sum + squad.operators.length, 0) / Math.max(base.length, 1);
  clearRate.textContent = `${Math.round(avgClear)}%`;
  avgOps.textContent = avgOperatorCount.toFixed(1);
  operatorCount.textContent = `${counts.size}名`;
}

function renderOwnedGrid() {
  ownedGrid.innerHTML = allOperators
    .map(
      (operator) => `
        <button class="owned-toggle ${owned.has(operator) ? "" : "off"}" data-operator="${escapeHtml(operator)}" type="button">
          ${escapeHtml(operator)}
        </button>
      `
    )
    .join("");
}

function renderAll() {
  renderStages();
  renderOwnedGrid();
  renderSquads();
}

stageList.addEventListener("click", (event) => {
  const button = event.target.closest(".stage-button");
  if (!button) return;
  activeStage = button.dataset.stage;
  highlightedSquadId = null;
  window.history.replaceState({}, "", window.location.pathname);
  renderAll();
});

document.querySelectorAll(".tag-filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeTag = button.dataset.tag;
    document.querySelectorAll(".tag-filter").forEach((item) => item.classList.toggle("active", item === button));
    renderSquads();
  });
});

[searchInput, sortSelect, ownedOnly].forEach((element) => element.addEventListener("input", renderSquads));

ownedGrid.addEventListener("click", async (event) => {
  const button = event.target.closest(".owned-toggle");
  if (!button) return;
  const operator = button.dataset.operator;
  if (owned.has(operator)) {
    owned.delete(operator);
  } else {
    owned.add(operator);
  }
  await store.saveOwned(owned);
  renderOwnedGrid();
  renderSquads();
});

document.querySelector("#openComposer").addEventListener("click", () => composer.showModal());

squadList.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const squad = squads.find((item) => String(item.id) === button.dataset.id);
  if (!squad) return;

  if (button.dataset.action === "save") {
    const shouldSave = !savedSquads.has(String(squad.id));
    try {
      await store.setSaved(squad, shouldSave, savedSquads);
      showToast(shouldSave ? "編成を保存しました" : "保存を解除しました");
    } catch {
      showToast("保存の反映に失敗しました");
      return;
    }
  }

  if (button.dataset.action === "clear") {
    try {
      await store.reportSuccess(squad);
      showToast("成功報告を反映しました");
    } catch {
      showToast("成功報告に失敗しました");
      return;
    }
  }

  if (button.dataset.action === "share") {
    highlightedSquadId = String(squad.id);
    const url = new URL(window.location.href);
    url.searchParams.set("squad", squad.id);
    window.history.replaceState({}, "", url);
    showToast("共有URLをアドレスバーに反映しました");
  }

  renderSquads();
});

document.querySelector("#composerForm").addEventListener("submit", async (event) => {
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
  const link = document.querySelector("#linkField").value.trim();

  if (!isSafeUrl(link)) {
    showToast("攻略リンクは http または https のURLを入力してください");
    return;
  }

  const draft = {
    id: Date.now(),
    eventId: activeEvent.id,
    stage: activeStage,
    title: document.querySelector("#titleField").value.trim(),
    author: document.querySelector("#authorField").value.trim(),
    saved: 0,
    successReports: 0,
    attempts: 1,
    created: new Date().toISOString(),
    tags: tags.length ? tags : ["投稿"],
    operators,
    note: document.querySelector("#noteField").value.trim() || "攻略メモは未入力です。",
    link,
    featured: false,
  };

  let createdSquad;
  try {
    createdSquad = await store.createSquad(draft);
  } catch {
    showToast("投稿に失敗しました");
    return;
  }

  squads.unshift(createdSquad);
  operators.forEach((operator) => {
    if (!allOperators.includes(operator)) allOperators.push(operator);
    owned.add(operator);
  });
  allOperators.sort((a, b) => a.localeCompare(b, "ja"));
  await store.saveSquads(squads);
  await store.saveOwned(owned);
  renderAll();
  event.target.reset();
  composer.close();
  showToast("編成を投稿しました");
});

async function init() {
  squads = await store.loadSquads();
  allOperators = getAllOperators(squads);
  owned = await store.loadOwned(allOperators);
  savedSquads = await store.loadSavedSquads();
  const linkedSquad = squads.find((squad) => String(squad.id) === highlightedSquadId);
  if (linkedSquad) activeStage = linkedSquad.stage;
  renderAll();
}

init();
