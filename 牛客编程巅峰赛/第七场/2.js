/**
 * 两个数表示答案
 * @param n int整型 一次运输的冰激凌数量
 * @param m int整型 总冰激凌数
 * @param t int整型 一次运输的时间
 * @param c int整型一维数组 表示每个冰激凌制作好时间<1e4
 * @return int整型一维数组
 */
function icecream(n, m, t, c) {
  // write code here
  c.sort((a, b) => a - b)
  return dps(n, m, t, c)
  function dps(n, m, t, c) {
    let temp = []
    if (c.length <= 0) return [0, 0]
    for (let i = 1; i <= n; i++) {
      let a = dps(n, m, t, c.slice(i))
      temp.push([(a[0] + 2 * t) < c[0] ? c[0] : (a[0] + 2 * t), a[1] + 1])
    }
    let min = Number.MAX_VALUE
    let min_num = 0
    for (let i = 0; i < temp.length; i++) {
      if (temp[i][0] < min) {
        min = temp[i][0]
        min_count = temp[i][1]
      }
    }
    return [min, min_num]
  }
}
console.log(icecream(2, 3, 10, [10, 30, 40]))
module.exports = {
  icecream: icecream
};