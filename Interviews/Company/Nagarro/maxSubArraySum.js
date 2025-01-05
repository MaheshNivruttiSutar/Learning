/*
To find the maximum sum subarray, you can use Kadane's Algorithm which runs in O(n) time.
This algorithm efficiently finds the largest sum of a contiguous subarray in an array of integers.
Here is a JavaScript implementation of Kadane's Algorithm:

JavaScript Program to Find Maximum Sum Subarray
*/


function maxSubArraySum(arr) {
    // Initialize variables to store the maximum sum and current sum
    let maxSum = arr[0];
    let currentSum = arr[0];

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // Update current sum by adding the current element or starting fresh from current element
      currentSum = Math.max(arr[i], currentSum + arr[i]);

      // Update max sum if current sum is greater than the max sum
      maxSum = Math.max(maxSum, currentSum);
    }

    // Return the maximum sum of the subarray
    return maxSum;
  }

  // Example usage
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log("Maximum Subarray Sum is:", maxSubArraySum(arr)); // Output: 6
