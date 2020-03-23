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
var middleNode = function (head) {
  let i = head
  let j = head
  while (j != null && j.next != null) {
    j = j.next.next
    i = i.next
  }
  return i
};