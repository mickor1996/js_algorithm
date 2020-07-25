/**
 * 
 * @param x int整型 
 * @return bool布尔型
 */
// function solve(x) {
//   // write code here
//   if (String(Math.sqrt(x)).indexOf('.') == -1) return true
//   let a = [0, 1, 4, 5, 6, 9]
//   if (a.indexOf(x % 10) == -1) return false
//   return true
// }
function solve(x) {
  let a = [0, 1, 4, 5, 6, 9]
  for (let i = 1; i < x; i++) {
    if (x % i == 0 && 1000 % i == 0) {
      if (a.indexOf(x % 10) == -1) {
        return false
      }
    }
  }
  return true
}
console.log(solve(999))
module.exports = {
  solve: solve
};