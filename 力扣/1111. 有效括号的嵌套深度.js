/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  seq = seq.split('')
  let num = []
  seq.map((value, index) => {
    if ((value == '(' && index % 2 == 0) || (value == ')' && index % 2 == 1)) {
      num.push(0)
    } else {
      num.push(1)
    }
  })
  return num
};