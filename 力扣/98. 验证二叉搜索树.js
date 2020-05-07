
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root == null) return true
  return isVBST(root.left, -Number.MAX_VALUE, root.val, 0) && isVBST(root.right, root.val, Number.MAX_VALUE, 1)
  function isVBST(node, min, max, left_right) {
    if (node == null) {
      return true
    } else {
      return node.val > min && node.val < max && isVBST(node.left, min, node.val, 0) && isVBST(node.right, node.val, max, 1)
    }
  }
};