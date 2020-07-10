let n = readInt()
if (n == 1) {
  print(0)
} else {
  let l = []
  for (let i = 0; i < n; i++) {
    let temp = readInt()
    l.push(temp)
  }
  let max = 0
  for (let i = 1; i < l.length; i++) {
    if (Math.abs(l[i] - l[i - 1]) < Math.abs(1 - l[i - 1])) {
      l[i] = 1
    }
    max += Math.abs(l[i] - l[i - 1])
  }
  print(max)
}
