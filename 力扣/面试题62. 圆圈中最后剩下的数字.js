/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 递归，会栈溢出
// var lastRemaining = function (n, m) {
//   if (n == 0) return 0
//   return (lastRemaining(n - 1, m) + m) % n
// };
// 循环
var lastRemaining = function (n, m) {
  let temp = 0
  for (let i = 2; i <= n; i++) {
    temp = (m + temp) % i
  }
  return temp
};
console.log(lastRemaining(3, 3))