import test, { chromium, firefox } from "@playwright/test";

test('Launch browser',async()=>{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in/")
    let page_title = page.title()
    let page_url =  page.url()
    console.log("The page tile for Redbus is :",page_title)
    console.log("Page URL is: ",page_url)



})

test('Launch browser1',async()=>{

    const browser = await firefox.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.flipkart.com/")
    let page_title = await page.title()
    let page_url =  page.url()
    console.log("The page tilte for flipkart is :",page_title)
    console.log("Page URL is: ",page_url)



})