/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = []
  let i = 0
  const n = intervals.length

  // Add all intervals before the newInterval that do not overlap
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i])
    i++
  }

  // Merge overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }
  result.push(newInterval)

  // Add remaining intervals
  while (i < n) {
    result.push(intervals[i])
    i++
  }

  return result
}
