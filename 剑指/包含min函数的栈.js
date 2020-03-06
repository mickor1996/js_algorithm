const stack = []
const minStack = []
function push(node) {
  // write code here
  if (minStack.length == 0 || node < min()) {
    minStack.push(node)
  }
  return stack.push(node)
}
function pop() {
  // write code here
  if (top() == min()) {
    minStack.pop()
  }
  return stack.pop()
}
function top() {
  // write code here
  return stack[stack.length - 1]
}
function min() {
  // write code here
  return minStack[minStack.length - 1]
}
push(2)
console.log(min())
push(5)
console.log(min())
push(1)
console.log(min())
pop()
console.log(min())
push(3)
console.log(min())
push(0)
console.log(min())