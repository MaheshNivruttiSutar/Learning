/**
 * Que.14 How to swap variable without using third variable in javascript?
 *
 *
 */


// //Method 1
// //Using Arithmetic Operations
// let a = 5;
// let b = 10;

// a = a + b; // a now holds the sum of a and b
// b = a - b; // b is assigned the original value of a
// a = a - b; // a is assigned the original value of b

// console.log('a:', a); // Output: a: 10
// console.log('b:', b); // Output: b: 5



//Method 2
// Using Destructuring Assignment (ES6+)
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log('a:', a); // Output: a: 10
console.log('b:', b); // Output: b: 5
