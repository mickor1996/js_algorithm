/**
 * @param {character[][]} board
 * @return {number}
 */
// 4个for循环或者方向数组
var numRookCaptures = function (board) {
  let flag = 0
  let row = 0
  let col = 0
  let sum = 0
  for (let i = 0; i < board.length && flag == 0; i++) {
    for (let j = 0; j < board[0].length && flag == 0; j++) {
      if (board[i][j] == 'R') {
        flag = 1
        row = i
        col = j
      }
    }
  }
  for (let k = row; k >= 0; k--) {
    if (board[k][col] == 'B') {
      break
    }
    if (board[k][col] == 'p') {
      sum++
      break
    }
  }
  for (let k = row; k < board.length; k++) {
    if (board[k][col] == 'B') {
      break
    }
    if (board[k][col] == 'p') {
      sum++
      break
    }
  }
  for (let k = col; k >= 0; k--) {
    if (board[row][k] == 'B') {
      break
    }
    if (board[row][k] == 'p') {
      sum++
      break
    }
  }
  for (let k = col; k < board[0].length; k++) {
    if (board[row][k] == 'B') {
      break
    }
    if (board[row][k] == 'p') {
      sum++
      break
    }
  }
  return sum
};
console.log(numRookCaptures([[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], ["p", "p", ".", "R", ".", "p", "B", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "B", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]


))