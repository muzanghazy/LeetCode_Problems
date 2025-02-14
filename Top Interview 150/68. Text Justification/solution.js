/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = []
  let index = 0

  while (index < words.length) {
    let count = words[index].length
    let last = index + 1

    while (last < words.length) {
      if (words[last].length + count + 1 > maxWidth) break
      count += words[last].length + 1
      last++
    }

    let line = ''
    let difference = last - index - 1

    // If last line or number of words in the line is 1, left-justify
    if (last === words.length || difference === 0) {
      for (let i = index; i < last; i++) {
        line += words[i] + ' '
      }
      line = line.trim()
      while (line.length < maxWidth) {
        line += ' '
      }
    } else {
      // Calculate spaces
      let spaces = (maxWidth - count) / difference
      let remainder = (maxWidth - count) % difference

      for (let i = index; i < last; i++) {
        line += words[i]
        if (i < last - 1) {
          let spaceLength = spaces + (i - index < remainder ? 1 : 0)
          for (let j = 0; j <= spaceLength; j++) {
            line += ' '
          }
        }
      }
    }

    result.push(line)
    index = last
  }

  return result
}
