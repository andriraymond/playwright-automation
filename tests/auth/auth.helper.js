import { test, expect } from '@playwright/test';

    // DATA TEST
    const phoneNumber   = '085174452288'
    const password      = 'Qcaz123456'

export const login = async (page) => {
    //  OPEN BROWSER & NAVIGATE TO BASE URL
    await page.goto('/login');
    await expect(page).toHaveTitle(/Login/);
    
    // LOGIN PAGE - INPUT EMAIL/USERNAME AND PASSWORD
    await page.fill('input[id="inpEmail"]', phoneNumber);
    await page.fill('input[id="inpPassword"]', password);
    await page.locator('#btnMasuk').click();
};