import fs from "node:fs";
import path from "node:path";

const sourceDir = "/Users/ottan/Downloads/outputs";
const storyReview = JSON.parse(fs.readFileSync(path.join(sourceDir, "story_review_table.json"), "utf8"));
const stageTable = JSON.parse(fs.readFileSync(path.join(sourceDir, "stage_table.json"), "utf8")).stages;

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function toDate(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return null;
  if (new Date(seconds * 1000).getUTCFullYear() >= 2099) return null;
  return dateFormatter.format(new Date(seconds * 1000));
}

function toDateTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return null;
  return new Date(seconds * 1000).toISOString();
}

function stageSortValue(stage) {
  const code = stage.code || "";
  const typeRank = code.includes("-ST-") ? 0 : code.includes("-TR-") ? 1 : code.includes("-EX-") ? 3 : code.includes("-S-") ? 4 : 2;
  const match = code.match(/(\d+)(?!.*\d)/);
  return typeRank * 1000 + (match ? Number(match[1]) : 999);
}

function stageFromTable(stageId) {
  const raw = stageTable[stageId];
  if (!raw) return null;
  return {
    id: raw.stageId,
    code: raw.code || stageId,
    name: raw.name || "",
    description: cleanText(raw.description || ""),
    zoneId: raw.zoneId || "",
    stageType: raw.stageType || "",
    difficulty: raw.difficulty || "",
    dangerLevel: raw.dangerLevel || "",
    apCost: raw.apCost >= 0 ? raw.apCost : null,
    canPractice: Boolean(raw.canPractice),
    canBattleReplay: Boolean(raw.canBattleReplay),
    isChallenge: stageId.includes("#f#"),
    sortOrder: stageSortValue(raw),
  };
}

function cleanText(value) {
  return String(value)
    .replace(/<@[^>]+>/g, "")
    .replace(/<\/>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function referencedStageIds(entry) {
  const ids = new Set();
  for (const info of entry.infoUnlockDatas || []) {
    for (const required of info.requiredStages || []) {
      if (required.stageId) ids.add(required.stageId);
    }
  }
  return ids;
}

function stageIdsByPrefix(entryId) {
  const ids = new Set();
  for (const stage of Object.values(stageTable)) {
    if (stage.stageId?.startsWith(`${entryId}_`) || stage.zoneId?.startsWith(`${entryId}_`)) {
      ids.add(stage.stageId);
    }
  }
  return ids;
}

function uniqueStages(entry) {
  const ids = new Set([...referencedStageIds(entry), ...stageIdsByPrefix(entry.id)]);
  return [...ids]
    .map(stageFromTable)
    .filter(Boolean)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.code.localeCompare(b.code, "ja") || a.id.localeCompare(b.id));
}

const events = Object.values(storyReview)
  .filter((entry) => entry.entryType && entry.actType)
  .map((entry) => {
    const stages = uniqueStages(entry);
    const startsAt = toDate(entry.startTime) || toDate(entry.startShowTime) || toDate(entry.remakeStartTime);
    const endsAt = toDate(entry.endTime) || toDate(entry.endShowTime) || toDate(entry.remakeEndTime);
    return {
      id: entry.id,
      title: entry.name,
      entryType: entry.entryType,
      actType: entry.actType,
      startsAt,
      endsAt,
      startTime: toDateTime(entry.startTime),
      endTime: toDateTime(entry.endTime),
      startShowTime: toDateTime(entry.startShowTime),
      endShowTime: toDateTime(entry.endShowTime),
      remakeStartTime: toDateTime(entry.remakeStartTime),
      remakeEndTime: toDateTime(entry.remakeEndTime),
      storyEntryPicId: entry.storyEntryPicId || "",
      storyPicId: entry.storyPicId || "",
      storyMainColor: entry.storyMainColor || "",
      stageCount: stages.length,
      stages,
    };
  })
  .sort((a, b) => {
    const aTime = Date.parse(a.startsAt || a.startTime || a.startShowTime || a.remakeStartTime || "1970-01-01T00:00:00.000Z");
    const bTime = Date.parse(b.startsAt || b.startTime || b.startShowTime || b.remakeStartTime || "1970-01-01T00:00:00.000Z");
    return bTime - aTime || a.id.localeCompare(b.id);
  });

fs.writeFileSync(path.join("data", "event_master.json"), `${JSON.stringify(events, null, 2)}\n`);
fs.writeFileSync("event-master.js", `window.OPERATION_BOARD_EVENT_MASTER = ${JSON.stringify(events, null, 2)}\n`);
console.log(`Generated ${events.length} events and ${events.reduce((sum, event) => sum + event.stages.length, 0)} stages.`);
