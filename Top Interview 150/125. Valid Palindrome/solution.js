/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Normalize the string: convert to lowercase and remove non-alphanumeric characters
  const normalizedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  // Check if the normalized string is a palindrome
  return normalizedStr === normalizedStr.split('').reverse().join('')
}
