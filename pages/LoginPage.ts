import { Page, Locator } from '@playwright/test';

export class LoginPage1 {

 readonly page: Page;
 readonly usernameTB: Locator;
 readonly passwordTB: Locator;
 readonly checkBox: Locator;
 readonly loginButton: Locator;


 constructor(page: Page) 
 {
 this.page = page;
 this.usernameTB = page.locator('#username');
 this.passwordTB = page.locator("//input[@name='pwd']");
 this.checkBox = page.locator("#keepLoggedInCheckBox")
 this.loginButton = page.locator('#loginButton');
 }

 async waitforsometime()
 {
    this.page.waitForTimeout(4000)
 }

 async  enterUserName(un : string)
 {
      try {
           await this.usernameTB.fill(un);
        } catch (error) {
            console.log(`Exception occurred while entering Username: ${error}`);
            throw error;
        }

 }

 async  enterPassword(pw : string)
 {
   try {
            await this.passwordTB.fill(pw);
        } catch (error) {
            console.log(`Exception occurred while entering Password: ${error}`);
            throw error;
        }
   
 }

 async  clickonCheckBox()
 {
    try {
            await this.checkBox.click();
        } catch (error) {
            console.log(`Exception occurred while cliking on the checkbox: ${error}`);
            throw error;
        }
    
}

async  clickonLoginButton()
 {
    try {
            await this.loginButton.click();
        } catch (error) {
            console.log(`Exception occurred while cliking on the LoginButton: ${error}`);
            throw error;
        }
}
}
