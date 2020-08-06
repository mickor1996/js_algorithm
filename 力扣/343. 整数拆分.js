/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0)
  for (let i = 2; i <= n; i++) {
    let max = 0
    for (let j = 1; j < i; j++) {
      let temp = Math.max(j * dp[i - j], j * (i - j))
      max = max > temp ? max : temp
    }
    dp[i] = max
  }
  return dp[n]
};
console.log(integerBreak(10))