/**
  * 给定一个01组成的字符串计算出01串表示的二叉树中最少无重复覆盖监控节点数
  * @param inputs string字符串 01组成的字符串
  * @return int整型
  */
function min_monitors(inputs) {
  let real = []
  let i = 0
  let j = 1
  let k = 1
  real.push(parseInt(inputs[0]))
  while (j < inputs.length) {
    if (i >= k) {
      k = 2 * k + 1
    }
    if (real[i] == 1) {
      real.push(parseInt(inputs[j]))
      if (j + 1 < inputs.length) {
        real.push(parseInt(inputs[j + 1]))
      } else {
        real.push(0)
      }

      j += 2
      i++
    } else {
      real.push(0)
      real.push(0)
      i++
    }
  }
  for (let n = 0; n < k - i; n++) {
    real.push(0)
    real.push(0)
  }
  return real
}
module.exports = {
  min_monitors: min_monitors
};
console.log(min_monitors("101101101"))