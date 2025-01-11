/*
How do you handle multiple frames in Selenium?
Answer: To interact with elements inside an iframe, we need to switch to the iframe first.
Here’s how you can switch to frames using Selenium WebDriver (JavaScript):
*/


let iframe = await driver.findElement(By.tagName('iframe'));

// Switch to the iframe
await driver.switchTo().frame(iframe);

// Interact with elements inside the iframe
let element = await driver.findElement(By.id('elementId'));
await element.click();

// Switch back to the main document
await driver.switchTo().defaultContent();


/*
Explanation: First, switch to the iframe using switchTo().frame(). Once done with the iframe, use switchTo().
defaultContent() to switch back to the main page.
*/