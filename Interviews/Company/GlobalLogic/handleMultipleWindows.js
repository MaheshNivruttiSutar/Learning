/*
In Selenium, handling multiple windows (also referred to as browser tabs or browser windows)
involves switching between them using window handles. Each window or tab in Selenium is associated with
a unique identifier called a window handle.
Here's a JavaScript code example to handle multiple windows in Selenium WebDriver:
*/

const { Builder, By } = require('selenium-webdriver');

(async function handleMultipleWindows() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Step 1: Open a webpage
        await driver.get('https://www.example.com');

        // Step 2: Get the current window handle (parent window)
        let parentWindow = await driver.getWindowHandle();

        // Step 3: Click a link that opens a new window
        let link = await driver.findElement(By.xpath('//a[@href="https://www.iana.org/domains/example"]'));
        await link.click();

        // Step 4: Get all window handles
        let allWindowHandles = await driver.getAllWindowHandles();

        // Step 5: Switch to the new window (child window)
        for (let handle of allWindowHandles) {
            if (handle !== parentWindow) {
                await driver.switchTo().window(handle);
                break; // Switch to the child window and break the loop
            }
        }

        // Step 6: Perform actions on the child window (example: print title)
        let childWindowTitle = await driver.getTitle();
        console.log("Child window title: " + childWindowTitle);

        // Step 7: Close the child window
        await driver.close();

        // Step 8: Switch back to the parent window
        await driver.switchTo().window(parentWindow);

        // Step 9: Perform actions on the parent window
        let parentWindowTitle = await driver.getTitle();
        console.log("Parent window title: " + parentWindowTitle);

    } finally {
        // Close all windows after completion
        await driver.quit();
    }
})();
