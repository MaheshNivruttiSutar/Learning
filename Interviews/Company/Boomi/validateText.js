/*
Validate Text in Textbox in Selenium (JavaScript)
In Selenium with JavaScript (using WebDriverJS or Selenium WebDriver for Node.js),
you can validate the text entered in a textbox like this:
*/


// Assuming WebDriverJS is already set up with your driver instance

const { Builder, By } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

(async function validateText() {
    await driver.get('http://yourwebsite.com');

    // Find the textbox and send keys
    let textBox = await driver.findElement(By.id('textboxId'));
    await textBox.sendKeys('Sample Text');

    // Get the value from the textbox
    let enteredText = await textBox.getAttribute('value');

    if (enteredText === 'Sample Text') {
        console.log("Text entered successfully.");
    } else {
        console.log("Text does not match.");
    }

    await driver.quit();
})();
