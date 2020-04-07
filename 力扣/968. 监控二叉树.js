
// Definition for a binary tree node.
//代码有问题
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
  let count = 0
  let temp = 1//记录上一轮整体个数除于3
  num(root, 1, 1)
  return count
  function num(root, n, remainder = 0) {
    if (root != null) {
      if (root.left != null && root.right != null) {
        num(root.left, n + 1)
        num(root.right, 1, n % 2)
      } else if (root.left != null) {
        num(root.left, n + 1)
      } else if (root.right != null) {
        num(root.right, n + 1)
      } else {
        if (n == 1) {
          if (temp == 1 && remainder == 1) {
            count++
          }
        } else {
          count += Math.ceil(n / 3)
          temp = n % 3
        }
      }
    }
  }
};

let a = new TreeNode(1)
let b = new TreeNode(1)
let c = new TreeNode(1)
let d = new TreeNode(1)
a.left = b
a.right = c
// c.left = d
console.log(minCameraCover(c))