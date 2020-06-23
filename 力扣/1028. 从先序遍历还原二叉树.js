/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var recoverFromPreorder = function (S) {
  let i = S.length - 1
  function num_() {
    let n = 0
    let val = ''
    while (i >= 0 && S[i] != '-') {
      val = S[i] + val
      i--
    }
    val = parseInt(val)
    while (S[i] == '-') {
      i--
      n++
    }
    return [val, n]
  }
  let stack = []
  while (i >= 0) {
    let temp = []
    temp = num_()
    temp[0] = new TreeNode(temp[0])
    if (stack.length == 0) {
      stack.push(temp)
    } else {
      if (stack[stack.length - 1][1] == temp[1] + 1) {
        temp[0].left ? temp[0].right = stack.pop()[0] : temp[0].left = stack.pop()[0]
        if (stack.length > 0 && stack[stack.length - 1][1] == temp[1] + 1) {
          temp[0].left ? temp[0].right = stack.pop()[0] : temp[0].left = stack.pop()[0]
        }
        stack.push(temp)
      } else {
        stack.push(temp)
      }
    }
  }
  return stack.pop()[0]
};
let b = recoverFromPreorder("1-401--349---90--88")
let a = 0