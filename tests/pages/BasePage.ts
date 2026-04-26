import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    const cookieAlert = this.page.getByRole("button", {
      name: "Ок",
      exact: true,
    });

    if (await cookieAlert.isVisible()) {
      await cookieAlert.click();
    }
  }

  async closePopUP() {
    const popUp = this.page.getByRole("button", { name: "Закрыть попап" });

    if (await popUp.isVisible()) {
      await popUp.click();
    }
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: ariaName,
    });
  }

  protected async checkLayoutByScreenshot(
    locator: Locator,
    screenshotName: string,
  ) {
    await expect(locator).toHaveScreenshot(screenshotName, {
      timeout: 15000,
    });
  }

  protected async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        (element as HTMLElement).style.display = "none";
      }
    }, selector);
  }
}
