const { test, expect } = require('@playwright/test');


test('Verify to create sprint for Email (sub channel Email) channel', async ({ page }) => {

  //page.setDefaultTimeout(60000);
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
  //await page.waitForTimeout(100000);
  //await page.waitForTimeout(10000);
  await page.goto('https://pre-prod.dv1jnycq2lzwo.amplifyapp.com/#/home');
 // await page.waitForTimeout(100000);
  
  //await page.waitForSelector('span:has-text("Dashboard")');
  //await page.locator('span').filter({ hasText: 'Dashboard' }).click({delay:90000});
  
  await page.waitForSelector('text=Service');
  await page.getByText('Service', { exact: true }).click();
  
  //await page.waitForSelector('role=link[name="+ Create Service"]',{ delay: 60000 });
  await page.getByRole('link', { name: '+ Create Service' }).click();
  
  await page.waitForSelector('role=textbox');
  await page.getByRole('textbox').click();

  const currentTime = await page.evaluate(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = String(now.getFullYear()).slice(2);
    return hours + minutes + seconds + month + day + year;
  });

  await page.getByRole('textbox').fill('emailservice' + currentTime);
  await page.getByRole('button', { name: 'Next' }).click({delay:10000});
  await page.getByText('Email').click({timeout:50000});
  //await page.getByText('Email').nth(1).click();
  await page.getByText('Five9 Email').click();
  await page.getByText('Email').nth(1).click();
  await page.getByRole('button', { name: 'Next' }).click();
  //await page.locator('.header').screenshot({ path: 'screenshot.png' });
 // await page.setDefaultTimeout(100000);
  //await page.locator('div').filter({ hasText: /^Email Id \*Required$/ }).first().click();
  //await page.waitForTimeout(100000);
  //await page.locator('form').click({timeout:50000});
  //await page.locator('.active-step').click();
  await page.getByPlaceholder('Enter Email').click();
  await page.getByPlaceholder('Enter Email').click();
 // await page.locator('.header').screenshot({ path: 'screenshot.png' });
  await page.getByPlaceholder('Enter Email').fill(currentTime+'shuba3@gmail.com');
  await page.getByRole('button', { name: 'Save' }).click({delay:50000});
  await page.getByText('Script', { exact: true }).click({delay:50000});
  await page.getByRole('link', { name: '+ Create Script' }).click({timeout:90000});
  await page.getByRole('textbox').click({delay:80000});
  await page.getByRole('textbox').fill('emailscript' + currentTime);
  await page.getByRole('button', { name: 'Next' }).click({delay:90000});
  await page.getByText('Email').click({delay:80000});
  //await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click({delay:80000});
  await page.locator('app-form-input').filter({ hasText: 'Description' }).getByRole('textbox').click();
  await page.locator('app-form-input').filter({ hasText: 'Description' }).getByRole('textbox').fill('first');
  await page.locator('app-form-input').filter({ hasText: 'Expected Message (eg. from' }).getByRole('textbox').click();
  await page.locator('app-form-input').filter({ hasText: 'Expected Message (eg. from' }).getByRole('textbox').fill('hello');
  await page.locator('.plus-icon').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Test Method').click();
  //await page.getByText('Automated Testing').click();
  await page.getByText('Automated Testing', { exact: true }).click();
  await page.getByRole('link', { name: '+ Create Sprint by Template' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('emailscript' + currentTime);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('Email').click({timeout:50000});
  await page.getByText('Email', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('app-form-input').filter({ hasText: 'Duration (In Seconds) *' }).getByRole('textbox').click();
  await page.locator('app-form-input').filter({ hasText: 'Duration (In Seconds) *' }).getByRole('textbox').fill('10');
  await page.getByPlaceholder('Search Service').click();
  //await page.getByPlaceholder('Search Service').fill('em');
  await page.getByText("emailservice"+currentTime).click();
  await page.getByPlaceholder('Search Script').click({timeout:10000});
  await page.getByText('emailscript' + currentTime).click({timeout:10000});
  await page.getByPlaceholder('Search Email').click();
  await page.getByText('Sakshi.Maheshwari@clarisys.com').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Search Success Criteria').click();
  await page.getByText('Confidence', { exact: true }).click();
  await page.getByPlaceholder('Search Criteria').click();
  await page.getByText('>50').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Now' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByText('success').click();
  await page.getByText('Back').click();
  await page.getByRole('button', { name: 'Later' }).click();
});