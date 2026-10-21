import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage.js';

test('should check output when all fields are valid', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);
  await textBoxPage.goto();
  await textBoxPage.fillFields('Joe Doe', 'joe_doe@email.com', 'CLOSE', 'FAR');
  await textBoxPage.checkOutputs();
  await textBoxPage.submitButton.click();
  await textBoxPage.checkOutputs('Joe Doe', 'joe_doe@email.com', 'CLOSE', 'FAR');
});

test('should check output when email field is invalid', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);
  await textBoxPage.goto();
  await textBoxPage.fillFields('Joe Doe', 'joe_doe!email.com');
  await textBoxPage.checkOutputs();
  await textBoxPage.submitButton.click();
  await textBoxPage.checkOutputs();
  await textBoxPage.fillFields('Joe Doe', 'joe_doe@email.com');
  await textBoxPage.submitButton.click();
  await textBoxPage.checkOutputs('Joe Doe', 'joe_doe@email.com');
});
 