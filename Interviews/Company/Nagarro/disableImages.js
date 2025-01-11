/*
2. How to Disable Images in Selenium (JavaScript)
To disable images in Selenium using JavaScript, you can set Chrome preferences with chrome.Options.

Example to Disable Images in Chrome:
*/

const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function disableImages() {
    let options = new chrome.Options();
    options.addArguments("--blink-settings=imagesEnabled=false");

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    await driver.get('http://example.com');
    // Perform further actions
    await driver.quit();
}

disableImages();
