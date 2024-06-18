//****  Fibonacci Sequence ****//
/* Write a function to generate the nth Fibonacci number. */
/**
 * @param {number} n
 * @return {number}
 */
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Example usage:
console.log(fibonacci(0));  // Output: 0
console.log(fibonacci(1));  // Output: 1
console.log(fibonacci(5));  // Output: 5
console.log(fibonacci(10)); // Output: 55
