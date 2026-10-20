import { test, expect } from '@playwright/test';

test('should double click the button', async ({ page }) => {
    const doubleClickButton = page.locator('//button[@id="doubleClickBtn"]');
    const doubleClickOutput = page.locator('//p[@id="doubleClickMessage"]');


    await page.goto('https://demoqa.com/buttons');

    await expect(doubleClickOutput).toBeHidden();
    await doubleClickButton.dblclick();
    await expect(doubleClickOutput).toHaveText('You have done a double click');

    await page.waitForTimeout(5000);

});

test('should right click the button', async ({ page }) => {
    const rightClickButton = page.locator('//button[@id="rightClickBtn"]');
    const rightClickOutput = page.locator('//p[@id="rightClickMessage"]');

    await page.goto('https://demoqa.com/buttons');

    await expect(rightClickOutput).toBeHidden();
    await rightClickButton.click({ button: 'right'});
    await expect(rightClickOutput).toHaveText('You have done a right click');

    await page.waitForTimeout(5000);

});
// button has a new variable every time we load the page, that is why it is not executed
test('should click the button', async ({ page }) => {
    const clickButton = page.locator('//button[normalize-space()="Click Me"]');
    const clickOutput = page.locator('//p[@id="dynamicClickMessage"]');

    await page.goto('https://demoqa.com/buttons');

    await expect(clickOutput).toBeHidden();
    await clickButton.click();
    await expect(clickOutput).toHaveText('You have done a dynamic click');

    await page.waitForTimeout(5000);

});