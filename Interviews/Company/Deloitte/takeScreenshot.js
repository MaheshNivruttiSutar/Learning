/*
To take a screenshot in Selenium, you use the TakesScreenshot interface provided by the Selenium WebDriver.
Below are examples in different programming languages:
*/




const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');

(async function takeScreenshot() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.icicilombard.com');

        // Take a screenshot
        let screenshot = await driver.takeScreenshot();
        // Save the screenshot
        fs.writeFileSync('screenshot.png', screenshot, 'base64');



        //Take screenshot of specific element
        // Locate the specific element
        let element = await driver.findElement(By.id('car-get-quote'));
        // Take a screenshot of the element
        let screenshot1 = await element.takeScreenshot();
        // Save the screenshot
        fs.writeFileSync('element-screenshot.png', screenshot1, 'base64');


        //Take screenshot of element with multiple index
        let elements = await driver.findElements(By.className('tabSectionImg'));
        // Take a screenshot of the second element (index 1)
        let screenshot2 = await elements[1].takeScreenshot();

        // Save the screenshot
        fs.writeFileSync('element-screenshot2.png', screenshot2, 'base64');
        console.log('Screenshot of the second element saved successfully.');



    } finally {
        await driver.quit();
    }
})();
