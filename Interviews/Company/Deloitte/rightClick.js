/*
In Selenium, you can perform a right-click (context click) using the Actions class. Below is the syntax:
*/




const { Builder, By, Actions } = require('selenium-webdriver');

(async function rightClick() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.icicilombard.com');
        // Wait for the page to load
        // await driver.sleep(5000); // Adjust wait time if necessary
        await driver.manage().window().maximize();

        // Locate the element to right-click
        let element = await driver.findElement(By.id('login-revamp-click'));

        // Perform a right-click (context click)
        const actions = driver.actions();
        await actions.contextClick(element).perform();
        await driver.sleep(5000);
    } finally {
        await driver.quit();
    }
})();
