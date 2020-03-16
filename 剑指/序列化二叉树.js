// 题目描述
// 请实现两个函数，分别用来序列化和反序列化二叉树

// 二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。

// 二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function Serialize(pRoot) {
  let s = ''
  DLR(pRoot)
  function DLR(pRoot) {
    if (pRoot != null) {
      s += pRoot.val.toString()
      s += '!'
      DLR(pRoot.left)
      DLR(pRoot.right)
    } else if (pRoot == null) {
      s += '#!'
    }
  }
  return s
}
function Deserialize(s) {
  if (s == null) {
    return null
  }
  let split = s.split('!')
  let index = 0
  return deDLR(split)
  function deDLR(s) {
    if (s[index] == '#') {
      index++
      return null
    }
    let node = new TreeNode(parseInt(s[index]))
    index++
    node.left = deDLR(s)
    node.right = deDLR(s)
    return node
  }
}
let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(3)
let d = new TreeNode(4)
let e = new TreeNode(5)
let f = new TreeNode(6)
let g = new TreeNode(7)
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
let s = Serialize(a)
console.log(s)
console.log(Deserialize(s))