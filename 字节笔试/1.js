function cat(a, b) {
  let i = 0;
  let j = a.length - 1
  let temp = 0
  let isTrue = true
  while (a[i] == b[i]) {
    i++
  }
  while (a[j] == b[j]) {
    j--
  }
  temp = a[i] - b[i]
  for (let k = i; k <= j; k++) {
    if (a[k] - b[k] != temp) {
      isTrue = false
    }
  }
  return isTrue
}
console.log(cat([1, 2, 5], [4, 5, 6]))