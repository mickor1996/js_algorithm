/**
 * playfair加密算法
 * @param key string字符串 密钥
 * @param str string字符串 明文
 * @return string字符串
 */
function Encode(key, str) {
  // write code here
  while (key.indexOf('j') >= 0) {
    key = key.replace('j', 'i');
  }
  while (str.indexOf('j') >= 0) {
    str = str.replace('j', 'i');
  }
  let a = []
  let b = []
  for (let i = 0; i < 5; i++) {
    a.push(new Array(5))
  }
  let i = 0
  let j = 0
  let map = new Map()
  while (i < key.length) {
    if (map.get(key[i]) == undefined) {
      a[Math.floor(j / 5)][j % 5] = key[i]
      b.push(key[i])
      map.set(key[i], 1)
      j++
    }
    i++
  }
  let temp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let k = 0
  while (j < 25) {
    if (map.get(temp[k]) == undefined) {
      a[Math.floor(j / 5)][j % 5] = temp[k]
      b.push(temp[k])
      j++
    }
    k++
  }
  let c = 0
  let r_str = ''
  while (c < str.length) {
    if (c == str.length - 1) {
      r_str += str[c]
    } else {
      let t = b.indexOf(str[c])
      let t_h = Math.floor(t / 5)
      let t_l = t % 5
      let t2 = b.indexOf(str[c + 1])
      let t2_h = Math.floor(t2 / 5)
      let t2_l = t2 % 5
      if (str[c] == str[c + 1]) {
        r_str += str[c]
        r_str += str[c]
      } else {
        if (t_h == t2_h) {
          r_str += a[t_h][(t_l + 1) % 5]
          r_str += a[t2_h][(t2_l + 1) % 5]
        }
        else if (t_l == t2_l) {
          r_str += a[(t_h + 1) % 5][t_l]
          r_str += a[(t2_h + 1) % 5][t2_l]
        } else {
          r_str += a[t_h][t2_l]
          r_str += a[t2_h][t_l]
        }
      }
    }
    c += 2
  }
  return r_str
}
console.log(Encode("nowcoder", "rfrvhbje"))
module.exports = {
  Encode: Encode
};