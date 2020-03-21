/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力
// var maxProfit = function (prices) {
//   let max = 0
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] - prices[i] > max) {
//         max = prices[j] - prices[i]
//       }
//     }
//   }
//   return max
// };
// 记录到当前的历史最低
var maxProfit = function (prices) {
  let min = Number.MAX_VALUE
  let max = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    }
    if (prices[i] - min > max) {
      max = prices[i] - min
    }
  }
  return max
};
console.log(maxProfit([7, 6, 4, 3, 1]))