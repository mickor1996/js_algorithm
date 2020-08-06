let n = 6
let a = "A B C D E E"
let b = "A E D C B B"
a = a.split(" ")
b = b.split(" ")
let dp = []
for (let i = 0; i < n; i++) {
  dp[i] = new Array(n)
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (a[i] == b[j]) {
      dp[i][j] = ((i - 1 < 0 || j - 1 < 0) ? 0 : dp[i - 1][j - 1]) + 1
    } else {
      dp[i][j] = Math.max(i - 1 < 0 ? 0 : dp[i - 1][j], j - 1 < 0 ? 0 : dp[i][j - 1])
    }
  }
}
console.log(dp[n - 1][n - 1])
