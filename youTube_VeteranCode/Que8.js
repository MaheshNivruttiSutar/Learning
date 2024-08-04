/**
 * Que.8 How to Find the sum of all elements in a given array[] in javascript?
 *
 *
 */

// //Method 1
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumOfElements() {
//     let sum = 0;
//     array.forEach(number => {
//         sum += number;
//     });

//     console.log('Sum of all elements:', sum);
// }
// sumOfElements();



//Method 2
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of all elements:', sum);

const multi = array.reduce((multi, ele) => multi*ele, 1);
console.log('Multiple of all elements:', multi);