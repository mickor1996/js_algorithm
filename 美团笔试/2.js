let n = '0'
let r = '1 2 3 4 5'
r = r.split(' ')
r.sort((a, b) => a - b)
let sum = 0
let color = 0
let i = 0
if (r.length % 2 == 1) {
  while (i < r.length) {
    if (i % 2 == 0) {
      sum += Math.PI * r[i] * r[i]
    } else {
      sum -= Math.PI * r[i] * r[i]
    }
    i++
  }
} else {
  while (i < r.length) {
    if (i % 2 == 0) {
      sum -= Math.PI * r[i] * r[i]
    } else {
      sum += Math.PI * r[i] * r[i]
    }
    i++
  }
}

console.log(sum.toFixed(5))
