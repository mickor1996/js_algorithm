/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let max = 0
  let temp = null
  for (let i = 0; i < B.length; i++) {
    temp = fl(A, B.slice(i))
    max = (max > temp ? max : temp)
  }
  for (let i = 0; i < A.length; i++) {
    temp = fl(B, A.slice(i))
    max = (max > temp ? max : temp)
  }
  return max
  function fl(A, B) {
    let j = 0
    let temp = 0
    let max = 0
    while (j < A.length && j < B.length) {
      if (A[j] == B[j]) {
        j++
        temp++
        max = (max > temp ? max : temp)
      } else {
        temp = 0
        j++
      }
    }
    return max
  }
};
console.log(findLength([0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  , [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]))