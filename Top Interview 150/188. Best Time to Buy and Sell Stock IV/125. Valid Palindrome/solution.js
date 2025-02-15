/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const n = prices.length
  if (k >= n / 2) {
    // If k is large enough, we can perform as many transactions as we want
    let maxProfit = 0
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        maxProfit += prices[i] - prices[i - 1]
      }
    }
    return maxProfit
  }

  // Initialize DP arrays
  const buy = new Array(k + 1).fill(-Infinity)
  const sell = new Array(k + 1).fill(0)

  for (let price of prices) {
    for (let i = 1; i <= k; i++) {
      buy[i] = Math.max(buy[i], sell[i - 1] - price)
      sell[i] = Math.max(sell[i], buy[i] + price)
    }
  }

  return sell[k]
}
