// /* Qs. We are given array of marks of students. Filter out of the marks of students that scored 90 */
// let marks = [97, 64, 32, 49, 99, 96, 86];

// let toppers = marks.filter((val) => {
//     return val > 90;
// })
// console.log(toppers);





/* Take a number n as input from user. Create a array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array
Use the reduce method to calculate product of all numbers in the array
*/

let num = prompt("Enter a number :");
// Create an array of numbers from 1 to n
const numbers = [];
for (let i = 1; i <= num; i++) {
    numbers.push(i);
}
console.log("Array",numbers);


//Use the reduce method to calculate sum of all numbers in the array
const output = numbers.reduce((prev, curr) => {
    return prev + curr;
});

console.log("Sum of all number", output);


//Use the reduce method to calculate product of all numbers in the array
const productOutput = numbers.reduce((prev, curr) => {
    return prev * curr;
});

console.log("Product of all number", output);