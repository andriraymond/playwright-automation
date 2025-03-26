import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

import { merchant } from '../../supports/merchant';
import { screenshot } from '../../supports/screenshots'

dotenv.config();

test('User can access merchant landing' , async ({ page }, testInfo) => {

    // await merchant(page, '085174452288s', 'Qcaz123456')
    await merchant(page, process.env.USER_PHONE, process.env.USER_PASSWORD)
    
    // Format waktu: 22-04-2025_103001
    await screenshot()
    
});

// test('Ensure unregistered users cannot access ', async ({ page }) => {
//     await merchant(page, unregisAccount, )
// })