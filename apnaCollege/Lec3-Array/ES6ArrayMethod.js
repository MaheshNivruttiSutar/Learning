/* ES6 (ECMAScript 2015) introduced several new methods for working with arrays in JavaScript,
enhancing their functionality and making it easier to perform common tasks. Here are some of the key ES6 array methods: */

// //1. forEach: Executes a provided function once for each array element.
// [1, 2, 3].forEach((item) => console.log(item));


// //2. map: Creates a new array with the results of calling a provided function on every element in the calling array.
// const numbers = [1, 2, 3];
// const doubled = numbers.map((item) => item * 2);
// console.log(doubled); // Output: [2, 4, 6]


// //3. filter: Creates a new array with all elements that pass the test implemented by the provided function.
// let array = [1, 2, 3, 4, 5, 6, 7];
// const odd = array.filter((ele) => ele % 2 !== 0);
// const even = array.filter((ele) => ele % 2 === 0);
// console.log(odd);
// console.log(even);


// // 4. find: Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
// let array = [1, 2, 3, 4];
// const found = array.find((item) => item === 3);
// const found1 = array.find((item) => item > 2);
// const found2 = array.find((item) => item < 1);
// console.log(found);
// console.log(found1);
// console.log(found2);


// // 5. findIndex: Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
// const numbers = [1, 2, 3, 4];
// const index = numbers.findIndex((item) => item > 2);
// console.log(index); // Output: 2
// const index1 = numbers.findIndex((item) => item > 4);
// console.log(index1); // Output: -1
// const index2 = numbers.findIndex((item) => item > 3);
// console.log(index2); // Output: 3


// //6. some: Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// const numbers = [1, 2, 3, 4];
// const hasEven = numbers.some((item) => item % 2 === 0);
// console.log(hasEven); // Output: true


// //7.every: Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// const numbers = [1, 2, 3, 4];
// const allEven = numbers.every((item) => item % 2 === 0);
// console.log(allEven); // Output: false


// //8. reduce: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((total, item) => total + item, 0);
// console.log(sum); // Output: 10
// const mult = numbers.reduce((mult, item) => mult * item, 1);
// console.log(mult); // Output: 24


// //9.includes: Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// const numbers = [1, 2, 3, 4];
// const hasThree = numbers.includes(3);
// console.log(hasThree); // Output: true


// //10. from: Creates a new, shallow-copied Array instance from an array-like or iterable object.
// const set = new Set([1, 2, 3]);
// const array = Array.from(set);
// console.log(array); // Output: [1, 2, 3]






//*****
// APPLY : The apply method in JavaScript is not specific to ES6 or arrays, but it is a method available on all JavaScript functions that allows you to call a function with a given this value and arguments provided as an array (or array-like object).
//

function add(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = add.apply(null, numbers); // `null` here means no specific `this` context
console.log(result); // Output: 6



