import { test, expect } from '@playwright/test';

export const login = async (page, phoneNumber, password) => {

    //  OPEN BROWSER & NAVIGATE TO BASE URL
    await page.goto('/login')
    await expect(page).toHaveTitle(/Login/)
    
    // LOGIN PAGE - INPUT EMAIL/USERNAME AND PASSWORD
    await page.fill('input[id="inpEmail"]', phoneNumber)
    await page.fill('input[id="inpPassword"]', password)
    await page.locator('#btnMasuk').click()
    
    // // HOMEPAGE LANDING - VERIFY LOGIN SUCCES AND CLOSE HOMEPAGE POP UP
    // await expect(page).toHaveTitle(/Home/)
    // await page.locator('#close-banner-promo').click()
    
};

export const register = async (page, username, phoneNumber, email, password, passwordConfirmation, refferalCode) => {
    
    //  OPEN BROWSER & NAVIGATE TO BASE URL
    await page.goto('/register')
    await expect(page).toHaveTitle(/Register/)
    
    // REGISTER PAGE - INPUT ALL DATA
    await page.fill('input[id="inpUsername"]', username)
    await page.fill('input[id="inpNomorTelepon"]', phoneNumber)
    await page.fill('input[id="inpEmail"]', email)
    await page.fill('input[id="inpPassword"]', password)
    await page.fill('input[id="inpKonfirmasiPassword"]', passwordConfirmation)
    await page.fill('input[id="inpReferralCode"]', refferalCode)
    // await page.locator('#lblDaftar').click()
    await page.click('#lblDaftar')

};