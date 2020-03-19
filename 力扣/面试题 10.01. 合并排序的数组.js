/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  let i = 0
  let j = 0
  let num = m
  while (i < m + n && j < n) {
    if (A[i] <= B[j]) {
      i++
    } else {
      for (let k = m + n - 1; k > i; k--) {
        A[k] = A[k - 1]
      }
      A[i] = B[j]
      j++
      i++
      num++
    }
  }
  if (num < m + n) {
    for (; num < m + n; num++) {
      A[num] = B[j]
      j++
    }
  }
  return A
};
let A = [1, 2, 4, 0, 0, 0]
let B = [3, 5, 6]
console.log(merge(A, 3, B, 3))