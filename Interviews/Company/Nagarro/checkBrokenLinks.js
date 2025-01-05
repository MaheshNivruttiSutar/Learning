// Write code to find Broken Links in Selenium




const { Builder, By, until } = require('selenium-webdriver');
const http = require('http');
const { promisify } = require('util');

(async function checkBrokenLinks() {
  // Setup the WebDriver (Chrome)
  let driver = await new Builder().forBrowser('chrome').build();

  // Open the page
  await driver.get('https://your-website.com'); // Replace with the URL of your webpage

  // Find all anchor tags on the page
  const links = await driver.findElements(By.tagName('a'));

  // Function to check the status of each link
  async function checkLinkStatus(url) {
    try {
      const status = await promisify(http.get)(url);
      return status.statusCode;
    } catch (error) {
      return 404; // If there's an error, assume it's a broken link
    }
  }

  // Loop through each link, get the URL, and check if it's broken
  for (let link of links) {
    let href = await link.getAttribute('href');
    if (href) {
      const statusCode = await checkLinkStatus(href);
      if (statusCode !== 200) {
        console.log(`Broken link found: ${href} with status code ${statusCode}`);
      } else {
        console.log(`Link is working: ${href}`);
      }
    }
  }

  // Close the browser
  await driver.quit();
})();
