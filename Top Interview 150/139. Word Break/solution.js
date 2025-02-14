/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict) // Convert wordDict to a Set for O(1) lookups
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true // Base case: empty string can always be segmented

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true
        break // No need to check further for this i
      }
    }
  }

  return dp[s.length]
}
