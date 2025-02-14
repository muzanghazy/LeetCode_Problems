/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s || !words || words.length === 0) return []

  const wordLength = words[0].length
  const totalLength = words.length * wordLength
  const wordCount = {}

  // Count the frequency of each word in the words array
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1
  }

  const result = []

  // Slide the window across the string
  for (let i = 0; i <= s.length - totalLength; i++) {
    const seen = {}
    let j = 0

    // Check each chunk in the window
    while (j < words.length) {
      const word = s.substr(i + j * wordLength, wordLength)

      // If the word is not in the words array, break
      if (!(word in wordCount)) break

      // Count the frequency of the word in the current window
      seen[word] = (seen[word] || 0) + 1

      // If the frequency exceeds the count in words, break
      if (seen[word] > wordCount[word]) break

      j++
    }

    // If all words are matched, add the starting index to the result
    if (j === words.length) {
      result.push(i)
    }
  }

  return result
}
