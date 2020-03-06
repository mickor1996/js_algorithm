function GetLeastNumbers_Solution(input, k) {
  // write code here
  if (k > input.length) return []
  input.sort((a, b) => a - b)
  return input.slice(0, k)
}
// function GetLeastNumbers_Solution(input, l, r) {
//   // write code here
//   if (l != r) {
//     let { arr, pivot } = Partition(input, l, r)
//     input = arr
//     // if (k < middle) {
//     GetLeastNumbers_Solution(input, l, pivot)
//     // }
//     // if (k > middle) {
//     GetLeastNumbers_Solution(input, pivot + 1, r)
//     // }
//   }
//   return input
// }
// function Partition(input, l, r) {
//   if (input.length == 1) {
//     return { arr: input, pivot: l }
//   }
//   const p = input[l]
//   let i = l
//   let j = r
//   let temp = null
//   while (i < j) {
//     while (input[i] <= p && i < j) {
//       i++
//     }
//     while (input[j] > p && i <= j) {
//       j--
//     }
//     if (i < j) {
//       temp = input[j]
//       input[j] = input[i]
//       input[i] = temp
//     }

//   }
//   temp = input[j]
//   input[j] = input[l]
//   input[l] = temp
//   let pivot = j
//   return { arr: input, pivot: pivot }
// }

// a = [3, 1, 4, 7, 2, 9]
// console.log(GetLeastNumbers_Solution(a, 0, 5))