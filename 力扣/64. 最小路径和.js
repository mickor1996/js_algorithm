/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let dp = new Array(grid[0].length).fill(Number.MAX_VALUE)
  dp[grid[0].length - 1] = 0
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = dp.length - 1; j >= 0; j--) {
      dp[j] = grid[i][j] + Math.min(j + 1 < dp.length ? dp[j + 1] : Number.MAX_VALUE, dp[j])
    }
  }
  return dp[0]
};
console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]))