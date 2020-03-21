/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let len = null
  if (str1.length >= str2.length) {
    len = gcd(str1.length, str2.length)
  } else {
    len = gcd(str2.length, str1.length)
  }
  let str = str1.slice(0, len)
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str[i % len]) {
      return ""
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] != str[i % len]) {
      return ""
    }
  }
  return str
  function gcd(a, b) {
    if (b == 0) return a
    let r = a % b
    return gcd(b, r)
  }
};
console.log(gcdOfStrings("ABCABC", "ABC"))