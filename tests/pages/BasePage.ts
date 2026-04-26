import { Page } from "@playwright/test";

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
}
