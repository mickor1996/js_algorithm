/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  function pow(x, n) {
    if (n == 0) return 1
    return n % 2 == 0 ? pow(x * x, n / 2) : pow(x * x, parseInt(n / 2)) * x
  }
  if (n >= 0) {
    return pow(x, n)
  } else {
    return 1 / pow(x, n)
  }
};
console.log(myPow(2, -3))