// let line = readline()
let line = "tom,Lily,Tom,Lucy,Lucy,Jack"
let isError = 0
if (line.length == 0) {
  isError = 1
}
for (let j = 0; j < line.length; j++) {
  if ((line[j].charCodeAt() >= 97 && line[j].charCodeAt() <= 122) || (line[j].charCodeAt() >= 65 && line[j].charCodeAt() <= 90) || line[j].charCodeAt() == 44) {
  } else {
    isError = 1
  }
}
line = line.split(",")
line = line.sort()
let max = 0
let name = null
let num = 1

for (let i = 1; i < line.length; i++) {
  if (line[i][0].charCodeAt() >= 65 && line[i][0].charCodeAt() <= 90) { }
  else {
    isError = 1
  }
  for (let j = 1; j < line[i].length; j++) {
    if (line[i][j].charCodeAt() >= 97 && line[i][j].charCodeAt() <= 122) {
    } else {
      isError = 1
    }
  }
  if (line[i] == line[i - 1]) {
    num++
  } else {
    num = 1
  }
  if (num > max) {
    max = num
    name = line[i]
  }
}
if (isError == 0) {
  console.log(name)
} else {
  console.log("error.0001")
}
