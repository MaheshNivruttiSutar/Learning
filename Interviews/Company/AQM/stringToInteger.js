/* To convert a string to an integer without using JavaScript's built-in parsing functions like parseInt or Number,
you can manually iterate through the string and calculate the integer value using the character codes.
Here's an example implementation:
*/



function stringToInteger(str) {
    let result = 0;
    let isNegative = false;
    let i = 0;

    // Check for negative sign
    if (str[0] === '-') {
        isNegative = true;
        i = 1; // Start processing from the next character
    }

    for (; i < str.length; i++) {
        // Get the numeric value of the character
        let digit = str.charCodeAt(i) - '0'.charCodeAt(0);

        // Validate if the character is a digit
        if (digit < 0 || digit > 9) {
            throw new Error("Invalid input string");
        }

        // Accumulate the result
        result = result * 10 + digit;
    }

    return isNegative ? -result : result;
}

// Example Usage
console.log(stringToInteger("12345"));    // Output: 12345
console.log(stringToInteger("-6789"));    // Output: -6789
console.log(stringToInteger("00123"));    // Output: 123
// console.log(stringToInteger("12a34"));    // Throws an error: Invalid input string
