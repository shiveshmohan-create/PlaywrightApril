import test from "@playwright/test";

//import test from "node:test";

// test(`Learn CSS locator`,async({page})=>{
//     page.goto("https://login.salesforce.com/?locale=ca")
//     await page.locator("#username").fill("dilipkumar.rajendra@testleaf.com")
//     await page.locator("id=password").fill("Testleaf@2025")
//     await page.locator('#Login').click()
//     await page.waitForTimeout(30000)
// })

test('Learn locators using basic Xpath',async({page})=>{
    page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator(`//input[@name='USERNAME']`).fill('demosalesmanager')
    await page.locator(`//input[@name='PASSWORD']`).fill('crmsfa')
    await page.locator(`//input[@class='decorativeSubmit']`).click()
})