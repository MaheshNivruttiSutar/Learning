/**
 * Que.3 What is the difference between "==" and "===" in javascript?
 *
 *
 */

/*
== (Equality Operator)
* The == operator compares two values for equality, but it performs type coercion if the types are different.
* Type coercion means that JavaScript will attempt to convert the values to the same type before making the comparison.
*/

console.log(5 == '5'); // true (string '5' is coerced to number 5)
console.log(false == 0); // true (false is coerced to number 0)
console.log('' == 0); // true (empty string is coerced to number 0)
console.log(null == undefined); // true (special case in JavaScript)




/*
=== (Strict Equality Operator)
* The === operator compares two values for equality without performing type coercion.
* Both the value and the type must be the same for the comparison to return true.
*/

console.log(5 === '5'); // false (different types: number vs. string)
console.log(false === 0); // false (different types: boolean vs. number)
console.log('' === 0); // false (different types: string vs. number)
console.log(null === undefined); // false (different types: null vs. undefined)
console.log(5 === 5); // true (same type and value)




/*
Summary
* Use == when you want to compare values for equality with type coercion(जबरदस्ती).
* Use === when you want to compare values for equality without type coercion, ensuring both the value and type are the same.
*/