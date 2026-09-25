import { Page, Locator } from '@playwright/test';

export class Tasks 
{
 readonly page: Page;
 readonly tasks: Locator;
 readonly filterTaskByName: Locator;
 readonly applyFilter: Locator;


 constructor(page: Page) 
 {
 this.page = page;
 this.tasks = page.locator("a[href='/tasks/otasklist.do']");
 this.filterTaskByName = page.locator("//input[@name='visiableFilterString']");
 this.applyFilter = page.locator("#tasksFilterSubmitButton")
 }



async  clickonTasks()
 {
      try {
            await this.tasks.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Tasks': ${error}`);
            throw error;
        }


}

async  enterFilterTaskByName(ftByName:string)
 {
      try {
            await this.filterTaskByName.fill(ftByName);
        } catch (error) {
            console.log(`Exception occurred while clicking 'Tasks': ${error}`);
            throw error;
        }


}

async  clickonApplyFilter()
 {
      try {
            await this.applyFilter.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'applyFilter': ${error}`);
            throw error;
        }
}
}
