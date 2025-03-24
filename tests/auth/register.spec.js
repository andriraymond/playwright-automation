import { test, expect } from '@playwright/test';

import { register } from '../../supports/auth';

test('fails - unable to register with all field empty', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, '', '', '', '', '', '')

    // VERIFY THAT WARNING ALERT IS APPEAR
    const warningText = await page.locator('#warningErrorText');
    await expect(warningText).toHaveText('Ada field yang belum terisi');

});

test('fails - unable to register with username fields empty', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, '', '0011223301', '', 'Qatest123456', 'Qatest123456', '')
    
    // VERIFY THAT WARNING ALERT IS APPEAR
    const warningText = await page.locator('#warningErrorText');
    await expect(warningText).toHaveText('Ada field yang belum terisi');

});

test('fails - cannot register with a username less than 3 characters', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, 'ab', '0011223301', '', 'Qatest123456', 'Qatest123456', '')

    // VERIFY THAT WARNING ALERT IS APPEAR
    const warningText = await page.locator('#warningErrorText');
    await expect(warningText).toHaveText('Nama lengkap minimal 3 karakter!');
    
});

test('fails - cannot register with invalid Username', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, '1nv4l1d', '0011223301', '', 'Qatest123456', 'Qatest123456', '')

    // VERIFY THAT WARNING ALERT IS APPEAR
    const warningText = await page.locator('#warningErrorText');
    await expect(warningText).toHaveText('Nama lengkap tidak valid!');

});

test('fails - cannot register with empty No Whatsapp fields', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, 'Sugeng', '', '', 'Qatest123456', 'Qatest123456', '')

    // VERIFY THAT WARNING ALERT IS APPEAR
    const warningText = await page.locator('#warningErrorText');
    await expect(warningText).toHaveText('Ada field yang belum terisi');

});

test('fails - unable to register with an invalid No Whatsapp less than 8 digits', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, 'Sugeng', '0011223', '', 'Qatest123456', 'Qatest123456', '')

    // VERIFY THAT WARNING ALERT IS APPEAR
    const warningText = await page.locator('#warningErrorText');
    await expect(warningText).toHaveText('No. Whatsapp minimal 8 digit!');

});

// test('fails - unable to register with No Whatsapp has been registered in the system', async ({ page }) => {
    
//     await register(page,
//     'Sugeng',                 
//     '0011223',       
//     '',                 
//     'Qatest123456',     
//     'Qatest123456',     
//     '')

//     // VERIFY THAT WARNING ALERT IS APPEAR
//     const warningText = await page.locator('#warningErrorText');
//     await expect(warningText).toHaveText('No. Whatsapp minimal 8 digit!');

// });

test('fails - unable to register with invalid Email format', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, 'Sugeng', '0011223301', 'wrongyopmail.com', 'Qatest123456', 'Qatest123456', '')

    // VERIFY THAT WARNING ALERT IS APPEAR
    const warningText = await page.locator('#warningErrorText');
    await expect(warningText).toHaveText('Format email salah!');

});

// test('fails - unable to register with Email has been registered in the system', async ({ page }) => {
    
//     await register(page,
//     'Sugeng',                 
//     '0011223301',       
//     registeredEmail,                 
//     'Qatest123456',     
//     'Qatest123456',     
//     '')

//     // VERIFY THAT WARNING ALERT IS APPEAR
//     const warningText = await page.locator('#warningErrorText');
//     await expect(warningText).toHaveText('Email telah terdaftar!');

// });

test('fails - unable to register with invalid password less than 8 characters', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, 'Sugeng', '0011223301', '', 'Qatest1', 'Qatest1', '')

    // VERIFY THAT WARNING ALERT IS APPEAR
    const warningText = await page.locator('#warningErrorText');
    await expect(warningText).toHaveText('Password minimal terdapat 8 karakter!');

});

test('fails - unable to register with password confirmation is different from the password', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, 'Sugeng', '0011223301', '', 'Qatest123456', 'Qatest1234', '')

    // VERIFY THAT WARNING ALERT IS APPEAR
    const warningText = await page.locator('#warningErrorText')
    await expect(warningText).toHaveText('Password tidak sama!')

});

test('fails - unable to register with empty password confirmation', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, 'Sugeng', '0011223301', '', 'Qatest123456', '', '')
    
    // VERIFY THAT WARNING ALERT IS APPEAR
    // const warningText = await page.locator('#passwordNotIdentical > .d-flex > .title-warning')
    const warningText = await page.locator('#warningErrorText')
    await expect(warningText).toHaveText('Password tidak sama!')

});

test('fails - unable to register with empty password confirmationl', async ({ page }) => {
    
    // FILL FOLLOWING : NAMA LENGKAP, NO WHATSAPP , EMAIL , PASSWORD , KONFIRMASI PASSWORD, KODE REFFERAL
    await register(page, 'Sugeng', '0011223301', 'demo99@yopmail.com', 'Qatest123456', '', '')

    // VERIFY THAT WARNING ALERT IS APPEAR
    // const warningText = await page.locator('#passwordNotIdentical > .d-flex > .title-warning')
    const warningText = await page.locator('#warningErrorText')
    await expect(warningText).toHaveText('Password tidak sama!')

});