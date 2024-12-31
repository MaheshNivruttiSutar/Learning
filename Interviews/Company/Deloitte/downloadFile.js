/*
File Download in Chrome Using Preferences
For downloading files in Selenium, configure the Chrome browser's preferences to automatically save files to a specific directory.
*/


const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function downloadFile() {
    const downloadDir = path.resolve(__dirname, 'downloads'); // Set the download directory
    const options = new chrome.Options();
    options.setUserPreferences({
        'download.default_directory': downloadDir,
        'download.prompt_for_download': false, // Disable prompt
        'safebrowsing.enabled': true,         // Enable safe browsing
    });

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        // Step 1: Navigate to the download page
        await driver.get('https://example.com/download');

        // Step 2: Click the download link
        await driver.findElement(By.linkText('Download File')).click();

        console.log(`File downloaded to ${downloadDir}`);
    } catch (error) {
        console.error('Error during file download:', error);
    } finally {
        await driver.quit();
    }
})();
