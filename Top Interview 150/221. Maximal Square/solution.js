/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0

  const rows = matrix.length
  const cols = matrix[0].length
  const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0))
  let maxLen = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        maxLen = Math.max(maxLen, dp[i][j])
      }
    }
  }

  return maxLen * maxLen
}
