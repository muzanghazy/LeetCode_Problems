/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return ''

  const charCount = {}
  for (const char of t) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  let left = 0,
    right = 0
  let required = Object.keys(charCount).length
  let formed = 0
  const windowCounts = {}

  let minLen = Infinity
  let minLeft = 0

  while (right < s.length) {
    const char = s[right]
    windowCounts[char] = (windowCounts[char] || 0) + 1

    if (charCount[char] && windowCounts[char] === charCount[char]) {
      formed++
    }

    while (left <= right && formed === required) {
      const currentLen = right - left + 1
      if (currentLen < minLen) {
        minLen = currentLen
        minLeft = left
      }

      const leftChar = s[left]
      windowCounts[leftChar]--
      if (charCount[leftChar] && windowCounts[leftChar] < charCount[leftChar]) {
        formed--
      }

      left++
    }

    right++
  }

  return minLen === Infinity ? '' : s.substring(minLeft, minLeft + minLen)
}
