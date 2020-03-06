function printMatrix(matrix) {
  // write code here
  const list = []
  let i = 0
  let j = 0
  let k = 1
  const m = matrix.length
  if (!m) return []
  const n = matrix[0].length
  if (!n) return []
  while (list.length < m * n) {
    if (list.length == m * n - 1) {
      list.push(matrix[Math.floor(m / 2)][Math.floor(n / 2)])
      return list
    }
    for (; j < n - k; j++) {
      list.push(matrix[i][j])
    }
    for (; i < m - k; i++) {
      list.push(matrix[i][j])
    }
    for (; j > k - 1 && list.length < m * n; j--) {
      list.push(matrix[i][j])
    }
    for (; i > k - 1 && list.length < m * n; i--) {
      list.push(matrix[i][j])
    }
    i++
    j++
    k++
  }
  return list
}
l1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
]
l = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
l2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]

]
l3 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],

]
l4 = [[1, 2, 3, 4, 5]]
l5 = [[1], [2], [3]]
a = printMatrix(l5)
console.log(a)