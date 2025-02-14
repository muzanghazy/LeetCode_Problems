/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Trim leading and trailing spaces
  s = s.trim()

  // Split into words based on spaces and filter out empty strings
  let words = s.split(/\s+/).filter((word) => word.length > 0)

  // Reverse the array of words
  words.reverse()

  // Join the words with a single space
  return words.join(' ')
}
