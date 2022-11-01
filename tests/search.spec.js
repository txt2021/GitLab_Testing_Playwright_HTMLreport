const { test, expect } = require('@playwright/test');
const { MainPage } = require('./pageObjects/mainPage');
const { SearchPage } = require('./pageObjects/searchPage');

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);  
  await mainPage.openGitLab();
});

test('TC-13: Should check search work', async ({ page }) => {
    const mainpage = new MainPage(page);
    const searchpage = new SearchPage(page);
  
    await mainpage.clicksearchButton();
    await searchpage.enterSearchItem();
    await page.keyboard.press('Enter');
    await searchpage.isresulttitleVisible();
    await searchpage.isresulttitleCorrect();
    await expect(page).toHaveURL(/.*about/);
    
});

test('TC-14: Should check search suggestions work', async ({ page,context }) => {
    const mainpage = new MainPage(page);
    const searchpage = new SearchPage(page);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await mainpage.clicksearchButton(),
        await searchpage.clickdevopsButton()
      ])
      await newPage.waitForLoadState();
      await expect(newPage).toHaveURL(/.*devops/);
    
});
test('TC-15: Should redirect user to sign in form frome search page', async ({ page,context }) => {
    const mainpage = new MainPage(page);
    const searchpage = new SearchPage(page);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await mainpage.clicksearchButton(),
        await searchpage.clickGitlabButton()
      ])
      await newPage.waitForLoadState();
      await expect(newPage).toHaveURL(/.*sign_in/);
    
});
