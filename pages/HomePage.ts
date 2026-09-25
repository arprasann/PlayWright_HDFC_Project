import { Page, Locator } from '@playwright/test';

export class HomePage 
{
 readonly page: Page;
 readonly logoutButton: Locator;
 
 constructor(page: Page) 
 {
 this.page = page;
 this.logoutButton = page.locator('#logoutLink');
 
 }

async  clickonLogoutButton()
 {
       try {
         await this.logoutButton.click();
        } catch (error) {
            console.log(`Exception occurred while clicking on Logout Button: ${error}`);
            throw error;
        }
}
}
