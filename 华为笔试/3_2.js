let line = ["5 2 3 1 0 0", "1 20 2 3", "2 30 3 4 5", "3 50 4", "4 60", "5 80"]
for (let i = 0; i < line.length; i++) {
  line[i] = line[i].split(" ")
}
console.log(value(1))
function value(i) {
  let list = [0]
  for (let j = 2; j < line[i].length; j++) {
    list.push(value(parseInt(line[i][j])))
  }
  return Math.max(...list) + parseInt(line[i][1])
}
