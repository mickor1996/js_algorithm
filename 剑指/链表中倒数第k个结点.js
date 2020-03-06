function ListNode(x) {
  this.val = x;
  this.next = null;
}
function FindKthToTail(head, k) {
  // write code here
  const l = []
  node = head
  while (node != null) {
    l.push(node)
    node = node.next
  }
  return l[l.length - k]
}
a = new ListNode(1)
b = new ListNode(2)
c = new ListNode(3)
a.next = b
b.next = c

console.log(FindKthToTail(a, 2))