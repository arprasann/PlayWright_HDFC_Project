/**
 * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Click on Logout Button
 */

import { test, expect} from '@playwright/test';
import { LoginPage1 } from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { Tasks } from '../pages/Tasks';
import { ReportsDownload } from '../pages/Reports';

let config: TestConfig;
let logPage: LoginPage1;
let homePage: HomePage;
let tasks : Tasks;
let reports : ReportsDownload;

// This hook runs before each test
test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load config (URL, credentials)
  await page.goto(config.appUrl); // Navigate to base URL

  // Initialize page objects
  logPage = new LoginPage1(page);
  homePage = new HomePage(page);
  reports = new ReportsDownload(page);
});

// Optional cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close(); // Close browser tab (good practice in local/dev run)
});


test('Validate Reports Page @master @sanity @regression',async({ page })=>{

    //Enter valid credentials and log in
    await logPage.enterUserName(config.username)
    await logPage.enterPassword(config.password)
    await logPage.clickonLoginButton()

    await logPage.waitforsometime();
await reports.clickonReports();

await reports.clickonNewReports();

await reports.clickonConfigureReports();

await reports.clickonGenerateHTMLReports();

await reports.clickonExportToCSV();

 await page.waitForTimeout(10000);

     await homePage.clickonLogoutButton();


})
