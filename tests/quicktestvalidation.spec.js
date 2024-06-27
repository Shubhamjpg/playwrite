const { test, expect } = require('@playwright/test');


test('Verify to create sprint for NLU bot channel', async ({ page }) => {

  test.setTimeout(120000);
  await page.goto('https://pre-prod.dv1jnycq2lzwo.amplifyapp.com/#/login');
  
  await page.waitForSelector('input[type="email"]');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('sakshi.maheshwari+preproduser39@clarisys.com');
  
  await page.waitForSelector('input[type="password"]');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('Test@1234');
  
  await page.waitForSelector('button:has-text("Sign In")');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  //await page.waitForTimeout(10000);
  await page.goto('https://pre-prod.dv1jnycq2lzwo.amplifyapp.com/#/home');
  await page.waitForTimeout(10000);
  
  await page.waitForSelector('span:has-text("Dashboard")');
  await page.locator('span').filter({ hasText: 'Dashboard' }).click();
  
  await page.waitForSelector('text=Service');
  await page.getByText('Service', { exact: true }).click();
  
  await page.waitForSelector('role=link[name="+ Create Service"]');
  await page.getByRole('link', { name: '+ Create Service' }).click();
  
  await page.waitForSelector('role=textbox');
  await page.getByRole('textbox').click();

  const currentTime = await page.evaluate(() => {
    const now = new Date();
    return now.toISOString();
  });

  await page.getByRole('textbox').fill('service' + currentTime);
  
  await page.waitForSelector('role=button[name="Next"]');
  await page.getByRole('button', { name: 'Next' }).click();
  
  await page.waitForSelector('text=NLU BOT');
  await page.getByText('NLU BOT').click();
  
  await page.waitForSelector('role=button[name="Next"]', { timeout: 60000 }); // Increase timeout to 60 seconds
  await page.getByRole('button', { name: 'Next' }).click();
 // await page.waitForTimeout(100000);
  
  //await page.waitForSelector("Phone Number in International");
//  await page.getByText('Phone Number in International').click();

  //await page.getByPlaceholder('Enter phone Number').click();
  
  await page.getByPlaceholder('Enter phone Number').fill('+918534818441');
  
  await page.waitForSelector('role=button[name="Save"]');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForSelector('text=Script');
  await page.getByText('Script', { exact: true }).click();
  
  await page.waitForSelector('role=link[name="+ Create Script"]');
  await page.getByRole('link', { name: '+ Create Script' }).click();
  
  await page.waitForSelector('role=textbox');
  await page.getByRole('textbox').click();
  
  await page.getByRole('textbox').fill('script' + currentTime);
  
  await page.waitForSelector('role=button[name="Next"]');
  await page.getByRole('button', { name: 'Next' }).click();
  
  await page.waitForSelector('text=NLU BOT');
  await page.getByText('NLU BOT').click();
  
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Next' }).click();
  
  //await page.waitForSelector('app-form-input:has-text("Description") role=textbox');
  //await page.locator('app-form-input').filter({ hasText: 'Description' }).getByRole('textbox').click();
  
  await page.locator('app-form-input').filter({ hasText: 'Description' }).getByRole('textbox').fill('test2');
  
  //await page.waitForSelector('app-form-input:has-text("Expected Message (eg. from") role=textbox');
  await page.locator('app-form-input').filter({ hasText: 'Expected Message (eg. from' }).getByRole('textbox').click();
  
  await page.locator('app-form-input').filter({ hasText: 'Expected Message (eg. from' }).getByRole('textbox').fill('hello');
  
  //await page.waitForSelector('app-form-select:has-text("Reply Type SpeechDTMFAudio") role=combobox');
  await page.locator('app-form-select').filter({ hasText: 'Reply Type SpeechDTMFAudio' }).getByRole('combobox').selectOption('Speech');
  
  //await page.waitForSelector('app-form-input:has-text("DelayPause") role=textbox');
  await page.locator('app-form-input').filter({ hasText: 'DelayPause' }).getByRole('textbox').click();
  
  await page.locator('app-form-input').filter({ hasText: 'DelayPause' }).getByRole('textbox').fill('10');
  
  //await page.waitForSelector('.plus-icon');
  await page.locator('.plus-icon').click();
  
  //await page.locator('app-form-input').filter({ hasText: 'Description' }).getByRole('textbox').click();
  
  //await page.locator('app-form-input').filter({ hasText: 'Description' }).getByRole('textbox').fill('test3');
  
  //await page.locator('app-form-input').filter({ hasText: 'Description' }).getByRole('textbox').press('Tab');
  
  //await page.locator('app-form-input').filter({ hasText: 'Expected Message (eg. from' }).getByRole('textbox').fill('how are you');
  
  //await page.locator('app-form-select').filter({ hasText: 'Reply Type SpeechDTMFAudio' }).getByRole('combobox').selectOption('Speech');
  
  //await page.locator('app-form-input').filter({ hasText: 'DelayPause' }).getByRole('textbox').click();
  
  //await page.locator('app-form-input').filter({ hasText: 'DelayPause' }).getByRole('textbox').fill('10');
  
  //await page.locator('.plus-icon').click();
  
  await page.waitForSelector('role=button[name="Save"]');
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.waitForSelector('text=Test Method');
  await page.getByText('Test Method').click();
  
  await page.waitForSelector('text=Automated Testing');
  await page.getByText('Automated Testing').click();
  
  await page.waitForSelector('text=testsprint');
  await page.getByText('testsprint').click();
  
  await page.waitForSelector('role=button[name="Start"]');
  await page.getByRole('button', { name: 'Start' }).click();
  
  await page.waitForTimeout(100000);

  await browser.close();
});