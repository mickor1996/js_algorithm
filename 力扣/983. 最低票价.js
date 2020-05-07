/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let dp = new Array(days[days.length - 1]).fill(0);
  for (let i = days[0], k = 0; i <= days[days.length - 1]; i++) {
    if (i === days[k]) { //确定今天是不是旅行日
      dp[i] = Math.min(dp[(i - 1) >= 0 ? (i - 1) : 0] + costs[0],
        dp[(i - 7) >= 0 ? (i - 7) : 0] + costs[1],
        dp[(i - 30) >= 0 ? (i - 30) : 0] + costs[2]) //如果是，就得用前面花的钱加上今天花的钱。
      //今天之前的钱数都是确定的且最小的。
      k++
    } else {
      dp[i] = dp[i - 1] //如果今天不旅行，那肯定不花钱，跟前一天的钱一样。
    }
  }
  return dp[dp.length - 1]
};