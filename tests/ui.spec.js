import { expect, test } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagePath = path.resolve(__dirname, "../index.html");

test("event squad board renders and filters squads", async ({ page }) => {
  await page.goto(`file://${pagePath}`);

  await expect(page.getByRole("heading", { name: "HS-8 攻略編成" })).toBeVisible();
  await expect(page.getByText("2ルート封鎖の置くだけ周回")).toBeVisible();

  await page.getByRole("button", { name: "低レア" }).click();
  await expect(page.getByText("星4中心の安定クリア")).toBeVisible();
  await expect(page.getByText("2ルート封鎖の置くだけ周回")).toHaveCount(0);
});

test("composer can add a squad to the active stage", async ({ page }) => {
  await page.goto(`file://${pagePath}`);

  await page.getByRole("button", { name: "編成を投稿" }).click();
  await page.getByLabel("編成タイトル").fill("HS-8 テスト投稿");
  await page.getByLabel("採用オペレーター").fill("サリア, スズラン");
  await page.getByRole("textbox", { name: "タグ" }).fill("周回, 安定");
  await page.getByLabel("攻略メモ").fill("投稿フォームの動作確認。");
  await page.getByRole("button", { name: "投稿する" }).click();

  await expect(page.getByText("HS-8 テスト投稿")).toBeVisible();
  await expect(page.getByText("投稿フォームの動作確認。")).toBeVisible();
});
