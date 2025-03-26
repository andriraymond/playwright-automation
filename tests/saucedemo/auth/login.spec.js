import { test, expect } from '@playwright/test'

import { login } from '../../../supports/saucedemo'

test('User cannot login with empty username and password', async ({ page }) => {
    await login(page, '', '')
    const warningText = await page.locator('h3')
    await expect(warningText).toContainText('Username is required')
})

test('User cannot login with empty password', async ({ page }) => {
    await login(page, 'standard_user', '')
    const warningText = await page.locator('h3')
    await expect(warningText).toContainText('Password is required')
})

test('User cannot login with invalid credentials', async ({ page }) => {
    await login(page, 'standard_user', 'invalidpassword')
    const warningText = await page.locator('h3')
    await expect(warningText).toContainText('Username and password do not match any user in this service')
})

test('User cannot login with invalid username credentials', async ({ page }) => {
    await login(page, 'invalid', 'secret_sauce')
    const warningText = await page.locator('h3')
    await expect(warningText).toContainText('Username and password do not match any user in this service')
})

test('User cannot login with valid credentials', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce')
    const warningText = await page.locator('.title')
    await expect(warningText).toContainText('Products')
})

test('User cannot login with valid credentials and logout', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce')
    const warningText = await page.locator('.title')
    await expect(warningText).toContainText('Products')
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveTitle(/Swag Labs/)

})

// test('User cannot login with empty phone and passwords', async ({ page }) => {
//     await login(page, 'standard_user', 'secret_sauce')
// })