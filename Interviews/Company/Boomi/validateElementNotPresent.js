/*
Validate Element Not Present and Continue Test Scenario in Selenium (JavaScript)
In JavaScript, you can use a try-catch block to handle the case when an element is not present and continue the test.
Here's how:
*/


const { Builder, By, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

(async function validateElementNotPresent() {
    await driver.get('http://yourwebsite.com');

    try {
        await driver.findElement(By.id('nonExistentElement'));
        console.log("Element found, failing test!");
    } catch (e) {
        if (e.name === 'NoSuchElementError') {
            console.log("Element not found, test continues.");
        } else {
            throw e;  // Rethrow unexpected errors
        }
    }

    await driver.quit();
})();




// //Alternatively, if you want to use explicit wait with invisibilityOf (using until):
// const { Builder, By, until } = require('selenium-webdriver');
// let driver = new Builder().forBrowser('chrome').build();

// (async function validateElementInvisibility() {
//     await driver.get('http://yourwebsite.com');

//     try {
//         await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('nonExistentElement'))), 10000);
//         console.log("Element is not visible, test continues.");
//     } catch (e) {
//         console.log("Element is visible, test might fail.");
//     }

//     await driver.quit();
// })();




