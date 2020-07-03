/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  function count(matrix, n) {
    let i = matrix.length - 1
    let j = 0
    let c = 0
    while (i >= 0 && j < matrix.length) {
      if (matrix[i][j] > n) {
        i--
        j = 0
      } else {
        j++
        c++
        if (j == matrix.length) {
          j = 0
          i--
        }
      }
    }
    return c
  }
  let l = matrix[0][0]
  let r = matrix[matrix.length - 1][matrix.length - 1]
  let m = Math.floor((l + r) / 2)
  let c
  while (l <= r) {
    c = count(matrix, m)
    if (k <= c) {
      r = m - 1
      m = Math.floor((l + r) / 2)
    } else {
      l = m + 1
      m = Math.floor((l + r) / 2)
    }
  }
  return l
};
console.log(kthSmallest([[1, 4], [1, 8]]
  , 3))