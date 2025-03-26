import { test, expect } from '@playwright/test';

export const login = async (page, username, password) => {

    //  OPEN BROWSER & NAVIGATE TO BASE URL
    await page.goto('https://www.saucedemo.com')
    await expect(page).toHaveTitle(/Swag Labs/)
    
    // LOGIN PAGE - INPUT EMAIL/USERNAME AND PASSWORD
    await page.fill('input[id="user-name"]', username)
    await page.fill('input[id="password"]', password)
    await page.locator('#login-button').click()
    
    // // HOMEPAGE LANDING - VERIFY LOGIN SUCCES AND CLOSE HOMEPAGE POP UP
    // await expect(page).toHaveTitle(/Home/)
    // await page.locator('#close-banner-promo').click()
    
};