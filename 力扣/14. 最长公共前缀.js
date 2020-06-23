/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let i = strs.length - 1; i > 0; i--) {
    let j = 0
    while (j < strs[i].length && j < strs[i - 1].length && strs[i][j] == strs[i - 1][j]) {
      j++
    }
    strs[i - 1] = strs[i - 1].slice(0, j)
  }
  return strs[0] == undefined ? "" : strs[0]
};
console.log(longestCommonPrefix([]))