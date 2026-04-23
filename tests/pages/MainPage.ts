import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopUpListLocator: Locator;
  private readonly headerNotificationsPopUpLocator: Locator;
  private readonly authorizationModalLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByText("RUTUBEОформить подпискуВход");
    this.categoriesTabsLocator = this.page.getByText(
      "ГлавнаяФильмыСериалыТелешоуСпортБлогерыМузыкаПодкастыДетямТВ онлайн",
    );
    this.menuLocator = this.page.getByLabel("Облегченная панель навигации");
    this.headerAddButtonLocator = this.page.getByRole("button", {
      name: "Добавить",
    });
    this.headerNotificationsButtonLocator = this.page.getByRole("button", {
      name: "Уведомления",
    });
    this.headerLoginButtonLocator = this.page.getByRole("button", {
      name: "Вход",
    });
    this.headerAddButtonPopUpListLocator = this.page.locator(
      ".wdp-header-add-content-menu-module__menu",
    );
    this.headerNotificationsPopUpLocator = this.page.locator(
      ".wdp-notification-module__content",
    );
    this.authorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
  }

  async open() {
    await this.page.goto("https://rutube.ru/");
  }

  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({
      name: "headerAriaSnapshot.yml",
    });
  }

  async categoriesTabsHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({
      name: "categoriesTabsAriaSnapshot.yml",
    });
  }

  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({
      name: "sideMenuAriaSnapshot.yml",
    });
  }

  async openAddPopUpList() {
    await this.headerAddButtonLocator.click();
  }

  async openNotificationsPopUp() {
    await this.headerNotificationsButtonLocator.click();
  }

  async openLoginPage() {
    await this.headerLoginButtonLocator.click();
  }

  async openAuthorizationModal() {
    await this.headerLoginButtonLocator.click();
  }

  // async switchToRegistrationModal() {
  //   await this.switchToRegistrationModalButtonLocator.click();
  // }

  async addPopUpListHasCorrectAriaSnapshot() {
    await expect(this.headerAddButtonPopUpListLocator).toMatchAriaSnapshot({
      name: "addButtonPopUpListAriaSnapshot.yml",
    });
  }

  async notificationsPopUpHasCorrectAriaSnapshot() {
    await expect(this.headerNotificationsPopUpLocator).toMatchAriaSnapshot({
      name: "notificationsPopUpAriaSnapshot.yml",
    });
  }

  async authorizationModalHasCorrectAriaSnapshot() {
    await expect(this.authorizationModalLocator).toMatchAriaSnapshot({
      name: "authorizationModalAriaSnapshot.yml",
    });
  }

  async checkLoginPageRedirect() {
    await expect(this.page).toHaveURL(/auth.gid.ru/);
  }
}
