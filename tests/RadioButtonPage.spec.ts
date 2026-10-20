import { test, expect } from '@playwright/test';

test('should click yes and impressive radio buttons', async ({ page }) => {
  const yesRadioButton = page.locator('//input[@id="yesRadio"]');
  const impressiveRadioButton = page.locator('//input[@id="impressiveRadio"]');
  const radioButtonOutput = page.locator('//p[@class="mt-3"]');

  await page.goto('https://demoqa.com/radio-button');

  // Check that the yes and impressive radio buttons are unchecked
  await expect(yesRadioButton).not.toBeChecked();
  await expect(impressiveRadioButton).not.toBeChecked();

  // Click the yes radio button
  await yesRadioButton.click();

  // Check that the yes radio button is checked, and the impressive is unchecked
  await expect(yesRadioButton).toBeChecked();
  await expect(impressiveRadioButton).not.toBeChecked();
  await expect(radioButtonOutput).toHaveText('You have selected Yes');

  // Click the impressive radio button
  await impressiveRadioButton.click();

  // Check that the impressive radio button is checked, and the yes is unchecked
  await expect(yesRadioButton).not.toBeChecked();
  await expect(impressiveRadioButton).toBeChecked();
  await expect(radioButtonOutput).toHaveText('You have selected Impressive');

  await page.waitForTimeout(3000);
});

test('should not click no radio button', async ({ page }) => {
  const noRadioButton = page.locator('//input[@id="noRadio"]');
  const radioButtonOutput = page.locator('//p[@class="mt-3"]');

  await page.goto('https://demoqa.com/radio-button');

  await expect(noRadioButton).toBeDisabled();
  await expect(radioButtonOutput).toBeHidden();

  await page.waitForTimeout(3000);
});
 