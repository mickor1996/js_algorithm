/**
  * 校验原字符串 s 是否匹配 规则 p
  * @param s string字符串 原字符串
  * @param p string字符串 匹配规则
  * @return bool布尔型
  */
function Match(s, p) {
  // write code here
  if (!p.length) return s.length == 0
  let flag = s.length > 0 && (s[0] == p[0] || p[0] == '.')
  if (p.length > 1 && p[1] == "*") {
    return Match(s, p.slice(2)) || (flag && Match(s.slice(1), p))
  } else {
    return flag && Match(s.slice(1), p.slice(1))
  }
}
console.log(Match("abcba", "abcb"))

module.exports = {
  Match: Match
};