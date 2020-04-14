/**
 * Definition for singly-linked list.
 *  */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let s1 = []
  let s2 = []
  let nextNode = null
  let carry = 0
  while (l1) {
    s1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    s2.push(l2.val)
    l2 = l2.next
  }
  while (s1.length && s2.length) {
    let a = s1.pop()
    let b = s2.pop()
    let val = (a + b + carry) % 10
    carry = Math.floor((a + b + carry) / 10)
    let node = new ListNode(val)
    node.next = nextNode
    nextNode = node
  }
  while (s1.length) {
    let a = s1.pop()
    let val = (a + carry) % 10
    carry = Math.floor((a + carry) / 10)
    let node = new ListNode(val)
    node.next = nextNode
    nextNode = node
  }
  while (s2.length) {
    let a = s2.pop()
    let val = (a + carry) % 10
    carry = Math.floor((a + carry) / 10)
    let node = new ListNode(val)
    node.next = nextNode
    nextNode = node
  }
  if (carry == 1) {
    let node = new ListNode(1)
    node.next = nextNode
    nextNode = node
  }
  return nextNode
};
let a = new ListNode(1)
let b = new ListNode(1)
let c = new ListNode(1)
let d = new ListNode(1)
a.next = b
c.next = d
console.log(addTwoNumbers(a, d))