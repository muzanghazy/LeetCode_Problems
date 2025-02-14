/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // Helper function to calculate the sum of squares of digits
  function getSumOfSquares(num) {
    let sum = 0
    while (num > 0) {
      const digit = num % 10
      sum += digit * digit
      num = Math.floor(num / 10)
    }
    return sum
  }

  // Use a set to detect cycles
  const seen = new Set()

  while (n !== 1 && !seen.has(n)) {
    seen.add(n)
    n = getSumOfSquares(n)
  }

  // If n is 1, it's a happy number
  return n === 1
}
