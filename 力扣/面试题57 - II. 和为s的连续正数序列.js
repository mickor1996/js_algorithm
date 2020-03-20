/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  const list = []
  let i = 1
  let j = 2
  while (i < j && j <= Math.ceil(target / 2)) {
    if (sum(i, j) < target) {
      j++
    } else if (sum(i, j) == target) {
      let l = []
      for (let k = i; k <= j; k++) {
        l.push(k)
      }
      list.push(l)
      j++
    } else {
      i++
    }
  }
  return list

  function sum(i, j) {
    return (i + j) * (j - i + 1) / 2
  }

};
console.log(findContinuousSequence(1))