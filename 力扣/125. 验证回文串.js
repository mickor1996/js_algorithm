/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toUpperCase()
  let i = 0
  let j = s.length - 1
  let res = /[0-9a-zA-Z]/
  while (i < j) {
    while (!res.test(s[i])) {
      i++
    }
    while (!res.test(s[j])) {
      j--
    }
    if (i <= j && s[i] != s[j]) {
      return false
    }
    if (i <= j && s[i] == s[j]) {
      i++
      j--
    }
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))