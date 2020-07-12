/**
 * 
 * @param x string字符串 字符串从前到后分别是从上到下排列的n张扑克牌
 * @return string字符串
 */
function Orderofpoker(x) {
  // write code here
  x = x.split("")
  let list = []
  let i = x.length / 2
  while (i > 0) {
    if (isPrime(i)) {
      let temp = ""
      temp += x.shift()
      temp += x.shift()
      list.push(temp)
    } else {
      let temp = ""
      temp += x.pop()
      temp = x.pop() + temp
      list.push(temp)
    }
    i--
  }
  return list.join('')
  function isPrime(n) {
    if (n == 1) return true
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false
      }
    }
    return true
  }
}
console.log(Orderofpoker("8S6A"))
module.exports = {
  Orderofpoker: Orderofpoker
};