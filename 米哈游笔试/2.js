/**
  * 给定一个01组成的字符串计算出01串表示的二叉树中最少无重复覆盖监控节点数
  * @param inputs string字符串 01组成的字符串
  * @return int整型
  */
//  function min_monitors( inputs ) {
//   // write code here
//   let sum = 0
//   inputs=inputs.split('')
//   return inputs.filter(item=>item==1).length/2
// }
function min_monitors(inputs) {
  // write code here
  let l = []
  let temp = []
  inputs = inputs.split("")

  let i = 0
  let j = 1
  let k = 2
  l.push(parseInt(inputs[0]))
  while (j < inputs.length) {

    if (l[i] == '0') {
      temp.push(0)
      temp.push(0)
      i += 2
    } else {
      temp.push(parseInt(inputs[j]))
      j++
      i += 2
      temp.push(parseInt(inputs[j]))
      j++

    }
    if (i == k) {
      k = (k + 1) * 2
      l = l.concat(temp)
      temp = []
    }
  }
}
module.exports = {
  min_monitors: min_monitors
};
min_monitors("101101101")