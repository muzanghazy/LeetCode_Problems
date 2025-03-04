/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let firstRowHasZero = false
  let firstColHasZero = false

  // Check if the first row has any zeros
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true
      break
    }
  }

  // Check if the first column has any zeros
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true
      break
    }
  }

  // Mark zeros on the first row and column
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  // Set zeros based on marks in the first row and column
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  // Set zeros for the first row if needed
  if (firstRowHasZero) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0
    }
  }

  // Set zeros for the first column if needed
  if (firstColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
}
