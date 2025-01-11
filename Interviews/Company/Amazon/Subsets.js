// Given a set of distinct integers, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]



function subsets(nums) {
    const result = [];

    // Helper function for backtracking
    function backtrack(start, currentSubset) {
        result.push([...currentSubset]); // Add the current subset to the results

        for (let i = start; i < nums.length; i++) {
            // Include nums[i] in the current subset
            currentSubset.push(nums[i]);
            // Move on to the next element
            backtrack(i + 1, currentSubset);
            // Exclude nums[i] from the current subset and move on to the next element
            currentSubset.pop();
        }
    }

    backtrack(0, []);
    return result;
}

// Example usage
const nums = [1, 2, 3];
console.log(subsets(nums));
// Output:
// [
//   [],         // empty subset
//   [1],        // subsets with only one element
//   [1, 2],
//   [1, 2, 3],
//   [1, 3],
//   [2],
//   [2, 3],
//   [3]
// ]
