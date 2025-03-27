import { test, expect } from '@playwright/test';
import { merchant } from '../../supports/merchant';
import dotenv from 'dotenv'

dotenv.config()

test('User can access add product page', async({ page }) => {

    await merchant(page, process.env.USER_PHONE, process.env.USER_PASSWORD)

    await page.getByRole('button', { name: 'Tambah', exact: true }).click()
    await page.getByRole('textbox', { name: 'Contoh : ABC001234 (Nomor' }).click()
    await page.getByRole('textbox', { name: 'Contoh : ABC001234 (Nomor' }).fill('Produk Test')
    await page.getByText('kategori* Pilih Kategori').click();

})
