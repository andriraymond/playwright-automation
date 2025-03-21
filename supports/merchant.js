import { test, expect } from '@playwright/test'

import { login } from './auth';

export const merchant = async (page, phoneNumber, password) => {

    // CALL THE LOGIN FUNCTIONAL
    await login(page, phoneNumber, password)

    // HOMEPAGE LANDING - VERIFY LOGIN SUCCES AND CLOSE HOMEPAGE POP UP
    await expect(page).toHaveTitle(/Home/)
    await page.locator('#close-banner-promo').click() 
    
    // GO TO SELLER DASHBOARD
    await expect(await page.getByRole('banner').getByText('Jadi Penjual')).toBeVisible()
    await page.getByRole('banner').getByText('Jadi Penjual').click()
    await page.getByText('Publikasi produk gratis di $merchants$! Bergabung dan jangkau jutaan pelanggan!').click()

    // // VERIFY THAT USER CAN ACCESS DASHBOARD
    await expect(page).toHaveTitle(/Seller/)

    await page.getByRole('navigation').getByText('kelola produk').click()
    await page.getByRole('navigation').getByText('daftar produk').click()
};