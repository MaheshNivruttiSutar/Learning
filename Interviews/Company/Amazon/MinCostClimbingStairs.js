//On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
//
//Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.
//
//Example 1:
//Input: cost = [10, 15, 20]
//Output: 15
//Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
//Example 2:
//Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
//Output: 6
//Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
//Note:
//cost will have a length in the range [2, 1000].
//Every cost[i] will be an integer in the range [0, 999].



function minCost(cost) {
    const n = cost.length;

    // Base cases
    if (n === 2) return Math.min(cost[0], cost[1]);

    // Initialize DP array
    const dp = new Array(n);
    dp[0] = cost[0];
    dp[1] = cost[1];

    // Fill DP array using the transition formula
    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    // Return the minimum cost to reach the top
    return Math.min(dp[n - 1], dp[n - 2]);
}

// Example usage
const cost1 = [10, 15, 20];
console.log(minCost(cost1)); // Output: 15

const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCost(cost2)); // Output: 6
