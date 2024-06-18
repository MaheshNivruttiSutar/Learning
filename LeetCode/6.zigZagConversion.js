//****  Zigzag Conversion ****//
/* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);


Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"


Constraints:
1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s; // Edge case: if only 1 row, return the string as is

    // Initialize an array of empty strings for each row
    let rows = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i]; // Append character to the current row

        // Change direction if we are at the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row
        currentRow += goingDown ? 1 : -1;
    }

    // Combine all rows to form the final string
    let result = "";
    for (let row of rows) {
        result += row;
    }

    return result;
};

// Example usage:
let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convert(s, numRows)); // Output: "PAHNAPLSIIGYIR"

numRows = 4;
console.log(convert(s, numRows)); // Output: "PINALSIGYAHRPI"
