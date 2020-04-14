function house(h) {
  let num = []
  for (let i = 0; i < h.length; i++) {
    let j = i
    let k = i

    while (j >= 0 && h[j] <= h[i]) {
      j--
    }
    while (k < h.length && h[k] <= h[i]) {
      k++
    }
    num.push(k - j - 2)
  }
  return num
}
console.log(house([5, 8, 1, 3, 2, 9]))