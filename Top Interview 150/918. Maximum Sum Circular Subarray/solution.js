/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let totalSum = 0
  let maxSum = -Infinity
  let currentMax = 0
  let minSum = Infinity
  let currentMin = 0

  for (let num of nums) {
    totalSum += num

    // Kadane's algorithm for maximum subarray sum
    currentMax = Math.max(currentMax + num, num)
    maxSum = Math.max(maxSum, currentMax)

    // Modified Kadane's algorithm for minimum subarray sum
    currentMin = Math.min(currentMin + num, num)
    minSum = Math.min(minSum, currentMin)
  }

  // If all numbers are negative, return the maximum subarray sum
  if (maxSum < 0) {
    return maxSum
  }

  // Otherwise, return the maximum of the maximum subarray sum and the total sum minus the minimum subarray sum
  return Math.max(maxSum, totalSum - minSum)
}
