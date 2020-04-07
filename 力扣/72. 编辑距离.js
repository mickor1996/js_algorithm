/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let list = new Array(word1.length + 1)
  for (let i = 0; i < list.length; i++) {
    list[i] = new Array(word2.length + 1)
  }
  for (let i = 0; i < list.length; i++) {
    list[i][0] = i
  }
  for (let j = 0; j < list[0].length; j++) {
    list[0][j] = j
  }
  for (let i = 1; i < list.length; i++) {
    for (let j = 1; j < list[0].length; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        list[i][j] = Math.min(list[i - 1][j], list[i][j - 1], list[i - 1][j - 1] - 1) + 1
      } else {
        list[i][j] = Math.min(list[i - 1][j], list[i][j - 1], list[i - 1][j - 1]) + 1
      }
    }
  }
  return list[word1.length][word2.length]
};
console.log(minDistance('horse', 'ros'))