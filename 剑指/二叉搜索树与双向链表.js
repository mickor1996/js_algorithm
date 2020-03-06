function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Convert(pRootOfTree) {
  // write code here
  if (!pRootOfTree) {
    return null
  }
  let node = _Convert(pRootOfTree)
  while (node.left) {
    node = node.left
  }
  return node
  function _Convert(pRootOfTree, lastNode = null) {
    if (pRootOfTree.left) {
      lastNode = _Convert(pRootOfTree.left, lastNode)
    }
    pRootOfTree.left = lastNode
    if (lastNode) {
      lastNode.right = pRootOfTree
    }
    lastNode = pRootOfTree
    if (pRootOfTree.right) {
      lastNode = _Convert(pRootOfTree.right, lastNode)
    }
    return lastNode
  }
}
a = new TreeNode(4)
b = new TreeNode(2)
c = new TreeNode(5)
d = new TreeNode(1)
e = new TreeNode(3)
a.left = b
a.right = c
b.left = d
b.right = e
x = Convert(a)
console.log('-')