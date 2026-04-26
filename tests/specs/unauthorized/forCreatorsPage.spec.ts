import test from "@playwright/test";
import { ForCreatorsPage } from "../../pages/ForCreatorsPage";

ForCreatorsPage.testsParams.forEach(({ name, screenshotName, url }) => {
  test(`Проверка лэйаута таба - ${name}`, async ({ page }) => {
    const forCreatorsPage = new ForCreatorsPage(page);
    await forCreatorsPage.open(url);
    await forCreatorsPage.pageHasCorrectLayout(screenshotName);
  });
});
