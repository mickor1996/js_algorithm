// 题目描述
// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。
// 例如abce
//     sfcs
//     adee
//     矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。    

function hasPath(matrix, rows, cols, path) {
  if (!path) return true
  let temp = matrix.split('')
  const visit = []
  matrix = []
  let k = 0
  for (let i = 0; i < rows; i++) {
    let v = []
    let m = []
    for (let j = 0; j < cols; j++) {
      v.push(0)
      m.push(temp[k])
      k++
    }
    visit.push(v)
    console.log(m)
    matrix.push(m)
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == path[0]) {
        visit[i][j] = 1
        if (subHasPath(matrix, rows, cols, path.slice(1), i, j)) return true
        visit[i][j] = 0
      }
    }
  }
  return false
  function subHasPath(matrix, rows, cols, path, i, j) {
    if (!path) return true
    if (matrix[i][j + 1] && matrix[i][j + 1] == path[0] && visit[i][j + 1] == 0) {
      visit[i][j + 1] = 1
      if (subHasPath(matrix, rows, cols, path.slice(1), i, j + 1)) return true
      visit[i][j + 1] = 0
    }
    if (matrix[i][j - 1] && matrix[i][j - 1] == path[0] && visit[i][j - 1] == 0) {
      visit[i][j - 1] = 1
      if (subHasPath(matrix, rows, cols, path.slice(1), i, j - 1)) return true
      visit[i][j - 1] = 0
    }
    if (i < rows - 1 && matrix[i + 1][j] && matrix[i + 1][j] == path[0] && visit[i + 1][j] == 0) {
      visit[i + 1][j] = 1
      if (subHasPath(matrix, rows, cols, path.slice(1), i + 1, j)) return true
      visit[i + 1][j] = 0
    }
    if (i >= 1 && matrix[i - 1][j] && matrix[i - 1][j] == path[0] && visit[i - 1][j] == 0) {
      visit[i - 1][j] = 1
      if (subHasPath(matrix, rows, cols, path.slice(1), i - 1, j)) return true
      visit[i - 1][j] = 0
    }
    return false
  }
}
let matrix = 'ABCESFCSADEE'
console.log(hasPath(matrix, 3, 4, 'SEC'))