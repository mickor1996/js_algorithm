
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let n
  LRD(root)
  return n
  function LRD(node) {
    if (node == null) return false
    let l = LRD(node.left)
    let r = LRD(node.right)
    if (((node.val == p.val || node.val == q.val) && (l || r)) || (l && r)) {
      n = node.val
      return true
    }
    return l || r || node.val == p.val || node.val == q.val
  }
};
let a = new TreeNode(3)
let b = new TreeNode(5)
let c = new TreeNode(1)
a.left = b
a.right = c
console.log(lowestCommonAncestor(a, 5, 1))