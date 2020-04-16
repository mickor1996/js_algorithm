let line = "read read[addr=0x17,mask=0xff],read[mask=0xff,val=0x80,addr=0xf0]"
if (line.length == 0) {
  console.log("FAIL")
} else {
  line = line.slice(0, line.length - 1)
  line = line.split(" ")
  let name = line[0]
  let str = line[1]
  str = str.split("],")
  let num = 0

  let s = ["addr", "mask", "val"]
  for (let i = 0; i < str.length; i++) {
    let isPrint = 1
    str[i] = str[i].split("[")
    if (str[i][0] != name) {
      continue
    }

    str[i][1] = str[i][1].split(",")
    let temp = ""
    if (str[i][1].length < 3) {
      isPrint = 0
      continue
    }
    for (let j = 0; j < str[i][1].length; j++) {
      str[i][1][j] = str[i][1][j].split("=")
      if (str[i][1][j][0] != s[j]) {
        isPrint = 0
        break
      }

      if (str[i][1][j][1][0] != '0' || !(str[i][1][j][1][1] == 'x' || str[i][1][j][1][1] == 'X')) {
        isPrint = 0
        break
      }
      if (temp != "") {
        temp += " "
      }
      temp += str[i][1][j][1]
    }
    if (isPrint) {
      console.log(temp)
      num++
    }
  }
  if (num == 0) {
    console.log("FAIL")
  }
}
