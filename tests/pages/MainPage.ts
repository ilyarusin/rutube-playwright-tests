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
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator(".wdp-header-module__header");
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
    this.menuButtonLocator = this.page.getByRole("button", {
      name: "Открыть меню навигации",
    });
    this.openMenuAriaLocator = this.page.locator(
      ".menu-content-module__content--open",
    );
    this.userLogoLocator = this.page.getByRole("button", {
      name: "Иконка канала channel77875100",
    });
    this.headerUserMenuLocator = this.page
      .locator("div")
      .filter({ hasText: "channel77875100" })
      .nth(2);
  }

  // actions

  async open() {
    await this.page.goto("https://rutube.ru/");
  }

  async openHeaderUserMenu() {
    await this.userLogoLocator.click();
  }

  async openFullMenu() {
    await this.menuButtonLocator.click();
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

  // assertions

  async addPopUpListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.headerAddButtonPopUpListLocator,
      "addButtonPopUpListAriaSnapshot.yml",
    );
  }

  async notificationsPopUpHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.headerNotificationsPopUpLocator,
      "notificationsPopUpAriaSnapshot.yml",
    );
  }

  async authorizationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.authorizationModalLocator,
      "authorizationModalAriaSnapshot.yml",
    );
  }

  async fullMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.openMenuAriaLocator,
      "fullMenuAriaLocatorAriaSnapshot.yml",
    );
  }

  async headerUserMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.headerUserMenuLocator,
      "headerUserMenuAriaSnapshot.yml",
    );
  }

  async headerHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.headerLocator,
      "headerAriaSnapshot.yml",
    );
  }

  async categoriesTabsHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.categoriesTabsLocator,
      "categoriesTabsAriaSnapshot.yml",
    );
  }

  async menuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(
      this.menuLocator,
      "sideMenuAriaSnapshot.yml",
    );
  }

  async checkLoginPageRedirect() {
    await expect(this.page).toHaveURL(/auth.gid.ru/);
  }
}
