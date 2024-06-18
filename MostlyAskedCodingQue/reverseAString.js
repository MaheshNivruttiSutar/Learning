//****  Reverse a String ****//
/* Write a function to reverse a string. */


/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
const str1 = "hello";
console.log(reverseString(str1)); // Output: "olleh"

const str2 = "JavaScript";
console.log(reverseString(str2)); // Output: "tpircSavaJ"
