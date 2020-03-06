// 基础做法，超时
// function GetUglyNumber_Solution(index) {
//   // write code here
//   let n = 1
//   let x = 1
//   while (n < index) {
//     x++
//     if (judge_ugly(x)) {
//       n++
//     }
//   }
//   return x
// }
// function judge_ugly(x) {
//   while (x % 2 == 0) {
//     x /= 2
//   }
//   while (x % 3 == 0) {
//     x /= 3
//   }
//   while (x % 5 == 0) {
//     x /= 5
//   }
//   if (x == 1) {
//     return true
//   }
//   else {
//     return false
//   }
// }
function GetUglyNumber_Solution(index) {
  // write code here
  const num = [0, 1]
  let p1 = 1
  let p2 = 1
  let p3 = 1
  for (let i = 1; i < index; i++) {
    num.push(Math.min(...new Array(num[p1] * 2, num[p2] * 3, num[p3] * 5)))
    if (num[i + 1] == num[p1] * 2) p1++
    if (num[i + 1] == num[p2] * 3) p2++
    if (num[i + 1] == num[p3] * 5) p3++
  }
  return num[index]
}
console.log(GetUglyNumber_Solution(7))