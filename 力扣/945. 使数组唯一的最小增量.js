/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  const a = new Array(A.length)
  A.sort((a, b) => a - b)
  a[0] = A[0]
  let i = 0
  let num = 0
  while (i + 1 < A.length) {
    if (A[i + 1] <= a[i]) {
      a[i + 1] = a[i] + 1
      num += a[i] + 1 - A[i + 1]
    } else {
      a[i + 1] = A[i + 1]
    }
    i++
  }
  return num
};
minIncrementForUnique([1, 1, 1, 1])