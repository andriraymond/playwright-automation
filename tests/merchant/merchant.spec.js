import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

import { merchant } from '../../supports/merchant';
// import { screenshots } from '../../supports/screenshots'

dotenv.config();

test('User can access merchant landing' , async ({ page }, testInfo) => {

    // await merchant(page, '085174452288s', 'Qcaz123456')
    await merchant(page, process.env.USER_PHONE, process.env.USER_PASSWORD)
    
    // Format waktu: 22-04-2025_103001
    // await screenshots()
    const now = new Date();
    const timestamp = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}_${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}01`;

    // Nama file screenshot sesuai dengan test case + timestamp
    await page.screenshot({ path: `screenshots/${testInfo.title}_${timestamp}.png`, fullPage: true });
    
});

// test('Ensure unregistered users cannot access ', async ({ page }) => {
//     await merchant(page, unregisAccount, )
// })