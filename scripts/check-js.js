import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const explicitFiles = [
  "app.js",
  "admin.js",
  "api/admin.js",
  "base-sim.js",
  "base-sim-engine.js",
  "scripts/dev-server.js",
  "scripts/generate-event-master.js",
  "scripts/generate-event-seed-sql.js",
  "scripts/generate-base-intermediate-parameters.js",
  "scripts/generate-base-sim-data.js",
];

const files = [...explicitFiles, ...collectJsFiles("base-sim-engine")]
  .filter((file, index, list) => fs.existsSync(file) && list.indexOf(file) === index);

for (const file of files) {
  const result = spawnSync(process.execPath, ["--check", file], { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
}

function collectJsFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectJsFiles(filePath);
    return entry.isFile() && entry.name.endsWith(".js") ? [filePath] : [];
  });
}
