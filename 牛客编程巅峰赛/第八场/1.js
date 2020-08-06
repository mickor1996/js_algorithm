/**
 * 返回重新分配后，满足牛牛要求的水量的瓶子最多的数量
 * @param n int整型 瓶子的数量
 * @param x int整型 牛牛的对瓶中的水量要求
 * @param a int整型一维数组 每个瓶子中的含水量
 * @return int整型
 */
function solve(n, x, a) {
  // write code here
  a.sort((a, b) => b - a)
  let sum = a[0]
  if (sum < x) return 0
  let i = 1
  for (i = 1; i < n; i++) {
    if ((sum + a[i]) / (i + 1) >= x) {
      sum += a[i]
    } else {
      break
    }
  }
  return i
}
console.log(solve(1, 7, [7]))
module.exports = {
  solve: solve
};