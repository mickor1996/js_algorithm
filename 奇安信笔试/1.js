let n = 9
let list = [[2, 2], [2, 3], [3, 1], [1, 5], [5, 4], [2, 3]]
function buy(n, list) {
  if (list.length == 0) {
    return 0
  } else {
    if (n - list[0][0] >= 0) {
      return Math.max(buy(n - list[0][0], list.slice(1)) + list[0][1], buy(n, list.slice(1)))

    } else {
      return buy(n, list.slice(1))
    }
  }
}
console.log(buy(9, list))
