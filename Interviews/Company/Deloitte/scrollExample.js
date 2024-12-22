/*
In Selenium, you can scroll a web page by executing JavaScript using the JavascriptExecutor interface or methods provided in some bindings.
Here's the syntax for scrolling 2000 pixels:
*/


const { Builder, By } = require('selenium-webdriver');

(async function scrollExample() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.icicilombard.com');

    await driver.manage().window().maximize();
    await driver.sleep(5000);
    // Scroll down 2000 pixels
    await driver.executeScript("window.scrollBy(0, 2000)");
    await driver.sleep(5000);
    await driver.quit();
})();
