/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length
  const n = board[0].length

  // Directions for 8 neighbors
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  // Iterate through each cell
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let liveNeighbors = 0

      // Count live neighbors
      for (const [dx, dy] of directions) {
        const x = i + dx
        const y = j + dy

        if (
          x >= 0 &&
          x < m &&
          y >= 0 &&
          y < n &&
          (board[x][y] === 1 || board[x][y] === -1)
        ) {
          liveNeighbors++
        }
      }

      // Apply rules to determine next state
      if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[i][j] = -1 // Cell dies
      } else if (board[i][j] === 0 && liveNeighbors === 3) {
        board[i][j] = 2 // Cell becomes alive
      }
    }
  }

  // Update the board to the next state
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 0
      } else if (board[i][j] === 2) {
        board[i][j] = 1
      }
    }
  }
}
