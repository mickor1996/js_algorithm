function solve(l) {
  let dp = new Array(l.length).fill(1)
  for (let i = 0; i < l.length; i++) {
    for (let j = 0; j < i; j++) {
      if (l[i] >= l[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  let max = Math.max(...dp)
  return l.length - max
}
console.log(solve([4, 2, 3, 9, 5, 6]))