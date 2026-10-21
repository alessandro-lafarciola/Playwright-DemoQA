import { Locator, Page, expect } from '@playwright/test';

export class TextBoxPage {
  private readonly page: Page;
  readonly fullNameField: Locator;
  readonly emailField: Locator;
  readonly currentAddressField: Locator;
  readonly permanentAddressField: Locator;
  readonly submitButton: Locator;
  readonly fullNameOutput: Locator;
  readonly emailOutput: Locator;
  readonly currentAddressOutput: Locator;
  readonly permanentAddressOutput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameField = page.locator('//input[@id="userName"]');
    this.emailField = page.locator('//input[@id="userEmail"]');
    this.currentAddressField = page.locator('//textarea[@id="currentAddress"]');
    this.permanentAddressField = page.locator('//textarea[@id="permanentAddress"]');
    this.submitButton = page.locator('//button[@id="submit"]');
    this.fullNameOutput = page.locator('//p[@id="name"]');
    this.emailOutput = page.locator('//p[@id="email"]');
    this.currentAddressOutput = page.locator('//p[@id="currentAddress"]');
    this.permanentAddressOutput = page.locator('//p[@id="permanentAddress"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async fillFields(fullName: string = '', email: string = '', currentAddress: string = '', permanentAddress: string = ''): Promise<void> {
    await this.fullNameField.fill(fullName);
    await this.emailField.fill(email);
    await this.currentAddressField.fill(currentAddress);
    await this.permanentAddressField.fill(permanentAddress);
  }

  async checkOutputs(fullName: string = '', email: string = '', currentAddress: string = '', permanentAddress: string = ''): Promise<void> {
    // fullName
    if (fullName == '') {
      await expect(this.fullNameOutput).toBeHidden();
    } else {
      await expect(this.fullNameOutput).toHaveText('Name:' + fullName);
    }

    // email
    if (email == '') {
      await expect(this.emailOutput).toBeHidden();
    } else {
      await expect(this.emailOutput).toHaveText('Email:' + email);
    }

    // currentAddress
    if (currentAddress == '') {
      await expect(this.currentAddressOutput).toBeHidden();
    } else {
      await expect(this.currentAddressOutput).toHaveText('Current Address :' + currentAddress);
    }

    // permanentAddress
    if (permanentAddress == '') {
      await expect(this.permanentAddressOutput).toBeHidden();
    } else {
      await expect(this.permanentAddressOutput).toHaveText('Permananet Address :' + permanentAddress);
    }
  }
}
 