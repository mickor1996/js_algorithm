// 题目描述
// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
// 两层循环
// function multiply(array) {
//   let b = []
//   let temp = 1
//   for (let i in array) {
//     for (let j in array) {
//       if (i != j) {
//         temp *= array[j]
//       }
//     }
//     b.push(temp)
//     temp = 1
//   }
//   return b
// }
// 分两组乘积
function multiply(array) {
  let b = [1]
  let temp = 1
  for (let i = 1; i < array.length; i++) {
    b[i] = array[i - 1] * b[i - 1]
  }
  for (let j = array.length - 2; j >= 0; j--) {
    temp *= array[j + 1]
    b[j] *= temp
  }
  return b
}
console.log(multiply([1, 2, 3]))