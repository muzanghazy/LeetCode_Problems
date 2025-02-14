/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 1) return ''

  let start = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    // For odd-length palindromes
    let len1 = expandAroundCenter(s, i, i)
    // For even-length palindromes
    let len2 = expandAroundCenter(s, i, i + 1)
    // Get the maximum length
    let len = Math.max(len1, len2)

    // Update the start and end indices if a longer palindrome is found
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }

  // Return the longest palindromic substring
  return s.substring(start, end + 1)
}

/**
 * Helper function to expand around the center and find the length of the palindrome
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  // Return the length of the palindrome
  return right - left - 1
}
