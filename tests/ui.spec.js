import { expect, test } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagePath = path.resolve(__dirname, "../index.html");
const adminPath = path.resolve(__dirname, "../admin.html");
const localUrl = `file://${pagePath}?store=local`;
const adminMockUrl = `file://${adminPath}?mock=1`;

test("event squad board renders and filters squads", async ({ page }) => {
  await page.goto(localUrl);

  await expect(page.getByRole("heading", { name: "HS-8 攻略編成" })).toBeVisible();
  await expect(page.getByText("2ルート封鎖の置くだけ周回")).toBeVisible();

  await page.getByRole("button", { name: "低レア" }).click();
  await expect(page.getByText("星4中心の安定クリア")).toBeVisible();
  await expect(page.getByText("2ルート封鎖の置くだけ周回")).toHaveCount(0);
});

test("composer can add a squad to the active stage", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await page.getByLabel("投稿者名").fill("テストドクター");
  await page.getByLabel("編成タイトル").fill("HS-8 テスト投稿");
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
  await expect(page.getByText("HS-8 テスト投稿")).toBeVisible();
  await expect(page.getByText("S3 / Mod X")).toBeVisible();
  await expect(page.getByText("投稿フォームの動作確認。")).toBeVisible();
});

test("composer prevents duplicate submissions", async ({ page }) => {
  await page.goto(localUrl);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  const composer = page.locator("#composer");
  await page.getByLabel("投稿者名").fill("連打テスト");
  await page.getByLabel("編成タイトル").fill("HS-8 二重投稿防止");
  await composer.getByLabel("採用オペレーター").fill("サリア");
  await composer.getByRole("button", { name: "サリア" }).click();
  await page.getByLabel("攻略メモ").fill("投稿ボタン連打の確認。");

  await page.getByRole("button", { name: "投稿する" }).dblclick();

  await expect(page.getByText("HS-8 二重投稿防止")).toHaveCount(1);
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
  await page.getByLabel("編成タイトル").fill("HS-8 候補未選択");
  await composer.getByLabel("採用オペレーター").fill("ホシ");
  await page.getByRole("button", { name: "投稿する" }).click();

  await expect(page.locator("#composer")).toBeVisible();
  await expect(page.locator("#toast")).toContainText("候補から選択してください");
  await expect(page.getByText("HS-8 候補未選択")).toHaveCount(0);
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
  await page.getByLabel("編成タイトル").fill("HS-8 保存される投稿");
  await composer.getByLabel("採用オペレーター").fill("サリア");
  await composer.getByRole("button", { name: "サリア" }).click();
  await composer.getByLabel("採用オペレーター").fill("スズラン");
  await composer.getByRole("button", { name: "スズラン" }).click();
  await composer.getByRole("button", { name: "周回" }).click();
  await page.getByLabel("攻略メモ").fill("localStorageに保存される。");
  await page.getByRole("button", { name: "投稿する" }).click();

  await page.reload();
  await expect(page.getByText("HS-8 保存される投稿")).toBeVisible();

  await page.getByRole("button", { name: "共有URL" }).first().click();
  await expect(page).toHaveURL(/squad=/);
  await expect(page.locator(".squad-card.linked")).toHaveCount(1);
});

test("admin screen generates delete sql for selected squads", async ({ page }) => {
  await page.goto(adminMockUrl);

  await expect(page.getByRole("heading", { name: "投稿管理" })).toBeVisible();
  await expect(page.getByText("管理画面テスト投稿")).toBeVisible();

  await page.getByLabel("管理画面テスト投稿 を選択").check();
  await expect(page.getByLabel("削除SQL")).toHaveValue(/delete from public\.squads/);
  await expect(page.getByLabel("削除SQL")).toHaveValue(/00000000-0000-4000-8000-000000000001/);
});
