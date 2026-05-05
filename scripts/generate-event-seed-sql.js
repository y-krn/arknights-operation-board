import fs from "node:fs";
import path from "node:path";

const eventMasterPath = path.join("data", "event_master.json");
const outputPath = path.join("db", "event_master_seed.sql");
const events = JSON.parse(fs.readFileSync(eventMasterPath, "utf8"));

function sql(value) {
  if (value === null || value === undefined) return "null";
  return `'${String(value).replaceAll("'", "''")}'`;
}

function eventKind(entryType) {
  if (entryType === "MAINLINE") return "メインテーマ";
  if (entryType === "MINI_ACTIVITY") return "ショートイベント";
  return "サイドストーリー";
}

function playableStages(event) {
  return event.stages.filter(
    (stage) =>
      !stage.isChallenge && !/-ST(?:-|\d|$)/.test(stage.code) && !/-TR(?:-|\d|$)/.test(stage.code) && (stage.canPractice || stage.apCost !== null)
  );
}

function stageLabel(stage) {
  return stage.name || [stage.difficulty, stage.apCost === null ? "" : `理性 ${stage.apCost}`].filter(Boolean).join(" / ");
}

function stageSortOrder(stage, index) {
  return Number.isFinite(stage.sortOrder) ? stage.sortOrder : (index + 1) * 10;
}

const eventRows = events
  .map((event) => {
    const stages = playableStages(event);
    const description = `${eventKind(event.entryType)} / ${stages.length}戦闘ステージ`;
    return `  (${sql(event.id)}, ${sql(event.title)}, ${sql(description)}, ${sql(event.startsAt)}, ${sql(event.endsAt || "2099-12-31")})`;
  })
  .join(",\n");

const stageRows = events
  .flatMap((event) =>
    playableStages(event).map(
      (stage, index) =>
        `  (${sql(event.id)}, ${sql(stage.code)}, ${sql(stageLabel(stage))}, ${stageSortOrder(stage, index)})`
    )
  )
  .join(",\n");

const sqlText = `-- Generated from data/event_master.json.
-- Re-run: node scripts/generate-event-seed-sql.js
-- This upserts event and playable stage master data for Supabase.

insert into public.events (id, title, description, starts_at, ends_at)
values
${eventRows}
on conflict (id) do update
set title = excluded.title,
    description = excluded.description,
    starts_at = excluded.starts_at,
    ends_at = excluded.ends_at;

insert into public.stages (event_id, code, label, sort_order)
values
${stageRows}
on conflict (event_id, code) do update
set label = excluded.label,
    sort_order = excluded.sort_order;

notify pgrst, 'reload schema';
`;

fs.writeFileSync(outputPath, sqlText);
console.log(`Generated ${outputPath} with ${events.length} events and ${stageRows ? stageRows.split("\n").length : 0} stages.`);
