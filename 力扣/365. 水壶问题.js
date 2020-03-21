/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  if (x + y < z) return false
  if (!x || !y) return !z || x + y == z
  return z % gcd(Math.max(x, y), Math.min(x, y)) == 0
  function gcd(x, y) {
    if (y == 0) return x
    let r = x % y
    return gcd(y, r)
  }
};
console.log(canMeasureWater(2, 6, 5))