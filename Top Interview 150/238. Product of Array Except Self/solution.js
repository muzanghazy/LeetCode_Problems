/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length
  const answer = new Array(n).fill(1)

  // First pass: calculate the product of all elements to the left of each element
  let leftProduct = 1
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct
    leftProduct *= nums[i]
  }

  // Second pass: calculate the product of all elements to the right of each element
  let rightProduct = 1
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct
    rightProduct *= nums[i]
  }

  return answer
}
