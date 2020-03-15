// 题目描述
// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Print(pRoot) {
  if (pRoot == null) return []
  const list = []
  let l1 = []
  let l2 = []
  let l = []
  l1.push(pRoot)
  while (l1.length) {
    let node = l1.shift()
    l.push(node.val)
    if (node.left) l2.push(node.left)
    if (node.right) l2.push(node.right)
  }
  if (l.length) {
    list.push(l)
    l = []
  }
  while (l2.length) {
    let node = l2.shift()
    l.push(node.val)
    if (node.left) l1.push(node.left)
    if (node.right) l1.push(node.right)
  }
  if (l.length) {
    list.push(l)
    l = []
  }
  return list
}
let a = new TreeNode(8)
let b = new TreeNode(6)
let c = new TreeNode(10)
let d = new TreeNode(5)
let e = new TreeNode(7)
let f = new TreeNode(9)
let g = new TreeNode(11)
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
console.log(Print(a))