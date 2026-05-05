const selectedIds = new Set();

let rows = [];
let events = [];
let stages = [];
let activeEventId = "act46side";

const adminList = document.querySelector("#adminList");
const adminCount = document.querySelector("#adminCount");
const selectedCount = document.querySelector("#selectedCount");
const eventFilter = document.querySelector("#eventFilter");
const stageFilter = document.querySelector("#stageFilter");
const adminSearch = document.querySelector("#adminSearch");
const reloadButton = document.querySelector("#reloadButton");
const deleteSql = document.querySelector("#deleteSql");
const copySql = document.querySelector("#copySql");
const toast = document.querySelector("#toast");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sqlString(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function config() {
  return window.OPERATION_BOARD_CONFIG?.supabase || {};
}

function usingMock() {
  return new URLSearchParams(window.location.search).get("mock") === "1";
}

async function loadRows() {
  if (usingMock()) {
    return [
      {
        id: "00000000-0000-4000-8000-000000000001",
        title: "管理画面テスト投稿",
        author: "Admin Test",
        stage_code: "OS-1",
        note: "削除SQL生成の表示確認用。",
        saved_count: 2,
        success_reports: 1,
        attempts: 2,
        created_at: new Date().toISOString(),
        squad_operators: [{ name: "サリア" }, { name: "スズラン" }],
        squad_tags: [{ tag: "疎通確認" }],
      },
    ];
  }

  const { url, anonKey } = config();
  if (!url || !anonKey) throw new Error("config.js に Supabase URL と anon key がありません。");

  return request(
    `squads?select=*,squad_operators(name,slot_order,skill_label,module_label),squad_tags(tag)&event_id=eq.${encodeURIComponent(
      activeEventId
    )}&order=created_at.desc`
  );
}

async function request(path) {
  const { url, anonKey } = config();
  if (!url || !anonKey) throw new Error("config.js に Supabase URL と anon key がありません。");
  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/${path}`, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

async function loadEvents() {
  if (usingMock()) {
    return [
      { id: "act46side", title: "聖山降臨1101", starts_at: "2026-04-14" },
    ];
  }
  return request("events?select=id,title,starts_at&order=starts_at.desc");
}

async function loadStages(eventId) {
  if (usingMock()) {
    return [
      { code: "OS-1", label: "悲嘆の声", sort_order: 2001 },
      { code: "OS-S-2", label: "雪だるま作り", sort_order: 4002 },
    ];
  }
  return request(`stages?select=code,label,sort_order&event_id=eq.${encodeURIComponent(eventId)}&order=sort_order.asc`);
}

function filteredRows() {
  const stage = stageFilter.value;
  const query = adminSearch.value.trim().toLowerCase();
  return rows
    .filter((row) => stage === "all" || row.stage_code === stage)
    .filter((row) => {
      if (!query) return true;
      const operators = (row.squad_operators || []).map((item) => item.name);
      const tags = (row.squad_tags || []).map((item) => item.tag);
      return [row.title, row.author, row.note, row.stage_code, ...operators, ...tags].join(" ").toLowerCase().includes(query);
    });
}

function renderRows() {
  const visibleRows = filteredRows();
  adminCount.textContent = `${visibleRows.length}件`;
  selectedCount.textContent = `${selectedIds.size}件`;

  if (!visibleRows.length) {
    adminList.innerHTML = `<div class="admin-empty">条件に合う投稿がありません。</div>`;
    renderSql();
    return;
  }

  adminList.innerHTML = visibleRows
    .map((row) => {
      const operators = (row.squad_operators || [])
        .sort((a, b) => Number(a.slot_order || 0) - Number(b.slot_order || 0))
        .map((item) => [item.name, item.skill_label, item.module_label ? `Mod ${item.module_label}` : ""].filter(Boolean).join(" / "));
      const tags = (row.squad_tags || []).map((item) => item.tag);
      const clearRate = Math.round((Number(row.success_reports || 0) / Math.max(Number(row.attempts || 1), 1)) * 100);

      return `
        <article class="admin-row">
          <input type="checkbox" data-id="${escapeHtml(row.id)}" ${selectedIds.has(row.id) ? "checked" : ""} aria-label="${escapeHtml(
        row.title
      )} を選択" />
          <div>
            <h2>${escapeHtml(row.title)}</h2>
            <div class="admin-row-meta">
              <span>${escapeHtml(row.stage_code)}</span>
              <span>${escapeHtml(row.author)}</span>
              <span>保存 ${Number(row.saved_count || 0)}</span>
              <span>成功 ${clearRate}%</span>
              <span>${escapeHtml(new Date(row.created_at).toLocaleString("ja-JP"))}</span>
            </div>
            <p>${escapeHtml(row.note || "")}</p>
            <div class="admin-chip-row">
              ${operators.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}
              ${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  renderSql();
}

function renderEventFilter() {
  eventFilter.innerHTML = events
    .map(
      (event) =>
        `<option value="${escapeHtml(event.id)}" ${event.id === activeEventId ? "selected" : ""}>${escapeHtml(event.title)}</option>`
    )
    .join("");
}

function renderStageFilter() {
  const current = stageFilter.value;
  stageFilter.innerHTML =
    `<option value="all">すべて</option>` +
    stages
      .map((stage) => `<option value="${escapeHtml(stage.code)}">${escapeHtml(`${stage.code} ${stage.label || ""}`.trim())}</option>`)
      .join("");
  stageFilter.value = [...stageFilter.options].some((option) => option.value === current) ? current : "all";
}

function renderSql() {
  selectedCount.textContent = `${selectedIds.size}件`;
  const ids = [...selectedIds];
  if (!ids.length) {
    deleteSql.value = "-- 削除する投稿を選択してください。";
    return;
  }

  deleteSql.value = `-- Operation Board admin delete
-- 選択した ${ids.length} 件の投稿を削除します。
-- squad_operators, squad_tags, reactions は on delete cascade で削除されます。

delete from public.squads
where id in (
  ${ids.map(sqlString).join(",\n  ")}
);

notify pgrst, 'reload schema';`;
}

async function refresh() {
  adminList.innerHTML = `<div class="admin-empty">読み込み中...</div>`;
  try {
    if (!events.length) {
      events = await loadEvents();
      activeEventId = events[0]?.id || activeEventId;
      renderEventFilter();
    }
    stages = await loadStages(activeEventId);
    renderStageFilter();
    rows = await loadRows();
    const existingIds = new Set(rows.map((row) => row.id));
    [...selectedIds].forEach((id) => {
      if (!existingIds.has(id)) selectedIds.delete(id);
    });
    renderRows();
  } catch (error) {
    adminList.innerHTML = `<div class="admin-empty">読み込みに失敗しました: ${escapeHtml(error.message)}</div>`;
    renderSql();
  }
}

adminList.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[type="checkbox"][data-id]');
  if (!checkbox) return;
  if (checkbox.checked) {
    selectedIds.add(checkbox.dataset.id);
  } else {
    selectedIds.delete(checkbox.dataset.id);
  }
  renderSql();
});

eventFilter.addEventListener("input", () => {
  activeEventId = eventFilter.value;
  selectedIds.clear();
  refresh();
});
[stageFilter, adminSearch].forEach((element) => element.addEventListener("input", renderRows));
reloadButton.addEventListener("click", refresh);

copySql.addEventListener("click", async () => {
  await navigator.clipboard.writeText(deleteSql.value);
  showToast("削除SQLをコピーしました");
});

refresh();
