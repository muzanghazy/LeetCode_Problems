/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = []

  for (let token of tokens) {
    if (!isNaN(token)) {
      // If the token is a number, push it onto the stack
      stack.push(parseInt(token))
    } else {
      // If the token is an operator, pop the top two numbers from the stack
      let num2 = stack.pop()
      let num1 = stack.pop()

      // Perform the operation and push the result back onto the stack
      if (token === '+') {
        stack.push(num1 + num2)
      } else if (token === '-') {
        stack.push(num1 - num2)
      } else if (token === '*') {
        stack.push(num1 * num2)
      } else if (token === '/') {
        // Division truncates toward zero
        stack.push(Math.trunc(num1 / num2))
      }
    }
  }

  // The final result is the only number left on the stack
  return stack.pop()
}
