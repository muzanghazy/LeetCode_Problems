/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // Normalize k to be within the length of the array
  k = k % nums.length

  // Reverse the entire array
  reverse(nums, 0, nums.length - 1)

  // Reverse the first k elements
  reverse(nums, 0, k - 1)

  // Reverse the remaining elements
  reverse(nums, k, nums.length - 1)
}

// Helper function to reverse a portion of the array
function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}
