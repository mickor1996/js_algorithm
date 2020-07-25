/**
 * 
 * @param s string字符串 s.size() <= 1e5
 * @param k int整型 k <= s.size()
 * @return int整型
 */
function turn(s, k) {
  // write code here
  let s2 = s.split('')
  s2 = s2.map(item => item.charCodeAt())
  let s3 = []
  for (let i = 0; i < k; i++) {
    let temp = []
    for (let j = i; j < s.length; j += k) {
      temp.push(s2[j])
    }
    s3.push(temp)
  }
  let num = 0
  for (let i = 0; i < s3.length; i++) {
    num += change(s3[i])
  }
  return num
  function change(s) {
    let count = 0
    while (s.length > 0) {
      let max = -1
      let max_id = -1
      for (let j = 0; j < s.length; j++) {
        if (max < s[j]) {
          max = s[j]
          max_id = j
        }
      }
      count += max_id
      s.splice(max_id, 1)
    }

    return count
  }
}
console.log(turn("x", 1))
module.exports = {
  turn: turn
};