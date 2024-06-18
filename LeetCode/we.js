/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 2:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexit
*/



function twoSum(nums, target) {
    // Create an object to store each number and its index
    const numToIndex = {};

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        // Check if the complement is already in the object
        if (numToIndex[complement] !== undefined) {
            // Return the indices of the two numbers
            return [numToIndex[complement], i];
        }

        // Store the current number and its index in the object
        numToIndex[num] = i;
    }

    // If no solution is found (though the problem guarantees one), return an empty array
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));  // Output: [0, 1]
