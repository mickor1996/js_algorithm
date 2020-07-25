function a(s) {
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let map = new Map()
    let temp = 0
    for (let j = i; j < s.length; j++) {
      if (map.get(s[j]) == undefined) {
        temp++
        map.set(s[j], 1)
      } else {
        max = Math.max(max, temp)
        break
      }
    }
  }
  return max
}
console.log(a('abcabcabc'))