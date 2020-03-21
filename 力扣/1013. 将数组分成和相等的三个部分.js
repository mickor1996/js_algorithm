/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  let i = 0
  let sum = A.reduce((pre, n) => pre += n)
  if (sum % 3 != 0) return false
  sum /= 3
  let temp = A[i]
  while (temp != sum) {
    i++
    if (i > A.length - 2) return false
    temp += A[i]

  }
  i++
  temp = A[i]
  while (temp != sum) {
    i++
    if (i > A.length - 2) return false
    temp += A[i]
  }
  return true
};

console.log(canThreePartsEqualSum([1, -1, 1, -1]))