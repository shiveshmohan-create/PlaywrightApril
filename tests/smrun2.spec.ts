import test, { chromium, firefox } from "@playwright/test";

test("Launch browser",async()=>{

    let browser = await chromium.launch({headless:false})
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.google.com")
    
})

test ('Launch ff browswer',async()=>{

    let browser = await firefox.launch({headless:false})
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.facebook.com")

})

console.log("---------------using fixtures nows-------------------")

test("Launch using fixtures",async({page})=>{
 await page.goto("https://www.google.com")

})