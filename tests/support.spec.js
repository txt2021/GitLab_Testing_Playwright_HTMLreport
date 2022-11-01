const { test, expect } = require('@playwright/test');
const { MainPage } = require('./pageObjects/mainPage');
const { SupportPage } = require('./pageObjects/supportPage');

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);  
  await mainPage.openGitLab();
});

test('TC-16: Should navigate user to Contact Support', async ({ page }) => {
    const mainpage = new MainPage(page);
    const supportpage = new SupportPage(page);
  
    await mainpage.clickLoginButton();
    await supportpage.clickcontsctButton();
    await supportpage.isresultVisible();
    await supportpage.iscontactCorrect();
    await expect(page).toHaveURL(/.*support/);
    
});

test('TC-17: Should navigate user to Get Help page', async ({ page }) => {
    const mainpage = new MainPage(page);
    const supportpage = new SupportPage(page);
  
    await mainpage.clickLoginButton();
    await supportpage.clickgethelpButton();
    await supportpage.isresultVisible();
    await supportpage.isgethelpCorrect();
    await expect(page).toHaveURL(/.*get-help/);
    
});

test('TC-18: Should navigate user to GitLab Professional Services', async ({ page }) => {
    const mainpage = new MainPage(page);
    const supportpage = new SupportPage(page);
  
    await mainpage.clickLoginButton();
    await supportpage.clickservicesButton();
    //await supportpage.isservicesVisible();
    //await supportpage.isservicesCorrect();
    await expect(page).toHaveURL(/.*services/);
    
});

test('TC-19: Should navigate user to Talk to an Expert page', async ({ page }) => {
    const mainpage = new MainPage(page);
    const supportpage = new SupportPage(page);
  
    await mainpage.clickLoginButton();
    await supportpage.clicksalesButton();
    await supportpage.issalesVisible();
    await supportpage.issalesCorrect();
    await expect(page).toHaveURL(/.*sales/);
    
});

test('TC-20: Should navigate user to registration page', async ({ page }) => {
    const mainpage = new MainPage(page);
    const supportpage = new SupportPage(page);
  
    await mainpage.clickLoginButton();
    await supportpage.clickregisterButton();
    await supportpage.isregisterformVisible();
    await expect(page).toHaveURL(/.*sign_up/);
    
});