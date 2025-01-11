// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.

class BestTimeToBuyAndSellStock {
    maxProfit(prices) {
        // Handle edge case where the prices array is empty
        if (prices.length === 0) {
            return 0;
        }

        let maxProfit = 0;
        let minPrice = prices[0];

        // Iterate through the prices array starting from the second price
        for (let i = 1; i < prices.length; i++) {
            // If the current price is greater than the minimum price seen so far
            if (prices[i] > minPrice) {
                // Calculate the profit and update maxProfit if it's greater
                maxProfit = Math.max(maxProfit, prices[i] - minPrice);
            } else {
                // Update minPrice if the current price is lower
                minPrice = prices[i];
            }
        }

        return maxProfit; // Return the maximum profit found
    }
}

// Example Usage:
const stockTrader = new BestTimeToBuyAndSellStock();
console.log(stockTrader.maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(stockTrader.maxProfit([7, 6, 4, 3, 1])); // Output: 0
