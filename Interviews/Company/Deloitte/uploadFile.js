/*
For Node.js, since it doesn’t have a built-in Robot class like Java,
you can use the robotjs library to simulate keyboard actions for file uploads.
*/


const { Builder, By } = require('selenium-webdriver');
const robot = require('robotjs');

(async function uploadFile() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Step 1: Navigate to the file upload page
        await driver.get('https://ps.uci.edu/~franklin/doc/file_upload.html');

        // Step 2: Click the upload button to open the file dialog
        await driver.findElement(By.name('userfile')).click();
        await driver.sleep(5000);
        // Step 3: Use RobotJS to type the file path and press Enter
        robot.setKeyboardDelay(500); // Set delay for typing
        const filePath = 'C:\\path\\to\\your\\file.txt';

        // Type each character of the file path
        for (const char of filePath) {
            robot.typeString(char);
        }

        // Press Enter
        robot.keyTap('enter');
        console.log('File uploaded successfully!');
    } catch (error) {
        console.error('Error during file upload:', error);
    } finally {
        await driver.quit();
    }
})();
