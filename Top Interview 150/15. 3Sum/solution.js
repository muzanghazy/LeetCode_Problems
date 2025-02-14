/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b) // Sort the array
  const result = []

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])

        // Skip duplicates for the second and third elements
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--

        left++
        right--
      } else if (sum < 0) {
        left++ // Move left pointer to increase the sum
      } else {
        right-- // Move right pointer to decrease the sum
      }
    }
  }

  return result
}
