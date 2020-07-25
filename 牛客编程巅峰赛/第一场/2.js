/**
 * 返回最后要输出的答案
 * @param n int整型 表示牛牛的数字
 * @param m int整型 表示牛妹的数字
 * @return int整型
 */
function solve(n, m) {
  // write code here
  let map = new Map()
  map.set(n, 0)
  s(n, m, 0)

  return map.get(m)
  function s(n, m, count) {
    if (n == m) {
      map.set(n, count)
      return count
    }

    if (n + 1 <= m && (map.get(n + 1) == undefined || map.get(n + 1) > count + 1)) {
      map.set(n + 1, count + 1)
      s(n + 1, m, count + 1)
    }
    if (n - 1 > 0 && (map.get(n - 1) == undefined || map.get(n - 1) > count + 1)) {
      map.set(n - 1, count + 1)
      s(n - 1, m, count + 1)
    }
    if (n * n <= 2 * m && (map.get(n * n) == undefined || map.get(n * n) > count + 1)) {
      map.set(n * n, count + 1)
      s(n * n, m, count + 1)
    }

  }
}
module.exports = {
  solve: solve
};
console.log(solve(3, 7))