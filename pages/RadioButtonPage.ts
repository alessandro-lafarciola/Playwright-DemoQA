import { Locator, Page, expect } from '@playwright/test';

export class RadioButtonPage {
  private readonly page: Page;
  readonly yesRadioButton: Locator;
  readonly impressiveRadioButton: Locator;
  readonly noRadioButton: Locator;
  readonly radioButtonOutput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.yesRadioButton = page.locator('//input[@id="yesRadio"]');
    this.impressiveRadioButton = page.locator('//input[@id="impressiveRadio"]');
    this.noRadioButton = page.locator('//input[@id="noRadio"]');
    this.radioButtonOutput = page.locator('//p[@class="mt-3"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/radio-button');
  }
}
 