// 题目描述
// 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function isSymmetrical(pRoot) {
  if (pRoot == null) return true
  return judge(pRoot.left, pRoot.right)
}
function judge(tree_1, tree_2) {
  if (tree_1 == null && tree_2 == null) {
    return true
  } else if (tree_1 == null || tree_2 == null) {
    return false
  } else {
    if (tree_1.val != tree_2.val) {
      return false
    } else {
      return judge(tree_1.left, tree_2.right) && judge(tree_1.right.tree_2.left)
    }
  }
}
let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(2)
a.left = b
a.right = c
console.log(isSymmetrical(a))