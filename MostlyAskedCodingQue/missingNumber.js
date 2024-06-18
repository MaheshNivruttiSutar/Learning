//****  Find the Missing Number in an Array  ****//
/* Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array. */

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    const n = nums.length;
    // Calculate the expected sum of the first n natural numbers
    const expectedSum = n * (n + 1) / 2;
    // Calculate the actual sum of the elements in the array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Example usage:
const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2

const nums2 = [0, 1];
console.log(missingNumber(nums2)); // Output: 2

const nums3 = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums3)); // Output: 8
