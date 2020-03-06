function NumberOf1Between1AndN_Solution(n) {
  // write code here
  let cnt = 0

  for (let m = 1; m <= n * 10; m *= 10) {
    let a = parseInt(n / m)
    let b = n % m
    let c = (a + (parseInt(10 * b / m) > 1 ? 1 : 0)) * Math.floor(m / 10)
    let d = (parseInt(10 * b / m) == 1) ? (10 * b % m / 10 + 1) : 0
    cnt += c + d
  }
  return cnt
}
console.log(NumberOf1Between1AndN_Solution(0))
