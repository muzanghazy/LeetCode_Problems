/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // Base case: if n is 0, return 1
  if (n === 0) return 1

  // If n is negative, convert the problem to 1 / pow(x, -n)
  if (n < 0) {
    x = 1 / x
    n = -n
  }

  // Recursive function to calculate the power
  function powHelper(x, n) {
    if (n === 0) return 1

    // Calculate half power
    const half = powHelper(x, Math.floor(n / 2))

    // If n is even, return half * half
    if (n % 2 === 0) {
      return half * half
    } else {
      // If n is odd, return half * half * x
      return half * half * x
    }
  }

  return powHelper(x, n)
}
