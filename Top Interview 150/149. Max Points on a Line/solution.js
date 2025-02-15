/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false
  }

  const dp = new Array(s1.length + 1)
    .fill(false)
    .map(() => new Array(s2.length + 1).fill(false))
  dp[0][0] = true

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (dp[i][j]) {
        if (i < s1.length && s1[i] === s3[i + j]) {
          dp[i + 1][j] = true
        }
        if (j < s2.length && s2[j] === s3[i + j]) {
          dp[i][j + 1] = true
        }
      }
    }
  }

  return dp[s1.length][s2.length]
}
