import { test, expect } from '@playwright/test'

test('First Playwright test', async ({page, browser}) =>
{
    // new
    

    await page.goto('https://rahulshettyacademy.com/loginpagePractise')
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

    const userName  = page.locator('#username')
    const signIn    = page.locator('#signInBtn')    
    const cardTitles = page.locator('.card-body a')

    await userName.fill('rahulshetty')
    await page.locator('#password').fill('learning')
    await signIn.click()
    
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')

    // console.log(await page.locator('.alert alert-danger col-md-12').textContent())
    // await page.locator(".alert alert-danger")

    await userName.fill("")
    await userName.fill('rahulshettyacademy')
    await signIn.click()
    console.log(await page.locator(".card-body a").nth(0).textContent())
    
    // console.log(await cardTitles.first().textContent());
    // console.log(await cardTitles.nth(1).textContent());

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);


})