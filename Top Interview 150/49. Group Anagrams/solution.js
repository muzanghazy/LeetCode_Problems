/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()

  for (const str of strs) {
    // Sort the characters of the string to create a key
    const sortedStr = str.split('').sort().join('')

    // If the key exists in the map, push the current string to the array
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str)
    } else {
      // Otherwise, create a new entry in the map
      map.set(sortedStr, [str])
    }
  }

  // Return the grouped anagrams as an array of arrays
  return Array.from(map.values())
}
