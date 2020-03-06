function ListNode(x) {
  this.val = x;
  this.next = null;
}
function Merge(pHead1, pHead2) {
  // write code here
  let node1 = pHead1
  let node2 = pHead2
  let node3 = new ListNode(0)
  let node = node3
  while (node1 && node2) {
    if (node1.val < node2.val) {
      node3.next = node1
      node1 = node1.next
    } else {
      node3.next = node2
      node2 = node2.next
    }
    node3 = node3.next
  }
  if (node1) {
    node3.next = node1
  } else {
    node3.next = node2
  }
  return node.next
}