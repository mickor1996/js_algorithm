// 题目描述
// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
function TreeLinkNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
  this.next = null;
}
function GetNext(pNode) {
  if (pNode.right) {
    pNode = pNode.right
    while (pNode) {
      if (pNode.left) {
        pNode = pNode.left
      } else {
        return pNode
      }
    }
  } else if (pNode.next && pNode == pNode.next.left) {
    return pNode.next
  } else if (pNode.next && pNode == pNode.next.right) {
    while (pNode.next && pNode == pNode.next.right) {
      pNode = pNode.next
    } if (pNode.next) {
      return pNode.next
    } else {
      return null
    }
  } else {
    return null
  }
}
let a = new TreeLinkNode(1)
let b = new TreeLinkNode(2)
let c = new TreeLinkNode(3)
a.left = b
b.next = a
a.right = c
c.next = a
console.log(GetNext(null))