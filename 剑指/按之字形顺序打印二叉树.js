// 题目描述
// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Print(pRoot) {
  const s = []
  const q = []
  let l = []
  const list = []
  let node = null
  if (pRoot == null) return []
  q.push(pRoot)
  while (s.length || q.length) {
    while (q.length) {
      node = q.shift()
      l.push(node.val)
      if (node.left) s.push(node.left)
      if (node.right) s.push(node.right)
    }
    if (l.length) {
      list.push(l)
      l = []
    }
    while (s.length) {
      node = s.pop()
      l.push(node.val)
      if (node.right) q.push(node.right)
      if (node.left) q.push(node.left)
    }
    q.reverse()
    if (l.length) {
      list.push(l)
      l = []
    }
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