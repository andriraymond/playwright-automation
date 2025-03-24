import { test, expect } from '@playwright/test'

import { login } from '../../supports/auth'

    // DATA TEST
    // const phoneNumber   = '085174452288'
    // const password      = 'Qcaz123456'

test('User can access homepage', async ({ page }) => {   
    
    //  CALL THE LOGIN FUNCTIONAL
    await login(page, '085374452288', 'Qcaz123456')

    // HOMEPAGE LANDING - VERIFY LOGIN SUCCES AND CLOSE HOMEPAGE POP UP
    await expect(page).toHaveTitle(/Home/)
    await page.locator('#close-banner-promo').click()

});