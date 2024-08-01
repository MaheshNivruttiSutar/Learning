/**
 * Que.2 How to find Max and Min value in a given Array in javascript?
 *
 *
 */

// //Method 1: Using Math.max and Math.min with Spread Operator
// //This method uses the spread operator (...) to pass the array elements as individual arguments to Math.max and Math.min.
// let array = [1, 2, 3, 4, 5, 1, 2, 3, 2];
// let max = Math.max(...array);
// let min = Math.min(...array);

// console.log(`Max: ${max}`); // Output: Max: 5
// console.log(`Min: ${min}`); // Output: Min: 1



// //Method 2: Using reduce Method
// //The reduce method can be used to iterate over the array and keep track of the maximum and minimum values.
// let array = [1, 2, 3, 4, 5, 1, 2, 3, 2];

// let max = array.reduce((a, b) => Math.max(a, b));
// let min = array.reduce((a, b) => Math.min(a, b));

// console.log(`Max: ${max}`); // Output: Max: 5
// console.log(`Min: ${min}`); // Output: Min: 1


// //Method 3: Using a Loop
// //You can use a simple for loop to iterate through the array and find the maximum and minimum values.
// let array = [1, 2, 3, 11, 4, 5];

// let max = array[0];
// let min = array[0];

// for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//     }
//     if (array[i] < min) {
//         min = array[i];
//     }
// }

// console.log(`Max: ${max}`); // Output: Max: 5
// console.log(`Min: ${min}`); // Output: Min: 1



//Method 4: Using ES6 Array Methods
// You can also use ES6 array methods like apply in combination with Math.max and Math.min.
let array = [1, 2, 3, 4, 5];

let max = Math.max.apply(null, array);
let min = Math.min.apply(null, array);

console.log(`Max: ${max}`); // Output: Max: 5
console.log(`Min: ${min}`); // Output: Min: 1




// // Method 5: Using forEach Method
// // The forEach method can also be used to iterate through the array and find the maximum and minimum values.
// let array = [1, 2, 3, 4, 5];

// let max = -Infinity;
// let min = Infinity;

// array.forEach(value => {
//     if (value > max) max = value;
//     if (value < min) min = value;
// });

// console.log(`Max: ${max}`); // Output: Max: 5
// console.log(`Min: ${min}`); // Output: Min: 1
