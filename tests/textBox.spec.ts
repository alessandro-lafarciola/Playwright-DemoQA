import { test, expect, Locator } from '@playwright/test';

test('Verify submit button works', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
});
