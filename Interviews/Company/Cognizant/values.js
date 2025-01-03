/*
To handle a web table in JavaScript (assuming you are using a browser automation framework like Playwright or Selenium),
here's an example Playwright script to sort the second column and retrieve the value of the fourth row in the sorted table:
*/


const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false }); // Launch browser
    const page = await browser.newPage();

    // Navigate to the page containing the web table
    await page.goto('http://example.com'); // Replace with your URL

    // Get the rows of the second column
    const secondColumnValues = await page.$$eval('table tr td:nth-child(2)', cells =>
        cells.map(cell => cell.textContent.trim())
    );

    // Sort the column values
    const sortedValues = [...secondColumnValues].sort();

    // Log the sorted values
    console.log('Sorted Second Column:', sortedValues);

    // Retrieve the value of the 4th row in the sorted column
    const fourthRowValue = sortedValues[3]; // Index 3 because arrays are 0-based
    console.log('4th Row Value (Sorted):', fourthRowValue);

    await browser.close();
})();
