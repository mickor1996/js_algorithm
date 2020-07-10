function max_arr(arr) {
  let max = -Number.MAX_VALUE
  let a = new Array(arr.length)
  a[arr.length - 1] = arr[arr.length - 1]
  if (arr.filter(item => item > 0).length < 0) {
    return '数组没有正数'
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    a[i] = arr[i] + (a[i + 1] > 0 ? a[i + 1] : 0)
    max = max < a[i] ? a[i] : max
  }
  return a[0]
}
console.log(max_arr([1, 2, 5, -7, 8, -10]))
