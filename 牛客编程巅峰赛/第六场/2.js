/**
 * ​返回按照这些花排成一个圆的序列中最小的“丑陋度”
 * @param n int整型 花的数量
 * @param array int整型一维数组 花的高度数组
 * @return int整型
 */
function solve(n, array) {
  // write code here
  array.sort((a, b) => b - a)
  let a = []
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      a.unshift(array[i])
    } else {
      a.push(array[i])
    }
  }
  let max = Math.abs(a[0] - a[a.length - 1])
  for (let i = 1; i < a.length; i++) {
    let temp = Math.abs(a[i] - a[i - 1])
    max = max > temp ? max : temp
  }
  return max
}
// function solve(n, array) {
//   array.sort((a, b) => a - b)
//   let max = array[1] - array[0]
//   for (let i = 2; i < n; i++) {
//     temp = array[i] - array[i - 2]
//     max = max > temp ? max : temp
//   }
//   max = max > (array[n - 1] - array[n - 2]) ? max : (array[n - 1] - array[n - 2])
//   return max
// }
console.log(solve(7, [1, 2, 5, 10, 11, 13, 12]))
module.exports = {
  solve: solve
};