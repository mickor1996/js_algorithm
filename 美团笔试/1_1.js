let n = '73598793378342493'
let line = '1 3 6 1 6 8 9 1 3'
let str = line.split(' ')
let newstr = ''
for (let i = 0; i < n.length; i++) {
  if (n[i] >= '1' && n[i] <= '9') {
    newstr += str[n[i] - 1]
  } else {
    newstr += n[i]
  }

}
console.log(newstr)
// 96631936691613136