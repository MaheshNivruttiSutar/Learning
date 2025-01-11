/*
You have 10 links, how will you print the title of each link using Selenium?
Answer: Here’s an optimal approach using Selenium WebDriver (JavaScript) to print the title of each link:
*/

let links = await driver.findElements(By.tagName('a'));

for (let link of links) {
  let href = await link.getAttribute('href');
  console.log('Link URL:', href);

  await driver.get(href);  // Navigate to the link
  let title = await driver.getTitle();  // Get the title of the page
  console.log('Page Title:', title);

  await driver.navigate().back();  // Go back to the original page
}




/*
Explanation: This approach retrieves all the <a> tags, navigates to each link using driver.get(href),
prints the page title, and then navigates back.
*/