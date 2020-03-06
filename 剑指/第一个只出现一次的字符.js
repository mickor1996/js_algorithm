function FirstNotRepeatingChar(str) {
  // write code here
  const one = {}
  const repeat = []
  for (let i = 0; i < str.length; i++) {
    if (repeat.indexOf(str[i]) == -1) {
      if (one[str[i]] == undefined) {
        one[str[i]] = i
      } else {
        repeat.push(str[i])
        delete one[str[i]]
      }
    }
  }
  for (let j in one) {
    return one[j]
  }
  return -1
}
console.log(FirstNotRepeatingChar('asfasf'))