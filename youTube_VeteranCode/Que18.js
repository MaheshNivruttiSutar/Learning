/**
 * Que.18 How to compare two arrays arre equal or not in javascript?
 *
 *
 */


// //Method 1
// // Using a Loop
// function arraysAreEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false; // Arrays are not equal if they have different lengths
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false; // Arrays are not equal if any element differs
//         }
//     }

//     return true; // Arrays are equal if no differences are found
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [1, 2, 3, 4];
// const result = arraysAreEqual(array1, array2);
// console.log('Arrays are equal:', result);




// //Method 2
// //Using JSON.stringify
// function arraysAreEqual(arr1, arr2) {
//     return JSON.stringify(arr1) === JSON.stringify(arr2);
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [1, 2, 3, 4];
// const result = arraysAreEqual(array1, array2);
// console.log('Arrays are equal:', result);



// ////Method 3
// //Using a Library (e.g., Lodash)
// // Include Lodash library
// const _ = require('lodash');

// const array1 = [1, 2, 3, 4];
// const array2 = [1, 2, 3, 4];
// const result = _.isEqual(array1, array2);
// console.log('Arrays are equal:', result);



////Method 4
//Deep Comparison for Nested Arrays
function deepEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (!deepEqual(arr1[i], arr2[i])) {
                return false;
            }
        } else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

const array1 = [1, [2, 3], 4];
const array2 = [1, [2, 3], 4];
const result = deepEqual(array1, array2);
console.log('Arrays are equal:', result);
