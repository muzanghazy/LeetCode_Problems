/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // If the lengths are different, they can't be anagrams
  if (s.length !== t.length) {
    return false
  }

  // Create a character count map for string s
  const charCount = {}

  // Count characters in s
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  // Decrement the count for characters in t
  for (let char of t) {
    if (!charCount[char]) {
      return false
    }
    charCount[char]--
  }

  // If all counts are zero, they are anagrams
  return true
}
