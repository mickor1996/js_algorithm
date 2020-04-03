/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == 1 && (sum(board, i, j) > 3||sum(board,i,j)<2)) {
        board[i][j] = 2
      } else if (board[i][j] == 0 && sum(board, i, j) == 3) {
        board[i][j] = -1
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == 2) {
        board[i][j] = 0
      } else if (board[i][j] == -1) {
        board[i][j] = 1
      }
    }
  }
  return board
};
function sum(board, i, j) {
  return num(board, i + 1, j) + num(board, i - 1, j)
    + num(board, i + 1, j + 1) + num(board, i - 1, j + 1)
    + num(board, i + 1, j - 1) + num(board, i - 1, j - 1)
    + num(board, i, j + 1) + num(board, i, j - 1)
}
function num(board, i, j) {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return 0
  } else if (board[i][j] >= 1) {
    return 1
  } else {
    return 0
  }
}
console.log(gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]))