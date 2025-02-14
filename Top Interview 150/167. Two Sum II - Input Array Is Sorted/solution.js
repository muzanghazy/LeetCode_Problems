/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]

    if (sum === target) {
      // Return the indices adjusted for 1-based indexing
      return [left + 1, right + 1]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  // Since the problem states there is exactly one solution, this return is just a fallback
  return [-1, -1]
}
