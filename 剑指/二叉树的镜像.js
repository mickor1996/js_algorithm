function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Mirror(root) {
  // write code here
  if (root == null) {
    return null
  }
  let temp = root.left
  root.left = root.right
  root.right = temp
  if (root.left != null) {
    Mirror(root.left)
  }
  if (root.right != null) {
    Mirror(root.right)
  }
}