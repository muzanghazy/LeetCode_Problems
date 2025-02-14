/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0
  let minLength = Infinity
  let currentSum = 0

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right]

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1)
      currentSum -= nums[left]
      left++
    }
  }

  return minLength === Infinity ? 0 : minLength
}
