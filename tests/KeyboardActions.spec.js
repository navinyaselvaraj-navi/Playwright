import { test } from "@playwright/test";

test("keyboard actions",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/")
    await page.getByPlaceholder("Enter your name").click()
    await page.keyboard.insertText("Navinya")
    await page.keyboard.down("Space")
    await page.keyboard.up("Space")
    await page.keyboard.down("S")
    await page.keyboard.up("S")
    await page.keyboard.press('Tab')
    await page.keyboard.insertText("navinyaselvaraj@gmail.com")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await page.locator("//span[@class='absolute text")
    await page.waitForTimeout(2000)
})

test("keyboard action scroll",async({page})=>{
await page.goto("https://www.amazon.in/")
await page.waitForURL("https://www.amazon.in/")
await page.waitForLoadState('load')
for (let i = 1; i <=25; i++) {
   await page.keyboard.press('ArrowDown')  
}
await page.waitForTimeout(2000)
})