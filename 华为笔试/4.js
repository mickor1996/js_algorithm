function solve(prices, nums, money) {
  prices.sort((a, b) => a - b)
  let n = null
  s(prices, nums, money, 0)
  return n
  function s(prices, nums, money, sum_n) {
    if (n != null) return
    if (money == 0) n = sum_n
    if (money < 0) return
    for (let i = prices.length - 1; i >= 0; i--) {
      if (nums[i] > 0) {
        nums[i]--
        s(prices, nums, money - prices[i], sum_n + 1)
      } else {
        continue
      }
    }
  }
}
console.log(solve([1, 3, 7, 11, 13, 2, 123, 42, 1, 34, 1, 12, 23, 15, 52], [1, 2, 3, 4, 5, 1, 2, 3, 1, 5, 12, 3, 21, 2, 3], 30))