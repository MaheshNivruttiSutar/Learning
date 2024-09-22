// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.


function rob(nums) {
    // Edge cases
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    // Initialize dp array
    const dp = new Array(nums.length);

    // Base cases
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // Fill dp array using the recurrence relation
    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2]);
    }

    // The last element in dp array contains the answer
    return dp[nums.length - 1];
  }

  // Example usage
  // const houses = [2, 7, 9, 3, 1];
  // console.log(rob(houses));  // Output: 12


  const houses1 = [2, 11, 7, 9, 3, 1];
  console.log(rob(houses1));  // Output: 21