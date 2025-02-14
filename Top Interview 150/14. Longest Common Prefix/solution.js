/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // If the array is empty, return an empty string
  if (strs.length === 0) {
    return ''
  }

  // Initialize the prefix as the first string
  let prefix = strs[0]

  // Loop through the rest of the strings
  for (let i = 1; i < strs.length; i++) {
    // Compare the current string with the prefix
    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten the prefix one character at a time
      prefix = prefix.slice(0, prefix.length - 1)
      // If no common prefix exists, return empty string
      if (prefix === '') {
        return ''
      }
    }
  }

  return prefix
}
