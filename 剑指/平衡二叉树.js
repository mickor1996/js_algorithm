function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function IsBalanced_Solution(pRoot) {
  // write code here
  return TreeDepth(pRoot) != -1
}
function TreeDepth(pRoot) {
  // write code here
  if (pRoot) {
    let a = TreeDepth(pRoot.left)
    let b = TreeDepth(pRoot.right)
    if (a != -1 && b != -1 && Math.abs(a - b) <= 1) {
      return Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1
    } else {
      return -1
    }
  } else {
    return 0
  }
}
const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(3)
const d = new TreeNode(4)
a.right = c
c.left = d
console.log(IsBalanced_Solution(a))