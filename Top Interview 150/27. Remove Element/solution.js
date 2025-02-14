/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0 // Pointer for the position to place the next non-val element

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i] // Place the non-val element at position k
      k++ // Move the pointer forward
    }
  }

  return k // Return the count of elements not equal to val
}
