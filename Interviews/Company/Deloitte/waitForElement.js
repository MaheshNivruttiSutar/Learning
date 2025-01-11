/*
4. How would you wait for visibility of an element in Selenium?
In JavaScript (with WebDriverIO or Selenium WebDriver), waiting for an element to be visible can be done using waitForDisplayed or waitForExist methods:
*/

const { remote } = require('webdriverio');

async function waitForElement() {
    const browser = await remote({
        logLevel: 'info',
        capabilities: {
            browserName: 'chrome'
        }
    });

    await browser.url('https://example.com');
    const elem = await browser.$('#elementId');
    await elem.waitForDisplayed({ timeout: 5000 });  // Wait for 5 seconds for the element to appear

    console.log(await elem.getText());
    await browser.deleteSession();
}

waitForElement();
