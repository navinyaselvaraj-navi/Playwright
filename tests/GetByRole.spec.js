import {test} from "@playwright/test";
test("getbyRole",async({page})=>{
    await page.goto("https://www.shoppersstack.com/");
    await page.getByRole('button',{name:"Login"}).click();
    await page.getByRole('textbox',{name:"Email"}).fill("navikutty711@gmail.com");
    await page.getByRole('textbox',{name:"Password"}).fill("Clifford@24");
    await page.getByRole('button',{name:"Login"}).click();
    await page.getByAltText("Apple AirPods (2nd Generation)").click();
    await page.getByRole('button',{name:"add to cart"}).click();
    // await page.getByTestId('ShoppingCartOutlinedIcon').click();
     await page.locator('#cart').click();
})