// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].




class TwoSum {
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            // Check if the complement exists in the map
            if (map.has(complement)) {
                return [map.get(complement), i]; // Return indices
            }

            // Store the current number and its index in the map
            map.set(nums[i], i);
        }

        return []; // Return an empty array if no solution is found
    }
}

// Example Usage
const twoSumInstance = new TwoSum();
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSumInstance.twoSum(nums, target)); // Output: [0, 1]
