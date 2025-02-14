/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0] // Initialize maxSum with the first element
  let currentSum = nums[0] // Initialize currentSum with the first element

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Update currentSum to be the maximum of the current element or the currentSum plus the current element
    currentSum = Math.max(nums[i], currentSum + nums[i])

    // Update maxSum to be the maximum of maxSum and currentSum
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}
