import { test, expect } from '@playwright/test';

import { login } from '../auth/auth.helper';

    // DATA TEST
    // const phoneNumber   = '085174452288'
    // const password      = 'Qcaz123456'

test.only('User can access homepage', async ({ page }) => {   
    
    //  CALL THE LOGIN FUNCTIONAL
    await login(page);

    // HOMEPAGE LANDING - VERIFY LOGIN SUCCES AND CLOSE HOMEPAGE POP UP
    await expect(page).toHaveTitle(/Home/);
    await page.locator('#close-banner-promo').click();

});