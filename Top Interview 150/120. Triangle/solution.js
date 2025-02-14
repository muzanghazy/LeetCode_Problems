/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length
  // Initialize dp array with the last row of the triangle
  let dp = triangle[n - 1]

  // Start from the second-to-last row and move upwards
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      // Update dp[j] to be the current element plus the minimum of the two adjacent elements from the row below
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }

  // The minimum path sum will be in dp[0]
  return dp[0]
}
