/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s
  }

  // Create an array of strings for each row
  const rows = new Array(numRows).fill('')

  let currentRow = 0
  let goingDown = false

  for (const char of s) {
    rows[currentRow] += char

    // Change direction if we've reached the top or bottom row
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown
    }

    // Move to the next row
    currentRow += goingDown ? 1 : -1
  }

  // Concatenate all rows to get the final result
  return rows.join('')
}
