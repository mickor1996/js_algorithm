let line = ["5 2 3 1 0 0", "1 20 2 3", "2 30 3 4 5", "3 50 4", "4 60", "5 80"]
let isPrint = 1
for (let i = 0; i < line.length; i++) {
  line[i] = line[i].split(" ")
}
let map = new Map()
for (let i = line.length - 1; i >= 1; i--) {
  let temp = 0
  if (line[i].length != parseInt(line[0][i]) + 2) {
    console.log("Na")
    isPrint = 0
    break
  }
  for (let j = 2; j < line[i].length; j++) {
    if (map.get(line[i][j]) > temp) {
      temp = map.get(line[i][j])
    }
  }
  map.set(line[i][0], temp + parseInt(line[i][1]))
}
if (isPrint == 1) {
  console.log(map.get("1"))
}
