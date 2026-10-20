import { test, expect } from '@playwright/test';

test('check output when all fields are valid', async ({ page }) => {
  const fullNameField = page.locator('//input[@id="userName"]');
  const emailField = page.locator('//input[@id="userEmail"]');
  const currentAddressField = page.locator('//textarea[@id="currentAddress"]');
  const permanentAddressField = page.locator('//textarea[@id="permanentAddress"]');

  const submitButton = page.locator('//button[@id="submit"]')

  const fullNameOutput = page.locator('//p[@id="name"]')
  const emailOutput = page.locator('//p[@id="email"]')
  const currentAddressOutput = page.locator('//p[@id="currentAddress"]')
  const permanentAddressOutput = page.locator('//p[@id="permanentAddress"]')


  await page.goto('https://demoqa.com/text-box');

  await fullNameField.fill('Joe Doe');
  await emailField.fill('joe_doe@email.com');
  await currentAddressField.fill('Somehwere CLOSE');
  await permanentAddressField.fill('Somehwere FAR');

  await expect(fullNameOutput).toBeHidden();
  await expect(emailOutput).toBeHidden();
  await expect(currentAddressOutput).toBeHidden();
  await expect(permanentAddressOutput).toBeHidden();

  await submitButton.click();

  await expect(fullNameOutput).toBeVisible();
  await expect(emailOutput).toBeVisible();
  await expect(currentAddressOutput).toBeVisible();
  await expect(permanentAddressOutput).toBeVisible();
  
  await expect(fullNameOutput).toHaveText('Name:Joe Doe');
  await expect(emailOutput).toHaveText('Email:joe_doe@email.com');
  await expect(currentAddressOutput).toHaveText('Current Address :Somehwere CLOSE');
  await expect(permanentAddressOutput).toHaveText('Permananet Address :Somehwere FAR');

  await page.waitForTimeout(5000);

});

test('should checkoutput when email field is invalid', async ({ page }) => {
  const fullNameField = page.locator('//input[@id="userName"]');
  const emailField = page.locator('//input[@id="userEmail"]');

  const fullNameOutput = page.locator('//p[@id="name"]')
  const emailOutput = page.locator('//p[@id="email"]')
  const currentAddressOutput = page.locator('//p[@id="currentAddress"]')
  const permanentAddressOutput = page.locator('//p[@id="permanentAddress"]')
  
  const submitButton = page.locator('//button[@id="submit"]')

  await page.goto('https://demoqa.com/text-box');

// write a valid full name
  await fullNameField.fill('Joe Doe');

// write an invalid email
  await emailField.fill('joe_doe.email.com');

// check that none of the fields appear in the output
  await expect(fullNameOutput).toBeHidden();
  await expect(emailOutput).toBeHidden();
  await expect(currentAddressOutput).toBeHidden();
  await expect(permanentAddressOutput).toBeHidden();

// click Submit
  await submitButton.click();

// check that none of the fields appear in the
  await expect(fullNameOutput).toBeHidden();
  await expect(emailOutput).toBeHidden();
  await expect(currentAddressOutput).toBeHidden();
  await expect(permanentAddressOutput).toBeHidden();

// write a valid email
 await emailField.fill('joe_doe@email.com');

// click submit
await submitButton.click();

//check that only the full name and email appear in the output
  await expect(fullNameOutput).toHaveText('Name:Joe Doe');
  await expect(emailOutput).toHaveText('Email:joe_doe@email.com');

  await expect(currentAddressOutput).toBeHidden();
  await expect(permanentAddressOutput).toBeHidden();

  await page.waitForTimeout(5000);

});