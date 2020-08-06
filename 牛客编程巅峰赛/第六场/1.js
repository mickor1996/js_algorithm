/**
 * 返回一个数，代表让这些数都变成奇数的最少的操作次数
 * @param n int整型 代表一共有多少数
 * @param a int整型一维数组 代表n个数字的值
 * @return int整型
 */
function solve(n, a) {
  // write code here
  a.sort((a, b) => a - b)
  let i = 0
  let sum = 0
  let map = new Map()
  while (i < a.length) {
    while (i + 1 < a.length && a[i] == a[i + 1]) {
      i++
    }
    while (a[i] % 2 != 1 && map.get(a[i]) == undefined) {
      map.set(a[i], 1)
      a[i] /= 2
      sum++
    }
    i++
  }
  return sum
}
console.log(solve(3, [4, 2, 6, 12, 2]))
module.exports = {
  solve: solve
};