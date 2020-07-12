/**
 * 
 * @param n int整型 
 * @param m int整型 
 * @param k int整型 
 * @return int整型
 */
function solve(n, m, k) {
  // write code here
  function s(a, b) {
    let x = 0
    let y = 0
    for (let i = b; i > b - 1; i--) {
      x *= i
    }
    for (let j = a; j > 0; j--) {
      y *= j
    }
    return x / y
  }
  if (k < 2) {
    return 0
  }
  let sum = 0
  sum += 2 * s(k - 2, m * n - 4)
  sum += 2 * s(k - 3, m * n - 4)
  sum += s(k - 4, m * n - 4)
  sum += (m - 2) * (n - 2) * s()
}
module.exports = {
  solve: solve
};