const { Builder, By } = require('selenium-webdriver');

(async function printTabs() {
    // Initialize WebDriver (chrome)
    // let driver = await new Builder().forBrowser('chrome').build();

    // Initialize firefox
    // let driver = await new Builder().forBrowser('firefox').build();

    // Initialize MicrosoftEdge
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();

    try {
        // Navigate to the website
        await driver.get('https://www.icicilombard.com');

        // Wait for the page to load
        await driver.sleep(5000); // Adjust wait time if necessary

        // Find all tab elements in the navigation bar
        let tabs = await driver.findElements(By.css('.menu-list li a')); // Update selector if necessary

        // Extract and print the text of each tab
        for (let tab of tabs) {
            let tabName = await tab.getText();
            console.log(tabName);
        }
    } finally {
        // Quit the browser
        await driver.quit();
    }
})();
