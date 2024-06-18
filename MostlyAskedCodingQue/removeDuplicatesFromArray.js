//**** Remove Duplicates from an Array ****//
/* Write a function to remove duplicates from an array. */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function removeDuplicates(nums) {
    return [...new Set(nums)];
}

// Example usage:
const nums1 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(nums1)); // Output: [1, 2, 3, 4, 5]

const nums2 = [5, 5, 5, 5, 5];
console.log(removeDuplicates(nums2)); // Output: [5]

const nums3 = [1, 2, 3, 4, 5];
console.log(removeDuplicates(nums3)); // Output: [1, 2, 3, 4, 5]
