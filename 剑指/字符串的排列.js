function Permutation(str) {
  // write code here
  let list = []
  let l = null
  if (str.length <= 1) {
    return str
  }
  for (let i = 0; i < str.length; i++) {
    let first = str[i]
    for (let item of Permutation(str.substring(0, i) + str.substring(i + 1, str.length))) {
      l = first + item
      if (list.indexOf(l) == -1) {
        list.push(l)
      }
    }
  }
  return list
}
console.log(Permutation("abcd"))