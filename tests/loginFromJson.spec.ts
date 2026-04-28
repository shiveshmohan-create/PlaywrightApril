import test from "@playwright/test";
const jsondata = JSON.parse(JSON.stringify(require("../Data/testdata.json")));

for (const data of jsondata) {

    test(`Read from JSON file1 -${data.id}`, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main")

        await page.locator("#username").fill(data.username)
        await page.locator("#password").fill(data.password)

        await page.locator(".decorativeSubmit").click()
        await page.locator("//a[normalize-space()='CRM/SFA']").click()
        await page.locator("//a[text()='Create Lead']").click()
        await page.waitForTimeout(2000);
        await page.locator("#createLeadForm_companyName").fill(data.comp_name)
        await page.locator("#createLeadForm_firstName").fill(data.first_name)
        await page.locator("#createLeadForm_lastName").fill(data.last_name)
        await page.locator(".smallSubmit").click()
        await page.waitForTimeout(2000);
        await page.locator(`//a[text()='Edit']`).click()
        await page.locator("#updateLeadForm_companyName").fill(data.updated_comp_name)
         await page.locator("#updateLeadForm_firstName").fill(data.updated_first_name)
         await page.locator("#updateLeadForm_lastName").fill(data.updated_last_name)
         await page.locator("(//input[@name='submitButton'])[1]").click()


    })

}