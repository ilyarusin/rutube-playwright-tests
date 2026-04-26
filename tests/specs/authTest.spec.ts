import { test } from "@playwright/test";
import path from "path";
import { chromium } from "playwright-extra";
import stealth from "puppeteer-extra-plugin-stealth";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

chromium.use(stealth());

test("authTest", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rutube.ru/");
  await page.getByRole("button", { name: "Закрыть попап" }).click();
  await page.getByRole("button", { name: "Ок", exact: true }).click();
  await page.getByRole("button", { name: "Вход" }).click();
  await page.getByTestId("email-input").fill(process.env.LOGIN!);
  await page
    .getByRole("button", { name: "Иконка канала channel77875100" })
    .click();
  await page.getByRole("link", { name: "Профиль", exact: true }).click();

  await page.context().storageState({ path: authFile });
});
