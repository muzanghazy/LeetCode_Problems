/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // Sort the citations in descending order
  citations.sort((a, b) => b - a)

  // Iterate through the sorted array to find the h-index
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) {
      return i
    }
  }

  // If all papers have at least h citations, return the length of the array
  return citations.length
}
