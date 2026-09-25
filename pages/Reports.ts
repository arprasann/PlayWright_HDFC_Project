import { Page, Locator } from '@playwright/test';

export class ReportsDownload 
{
 readonly page: Page;
 readonly reports: Locator;
 readonly newReports: Locator;
 readonly configureReports: Locator;
 readonly generateHTMLReports: Locator;
 readonly exportToCSV: Locator;


 constructor(page: Page) 
 {
 this.page = page;
 this.reports = page.getByText("REPORTS");
 this.newReports = page.locator("//span[text()='New Report']");
 this.configureReports = page.locator("#configureReportParametersButton")
 this.generateHTMLReports = page.locator("(//span[text()='Generate HTML Report'])[2]");
 this.exportToCSV = page.locator("//td[contains(text(),'Export to CSV')]").first()
 }

async  clickonReports()
 {
    await this.reports.click()
}

async clickonNewReports()
 {
    await this.newReports.click()
}

async clickonConfigureReports()
 {
    await this.configureReports.click()
}

async clickonGenerateHTMLReports()
 {
    try{
    await this.generateHTMLReports.click()
    }
    catch
    {
        console.log("Error occured while clicking on the GenerateHTML reports button")
    }

}

async clickonExportToCSV()
 {
    await this.exportToCSV.click()
}
}
