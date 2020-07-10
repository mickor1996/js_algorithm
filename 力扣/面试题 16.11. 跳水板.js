/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k == 0) return []
  let l = []
  for (let i = 0; i <= k; i++) {
    if (l.length == 0 || longer * i + shorter * (k - i) > l[l.length - 1]) {
      l.push(longer * i + shorter * (k - i))
    }
  }
  return l
};