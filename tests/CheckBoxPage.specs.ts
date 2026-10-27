import { test, expect } from '@playwright/test';
import { CheckBoxPage } from '../pages/CheckBoxPage.js';

test('...', {tag: ['@check-box-page', '@check-box-page-a']}, async ({ page }) => {
  const checkBoxPage = new CheckBoxPage(page);
  await checkBoxPage.goto();



});
 