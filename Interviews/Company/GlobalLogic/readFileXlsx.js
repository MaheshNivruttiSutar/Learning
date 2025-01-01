const XLSX = require('xlsx');

// Path to your Excel file
const filePath = 'Sample.xlsx';

// Read the Excel file
const workbook = XLSX.readFile(filePath);

// Get the sheet names in the Excel file
const sheetNames = workbook.SheetNames;

// Choose the sheet you want to read (for example, the first sheet)
const sheet = workbook.Sheets[sheetNames[0]];

// Convert the sheet data to JSON format
const jsonData = XLSX.utils.sheet_to_json(sheet);

// Print the data
console.log(jsonData);
