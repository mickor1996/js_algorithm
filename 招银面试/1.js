function average(array) {
  let a = {}
  for (let i = 0; i < array.length; i++) {
    if (a[array[i][1]] == undefined) {
      a[array[i][1]] = [array[i][2]]
    } else {
      a[array[i][1]] = [...a[array[i][1]], array[i][2]]
    }
  }
  for (let i of a) {
    i
  }
}
console.log(average([['张三', '数学', 99], ['李四', '数学', 80]]))