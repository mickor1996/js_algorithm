/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let q = []
  let n = 0
  let distance = 0
  let array = new Array(matrix.length)
  for (let k = 0; k < array.length; k++) {
    array[k] = new Array(matrix[0].length).fill(-1)
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        q.push([i, j])
        n++
      }
    }
  }
  for (let j = 0; j < q.length; j++) {
    if (j == n) {
      n = q.length
      distance += 1
    }
    if (q[j][0] >= matrix.length || q[j][0] < 0 || q[j][1] >= matrix[0].length || q[j][1] < 0) {
      continue
    }
    if (array[q[j][0]][q[j][1]] == -1) {
      array[q[j][0]][q[j][1]] = distance
      q.push([q[j][0] - 1, q[j][1]])
      q.push([q[j][0] + 1, q[j][1]])
      q.push([q[j][0], q[j][1] - 1])
      q.push([q[j][0], q[j][1] + 1])
    }
  }
  return array
};
console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))