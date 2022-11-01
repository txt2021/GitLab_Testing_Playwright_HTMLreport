const { test, expect } = require('@playwright/test');
const { SignUpPage } = require('./pageObjects/signupPage');
const { MainPage } = require('./pageObjects/mainPage');

test.beforeEach(async ({ page }) => {
  //testInfo.setTimeout(testInfo.timeout + 80000);
  const mainPage = new MainPage(page);  
  await mainPage.openGitLab();
});

test('TC-01: Should sign up on GitLab with valid credentials', async ({ page }) => {
  const mainpage = new MainPage(page);
  const signuppage = new SignUpPage(page);

  await mainpage.clickLoginButton();
  await mainpage.clicksignupButton();
  await signuppage.enterFirstname();
  await signuppage.enterLastname();
  await signuppage.enterUsername();
  await signuppage.enterEmail();
  await signuppage.enterPassword();
  await signuppage.clicksubmitButton();
  await signuppage.ismessageVisible();
  await signuppage.ismessageCorrect();
  await expect(page).toHaveURL(/.*users/);
  
});

test('TC-02: Should sign up on GitLab with invalid credentials', async ({ page }) => {
  const mainpage = new MainPage(page);
  const signuppage = new SignUpPage(page);

  await mainpage.clickLoginButton();
  await mainpage.clicksignupButton();
  await signuppage.enterFirstname();
  await signuppage.enterLastname();
  await signuppage.enterUsername();
  await signuppage.enterwrongEmail();
  await signuppage.enterPassword();
  await signuppage.clicksubmitButton();
  //await signuppage.isemailmessageVisible();
  await signuppage.isemailmessageCorrect();
  await expect(page).toHaveURL(/.*sign_up/);
  
});

test('TC-03: Should sign in on GitLab with valid credentials', async ({ page }) => {
  const mainpage = new MainPage(page);
  const signuppage = new SignUpPage(page);
  
  await mainpage.clickLoginButton();
  await mainpage.clicksignupButton();
  await signuppage.clicksubmitButton();
  await signuppage.isemptynameVisible();
  await signuppage.isemptynameCorrect();
  await signuppage.isemptysurnameVisible();
  await signuppage.isemptysurnameCorrect();
  await expect(page).toHaveURL(/.*sign_up/);
  
});

test('TC-04: Should sign up on GitLab with Saleforce', async ({ page }) => {
  const mainpage = new MainPage(page);
  const signuppage = new SignUpPage(page);
  
  await mainpage.clickLoginButton();
  await mainpage.clicksignupButton();
  await signuppage.clicksaleforceButton();
  //await signuppage.issaleforceVisible();
  await expect(page).toHaveURL(/.*salesforce/);
  
});

