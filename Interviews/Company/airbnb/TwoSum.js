// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


function twoSum(nums, target) {
    // Create a hash map to store the difference and its index
    const map = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement that we need to find
        const complement = target - nums[i];

        // Check if the complement exists in the hash map
        if (map.has(complement)) {
            // If it exists, return the indices of the complement and the current element
            return [map.get(complement), i];
        }

        // Otherwise, add the current element and its index to the hash map
        map.set(nums[i], i);
    }

    // Return an empty array if no solution is found (though the problem guarantees a solution)
    return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));  // Output: [0, 1]
