// 题目描述
// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0
// 输入描述:
// 输入一个字符串,包括数字字母符号,可以为空
// 输出描述:
// 如果是合法的数值表达则返回该数字，否则返回0
// 示例1
// 输入
// 复制
// +2147483647
//     1a33
// 输出
// 复制
// 2147483647
//     0
function StrToInt(str) {
  // write code here
  if (!str.length) return 0
  let isNegative = 0
  let start = 0
  let num = 0
  if (str[0] == '-') {
    isNegative = 1
    start = 1
  }
  if (str[0] == '+') {
    isNegative = 0
    start = 1
  }
  for (let i = str.length - 1; i >= start; i--) {
    if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
      num += str[i] * Math.pow(10, str.length - i - 1)
    }
    else {
      return 0
    }
  }

  num = isNegative ? -1 * num : num
  if (num > 2147483647 || num < -2147483648) return 0
  return num
}
console.log(Number.MAX_VALUE)
console.log(StrToInt('123'))