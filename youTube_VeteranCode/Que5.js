/**
 * Que.5 What is the difference between Filter() and Find() Method in javascript();
 *
 *
 */

/*
* Return Value:

filter(): Returns a new array containing all elements that pass the test. If no elements pass the test, it returns an empty array.
find(): Returns the value of the first element that passes the test. If no element passes the test, it returns undefined.

* Return Type:

filter(): Always returns an array.
find(): Returns a single element (the first one that passes the test) or undefined.

Use Case:

filter(): Use this when you need to obtain all elements that meet certain criteria.
find(): Use this when you need to find the first element that meets certain criteria.

*/

const numbers = [1, 2, 3, 4, 5, 6];

// Using filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// Using find()
const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2
