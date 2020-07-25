/**
 * 
 * @param n int整型 
 * @param a int整型一维数组 
 * @return int整型
 */
function search(n, a) {
  // write code here
  let temp = null
  for (let i = 0; i <= n; i++) {
    if (a[i] == i + 1) {
      continue
    } else {
      if (a[a[i] - 1] == a[i]) {
        return a[i]
      }
      temp = a[a[i] - 1]
      a[a[i] - 1] = a[i]
      a[i] = temp
      i--
    }
  }
}
console.log(search(4, [1, 2, 4, 3, 1]))
module.exports = {
  search: search
};