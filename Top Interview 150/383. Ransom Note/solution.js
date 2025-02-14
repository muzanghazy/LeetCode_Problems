/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Create a frequency map for the magazine
  const magazineCount = {}
  for (const char of magazine) {
    magazineCount[char] = (magazineCount[char] || 0) + 1
  }

  // Check if we can construct the ransomNote
  for (const char of ransomNote) {
    if (!magazineCount[char]) {
      return false
    }
    magazineCount[char]--
  }

  return true
}
