import { test, expect } from '@playwright/test'

test.only('Register account', async ({page, browser}) =>
{
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.locator('.text-reset').click()

    const userName = page.locator('#firstName')
    const lastName = page.locator('#lastName')
    const email = page.locator('#userEmail')
    const phoneNumber = page.locator('#userMobile')
    const dropdownOccuptaion = page.locator('.custom-select')
    // const Doctor = page.getByText('Doctor')
    // const Doctor = page.locator('option[value="1: Doctor"]');
    const Doctor = page.locator('option', { hasText: 'Doctor' });

    const password = page.locator('#userPassword')
    const passwordConfirmation = page.locator('#confirmPassword')
    const btnRegister = page.locator('#login')

    // STEP TEST

    await userName.fill('John')
    await lastName.fill('Doee')
    await email.fill('johndoe11@yopmail.com')
    await phoneNumber.fill('6281234567')
    await dropdownOccuptaion.click()
        // await Doctor.click()
        await page.selectOption('#user-role', { value: '1: Doctor' });

    await password.fill('Password123')
    await passwordConfirmation.fill('Password123')
    await btnRegister.click()
})