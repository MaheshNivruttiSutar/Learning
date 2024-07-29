/**
 * Que.1 Find characters count from given string [OLX]
 *
 *
 */
// const str = "hare krishna hare krishna krishna krishna hare hare";
// const obj = {};
// for (let ele of str) {
//     // console.log(ele);
//     if (obj[ele]) {
//         obj[ele] += 1;
//     } else {
//         obj[ele] = 1;
//     }
// }
// console.log(obj);



/**
 * Que. 2 Find error in below given code (Wipro)
 *
 *
 */
// function showMessage(marks) {
//     const message = marks || "Absent";
//     console.log(`Marks  ${message}`);
// }
// showMessage(29);
// showMessage(0);
// showMessage(46);

// //ANS : Bug showMessage(0); is returning absent due to OR operator. because 0 is a false in javascript.
// //  Let we can fix this
// function showMessage(marks) {
//     const message = marks ?? "Absent";
//     console.log(`Marks  ${message}`);
// }
// showMessage(29);
// showMessage(0);
// showMessage(46);

// [NOTE] : operator in JavaScript is called the nullish coalescing operator. It is used to provide a default value when dealing with null or undefined values.



// /**
//  * Que. 3 Count vwels in string [Infoysis]
//  *
//  *
//  */
// const str = "Hey JS! You R AMAZING"
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// //Approach 1
// const lowerStr = str.toLowerCase();
// console.log(lowerStr);
// let count = 0;
// for (let ele of lowerStr) {
//     if (ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u') {
//         count++;
//     }
// }
// console.log(`Total vowels count in approach 1 = ${count}`);


// //Approach 2
// function countVowels(data) {
//     let count = 0;
//     data.toLowerCase().split("").forEach((ele) => {
//         vowels.includes(ele) && count ++;
//     });
//     return count;
// }
// const numOfVowels = countVowels(str);
// console.log(`Total vowels count in approach 2 = ${numOfVowels}`);



/**
 * Que. 4 How to use function value
 *
 *
 */

function sum(num1, num2) {
    "use strict";
    num1 = 10;
    num2 = 200;
    return arguments[0] + arguments[1];
}
let sumOfNumbers = sum(10, 20);
console.log(sumOfNumbers);