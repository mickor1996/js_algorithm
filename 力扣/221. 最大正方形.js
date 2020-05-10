/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let max = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == "1") {
        matrix[i][j] = Math.min(i - 1 >= 0 && j - 1 >= 0 ? parseInt(matrix[i - 1][j - 1]) : 0, i - 1 >= 0 ? parseInt(matrix[i - 1][j]) : 0, j - 1 >= 0 ? parseInt(matrix[i][j - 1]) : 0) + 1
        max = Math.max(matrix[i][j], max)
      } else {
        matrix[i][j] = 0
      }
    }
  }
  return max * max
};
console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]))