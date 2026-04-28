
//import required modules
import fs from "fs";
import path from "path";
import { test } from "@playwright/test";
import { parse } from "csv-parse/sync";

//store data in CSV file in a variable

const csvrecords = parse(fs.readFileSync(path.join(__dirname, "../Data/userinfo.csv")), {
    columns: true,
    skip_empty_lines: true
});

//iterate through the data and run the test for each set of data

for (const record of csvrecords) {

    test(`Read from CSV file - ${record.username}`, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main")  
        await page.locator("#username").fill(record.username) 
        //await page.pause();
        await page.locator("#password").fill(record.password)
        await page.locator(".decorativeSubmit").click()
        await page.locator("//a[normalize-space()='CRM/SFA']").click()
        await page.locator("//a[text()='Create Lead']").click() 

        await page.waitForTimeout(2000);
        await page.locator("#createLeadForm_companyName").fill(record.company_name)
        await page.locator("#createLeadForm_firstName").fill(record.first_name)
        await page.locator("#createLeadForm_lastName").fill(record.last_name)
        await page.locator(".smallSubmit").click()
        await page.waitForTimeout(2000);
        await page.locator(`//a[text()='Edit']`).click()
        await page.locator("#updateLeadForm_companyName").fill(record.updated_company_name)
         await page.locator("#updateLeadForm_firstName").fill(record.updated_first_name)
         await page.locator("#updateLeadForm_lastName").fill(record.updated_last_name)
         await page.locator("(//input[@name='submitButton'])[1]").click()

        
    })
}
