/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  const bracketPairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== bracketPairs[char]
      ) {
        return false
      }
      stack.pop()
    }
  }

  return stack.length === 0
}
