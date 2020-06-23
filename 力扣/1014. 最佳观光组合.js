/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  let maxi = 0
  let max = 0
  for (let i = 1; i < A.length; i++) {
    maxi = Math.max(maxi, A[i - 1] + i - 1)
    max = Math.max(max, maxi + A[i] - i)
  }
  return max
};
console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]))