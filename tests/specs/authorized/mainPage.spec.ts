import { test } from "../../fixtures/fixtures";

test("Проверка доступности элементов хедера авторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов попапа уведомлений авторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopUp();
  await mainPage.notificationsPopUpHasCorrectAriaSnapshot();
});

test("Проверка доступности элементов раскрытого меню авторизованного пользователя", async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});
