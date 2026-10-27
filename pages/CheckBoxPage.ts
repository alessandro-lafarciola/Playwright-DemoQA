import { Locator, Page, expect } from '@playwright/test';

export class AutoCompletePage {
  private readonly page: Page;
  readonly resultOutput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultOutput = page.locator('//div[@id="result"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/checkbox');
  }
}
 