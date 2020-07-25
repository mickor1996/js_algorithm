/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  let n = nums.length;
  // 添加两侧的虚拟气球
  let points = [1, ...nums, 1];
  let dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
  // 最后一行开始遍历,从下往上
  for (let i = n; i >= 0; i--) {
    // 从左往右
    for (let j = i + 1; j < n + 2; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          points[j] * points[k] * points[i] + dp[i][k] + dp[k][j]
        );
      }
    }
  }
  return dp[0][n + 1];
};
console.log(maxCoins([3, 1, 5, 8]))
