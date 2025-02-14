/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map() // Create a map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i] // Calculate the complement

    if (numMap.has(complement)) {
      // If the complement exists in the map, return the indices
      return [numMap.get(complement), i]
    }

    // Otherwise, store the current number and its index in the map
    numMap.set(nums[i], i)
  }

  // If no solution is found (though the problem guarantees one), return an empty array
  return []
}
