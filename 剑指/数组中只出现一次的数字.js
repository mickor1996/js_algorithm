// 常规方法
function FindNumsAppearOnce(array) {
  const map = new Map()
  array.forEach(item => {
    let r = map.get(item)
    if (r == undefined) {
      map.set(item, 0)
    } else {
      map.delete(item)
    }
  })
  return new Array(...map.keys())
}
// 异或方法
function FindNumsAppearOnce(array) {
  let n = array.reduce((total, value) => total ^ value)
  let count = 0
  while (!(n & 1 << count)) count++
  return new Array(
    array.filter(item => item & 1 << count).reduce((total, value) => total ^ value),
    array.filter(item => !(item & 1 << count)).reduce((total, value) => total ^ value)
  )
}
array = [1, 1, 2, 2, 3, 3, 4, 5]
console.log(FindNumsAppearOnce(array))