/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  function grid(a, b) {
    if (b == 0) {
      return a
    } else {
      return grid(b, a % b)
    }
  }
  const map = new Map()
  for (let i of deck) {
    !map.get(i) ? map.set(i, 1) : map.set(i, map.get(i) + 1)
  }
  let x = null
  for (let i of map) {
    if (x) {
      x = grid(Math.max(x, i[1]), Math.min(x, i[1]))
    } else {
      x = i[1]
    }
  }
  if (x < 2) {
    return false
  }
  for (let i of map) {
    if (i[1] % x != 0) {
      return false
    }
  }
  return true
};
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]))