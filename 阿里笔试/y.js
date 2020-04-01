let list = [2, 5, 6]//取到的数字列表
let e = []//之后放入每种取法的最大值
list.sort((a, b) => a - b)//排序
max(list, 0)//把每种最大加入e数组，详见后面函数
console.log(sum(e))//求e数组中的值的均值，打印
function max(l, m) {
  if (l.length == 0) {
    // 列表为0就把最大值加入e数组
    e.push(m)
  } else {
    // 否则就把列表第一位删除，后面丢进函数，
    // 取l[0]的函数说明这个数字选，取m的说明这个数字不选，
    // 不管选不选都把这个数字扔掉就好了
    max(l.slice(1), l[0])
    max(l.slice(1), m)
  }
}
function sum(l) {
  // 求和函数
  let s = 0
  l.forEach(item => s += item)
  return s / (l.length - 1)
}