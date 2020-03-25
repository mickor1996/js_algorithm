/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let sum = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let top = Math.max(grid[i][j] - (i == 0 ? 0 : grid[i - 1][j]), 0)
      let bottom = Math.max(grid[i][j] - (i == grid.length - 1 ? 0 : grid[i + 1][j]), 0)
      let left = Math.max(grid[i][j] - (j == 0 ? 0 : grid[i][j - 1]), 0)
      let right = Math.max(grid[i][j] - (j == grid.length - 1 ? 0 : grid[i][j + 1]), 0)
      sum = sum + (grid[i][j] > 0 ? 2 : 0) + top + bottom + left + right
    }
  }
  return sum
}
console.log(surfaceArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))