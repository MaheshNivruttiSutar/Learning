/**
 * Que.9 How to find Factorial(n!) of a given number in javascript?
 *
 *
 */

/*
The factorial of a non-negative integer  n  is the product of all positive integers less than or equal to  n . It is denoted by  n!  and is defined as:

 n! = n \times (n-1) \times (n-2) \times \ldots \times 1

For example:

  •	 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120
  •	 3! = 3 \times 2 \times 1 = 6
  •	 0! = 1  (by definition)
  */

// //Iterative Approach
// function factorialIterative(n) {
//   if (n < 0) return -1; // Factorial is not defined for negative numbers
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// const number = 3;
// console.log(`Factorial of ${number} is ${factorialIterative(number)}`);



// //Recursive Approach
/* A recursive approach to calculating the factorial of a number involves defining the problem in terms of itself. The base case and the recursive step for calculating  n!  can be described as follows:
	•	Base Case:  0! = 1
	•	Recursive Step:  n! = n \times (n-1)!
  */

function factorialRecursive(n) {
    if (n < 0) return -1; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
    return n * factorialRecursive(n - 1);
  }

  const number = 5;
  console.log(`Factorial of ${number} is ${factorialRecursive(number)}`);
