/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let sum = 0
  let map = new Map()
  recursion(0, 0, k)
  function recursion(i, j, k) {
    if (i > m - 1 || j > n - 1) {
      return
    }
    if (isSatisfied(i, j, k)) {
      if (map.has(i + '-' + j)) {
        return
      } else {
        map.set(i + '-' + j, 1)
        sum++
        recursion(i, j + 1, k)
        recursion(i + 1, j, k)
      }
    }
  }
  return sum
};
function isSatisfied(i, j, k) {
  let sum = 0
  while (i > 0) {
    sum += i % 10
    i = Math.floor(i / 10)
  }
  while (j > 0) {
    sum += j % 10
    j = Math.floor(j / 10)
  }
  return sum <= k
}
console.log(movingCount(3, 2, 17))