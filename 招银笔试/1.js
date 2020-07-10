function yht(n) {
  let a = [[1, 1]]
  for (let i = 0; i < n; i++) {
    let temp = []
    for (let j = 0; j <= i + 2; j++) {
      temp.push((j - 1 >= 0 ? a[i][j - 1] : 0) + (j >= i + 2 ? 0 : a[i][j]))
    }
    a.push(temp)
  }
}
yht(6)