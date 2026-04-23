import {test, expect} from "../../fixtures/fixtures";

test("Проверка доступности элементов хедера", async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test("Проверка доступности табов категорий", async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов бокового меню", async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов списка добавления контента", async ({ mainPage }) => {
  await mainPage.openAddPopUpList();
  await mainPage.addPopUpListHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов попапа уведомлений", async ({ mainPage }) => {
  await mainPage.openNotificationsPopUp();
  await mainPage.notificationsPopUpHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов раскрытого меню", async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test.skip("Проверка доступности элементов модального окна авторизации", async ({ mainPage }) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test.skip("Проверка редиректа на страницу авторизации", async ({ mainPage }) => {
  await mainPage.openAuthorizationModal();
  await mainPage.checkLoginPageRedirect();
});