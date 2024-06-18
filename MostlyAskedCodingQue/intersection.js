//**** Find the Intersection of Two Arrays ****//
/* Write a function to compute the intersection of two arrays. */



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    // Convert the first array to a set to remove duplicates and allow O(1) look-up time.
    const set1 = new Set(nums1);
    // Convert the second array to a set to remove duplicates.
    const set2 = new Set(nums2);

    // Use the filter method to return only the elements that are in both sets.
    return Array.from(set1).filter(num => set2.has(num));
}

// Example usage:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); // Output: [2]

const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
console.log(intersection(nums3, nums4)); // Output: [4, 9]
