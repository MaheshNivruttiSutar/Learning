// How to you handle multiple frames ?




const { Builder, By, until } = require('selenium-webdriver');

(async function handleFrames() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open the webpage that contains frames
    await driver.get('https://yourwebsite.com');  // Replace with your website URL

    // Switch to the first frame using its index (0-based)
    await driver.switchTo().frame(0); // Switches to the first iframe (index 0)

    // Interact with elements inside the first frame
    let elementInFrame1 = await driver.findElement(By.id('elementIdInFrame1'));
    await elementInFrame1.click();

    // Switch back to the main content (default content)
    await driver.switchTo().defaultContent();

    // Switch to another frame by its name or ID
    await driver.switchTo().frame('frameNameOrID');  // Replace with actual name or ID

    // Interact with elements inside the second frame
    let elementInFrame2 = await driver.findElement(By.id('elementIdInFrame2'));
    await elementInFrame2.sendKeys('Some text');

    // Switch back to the main content (default content)
    await driver.switchTo().defaultContent();

    // Switch to the nested frame (frame inside another frame)
    let parentFrame = await driver.findElement(By.id('parentFrameId'));
    await driver.switchTo().frame(parentFrame);  // Switch to the parent frame
    let nestedFrame = await driver.findElement(By.id('nestedFrameId'));
    await driver.switchTo().frame(nestedFrame);  // Switch to the nested frame

    // Interact with elements inside the nested frame
    let nestedElement = await driver.findElement(By.id('nestedElementId'));
    await nestedElement.click();

    // Switch back to the main content (default content)
    await driver.switchTo().defaultContent();
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
