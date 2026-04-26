import { test as base } from "@playwright/test";
import { MainPage } from "../pages/MainPage";

// Declare the types of your fixtures.
type MyFixtures = {
    mainPage: MainPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeCookiesAlert();
    await mainPage.closePopUP();

    await use(mainPage);
  },
});
export { expect } from "@playwright/test";
