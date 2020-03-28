let n = '4'
n = parseInt(n)
let k = '3'
k = parseInt(k)
let a = '1 0 0 0'
a = a.split(' ')
for (let i in a) {
  a[i] = parseInt(a[i])
}

const map = new Map()
function sum(k, n) {

  if (k == 0) {
    return a[n - 1]
  }
  let temp = 0
  for (let i = 1; i <= n; i++) {
    let t = 0
    if (map.get(`${k - 1},${i}`) == undefined) {
      t = sum(k - 1, i)
      map.set(`${k - 1},${i}`, t)
    } else {
      t = map.get(`${k - 1},${i}`)
    }
    temp += sum(k - 1, i)
  }
  return temp
}
console.log(sum(k, n) % 998244353)