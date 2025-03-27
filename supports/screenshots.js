import { test, expect } from '@playwright/test'

export const screenshots = async (page, testInfo) => {
    // Format waktu: 22-04-2025_103001
    const now = new Date();
    const timestamp = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}_${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}01`;

    // Nama file screenshot sesuai dengan test case + timestamp
    await page.screenshot({ path: `screenshots/${testInfo.title}_${timestamp}.png`, fullPage: true });
}