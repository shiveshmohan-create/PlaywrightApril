import test, { expect } from "@playwright/test";

test("Identify using CSS selectors",async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/logout')
    //await page.waitForTimeout(2000)
    //await page.locator('id=username').click()
    await page.locator('id=username').fill('demosalesmanager')
    //await page.locator('id=password').click()
    await page.locator('id=password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.waitForTimeout(2000)
    //await page.locator('label:text-is("CRM/SFA")').click()
    //await page.getByLabel('CRM/SFA').click()
    await page.locator('text=CRM/SFA').click()
    await page.waitForTimeout(2000)
    //await page.locator('text=Create Lead').click()
    await page.locator(`//a[text()='Create Lead']`).click()
    await page.locator('#createLeadForm_companyName').fill('Data1 Corporation')
    await page.locator('#createLeadForm_firstName').fill('abc')
    //createLeadForm_lastName
    await page.locator('#createLeadForm_lastName').fill('Mohan')
    //await page.waitForTimeout(2000)
    //createLeadForm_personalTitle
    await page.locator('#createLeadForm_personalTitle').fill('Mr.')
    //page.selectOption('.createLeadForm_dataSourceId',{index:1})
    //await page.locator('.createLeadForm_dataSourceId').selectOption({index: 2})
   // await page.locator('.createLeadForm_dataSourceId').click()
   //===to be discussed below 2 lines of code
    page.locator('#createLeadForm_dataSourceId').selectOption("Conference")
    //await dropdown1.selectOption("Conference")
    await page.locator('.smallSubmit').click()
    await page.waitForTimeout(2000)
    await page.locator('#viewLead_firstName_sp').isVisible()
    
    //await expect(page.getByText('#viewLead_firstName_sp')).toBeVisible();

 
    

})