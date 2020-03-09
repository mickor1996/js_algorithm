// 题目描述
// 写一个函数，求两个整数之和，要求在函数体内不得使用 +、-、*、/四则运算符号。
function Add(num1, num2) {
  let result = 0
  let carry = 0
  do {
    result = num1 ^ num2
    carry = (num1 & num2) << 1
    num1 = result
    num2 = carry
  } while (carry != 0)
  return result
}
console.log(Add(111, 899))