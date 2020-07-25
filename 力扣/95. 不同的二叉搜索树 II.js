/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (!n) return []
  return gt(1, n)

  function gt(start, end) {
    if (start > end) return [null]
    if (start == end) return [new TreeNode(start)]
    let t = []
    for (let i = start; i <= end; i++) {
      let left = gt(start, i - 1)
      let right = gt(i + 1, end)
      for (let j of left) {
        for (let k of right) {
          let node = new TreeNode(i)
          node.left = j
          node.right = k
          t.push(node)
        }
      }
    }
    return t
  }
};