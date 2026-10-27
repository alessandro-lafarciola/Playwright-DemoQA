import { test, expect } from '@playwright/test';
import { RadioButtonPage } from '../pages/RadioButtonPage.js';

test('should click yes and impressive radio buttons', {tag: ['@radio-button-page-a']}, async ({ page }) => {
  const radioButtonPage = new RadioButtonPage(page);
  await radioButtonPage.goto();

  // Check that the yes and impressive radio buttons are unchecked
  await expect(radioButtonPage.yesRadioButton).not.toBeChecked();
  await expect(radioButtonPage.impressiveRadioButton).not.toBeChecked();

  // Click the yes radio button
  await radioButtonPage.yesRadioButton.click();

  // Check that the yes radio button is checked, and the impressive is unchecked
  await expect(radioButtonPage.yesRadioButton).toBeChecked();
  await expect(radioButtonPage.impressiveRadioButton).not.toBeChecked();
  await expect(radioButtonPage.radioButtonOutput).toHaveText('You have selected Yes');

  // Click the impressive radio button
  await radioButtonPage.impressiveRadioButton.click();

  // Check that the impressive radio button is checked, and the yes is unchecked
  await expect(radioButtonPage.yesRadioButton).not.toBeChecked();
  await expect(radioButtonPage.impressiveRadioButton).toBeChecked();
  await expect(radioButtonPage.radioButtonOutput).toHaveText('You have selected Impressive');
});

test('should not click no radio button', {tag: ['@radio-button-page-b']}, async ({ page }) => {
  const radioButtonPage = new RadioButtonPage(page);
  await radioButtonPage.goto();

  await expect(radioButtonPage.noRadioButton).toBeDisabled();
  await expect(radioButtonPage.radioButtonOutput).toBeHidden();
});
 