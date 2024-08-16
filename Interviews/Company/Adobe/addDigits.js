//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

const res = require("express/lib/response");

//For example:
//Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

//Follow up:
//Could you do it without any loop/recursion in O(1) runtime?



// //Method 1
// function reduceToSingleDigit(num) {
//     while (num >= 10) {
//         let temp = 0;
//         while (num > 0) {
//             temp += num % 10;
//             console.log("temp",temp);
//             num = Math.floor(num / 10);  // Ensures num stays an integer
//             console.log("num",num);
//         }
//         num = temp;
//     }
//     return num;
// }

// let result = reduceToSingleDigit(123);
// console.log("Result", result);


// // Method 2: Iterative Approach
// function addDigits1(num) {
//     while (num >= 10) {
//         let temp = 0;
//         while (num > 0) {
//             temp += num % 10;  // Add the last digit of num to temp
//             num = Math.floor(num / 10);  // Remove the last digit from num
//         }
//         num = temp;  // Replace num with the sum of its digits
//     }
//     return num;  // Return the single-digit result
// }
// let result = addDigits1(321);
// console.log("Result",result);


// Method 3: Mathematical Approach (Digital Root Formula)
function addDigits(num) {
    if (num === 0) return 0;
    if (num % 9 === 0) return 9;
    return num % 9;
}
let result = addDigits(21);
console.log("Result",result);
