// while(line = readline()){
//   line = line.split(' ')
//   let a = line[0]
//   let b = line[1]
//   print(solve(a,b))
// }
let n = 2
let sum = 0
for (let i = 1; i <= n; i++) {
  sum += 1 / (10 * n - 5)
  sum -= 1 / (10 * n)
}
console.log(sum.toFixed(4))