/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let map = new Map()
  return im(s, p)
  function im(s, p) {
    let temp = null
    if (map.get(`${s.length}-${p.length}`) == undefined) {
      if (!p.length) return s.length == 0
      if (p.length) {
        if (p[0] == '*') {
          temp = im(s, p.slice(1)) || (s.length > 0 && im(s.slice(1), p))
          map.set(`${s.length}-${p.length}`, temp)
          return temp
        }
        else if (s.length > 0 && (p[0] == '?' || s[0] == p[0])) {
          temp = im(s.slice(1), p.slice(1))
          map.set(`${s.length}-${p.length}`, temp)
          return temp
        }
        map.set(`${s.length}-${p.length}`, false)
        return false
      }
    } else {
      return map.get(`${s.length}-${p.length}`)
    }
  }
};
console.log(isMatch("", "?"))