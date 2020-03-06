function reOrderArray(array) {
  // write code here
  const odd = []
  const even = []
  array.map(item => {
    if (item % 2 == 1) {
      odd.push(item)
    } else {
      even.push(item)
    }
  })
  odd.push(...even)
  return odd
}
a = [1, 3, 5, 7, 2, 4, 6]
console.log(reOrderArray(a))