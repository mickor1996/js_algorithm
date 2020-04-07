/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < Math.ceil(matrix.length / 2); i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      swap(matrix, i, j, matrix.length - 1 - i, j)
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      swap(matrix, i, j, j, i)
    }
  }
};

function swap(m, i, j, k, l) {
  let temp
  temp = m[k][l]
  m[k][l] = m[i][j]
  m[i][j] = temp
}
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])