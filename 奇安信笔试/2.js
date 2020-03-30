let list = "3,4,8,5,2,6,7,1,9"
list = list.split(",")
let s1 = sum(list.slice(0, 4))
let s2 = sum(list.slice(3, 7))
let s3 = sum(list.slice(6)) + parseInt(list[0])
if (s1 == s2 && s2 == s3) {
  console.log("yes")
} else {
  console.log("no")
}
function sum(l) {
  let s = 0
  l.forEach(item => s += parseInt(item))
  return s
}