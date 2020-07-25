/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let m = dungeon.length,
    n = dungeon[0].length,
    max = Number.MAX_VALUE;
  let dp = new Array(n + 1).fill(max);
  dp[n - 1] = 1;
  for (let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      dp[j] = Math.max(1, Math.min(dp[j], dp[j + 1]) - dungeon[i][j]);
    }
  }
  return dp[0];
};
console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]))