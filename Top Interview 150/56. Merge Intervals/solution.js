/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return []

  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0])

  let merged = []
  let currentInterval = intervals[0]
  merged.push(currentInterval)

  for (let i = 1; i < intervals.length; i++) {
    let nextInterval = intervals[i]

    // Check if the current interval overlaps with the next interval
    if (currentInterval[1] >= nextInterval[0]) {
      // Merge the intervals by updating the end time
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
    } else {
      // No overlap, add the next interval to the merged list
      currentInterval = nextInterval
      merged.push(currentInterval)
    }
  }

  return merged
}
