// 题目描述
// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function KthNode(pRoot, k) {
  if (k < 1 || pRoot == null) {
    return null
  }
  let val = null
  LDR(pRoot)
  return val
  function LDR(pRoot) {
    if (pRoot) {
      if (k > 0) LDR(pRoot.left)
      k--
      if (!k) val = pRoot
      if (k > 0) LDR(pRoot.right)
    }
  }
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
console.log(KthNode(a, 3))