/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let map = new Map()
  wordDict.sort((a, b) => b.length - a.length)
  return wb(s, wordDict)
  function wb(s, wordDict) {
    let flag = false
    if (s.length == 0) {
      return true
    }
    if (map.get(s) == undefined) {
      for (let i = 0; i < wordDict.length; i++) {
        if (wordDict[i] == s.slice(0, wordDict[i].length)) {
          flag = flag || wb(s.slice(wordDict[i].length), wordDict)
        }
      }
    }
    if (!flag) {
      map.set(s, false)
    }
    return flag
  }
};
console.log(wordBreak("aaaaaaaaab",
  ["a", "aa", "aaa",]))