// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


const S1 = [-1, 0, 1, 2, -1, -4];
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const triplets = [];
    const n = nums.length;

    // console.log("Sorted nums",nums);
    for (let i = 0; i < n - 2; i++) {
        // Skip the same element to avoid duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates for the second element
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the third element
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return triplets;
}

// Example usage
const S = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(S));
