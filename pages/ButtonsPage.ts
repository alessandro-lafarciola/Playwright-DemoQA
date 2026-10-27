import { Locator, Page, expect } from '@playwright/test';

export class ButtonsPage {
  private readonly page: Page;
  readonly doubleClickButton: Locator;
  readonly doubleClickOutput: Locator;
  readonly rightClickButton: Locator;
  readonly rightClickOutput: Locator;
  readonly clickButton: Locator;
  readonly clickOutput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.doubleClickButton = page.locator('//button[@id="doubleClickBtn"]');
    this.doubleClickOutput = page.locator('//p[@id="doubleClickMessage"]');
    this.rightClickButton = page.locator('//button[@id="rightClickBtn"]');
    this.rightClickOutput = page.locator('//p[@id="rightClickMessage"]');
    this.clickButton = page.locator('//button[normalize-space()="Click Me"]');
    this.clickOutput = page.locator('//p[@id="dynamicClickMessage"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/buttons');
  }

  async verifyDoubleClickBehaviour(): Promise<void> {
    await expect(this.doubleClickOutput).toBeHidden();
    await this.doubleClickButton.dblclick();
    await expect(this.doubleClickOutput).toHaveText('You have done a double click');
  }

  async verifyRightClickBehaviour(): Promise<void> {
    await expect(this.rightClickOutput).toBeHidden();
    await this.rightClickButton.click({ button: 'right' });
    await expect(this.rightClickOutput).toHaveText('You have done a right click');
  }

  async verifyClickBehaviour(): Promise<void> {
    await expect(this.clickOutput).toBeHidden();
    await this.clickButton.click();
    await expect(this.clickOutput).toHaveText('You have done a dynamic click');
  }
}
 