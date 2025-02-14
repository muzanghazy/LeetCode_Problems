/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = []
  let result = 0
  let num = 0
  let sign = 1 // 1 for positive, -1 for negative

  for (let i = 0; i < s.length; i++) {
    let char = s[i]

    if (!isNaN(char) && char !== ' ') {
      // Build the number
      num = num * 10 + parseInt(char)
    } else if (char === '+' || char === '-') {
      // Add the previous number to the result
      result += sign * num
      // Reset the number
      num = 0
      // Update the sign
      sign = char === '+' ? 1 : -1
    } else if (char === '(') {
      // Push the current result and sign onto the stack
      stack.push(result)
      stack.push(sign)
      // Reset the result and sign for the new scope
      result = 0
      sign = 1
    } else if (char === ')') {
      // Add the last number to the result
      result += sign * num
      // Reset the number
      num = 0
      // Pop the sign and result from the stack
      result *= stack.pop() // sign
      result += stack.pop() // previous result
    }
    // Ignore spaces
  }

  // Add the last number to the result
  result += sign * num

  return result
}
