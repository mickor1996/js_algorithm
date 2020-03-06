const inStack = []
const outStack = []
function push(node)
{
  // write code here
  inStack.push(node)
}
function pop()
{
  // write code here
  if(outStack.length){
    return outStack.pop()
  }else{
    while(inStack.length){
      outStack.push(inStack.pop())
    }
    return outStack.pop()
  }
}
push(1)
push(2)
push(3)
console.log(pop())
console.log(pop())
push(4)
console.log(pop())
push(5)
console.log(pop())
console.log(pop())