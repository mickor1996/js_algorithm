/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const visit = new Array(grid.length)
  for (let i = 0; i < grid.length; i++) {
    visit[i] = new Array(grid[0].length).fill(0)
  }
  let max = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visit[i][j] == 0 && grid[i][j] == 1) {
        visit[i][j] = 1
        num(grid, i, j)
      } else {
        visit[i][j] = 1
      }

    }
  }
  return max
  function num(grid, i, j) {
    const q = []
    let num = 1
    q.push([i, j])
    while (q.length != 0) {
      let temp = q.pop()
      i = temp[0]
      j = temp[1]
      if (i < grid.length - 1 && grid[i + 1][j] == 1 && visit[i + 1][j] == 0) {
        q.push([i + 1, j])
        visit[i + 1][j] = 1
        num++
      }
      if (i > 0 && grid[i - 1][j] == 1 && visit[i - 1][j] == 0) {
        q.push([i - 1, j])
        visit[i - 1][j] = 1
        num++
      }
      if (j < grid[0].length - 1 && grid[i][j + 1] == 1 && visit[i][j + 1] == 0) {
        q.push([i, j + 1])
        visit[i][j + 1] = 1
        num++
      }
      if (j > 0 && grid[i][j - 1] == 1 && visit[i][j - 1] == 0) {
        q.push([i, j - 1])
        visit[i][j - 1] = 1
        num++
      }
    }
    if (num > max) {
      max = num
    }
  }
};
console.log(maxAreaOfIsland(
  [[0], [1]]
))