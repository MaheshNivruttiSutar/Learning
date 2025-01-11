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



class Subsets {
    subsets(nums) {
        const result = [];

        this.recurse(result, nums, [], 0);

        return result;
    }

    recurse(result, nums, path, position) {
        if (position === nums.length) {
            result.push([...path]); // Add a copy of the current path to result
            return;
        }

        // Include the current number
        path.push(nums[position]);
        this.recurse(result, nums, path, position + 1);

        // Exclude the current number
        path.pop();
        this.recurse(result, nums, path, position + 1);
    }
}

// Example Usage
const subsetsInstance = new Subsets();
const nums = [1, 2, 3];
console.log(subsetsInstance.subsets(nums));
