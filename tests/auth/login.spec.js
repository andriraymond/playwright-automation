import { test, expect } from '@playwright/test';

import { login } from '../../supports/auth';

test('User cannot login with empty phone and password', async ({ page }) => {
    await login(page, '', '')
});

test('User cannot login with empty phone', async ({ page }) => {
    await login(page, '', 'Qcaz123456')
});

test('User cannot login with empty password', async ({ page }) => {
    await login(page, '085174452288', '')
});

test('User cannot login with wrong phone', async ({ page }) => {
    await login(page, '085174452287', 'Qcaz123456')
});

test('User cannot login with wrong password', async ({ page }) => {
    await login(page, '085174452288', 'Qcaz12345678')
});

test('User can login with valid credentials', async ({ page }) => {
    await login(page, '085174452288', 'Qcaz12345678')
});