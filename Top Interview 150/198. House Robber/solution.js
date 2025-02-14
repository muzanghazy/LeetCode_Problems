/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  let prev1 = 0 // Represents dp[i-1]
  let prev2 = 0 // Represents dp[i-2]

  for (let i = 0; i < nums.length; i++) {
    let current = Math.max(prev1, prev2 + nums[i])
    prev2 = prev1
    prev1 = current
  }

  return prev1
}
