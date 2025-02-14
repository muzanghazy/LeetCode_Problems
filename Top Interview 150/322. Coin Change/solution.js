/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // Initialize a DP array with Infinity, except for dp[0] which is 0
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  // Iterate through each coin
  for (const coin of coins) {
    // Update the DP array for each amount from coin to amount
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }

  // If dp[amount] is still Infinity, it means the amount cannot be made up
  return dp[amount] === Infinity ? -1 : dp[amount]
}
