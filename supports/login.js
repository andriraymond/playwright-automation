import { test, expect } from '@playwright/test';

test.only('User can login with valid credential', async ({ page }) => {
    // Go to baseUrl
       
    await page.goto('/login');

    // LOGIN PAGGE
    await expect(page).toHaveTitle(/Login/);
    await page.getByRole('textbox', { name: 'No. Whatsapp/Email' }).fill('085374452288');
    await page.getByRole('textbox', { name: 'Password' }).fill('Qcaz123456');
    // await page.getByText('Masuk', { exact: true }).click();
    await page.locator('#btnMasuk').click();
    
    // Homepage ~ Landing General
    await page.locator('#close-banner-promo').click();
    
});