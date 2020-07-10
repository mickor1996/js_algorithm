/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root) return hps(root, sum, 0)
  return false
  function hps(root, sum, count) {
    let flag = false
    count += root.val
    if (root.left) {
      flag = flag || hps(root.left, sum, count)
    }
    if (root.right) {
      flag = flag || hps(root.right, sum, count)
    }
    if (root.left == null && root.right == null && sum == count) {
      return true
    }
    return flag
  }
};