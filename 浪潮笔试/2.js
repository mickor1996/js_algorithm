let l = "4 1 2 5 6 3"
l = l.split(" ")
let list = []
l.map(item => { list.push(parseInt(item)) })
list.sort((a, b) => a - b)
let sum = 0
for (let i = 0; i < l.length - 1; i++) {
  if (parseInt(l[i]) > parseInt(l[i + 1])) {
    sum += (l.length - list.indexOf(parseInt(l[i])) - 1)
  }
}
console.log(sum)