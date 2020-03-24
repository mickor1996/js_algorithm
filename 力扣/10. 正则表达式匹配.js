/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p.length == 0) return s.length == 0
  let flag = s.length > 0 && (s[0] == p[0] || p[0] == '.')
  if (p[1] == '*') {
    return (flag && isMatch(s.slice(1), p)) || isMatch(s, p.slice(2))
  }
  else {
    return flag && isMatch(s.slice(1), p.slice(1))
  }

};
console.log(isMatch("ab", ".*"))