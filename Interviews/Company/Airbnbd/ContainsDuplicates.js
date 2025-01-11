//Given an array of integers and an integer k, find out whether there are two distinct indices i and
//j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.



function containsNearbyDuplicate(nums, k) {
    const indexMap = {}; // Object to store the index of elements

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in indexMap) {
            // Check if the difference between indices is at most k
            if (i - indexMap[num] <= k) {
                return true;
            }
        }
        // Update the object with the current index of the element
        indexMap[num] = i;
    }

    return false;
}

// Example usage:
const nums1 = [1, 2, 3, 1, 2, 3];
const k1 = 2;
console.log(containsNearbyDuplicate(nums1, k1)); // Output: false

const nums2 = [1, 0, 1, 1];
const k2 = 1;
console.log(containsNearbyDuplicate(nums2, k2)); // Output: true