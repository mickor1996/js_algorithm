function ListNode(x) {
  this.val = x;
  this.next = null;
}
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  let l1 = 0
  let l2 = 0
  let node1 = pHead1
  let node2 = pHead2
  while (node1) {
    node1 = node1.next
    l1++
  }
  while (node2) {
    node2 = node2.next
    l2++
  }
  if (l1 >= l2) {
    for (i = 0; i < l1 - l2; i++) {
      pHead1 = pHead1.next
    }
    while (pHead1 != pHead2) {
      pHead1 = pHead1.next
      pHead2 = pHead2.next
    }
    return pHead1
  }
  if (l1 < l2) {
    for (i = 0; i < l2 - l1; i++) {
      pHead2 = pHead2.next
    }
    while (pHead1 != pHead2) {
      pHead1 = pHead1.next
      pHead2 = pHead2.next
    }
    return pHead2
  }
}
let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
a.next = c
c.next = d
b.next = c
FindFirstCommonNode(a, b)