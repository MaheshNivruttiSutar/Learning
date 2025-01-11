/*
Difference Between Action vs Actions in Selenium (JavaScript)
Action (singular) is a low-level action like click(), sendKeys(), moveToElement(), etc.
Actions (plural) is a higher-level class that allows you to perform complex gestures (e.g., drag-and-drop, multiple actions in a sequence).
*/


const { Builder, By, Key } = require('selenium-webdriver');
const { Actions } = require('selenium-webdriver');

async function performAction() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://example.com');

    // Perform a click action
    let element = await driver.findElement(By.id('some-id'));
    let actions = new Actions(driver);
    await actions.move({ origin: element }).click().perform();

    // Perform a series of actions
    await actions.move({ origin: element }).sendKeys('Hello').perform();
    await driver.quit();
}

performAction();
