import { test } from "../../fixtures/fixtures";

test("Проверка лейаута", async ({ categoriesPage }) => {
    await categoriesPage.contentPageHasCorrectLayout();
});
