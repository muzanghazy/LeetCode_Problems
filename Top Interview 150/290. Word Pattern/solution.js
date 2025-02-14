/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ')

  // If the number of words doesn't match the pattern length, return false
  if (words.length !== pattern.length) {
    return false
  }

  // Create two maps to store the mappings
  const patternToWord = new Map()
  const wordToPattern = new Map()

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    const word = words[i]

    // Check if the pattern character is already mapped to a different word
    if (patternToWord.has(char)) {
      if (patternToWord.get(char) !== word) {
        return false
      }
    } else {
      // Check if the word is already mapped to a different pattern character
      if (wordToPattern.has(word)) {
        return false
      }

      // Update both mappings
      patternToWord.set(char, word)
      wordToPattern.set(word, char)
    }
  }

  return true
}
