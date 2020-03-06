function RandomListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}
function Clone(pHead) {
  // write code here
  if (!pHead) {
    return null
  }
  let node = pHead
  while (node) {
    let newNode = new RandomListNode(node.label)
    newNode.next = node.next
    node.next = newNode
    node = newNode.next
  }
  node = pHead
  while (node) {
    if (node.random) {
      node.next.random = node.random.next
    }
    node = node.next.next
  }
  node = pHead
  qHead = node.next
  node2 = qHead
  while (node2) {
    node.next = node2.next
    node = node2
    node2 = node.next
  }
  node.next = null
  return qHead
}
a = new RandomListNode(1)
b = new RandomListNode(2)
c = new RandomListNode(3)
a.next = b
a.random = c
b.next = c
d = Clone(null)
console.log('-')
