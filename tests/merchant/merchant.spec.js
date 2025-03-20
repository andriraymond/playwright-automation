import { test, expect } from '@playwright/test';

import { login } from '../../supports/auth';

import { merchant } from '../../supports/merchant';

const phoneNumber = '085374452288';
const password = 'Qcaz123456';

test('User can access merchant landing' , async ({ page }) => {

    await merchant(page, phoneNumber, password)

});