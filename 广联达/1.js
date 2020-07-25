function solve(l) {
  l.sort((a, b) => a - b)
  let l1 = []
  let i = l.length - 1
  while (i > 0) {
    if (l[i] == l[i - 1] && l1.length < 2) {
      l1.push(l[i])
      i--
    }
    i--
  }
  if (l1.length < 2) {
    return -1
  }
  return l1[0] * l1[1]
}
let l = '3 3 3 5 4 4 5'
l = l.split(" ")
l = l.map(item => parseInt(item))

console.log(solve(l))