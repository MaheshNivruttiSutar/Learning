const { Builder, By } = require('selenium-webdriver');

(async function handleCaptcha() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.google.com/recaptcha/api2/demo');

    // Interact with elements up to the CAPTCHA
    await driver.findElement(By.id('username')).sendKeys('testuser');
    await driver.findElement(By.id('password')).sendKeys('password123');

    console.log('Solve the CAPTCHA manually and press Enter in the terminal to continue...');
    process.stdin.once('data', async () => {
      await driver.findElement(By.id('loginButton')).click();
      console.log('Login process completed.');
    });
  } finally {
    // await driver.quit(); // Uncomment when you need to close the browser.
  }
})();
