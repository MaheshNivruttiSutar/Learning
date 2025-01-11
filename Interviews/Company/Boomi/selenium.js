/*
Let's break down the tasks based on the WebDriver and your steps.
I'll give you code for both Java and JavaScript (Node.js) using Selenium WebDriver. We’ll perform the following tasks:

Navigate to the Given URL
Declare a Web Element for the Email Address Field using XPath
Declare a Web Element for the Password Field using CSS Selector
Declare a Web Element for the Sign In Button using either XPath or CSS
Enter Data into the Email and Password Fields and Click the Sign In Button
*/


const { Builder, By } = require('selenium-webdriver');

// Declare the driver globally
let driver;

async function getDriver() {
    if (!driver) {
        // Initialize the WebDriver (for Chrome)
        driver = await new Builder().forBrowser('chrome').build();
    }
    return driver;
}

async function signIn() {
    driver = await getDriver();  // Get the driver instance

    // Navigate to the given URL
    await driver.get('http://example.com');  // Replace with actual URL

    // Declare the email input field using XPath
    let emailField = await driver.findElement(By.xpath("//input[@type='email']"));

    // Declare the password field using CSS Selector
    let passwordField = await driver.findElement(By.css('input[type="password"]'));

    // Declare the Sign In button using XPath
    let signInButton = await driver.findElement(By.xpath("//button[@type='submit']"));

    // Enter data into the Email Address and Password fields
    await emailField.sendKeys('test@example.com');  // Replace with your email
    await passwordField.sendKeys('TestPassword123');  // Replace with your password

    // Click the Sign In button
    await signInButton.click();

    // Optionally, you can add more assertions or waits for the next page to load.
    // For now, we quit the browser after the test
    await driver.quit();
}

signIn();
