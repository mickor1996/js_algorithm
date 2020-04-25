
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return []
  }
  let layer = [root]
  let layer_n = [0]
  let number = [root.val]
  let i = 0
  let j = 0
  levelTree(0)
  function levelTree(level) {
    while (i <= layer_n[level]) {
      let node = layer[i]
      if (node.left) {
        layer.push(node.left)
        j++
      }
      if (node.right) {
        layer.push(node.right)
        j++
      }
      i++
    }
    if (j > layer_n[layer_n.length - 1]) {
      layer_n.push(j)
      number.push(layer[j].val)
    }

    if (i <= j) {
      levelTree(++level)
    }
  }
  return number
};
let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(3)
let d = new TreeNode(4)
a.left = b
b.right = c
c.right = d
console.log(rightSideView(a))