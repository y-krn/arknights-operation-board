import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const portraitDir = "/Users/ottan/Downloads/outputs/portraits";
const outputDir = path.join("assets", "operator-icons");
const catalog = JSON.parse(fs.readFileSync("data/operator_catalog.json", "utf8"));
const files = fs.readdirSync(portraitDir);

fs.mkdirSync(outputDir, { recursive: true });

function sourceFor(operatorId) {
  const preferred = [`${operatorId}_1.png`, `${operatorId}_2.png`];
  const exact = preferred.find((file) => files.includes(file));
  if (exact) return path.join(portraitDir, exact);
  const fallback = files
    .filter((file) => file.startsWith(`${operatorId}_`) && file.endsWith(".png"))
    .sort()[0];
  return fallback ? path.join(portraitDir, fallback) : "";
}

const iconMap = {};

for (const operator of catalog) {
  const source = sourceFor(operator.id);
  if (!source) continue;
  const outputName = `${operator.id}.png`;
  const outputPath = path.join(outputDir, outputName);
  try {
    execFileSync("sips", ["-Z", "96", source, "--out", outputPath], { stdio: "ignore" });
  } catch {
    fs.copyFileSync(source, outputPath);
  }
  iconMap[operator.name] = `./assets/operator-icons/${outputName}`;
}

fs.writeFileSync("operator-icons.js", `window.OPERATION_BOARD_OPERATOR_ICONS = ${JSON.stringify(iconMap, null, 2)}\n`);
console.log(`Generated ${Object.keys(iconMap).length} operator icons.`);
