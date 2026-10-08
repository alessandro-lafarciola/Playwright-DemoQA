import { test, expect } from '@playwright/test';

test('check output when all fields are valid', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
});
