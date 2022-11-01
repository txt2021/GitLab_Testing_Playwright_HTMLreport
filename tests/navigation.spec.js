const { test, expect } = require('@playwright/test');
const { MainPage } = require('./pageObjects/mainPage');

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);  
  await mainPage.openGitLab();
});

test('TC-05: Should navigate to "Why GitLab" section', async ({ page }) => {
  const mainpage = new MainPage(page);

  await mainpage.clickwhygitlabButton();
  await mainpage.iswhyformVisible();
  await mainpage.iswhyformCorrect();
  await expect(page).toHaveURL(/.*about/);
  
});

test('TC-06: Should navigate to "Platform" section', async ({ page }) => {
    const mainpage = new MainPage(page);
  
    await mainpage.clickplatformButton();
    await mainpage.isplatformformVisible();
    await mainpage.isplatformformCorrect();
    await expect(page).toHaveURL(/.*about/);
    
});

test('TC-07: Should navigate to "Solutions" section', async ({ page }) => {
    const mainpage = new MainPage(page);
  
    await mainpage.clicksolutionsButton();
    await mainpage.issolutionsformVisible();
    await mainpage.issolutionsformCorrect();
    await expect(page).toHaveURL(/.*about/);
    
});

test('TC-08: Should navigate to "Pricing" section', async ({ page }) => {
    const mainpage = new MainPage(page);
  
    await mainpage.clickpricingButton();
    await mainpage.ispricingtitleVisible();
    await mainpage.ispricingtitleCorrect();
    await expect(page).toHaveURL(/.*pricing/);
    
});

test('TC-09: Should navigate to "Partners" section', async ({ page }) => {
    const mainpage = new MainPage(page);
  
    await mainpage.clickpartnersButton();
    await mainpage.ispartnerformVisible();
    await mainpage.ispartnersformCorrect();
    await expect(page).toHaveURL(/.*about/);
    
});

test('TC-10: Should navigate to "Resources" section', async ({ page }) => {
    const mainpage = new MainPage(page);
  
    await mainpage.clickresourcesButton();
    await mainpage.isresourcesformVisible();
    await mainpage.isresourcesformCorrect();
    await expect(page).toHaveURL(/.*about/);
    
});