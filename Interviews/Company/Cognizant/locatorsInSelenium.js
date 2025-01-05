const { Builder, By } = require('selenium-webdriver');

(async function example() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://example.com');

    // Locate element by ID
    const idElement = await driver.findElement(By.id('username'));

    // Locate element by Name
    const nameElement = await driver.findElement(By.name('email'));

    // Locate element by Class Name
    const classElement = await driver.findElement(By.className('submit-button'));

    // Locate elements by Tag Name
    const tagElements = await driver.findElements(By.tagName('a'));

    // Locate element by Link Text
    const linkElement = await driver.findElement(By.linkText('Click Here'));

    // Locate element by Partial Link Text
    const partialLinkElement = await driver.findElement(By.partialLinkText('Click'));

    // Locate element by CSS Selector
    const cssElement = await driver.findElement(By.css('input[type="text"]'));

    // Locate element by XPath
    const xpathElement = await driver.findElement(By.xpath("//input[@id='password']"));

  } finally {
    await driver.quit();
  }
})();
