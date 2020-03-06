function ListNode(x) {
  this.val = x;
  this.next = null;
}
function ReverseList(pHead) {
  // write code here
  let p = pHead
  if (!p || !p.next) {
    return p
  }
  let q = p.next
  p.next = null
  let t = new ListNode(null)
  while (q) {
    t = q.next
    q.next = p
    p = q
    q = t
  }
  return p
}
a = new ListNode(1)
// b = new ListNode(2)
// c = new ListNode(3)
// a.next = b
// b.next = c
d = ReverseList(a)
console.log('123')