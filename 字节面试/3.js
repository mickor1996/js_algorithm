function print(a, b) {
  let i = 0
  let j = 0
  setInterval(() => { print_a(a) }, 10)
  setInterval(() => { print_b(b) }, 10)
  function print_a(a) {
    console.log(a[i % a.length])
    i++
  }
  function print_b(b) {
    console.log(b[j % b.length])
    j++
  }
}
print([1, 2, 3, 4], ['a', 'b', 'c'])