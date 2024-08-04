/**
 * Que.13 How to find palindrome in javascript?
 *
 *
 */

/* A palindrome is a string that reads the same backward as forward. To check if a given string is a palindrome in JavaScript,
you can follow these steps:
Remove any non-alphanumeric characters and convert the string to lowercase (to make the check case-insensitive).
Reverse the processed string.
Compare the processed string with the reversed string.
*/


// //Method 1
// //Using Built-in Methods
// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     console.log("cleanedStr",cleanedStr);

//     // Reverse the cleaned string
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     console.log("reversedStr",reversedStr);

//     // Check if the cleaned string is equal to the reversed string
//     return cleanedStr === reversedStr;
// }

// const inputString = "A man, a plan, a canal, Panama!";
// const result = isPalindrome(inputString);
// console.log(`Is "${inputString}" a palindrome?`, result);



//Method 2
//Using a Loop
function isPalindromeLoop(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const len = cleanedStr.length;

    for (let i = 0; i < len / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const inputString = "A man, a plan, a canal, Panama!";
const result = isPalindromeLoop(inputString);
console.log(`Is "${inputString}" a palindrome?`, result);
