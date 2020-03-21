/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const map = new Map()
  return CoinChange(coins, amount)
  function CoinChange(coins, amount) {
    if (amount < 0) return -1
    if (amount == 0) return 0
    let temp = map.get(amount)
    let num = null
    if (temp != undefined) {
      return temp
    }
    let flag = 0
    for (let i in coins) {
      num = CoinChange(coins, amount - coins[i]) + 1
      if (num != 0) {
        flag = 1
        if (num < map.get(amount) || map.get(amount) == undefined) {
          map.set(amount, num)
        }
      }
    }
    if (flag == 1) {
      flag = 0
      return map.get(amount)
    } else {
      map.set(amount, -1)
      return -1
    }
  }
};
console.log(coinChange([186, 419, 83, 408]
  , 6249))