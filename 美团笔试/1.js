const readline = require('readline')
let n = null
let num = 0
let str = []
let newstr = ''
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', (line) => {
  console.log(line)
  console.log(num)
  if (num == 0) {
    n = line
    num++
  }
  else if (num == 1) {
    str = line.split(' ')
    for (let i = 0; i < n.length; i++) {
      newstr += str[n[i] - 1]
    }
    console.log(parseInt(newstr))
    num++
  }
  else if (num > 1) {
    rl.close()
  }

})