
function IsPopOrder(pushV, popV) {
  // write code here
  const stack = []
  let j = 0
  for (let i of popV) {
    while (j <= pushV.indexOf(i)) {
      stack.push(pushV[j])
      j++
    }
    if (i != stack.pop()) return false
  }
  return true
}
pushV = [1, 2, 3, 4, 5]
popV = [4, 5, 3, 2, 1]
a = IsPopOrder(pushV, popV)
console.log(a)