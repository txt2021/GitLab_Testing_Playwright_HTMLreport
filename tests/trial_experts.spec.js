const { test, expect } = require('@playwright/test');
const { MainPage } = require('./pageObjects/mainPage');
const { TrialPage } = require('./pageObjects/trial_expertsPage');

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);  
  await mainPage.openGitLab();
});

test('TC-11: Should display "Talk to an expert" form', async ({ page }) => {
    const mainpage = new MainPage(page);
    const trialpage = new TrialPage(page);
  
    await mainpage.clickexpertsButton();
    await trialpage.istitleVisible();
    await trialpage.istitleCorrect();
    await trialpage.isexpertsformVisible();
    await expect(page).toHaveURL(/.*sales/);
    
});

test('TC-12: Should display "Free trial" form', async ({ page }) => {
    const mainpage = new MainPage(page);
    const trialpage = new TrialPage(page);
  
    await mainpage.clicktrialButton();
    await trialpage.istrialVisible();
    await trialpage.istrialCorrect();
    await trialpage.istrialformVisible();
    await expect(page).toHaveURL(/.*trial_registrations/);
    
});