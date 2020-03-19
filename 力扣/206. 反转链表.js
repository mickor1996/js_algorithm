/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseList = function (head) {
  if (head == null) return null
  let p = head
  if (p.next == null) return p
  let q = p.next
  p.next = null
  let r = q.next
  while (q) {
    r = q.next
    q.next = p
    p = q
    q = r
  }
  return p
};
let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
a.next = b
b.next = c
c.next = d
reverseList(a)