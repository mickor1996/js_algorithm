/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  let ocean = []
  let island = []
  let max = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0) {
        ocean.push([i, j])
      } else {
        island.push([i, j])
      }
    }
  }
  if (ocean.length == 0 || island.length == 0) {
    return -1
  }
  for (let i = 0; i < ocean.length; i++) {
    let temp = Number.MAX_VALUE
    for (let j = 0; j < island.length; j++) {
      let distance = Math.abs(island[j][0] - ocean[i][0]) + Math.abs(island[j][1] - ocean[i][1])
      if (distance < temp) {
        temp = distance
      }
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
};
console.log(maxDistance([[1, 0, 1], [0, 0, 0], [1, 0, 1]]))