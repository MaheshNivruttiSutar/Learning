/*
How to Deal with Elements that Change Their Attributes Dynamically
When elements' attributes change dynamically (e.g., id or class),
you can use dynamic XPath or CSS Selectors that are less likely to change. This can be done with contains() or starts-with() in XPath.
*/


const { Builder, By } = require('selenium-webdriver');

async function handleDynamicElements() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://example.com');

    // Using XPath contains() to handle dynamic attributes
    let element = await driver.findElement(By.xpath("//*[contains(@id, 'dynamicPartOfId')]"));

    await element.click();
    await driver.quit();
}

handleDynamicElements();
