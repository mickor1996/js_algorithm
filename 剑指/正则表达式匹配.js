// 题目描述
// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
//s, pattern都是字符串
// 利用正则
// function match(s, pattern) {
//   return new RegExp('^' + pattern + '$').test(s)
// }
// 双指针
function match(s, pattern) {
  if (!pattern.length) return s.length == 0
  let flag = s.length > 0 && (s[0] == pattern[0] || pattern[0] == '.')
  if (pattern.length > 1 && pattern[1] == "*") {
    return match(s, pattern.slice(2)) || (flag && match(s.slice(1), pattern))
  } else {
    return flag && match(s.slice(1), pattern.slice(1))
  }
}
console.log(match('a', '.a'))