let l = "4 6"
l = l.split(" ")
let list = []
let map = new Map()
l.map(item => { list.push(parseInt(item)) })
for (let i = list.length - 1; i >= 0; i--) {
  if (map.get(list[i] + 1) == undefined) {
    map.set(list[i], 1)
  } else {
    map.set(list[i], map.get(list[i] + 1) + 1)
  }
}
let max = 0
map.forEach(item => {
  max = max > item ? max : item
})
console.log(l.length - max)