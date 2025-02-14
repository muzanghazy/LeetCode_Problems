/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = []

  for (let num of nums) {
    let left = 0,
      right = dp.length

    // Binary search to find the position to insert the current number
    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      if (dp[mid] < num) {
        left = mid + 1
      } else {
        right = mid
      }
    }

    // If the number is greater than all elements in dp, extend the subsequence
    if (left === dp.length) {
      dp.push(num)
    } else {
      // Otherwise, replace the first element in dp that is greater than or equal to num
      dp[left] = num
    }
  }

  return dp.length
}
