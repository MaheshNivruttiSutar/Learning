/**
 * Que.24 Program to find fibonacci sequence in javascript?
 *
 *
 */



// //Method 1
// //Iterative Approach
// function generateFibonacci(n) {
//     const fibonacci = [0, 1];

//     for (let i = 2; i < n; i++) {
//         fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//     }

//     return fibonacci;
// }

// const terms = 10;
// const fibonacciSequence = generateFibonacci(terms);
// console.log(fibonacciSequence);




// //Method 2
// //Recursive Approach
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const position = 10;
// const fibonacciNumber = fibonacci(position);
// console.log(`Fibonacci number at position ${position} is ${fibonacciNumber}`);




// //Method 3
// //Optimized Recursive Approach with Memoization
// function fibonacciMemo(n, memo = {}) {
//     if (n in memo) {
//         return memo[n];
//     }

//     if (n <= 1) {
//         return n;
//     }

//     memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
//     return memo[n];
// }

// const position = 10;
// const fibonacciNumber = fibonacciMemo(position);
// console.log(`Fibonacci number at position ${position} is ${fibonacciNumber}`);





//Method 4
//Generate Fibonacci Sequence up to a Maximum Value
function generateFibonacciUpTo(max) {
    const fibonacci = [0, 1];

    while (true) {
        const next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (next > max) break;
        fibonacci.push(next);
    }

    return fibonacci;
}

const maxValue = 100;
const fibonacciSequence = generateFibonacciUpTo(maxValue);
console.log(fibonacciSequence);

