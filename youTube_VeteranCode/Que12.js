/**
 * Que.12 How to reverse a string in javascript?
 *
 *
 */


//Method 1
//Using Built-in Methods
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// const inputString = "Hello, World!";
// const reversedString = reverseString(inputString);
// console.log('Reversed string:', reversedString);



// // //Method 2
// //Using a Loop
// function reverseStringLoop(str) {
//     let reversedStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//         // console.log('reversedStr += str[i] =', reversedStr += str[i]);
//     }
//     return reversedStr;
// }

// const inputString = "Hello, World!";
// const reversedString = reverseStringLoop(inputString);
// console.log('Reversed string:', reversedString);



//Method 3
//Using Recursion
function reverseStringRecursion(str) {
    if (str === "") return "";
    return reverseStringRecursion(str.substr(1)) + str[0];
}

const inputString = "Hello, World!";
const reversedString = reverseStringRecursion(inputString);
console.log('Reversed string:', reversedString);
