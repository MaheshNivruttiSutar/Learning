/*
how to interact with the Amazon site to search for an item and extract all sponsored-related items.
*/









const { Builder, By, until } = require('selenium-webdriver');

(async function amazonSearch() {
    let driver = await new Builder().forBrowser('firefox').build(); // Or 'chrome'
    // let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Step 1: Open Amazon
        await driver.get('https://www.amazon.com');

        // Step 2: Find the search box and search for an item
        let searchBox = await driver.findElement(By.id('twotabsearchtextbox'));
        await searchBox.sendKeys('laptop');
        await searchBox.submit();

        // Step 3: Wait for the search results to load
        await driver.wait(until.elementLocated(By.id('search')), 10000); // Wait for the search results to be visible

        // Step 4: Use XPath to get all sponsored related items
        let sponsoredItems = await driver.findElements(By.xpath("//*[contains(@class, 's-title-instructions-style')]//*[contains(text(), 'Sponsored')]//ancestor::div[contains(@class, 's-result-item')]"));

        // Step 5: Print the details of the sponsored items
        console.log('Sponsored Items Found:');
        for (let item of sponsoredItems) {
            let title = await item.findElement(By.xpath(".//h2")).getText();
            let price = await item.findElement(By.xpath(".//span[@class='a-price-whole']")).getText();
            console.log(`Title: ${title}, Price: $${price}`);
        }

    } finally {
        // Close the browser after completion
        await driver.quit();
    }
})();
