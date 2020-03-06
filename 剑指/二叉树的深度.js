function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function TreeDepth(pRoot) {
  // write code here
  if (pRoot) {
    return Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1
  } else {
    return 0
  }
}
const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(3)
const d = new TreeNode(4)
a.left = b
a.right = c
c.left = d
console.log(TreeDepth(a))