/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  // If the starting cell is an obstacle, return 0
  if (obstacleGrid[0][0] === 1) {
    return 0
  }

  // Initialize dp array
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  dp[0][0] = 1

  // Fill the first row
  for (let j = 1; j < n; j++) {
    if (obstacleGrid[0][j] === 0) {
      dp[0][j] = dp[0][j - 1]
    } else {
      dp[0][j] = 0
    }
  }

  // Fill the first column
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 0) {
      dp[i][0] = dp[i - 1][0]
    } else {
      dp[i][0] = 0
    }
  }

  // Fill the rest of the grid
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      } else {
        dp[i][j] = 0
      }
    }
  }

  return dp[m - 1][n - 1]
}
