function m(l, i) {
  if (i < l.length) {
    let a = m(l, i + 1) + Math.abs(l[i] - l[i - 1])
    l[i] = 1
    let b = m(l, i + 1) + Math.abs(1 - l[i - 1])
    return Math.max(a, b)
  } else {
    return 0
  }
}
console.log(m([10, 1, 10, 1, 10], 1))