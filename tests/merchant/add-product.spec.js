import { test, expect } from '@playwright/test';
import { merchant } from '../../supports/merchant';

// Test Data
// const phoneNumber = '085374452288';
// const password = 'Qcaz123456';

test('User can access add product page', async({ page }) => {

    await merchant(page, phoneNumber, password)

    await page.getByRole('button', { name: 'buttonAdd', exact: true }).click()
    await page.getByRole('textbox', { name: 'Contoh : ABC001234 (Nomor' }).click()
    await page.getByRole('textbox', { name: 'Contoh : ABC001234 (Nomor' }).fill('Produk Test')
    await page.getByText('kategori* Pilih Kategori').click();

})
