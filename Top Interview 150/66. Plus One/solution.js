/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Start from the end of the array
  for (let i = digits.length - 1; i >= 0; i--) {
    // If the current digit is less than 9, just increment it and return
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }
    // If the current digit is 9, set it to 0 and continue to the next digit
    digits[i] = 0
  }

  // If we exit the loop, it means we have a carry that needs to be added as a new digit
  return [1, ...digits]
}
