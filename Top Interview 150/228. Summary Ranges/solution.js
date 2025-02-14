/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return []

  const ranges = []
  let start = nums[0]

  for (let i = 0; i < nums.length; i++) {
    // Check if the next number is not consecutive
    if (i + 1 >= nums.length || nums[i + 1] !== nums[i] + 1) {
      if (start === nums[i]) {
        ranges.push(`${start}`)
      } else {
        ranges.push(`${start}->${nums[i]}`)
      }
      if (i + 1 < nums.length) {
        start = nums[i + 1]
      }
    }
  }

  return ranges
}
