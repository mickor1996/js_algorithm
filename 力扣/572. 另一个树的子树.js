/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (t == null) return true
  if (s == null) return false
  if (s.val == t.val) {
    return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
  } else {
    return isSubtree(s.left, t) || isSubtree(s.right, t)
  }
  function isSame(s, t) {
    if (s != null && t != null) {
      return s.val == t.val && isSame(s.left, t.left) && isSame(s.right, t.right)
    } else if (s == null && t == null) {
      return true
    } else {
      return false
    }
  }
};