/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0 // Edge case: empty array

  let k = 0 // Pointer for the position of the next unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++ // Move the pointer to the next position
      nums[k] = nums[i] // Place the unique element at the new position
    }
  }

  return k + 1 // The number of unique elements is k + 1
}
