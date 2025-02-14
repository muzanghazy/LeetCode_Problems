/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // Split the path into components
  const components = path.split('/')
  const stack = []

  for (const component of components) {
    if (component === '' || component === '.') {
      // Ignore empty components and '.'
      continue
    } else if (component === '..') {
      // Move up one directory level
      if (stack.length > 0) {
        stack.pop()
      }
    } else {
      // Add valid directory or file name to the stack
      stack.push(component)
    }
  }

  // Construct the canonical path
  const canonicalPath = '/' + stack.join('/')

  return canonicalPath
}
