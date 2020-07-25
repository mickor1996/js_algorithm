/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n <= 0) return 1
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += numTrees(i - 1) * numTrees(n - i)
  }
  return sum
};
console.log(numTrees(0))