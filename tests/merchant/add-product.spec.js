import { test, expect } from '@playwright/test';

test('User can access add product page', async({ page }) => {

    await page.getByRole('button', { name: 'buttonAdd', exact: true }).click()
    await page.getByRole('textbox', { name: 'Contoh : ABC001234 (Nomor' }).click()
    await page.getByRole('textbox', { name: 'Contoh : ABC001234 (Nomor' }).fill('Produk Test')
    await page.getByText('kategori* Pilih Kategori').click();

})
