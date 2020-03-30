/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  let hash = new Set(words)
  let sum = 0
  for (let i of words) {
    for (let j = 1; j < i.length; j++) {
      let temp = i.slice(j)
      hash.has(temp) && hash.delete(temp)
    }
  }
  hash.forEach(item => sum += item.length + 1)
  return sum
};
console.log(minimumLengthEncoding(
  ["time", "me", "bell"]))