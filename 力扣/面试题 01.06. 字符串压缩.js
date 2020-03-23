/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let temp_str = S[0]
  let num = 0
  let str = ""
  for (let i = 0; i < S.length; i++) {
    if (S[i] != temp_str) {
      str += temp_str + num.toString()
      num = 1
      temp_str = S[i]
    } else {
      num++
    }
  }
  str += temp_str + num.toString()
  return str.length < S.length ? str : S
};
console.log(compressString("aabcccccaaa"))