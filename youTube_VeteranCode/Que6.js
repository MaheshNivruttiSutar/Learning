/**
 * Que.6 How to find missing number in a given array of 1 to 10;
 *
 *
 */

function findMissingNumber(arr) {
    const n = 10; // Since the range is from 1 to 10
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers formula
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(findMissingNumber(arr)); // Output will be 9
