/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(" ").reverse().filter(item => item != "").join(" ")
};
console.log(reverseWords("a good   example"))