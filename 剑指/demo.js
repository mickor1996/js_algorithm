/*export function debounse(func,delay=50){   
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}*/
// function hash(i, j) {
//   return `${i}-${j}`
// }
// function NumberOf1Between1AndN_Solution(n) {
//   // write code here
//   let cnt = 0
//   for (let i = 0; i < n; i++) {
//     if (i.toString().indexOf('1') != -1) {
//       j = i
//       while (j.toString().indexOf('1') != -1) {
//         j[j.toString().indexOf('1')] = '0'
//         cnt++
//       }
//     }
//   }
//   return cnt
// }
a = [1, 2]
console.log(a[-1])