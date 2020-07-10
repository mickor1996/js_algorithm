function all(a, b) {
  let i = 0
  let j = 0
  while (1) {
    new Promise(() => { t1(a) })
    new Promise(() => { t2(b) })
  }
  function t1(a) {
    console.log(a[i % a.length])
    i++
  }
  function t2(b) {
    console.log(b[j % b.length])
    j++
  }
}
all([1, 2, 3, 4], ['a', 'b', 'c'])