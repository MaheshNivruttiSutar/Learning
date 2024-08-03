/**
 * Que.7 How to find even or odd number in a given array in javascript
 *
 *
 */

// //Method: 1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// function findEvenOdd() {
//     for (ele of arr) {
//         if(ele % 2 === 0) {
//             console.log("Even number is", ele);
//         } else {
//             console.log("odd number is", ele);
//         }
//     }
// }
// findEvenOdd();


//Method: 2
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = array.filter(number => number % 2 === 0);
console.log('Even numbers:', evenNumbers);


const oddNumbers = array.filter(number => number % 2 !== 0);
console.log('Odd numbers:', oddNumbers);
