/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode()
  let node = head
  let carry = 0
  while (l1 || l2 || carry) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    if (val >= 10) {
      carry = 1
      val = val % 10
    } else {
      carry = 0
    }
    let n = new ListNode(val)
    node.next = n
    node = node.next
    l1 = l1.next
    l2 = l2.next
  }
  return head.next
};
let a = new ListNode(2)
let b = new ListNode(4)
let c = new ListNode(3)
a.next = b
b.next = c
let d = new ListNode(5)
let e = new ListNode(6)
let f = new ListNode(4)
d.next = e
e.next = f
addTwoNumbers(a, d)