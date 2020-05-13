/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) { return [] }
  let queue = [root]
  let i = 0
  let level = 0
  let lo = []
  let temp = []
  while (i < queue.length) {
    if (i == level) {
      for (let j = level; j < queue.length; j++) {
        temp.push(queue[j].val)
      }
      lo.push(temp)
      level = queue.length
      temp = []
    }
    if (queue[i].left) {
      queue.push(queue[i].left)
    }
    if (queue[i].right) {
      queue.push(queue[i].right)
    }
    i++
  }
  return lo
};