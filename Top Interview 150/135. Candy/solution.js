/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length
  const candies = new Array(n).fill(1) // Initialize all candies to 1

  // First pass: Left to Right
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }

  // Second pass: Right to Left
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1)
    }
  }

  // Sum up all the candies
  return candies.reduce((sum, candy) => sum + candy, 0)
}
