const fs = require('fs');
const csv = require('csv-parser'); // Use csv-parser for parsing CSV files

// Path to your CSV file
const filePath = 'Sample.csv';

// Read the CSV file
const jsonData = [];

fs.createReadStream(filePath)
    .pipe(csv()) // Parse the CSV file
    .on('data', (row) => {
        jsonData.push(row); // Push each row into the array
    })
    .on('end', () => {
        console.log('CSV file successfully read and converted to JSON:');
        console.log(jsonData);
    })
    .on('error', (err) => {
        console.error('Error reading the CSV file:', err);
    });
