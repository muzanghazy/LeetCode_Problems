/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity // Initialize minPrice to a very large value
  let maxProfit = 0 // Initialize maxProfit to 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i] // Update minPrice if current price is lower
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice // Update maxProfit if current profit is higher
    }
  }

  return maxProfit
}
