/**
 * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 */

import { test, expect } from '@playwright/test';
import { LoginPage1 } from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import { DataProvider } from '../utils/dataProviders';

let config: TestConfig;
let loginPage: LoginPage1;
let dataProvider: DataProvider;

//Load JSON test data logindata.json

const jsonPath="testData/logindata.json";
const jsonLoginPageData=DataProvider.getTestDataFromJsonFile(jsonPath);

// This hook runs before each test
test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load config (URL, credentials)
  await page.goto(config.appUrl); // Navigate to base URL

  // Initialize page objects
  loginPage = new LoginPage1(page);
});

// Optional cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close(); // Close browser tab (good practice in local/dev run)
});



for(const data of jsonLoginPageData)
{
   test(`Login Test with JSON Data: ${data.testName} @sanity @datadriven`, async({page})=>{

        // const config = new TestConfig(); // create instance
        // await page.goto(config.appUrl);    // getting appURL from test.config.ts file


         //Enter valid credentials and log in
    await loginPage.enterUserName(data.username)
    await loginPage.enterPassword(data.password)
    await page.waitForTimeout(3000)
    await loginPage.clickonLoginButton()
    await page.waitForTimeout(3000)
  
    })

}
