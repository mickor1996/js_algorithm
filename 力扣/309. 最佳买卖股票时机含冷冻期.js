/**
 * @param {number[]} prices
 * @return {number}
 */
// 题目解析
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/kong-jian-you-hua-de-dpsi-lu-by-mickor/
var maxProfit = function (prices) {
  let dp = [-prices[0], 0, 0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    dp = [Math.max(dp[2] - prices[i], dp[0]), dp[0] + prices[i], Math.max(dp[2], dp[1])]
    max = Math.max(max, ...dp)
  }
  return max
};
console.log(maxProfit([1, 2, 3, 0, 2]))