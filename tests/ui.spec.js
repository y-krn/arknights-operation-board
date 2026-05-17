import { expect, test } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagePath = path.resolve(__dirname, "../index.html");
const adminPath = path.resolve(__dirname, "../api/admin.view.html");
const localUrl = `file://${pagePath}?store=local`;
const adminMockUrl = `file://${adminPath}?mock=1`;

const baseSimUrl = "http://127.0.0.1:4173/base-sim.html";

test("event squad board renders and filters squads", async ({ page }) => {
  await page.goto(localUrl);

  await expect(page.getByRole("heading", { name: "OS-1 攻略編成" })).toBeVisible();
  await expect(page.getByText("初回攻略の安定配置")).toBeVisible();

  await page.getByRole("button", { name: "低レア" }).click();
  await expect(page.getByText("星4中心の安定クリア")).toBeVisible();
  await expect(page.getByText("初回攻略の安定配置")).toHaveCount(0);
});

test("event selector loads stages from generated event master", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByLabel("イベント切替").selectOption("act46side");

  await expect(page.getByRole("heading", { name: "OS-1 攻略編成" })).toBeVisible();
  await expect(page.locator("#stageSubtitle")).toHaveText("悲嘆の声");
  await expect(page.getByRole("button", { name: /OS-10/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /OS-ST-1/ })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "聖山降臨1101" })).toBeVisible();
});

test("event selector can narrow events by category", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByLabel("カテゴリ").selectOption("main");

  await expect(page.getByRole("heading", { name: "背理分光" })).toBeVisible();
  await expect(page.locator("#eventSelect option[value='main_16']")).toHaveText("背理分光");
  await expect(page.locator("#eventSelect option[value='act46side']")).toHaveCount(0);
});

test("composer can add a squad to the active stage", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await page.getByLabel("投稿者名").fill("テストドクター");
  await page.getByLabel("編成タイトル").fill("OS-1 テスト投稿");
  await composer.getByLabel("採用オペレーター").fill("サリア");
  await composer.getByRole("button", { name: "サリア" }).click();
  await expect(composer.locator(".build-operator .operator-icon")).toHaveCount(1);
  await composer.getByLabel("サリアのスキル").selectOption("S3");
  await composer.getByLabel("サリアのモジュール").selectOption("X");
  await expect(composer.locator(".skill-help")).toContainText("硬質化");
  await expect(composer.locator(".skill-help")).toContainText("SP 70/80");
  await expect(composer.locator(".skill-help")).toContainText("術ダメージ+55%");
  await expect(composer.locator(".skill-help")).toContainText("移動速度-60%");
  await expect(composer.locator(".module-help")).toContainText("仕舞い込まれたグローブ Lv3");
  await expect(composer.locator(".module-help")).toContainText("HP+350 / 攻撃力+70");
  await expect(composer.locator(".module-help")).toContainText("SPを3回復");
  await composer.getByLabel("採用オペレーター").fill("スズラン");
  await composer.getByRole("button", { name: "スズラン" }).click();
  await composer.getByRole("button", { name: "周回" }).click();
  await page.getByLabel("追加タグ").fill("安定");
  await page.getByLabel("攻略メモ").fill("投稿フォームの動作確認。");
  await page.getByRole("button", { name: "投稿する" }).click();

  await expect(page.locator("#composer")).not.toBeVisible();
  await expect(page.getByText("OS-1 テスト投稿")).toBeVisible();
  await expect(page.getByText("S3 / Mod X")).toBeVisible();
  await expect(page.getByText("投稿フォームの動作確認。")).toBeVisible();
});

test("composer prevents duplicate submissions", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await page.getByLabel("投稿者名").fill("連打テスト");
  await page.getByLabel("編成タイトル").fill("OS-1 二重投稿防止");
  await composer.getByLabel("採用オペレーター").fill("サリア");
  await composer.getByRole("button", { name: "サリア" }).click();
  await page.getByLabel("攻略メモ").fill("投稿ボタン連打の確認。");

  await page.getByRole("button", { name: "投稿する" }).dblclick();

  await expect(page.getByText("OS-1 二重投稿防止")).toHaveCount(1);
});

test("composer fills optional author and title with defaults", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await composer.getByLabel("採用オペレーター").fill("サリア");
  await composer.getByRole("button", { name: "サリア" }).click();
  await composer.getByRole("button", { name: "周回" }).click();
  await page.getByRole("button", { name: "投稿する" }).click();

  await expect(page.getByText("OS-1 周回編成")).toBeVisible();
  await expect(page.locator(".squad-card").filter({ hasText: "OS-1 周回編成" }).locator(".squad-meta")).toContainText("匿名ドクター");
});

test("composer close button dismisses an empty form", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  await expect(page.locator("#composer")).toBeVisible();

  await page.getByRole("button", { name: "閉じる" }).click();
  await expect(page.locator("#composer")).not.toBeVisible();
});

test("composer suggests operators imported from character table", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await composer.getByLabel("採用オペレーター").fill("新約");

  await expect(composer.getByRole("button", { name: "新約エクシア" })).toBeVisible();
});

test("composer initial operator suggestions prioritize recently added operators", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const suggestions = page.locator("#operatorSuggestions");

  await expect(suggestions.getByRole("button").first()).toHaveText("濯塵ハイビスカス");
  await expect(suggestions.getByRole("button", { name: "斬業ホシグマ", exact: true })).toBeVisible();
  await expect(suggestions.getByRole("button", { name: "12F", exact: true })).toHaveCount(0);
});

test("composer enter key selects the suggested operator instead of raw text", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await composer.getByLabel("採用オペレーター").fill("ホシ");
  await expect(composer.getByRole("button", { name: "ホシグマ", exact: true })).toBeVisible();
  await composer.getByLabel("採用オペレーター").press("Enter");

  await expect(composer.locator(".build-row strong")).toHaveText("ホシグマ");
  await expect(composer.locator(".build-row strong")).not.toHaveText("ホシ");
  await expect(composer.getByLabel("採用オペレーター")).toHaveValue("");
});

test("composer highlights the latest selected operator near suggestions", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  for (const name of ["サリア", "スズラン", "ホシグマ"]) {
    await composer.getByLabel("採用オペレーター").fill(name);
    await composer.locator("#operatorSuggestions").getByRole("button", { name, exact: true }).click();
  }

  const firstBuild = composer.locator(".build-row").first();
  await expect(firstBuild.locator(".build-operator")).toContainText("ホシグマ");
  await expect(firstBuild.getByLabel("ホシグマのスキル")).toBeVisible();
  await expect(firstBuild.getByLabel("ホシグマのモジュール")).toBeVisible();
});

test("composer hides skill and module controls for operators without them", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await composer.getByLabel("採用オペレーター").fill("Castle");
  await composer.locator("#operatorSuggestions").getByRole("button", { name: "Castle-3", exact: true }).click();

  await expect(composer.locator(".build-operator")).toContainText("Castle-3");
  await expect(composer.getByLabel("Castle-3のスキル")).toHaveCount(0);
  await expect(composer.getByLabel("Castle-3のモジュール")).toHaveCount(0);
});

test("composer requires operators to be selected from suggestions", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await page.getByLabel("投稿者名").fill("候補必須テスト");
  await page.getByLabel("編成タイトル").fill("OS-1 候補未選択");
  await composer.getByLabel("採用オペレーター").fill("ホシ");
  await page.getByRole("button", { name: "投稿する" }).click();

  await expect(page.locator("#composer")).toBeVisible();
  await expect(page.locator("#toast")).toContainText("候補から選択してください");
  await expect(page.getByText("OS-1 候補未選択")).toHaveCount(0);
});

test("owned memo groups operators by rarity and profession", async ({ page }) => {
  await page.goto(localUrl);

  await expect(page.getByLabel("レアリティ")).toHaveValue("★6");
  await expect(page.locator("#ownedSummary")).toContainText("★6 / 全職業");
  await expect(page.getByRole("button", { name: "サリア" })).toBeVisible();

  await page.getByLabel("職業").selectOption("重装");
  await expect(page.locator("#ownedSummary")).toContainText("★6 / 重装");
  await expect(page.locator("#ownedGrid").getByText("重装", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "サリア" })).toBeVisible();
  await expect(page.getByRole("button", { name: "エクシア" })).toHaveCount(0);

  await page.getByLabel("レアリティ").selectOption("★5");
  await expect(page.locator("#ownedSummary")).toContainText("★5 / 重装");
  await expect(page.getByRole("button", { name: "Blitz" })).toBeVisible();
});

test("posted squad persists after reload and share link highlights it", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await page.getByLabel("投稿者名").fill("保存テスト");
  await page.getByLabel("編成タイトル").fill("OS-1 保存される投稿");
  await composer.getByLabel("採用オペレーター").fill("サリア");
  await composer.getByRole("button", { name: "サリア" }).click();
  await composer.getByLabel("採用オペレーター").fill("スズラン");
  await composer.getByRole("button", { name: "スズラン" }).click();
  await composer.getByRole("button", { name: "周回" }).click();
  await page.getByLabel("攻略メモ").fill("localStorageに保存される。");
  await page.getByRole("button", { name: "投稿する" }).click();

  await page.reload();
  await expect(page.getByText("OS-1 保存される投稿")).toBeVisible();

  await page.getByRole("button", { name: "共有URL" }).first().click();
  await expect(page).toHaveURL(/squad=/);
  await expect(page.locator(".squad-card.linked")).toHaveCount(1);
});

test("admin screen generates delete sql for selected squads", async ({ page }) => {
  await page.goto(adminMockUrl);

  await expect(page.getByRole("heading", { name: "投稿管理" })).toBeVisible();
  await expect(page.getByLabel("イベント")).toContainText("聖山降臨1101");
  await expect(page.getByText("管理画面テスト投稿")).toBeVisible();

  await page.getByLabel("管理画面テスト投稿 を選択").check();
  await expect(page.getByLabel("削除SQL")).toHaveValue(/delete from public\.squads/);
  await expect(page.getByLabel("削除SQL")).toHaveValue(/00000000-0000-4000-8000-000000000001/);
});


test("base simulator renders and switches layouts/objectives", async ({ page }) => {
  await page.goto(baseSimUrl);

  await expect(page.getByRole("heading", { name: "基地効率シミュレーター" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "最適案" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "シフト" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "時系列" })).toBeVisible();
  await expect(page.locator("#shiftResults")).toHaveCount(0);
  await expect(page.locator("#facilityResults")).toContainText("第1班");
  await expect(page.locator("#timelineResults .timeline-hour")).toHaveCount(24);
  await expect(page.locator("#timelineResults .timeline-chart")).toBeVisible();
  await expect(page.locator("#timelineResults .chart-line.total")).toHaveCount(1);
  await expect(page.locator("#timelineResults .chart-line.cumulative.totalValue")).toHaveCount(1);
  await expect(page.locator("#timelineResults .chart-line.morale")).toHaveCount(1);
  await page.getByLabel("累積生産").uncheck();
  await expect(page.locator("#timelineResults .chart-line.cumulative")).toHaveCount(0);
  await page.getByLabel("累積生産").check();
  await page.getByLabel("体力", { exact: true }).uncheck();
  await expect(page.locator("#timelineResults .chart-line.morale")).toHaveCount(0);
  await expect(page.locator("#timelineResults .chart-line.operator")).toHaveCount(0);
  await page.getByLabel("体力", { exact: true }).check();
  await page.locator("#timelineResults .timeline-series-toggle", { hasText: "中間パラメータ" }).locator("input").uncheck();
  await expect(page.locator("#timelineResults .chart-line.parameter")).toHaveCount(0);
  await page.locator("#timelineResults .timeline-series-toggle", { hasText: "中間パラメータ" }).locator("input").check();
  await expect(page.locator("#timelineResults .timeline-cumulative-summary")).toContainText("総合価値");
  await expect(page.locator("#timelineResults .timeline-legend")).toContainText("累積龍門幣");
  await expect(page.locator("#timelineResults")).toContainText("中間パラメータ");
  await expect(page.locator("#timelineResults")).toContainText("体力");
  await expect(page.locator("#facilityResults")).toContainText("0:00-24:00 / 24時間");
  await expect(page.locator("#facilityResults")).toContainText("制御中枢");
  await expect(page.locator("#facilityResults")).toContainText(/体力 -?\d/);
  await expect(page.locator("#facilityResults")).toContainText(/勤務可能|体力不足|回復不足/);
  await expect(page.getByText("貿易所 龍門幣/日")).toBeVisible();
  await expect(page.getByText("純金換算 龍門幣/日")).toBeVisible();
  await expect(page.getByText("総合価値/日")).toBeVisible();
  await expect(page.locator("#intermediateResults")).toContainText("中間パラメータ");
  await expect(page.locator("#intermediateResults")).toContainText("俗世之憂");
  await expect(page.locator("#intermediateResults")).toContainText("知覚情報");
  await expect(page.locator("#intermediateResults")).toContainText("思念連鎖");
  await expect(page.locator("#intermediateResults")).toContainText("静かなる共鳴");
  await expect(page.locator("#intermediateResults")).toContainText("パッション");
  await expect(page.getByLabel("シフト")).toHaveValue("single");
  await expect(page.getByLabel("応接室Lv")).toHaveValue("3");
  await expect(page.getByLabel("回収間隔h")).toHaveValue("24");
  await expect(page.locator("#facilityResults .facility-card")).toHaveCount(7);
  await expect(page.locator("#facilityResults")).toContainText(/保管上限|注文上限/);

  await page.getByLabel("基地構成").selectOption("252");
  await expect(page.getByLabel("製造所")).toHaveValue("5");
  await expect(page.getByLabel("貿易所")).toHaveValue("2");
  await expect(page.locator("#facilityResults .facility-card")).toHaveCount(8);

  await expect(page.locator("#facilityResults .facility-card").last().getByRole("heading", { name: "制御中枢" })).toBeVisible();
  const firstProduct = page.locator("#facilityResults .facility-card").first();
  await page.getByLabel("シフト").selectOption("two-shift");
  await expect(page.locator("#facilityResults").getByRole("tab", { name: "第1班" })).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("#facilityResults").getByRole("tab", { name: "第2班" })).toBeVisible();
  await page.locator("#facilityResults").getByRole("tab", { name: "第2班" }).click();
  await expect(page.locator("#facilityResults").getByRole("tab", { name: "第2班" })).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("#facilityResults")).toContainText("12:00-24:00 / 12時間");
  await expect(page.locator("#facilityResults .facility-card")).toHaveCount(8);
  await expect(page.locator("#facilityResults .facility-card").locator(".shift-operator").first()).toContainText(/昇進|未昇進/);
  await page.locator("#facilityResults .facility-card").locator(".shift-operator summary").first().click();
  await expect(page.locator("#facilityResults .facility-card").locator(".skill-description").first()).toContainText(/製造所|貿易所|制御中枢/);

  await page.getByLabel("目的").selectOption("exp");
  await expect(firstProduct).toContainText("作戦記録");
  await expect(page.locator("#warningResults")).toContainText(/未対応|スキル/);
});

test("base simulator saves roster ownership and promotion", async ({ page }) => {
  await page.goto(baseSimUrl);

  await page.getByPlaceholder("オペレーター名で検索").fill("エクシア");
  const row = page.locator(".roster-row", { hasText: "エクシア" }).first();
  await row.locator(".owned-toggle").uncheck();
  await row.locator(".phase-select").selectOption("PHASE_1");

  await page.reload();
  await page.getByPlaceholder("オペレーター名で検索").fill("エクシア");
  const reloaded = page.locator(".roster-row", { hasText: "エクシア" }).first();
  await expect(reloaded.locator(".owned-toggle")).not.toBeChecked();
  await expect(reloaded.locator(".phase-select")).toHaveValue("PHASE_1");
});


test("base simulator omits non-efficiency support facility assignments", async ({ page }) => {
  await page.goto(baseSimUrl);

  await expect(page.getByLabel("事務室 1")).toHaveCount(0);
  await expect(page.getByLabel("応接室 1")).toHaveCount(0);
  await expect(page.getByLabel("訓練室 1")).toHaveCount(0);
  await expect(page.getByLabel("発電所 1")).toBeVisible();
});


test("base simulator shows unlock conditions for assigned base skills", async ({ page }) => {
  await page.goto(baseSimUrl);

  const firstAssigned = page.locator("#facilityResults .operator-pill").first();
  await expect(firstAssigned.locator(".operator-title em")).toContainText(/昇進|未昇進/);
  await expect(firstAssigned.locator(".morale-line")).toContainText(/体力 -?\d/);
  await firstAssigned.locator("summary").click();
  await expect(firstAssigned.locator(".skill-description").first()).not.toContainText("必要条件:");
});


test("base simulator summary metrics change by objective", async ({ page }) => {
  await page.goto(baseSimUrl);

  const goldEquivalent = page.locator("#goldEquivalentLmd");
  const expValue = page.locator("#expValue");
  await expect(goldEquivalent).not.toHaveText("0");

  await page.getByLabel("目的").selectOption("exp");
  await expect(goldEquivalent).toHaveText("0");
  await expect(expValue).not.toHaveText("0");
});


test("base simulator renders control center as an optimized facility", async ({ page }) => {
  await page.goto(baseSimUrl);

  const control = page.locator("#facilityResults .facility-card").last();
  await expect(control).toContainText("制御中枢");
  await expect(control.locator(".operator-pill").first()).toContainText("支援");
  await expect(control.locator(".operator-pill").first()).toContainText("今回の寄与");
  await expect(page.getByLabel("制御中枢 1")).toHaveCount(0);
});
