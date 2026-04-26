import { test } from "../../fixtures/fixtures";

test("Проверка доступности элементов хедера неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test("Проверка доступности табов категорий неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов бокового меню неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов списка добавления контента неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openAddPopUpList();
  await mainPage.addPopUpListHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов попапа уведомлений неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopUp();
  await mainPage.notificationsPopUpHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов раскрытого меню неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test.skip("Проверка доступности элементов модального окна авторизации неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});

test.skip("Проверка редиректа на страницу авторизации неавторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModal();
  await mainPage.checkLoginPageRedirect();
});
