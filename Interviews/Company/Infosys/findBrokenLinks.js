/*
Write code to find Broken Links in Selenium (JavaScript)
Answer: To find broken links, you can send an HTTP request for each link on the page and check the status code.
Here’s an example using Selenium WebDriver with JavaScript (Node.js) and axios to check the status of each link:
*/


const { Builder, By } = require('selenium-webdriver');
const axios = require('axios');

async function findBrokenLinks() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://yourwebsite.com');
  let links = await driver.findElements(By.tagName('a'));

  for (let link of links) {
    let href = await link.getAttribute('href');
    if (href) {
      try {
        let response = await axios.get(href);
        if (response.status !== 200) {
          console.log(`Broken link: ${href} - Status Code: ${response.status}`);
        }
      } catch (error) {
        console.log(`Broken link: ${href} - Error: ${error.message}`);
      }
    }
  }

  await driver.quit();
}

findBrokenLinks();





/*
Explanation: This code uses axios to check the HTTP response status of each link.
If the status code is anything other than 200, it's considered broken.
*/