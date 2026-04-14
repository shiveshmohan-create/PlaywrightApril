import test from "@playwright/test";

test(`Selector check`,async({page})=>{
    page.goto("https://www.leafground.com/select.xhtml")
    await page.selectOption(".ui-selectonemenu",{index:1})
    await page.waitForTimeout(3000)

    console.log("-----checking count now-------")

    let count = await page.locator(".ui-selectonemenu").count()
    console.log(count)
})