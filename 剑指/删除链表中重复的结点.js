// 题目描述
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
function ListNode(x) {
  this.val = x;
  this.next = null;
}
// 辅助空间存储重复值，第二轮循环判断是否当前节点为重复结点
function deleteDuplication(pHead) {
  if (pHead == null) return null
  let p = pHead
  let repeat = []
  const map = new Map()
  while (p) {
    if (map.get(p.val) == undefined) {
      map.set(p.val, 1)
    } else {
      map.set(p.val, map.get(p.val) + 1)
    }
    p = p.next
  }
  map.forEach((value, key) => {
    if (value != 1) {
      repeat.push(key)
    }
  })
  p = pHead
  while (p && repeat.indexOf(p.val) != -1) {
    p = p.next
  }
  if (p == null) return null
  pHead = p
  while (p.next) {
    if (repeat.indexOf(p.next.val) != -1) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return pHead
}
let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(2)
let d = new ListNode(4)
let e = new ListNode(4)
a.next = b
b.next = c
c.next = d
d.next = e
console.log(deleteDuplication(b))