import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  webServer: {
    command: "npm run dev -- --port 4173",
    url: "http://127.0.0.1:4173/",
    reuseExistingServer: true,
  },
  use: {
    browserName: "chromium",
    viewport: { width: 1440, height: 1000 },
  },
});
