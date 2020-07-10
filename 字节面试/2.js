// function arr(a, n) {
//   let min_num = Number.MAX_VALUE
//   for (let i = 0; i < a.length; i++) {
//     let sum = 0
//     let j = i
//     let num = 0
//     while (sum < n) {
//       sum += a[j]
//       j++
//       num++
//     }
//     min_num = num < min_num ? num : min_num
//   }
//   return min_num
// }
// console.log(arr([1, 3, 4, 3, 9, 1], 12))

function arr(a, n) {
  let i = 0
  let j = 0
  let sum = 0
  let min_num = Number.MAX_VALUE
  let num = 0
  while (i < a.length) {
    while (sum < n) {
      sum += a[i]
      i++
    }
    while (sum - a[j] >= n) {
      sum -= a[j]
      j++
    }
    num = i - j
    min_num = num < min_num ? num : min_num
    i++
  }
  return min_num
}
console.log(arr([1, 4, 4], 4))