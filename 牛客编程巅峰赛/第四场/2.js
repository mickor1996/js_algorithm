/**
 * 得到牛牛能够凑到的最大的数字
 * @param n int整型 牛牛能够承受的价格
 * @param a int整型一维数组 1-9这九个数字的价格数组
 * @return string字符串
 */
function solve(n, a) {
  // write code here
  let a2 = []
  let x2 = []
  for (let i = 0; i < 9; i++) {
    let temp = Math.floor(n / a[i])
    for (let j = 0; j < temp; j++) {
      a2.push(a[i])
      x2.push(i + 1)
    }
  }
  a2 = a2.reverse()
  x2 = x2.reverse()
  return dp(n, 0)
  let max = 0
  function dp(m, i) {
    if (i > a2.length) return 0
    return Math.max((m >= a2[i]) ? Math.pow(10, i) * x2[i] + dp(m - a2[i], i + 1) : 0, dp(m, i + 1))
  }
}
console.log(solve(5, [5, 4, 3, 2, 1, 2, 3, 4, 5]))
module.exports = {
  solve: solve
};