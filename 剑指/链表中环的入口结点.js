// 题目描述
// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
function ListNode(x) {
  this.val = x;
  this.next = null;
}
// 使用额外存储空间
function EntryNodeOfLoop(pHead) {
  const l = []
  while (pHead) {
    if (l.indexOf(pHead) == -1) {
      l.push(pHead)
      pHead = pHead.next
    }
    if (l.indexOf(pHead) != -1) {
      return pHead
    }
  }
  return null
}
// 也可以使用快慢指针
let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
let e = new ListNode(5)
a.next = b
b.next = c
c.next = d
d.next = e
e.next = c
console.log(EntryNodeOfLoop(c))