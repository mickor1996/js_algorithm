function price(a, b) {
  a.sort((a, b) => a - b)
  a.unshift(0)
  a.push(Number.MAX_VALUE)
  let sum = 0
  for (let i of b) {
    let j = 0
    for (j = 0; j < a.length; j++) {
      if (i < a[j]) {
        break
      }
    }
    sum += i - a[j - 1]
  }
  return sum
}
console.log(price([50, 100, 200], [99, 199, 200, 300]))