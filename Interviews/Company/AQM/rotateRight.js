/*
Rotate an array to the right by 3 positions using a program.
Input: [1, 2, 3, 4, 5, 6, 7] with n = 3
Output: [5, 6, 7, 1, 2, 3, 4]
*/







function rotateRight(arr, n) {
    const length = arr.length;
    n = n % length; // Handle cases where n > length of the array

    // Split and rearrange the array
    const part1 = arr.slice(-n); // Take the last n elements
    const part2 = arr.slice(0, length - n); // Take the remaining elements
    return [...part1, ...part2]; // Combine both parts
}

// Example Usage
const inputArray = [1, 2, 3, 4, 5, 6, 7];
const rotations = 3;
const result = rotateRight(inputArray, rotations);

console.log(result); // Output: [5, 6, 7, 1, 2, 3, 4]
