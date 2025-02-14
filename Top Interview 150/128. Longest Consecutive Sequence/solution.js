/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0

  const numSet = new Set(nums)
  let maxLength = 0

  for (const num of numSet) {
    // Check if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num
      let currentLength = 1

      // Expand the sequence
      while (numSet.has(currentNum + 1)) {
        currentNum++
        currentLength++
      }

      // Update the maximum length
      maxLength = Math.max(maxLength, currentLength)
    }
  }

  return maxLength
}
