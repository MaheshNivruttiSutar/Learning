// You have 10 links how will you print title of each link using selenium. Give Optimal approach

/*
To print the titles of 10 links using Selenium in an optimal way, you can use the following approach:

Find all the link elements on the page.
Iterate through each link to retrieve and print its title.
Here’s how you can achieve this in JavaScript with Selenium:

*/

const { Builder, By } = require('selenium-webdriver');

(async function printLinkTitles() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open the webpage with the links
    await driver.get('https://yourwebsite.com'); // Replace with your website URL

    // Find all links (anchor tags) on the page
    let links = await driver.findElements(By.tagName('a'));

    // Loop through the links and print their titles
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      let title = await link.getAttribute('title'); // Get the title attribute of the link
      console.log(`Link ${i + 1}: ${title}`);
    }
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
