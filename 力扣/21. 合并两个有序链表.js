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
var mergeTwoLists = function (l1, l2) {
  let l3 = new ListNode(null)
  let head = l3
  while (l1 && l2) {
    if (l1.val < l2.val) {
      l3.next = l1
      l1 = l1.next
      l3 = l3.next
    } else {
      l3.next = l2
      l2 = l2.next
      l3 = l3.next
    }
  }
  while (l1) {
    l3.next = l1
    l1 = l1.next
    l3 = l3.next
  }
  while (l2) {
    l3.next = l2
    l2 = l2.next
    l3 = l3.next
  }
  return head.next
};