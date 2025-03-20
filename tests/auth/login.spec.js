import { test, expect } from '@playwright/test';

    // DATA TEST
    const phoneNumber   = '085174452288'
    const password      = 'Qcaz123456'

test('User can login with valid credential', async ({ page }) => {   
    
    //  OPEN BROWSER & NAVIGATE TO BASE URL
    await page.goto('/login');
    await expect(page).toHaveTitle(/Login/);

    // LOGIN PAGE - INPUT EMAIL/USERNAME AND PASSWORD
    await page.fill('input[id="inpEmail"]', phoneNumber);
    await page.fill('input[id="inpPassword"]', password);
    await page.locator('#btnMasuk').click();

    // HOMEPAGE LANDING - VERIFY LOGIN SUCCES AND CLOSE BANNER PROMO POP UP
    await expect(page).toHaveTitle(/Home/);
    await page.locator('#close-banner-promo').click();

});