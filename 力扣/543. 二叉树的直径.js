/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var diameterOfBinaryTree = function (root) {
  if (root == null) return 0
  let max = 0
  deep(root)
  return max
  function deep(root) {
    if (root == null) return 0
    let left = deep(root.left)
    let right = deep(root.right)
    if (left + right > max) {
      max = left + right
    }
    return Math.max(left, right) + 1
  }
};