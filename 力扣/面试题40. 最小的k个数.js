/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  return k > 0 ? arr.sort((a, b) => a - b).slice(0, k) : []
};
console.log(getLeastNumbers([1, 3, 2, 4, 7], -1))