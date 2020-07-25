/**
 * 处理函数，返回在所有分法中，蛋糕数量最少的盘子中分到最多的蛋糕数量
 * @param n int整型 n个盘子
 * @param a int整型 a蛋糕数量
 * @param b int整型 b蛋糕数量
 * @return int整型
 */
function solve(n, a, b) {
  // write code here
  if (a > 0 && b > 0 && n < 2) return 0
  if (a > b) {
    [a, b] = [b, a]
  }
  let sum = a + b
  let average = sum / n
  let n_a = Math.ceil(a / average)
  let less_a = Math.floor(a / n_a)
  let n_b = n - n_a
  let less_b = Math.floor(b / n_b)
  return Math.min(less_a, less_b) == -0 ? 0 : Math.min(less_a, less_b)
}
console.log(solve(5, 20, 2000))
module.exports = {
  solve: solve
};