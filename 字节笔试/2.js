function count(l) {
  let sum = 0
  for (let i = l.length - 2; i >= 0; i--) {
    if (l[i] > l[i + 1]) {
      let n = 2
      while (l[i] % n + Math.floor(l[i] / n) > l[i + 1]) {
        n++
      }
      l[i] = Math.floor(l[i] / n)
      sum += n - 1
    }
  }
  return sum
}
console.log(count([3, 5, 13, 9, 12]))