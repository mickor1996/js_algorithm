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
var maxPathSum = function (root) {
  let max = -Number.MAX_VALUE
  dfs(root)
  return max
  function dfs(r) {
    let val = r.val
    let templ = -Number.MAX_VALUE
    let tempr = -Number.MAX_VALUE
    let tempa = 0
    if (r.left) {
      templ = dfs(r.left)
    }
    if (r.right) {
      tempr = dfs(r.right)
    }
    tempa = val + (templ > 0 ? templ : 0) + (tempr > 0 ? tempr : 0)
    templ > tempr ? templ > 0 && (val += templ) : tempr > 0 && (val += tempr)
    if (tempa > max) {
      max = tempa
    }
    return val
  }
};
let a = new TreeNode(1)
console.log(maxPathSum(a))