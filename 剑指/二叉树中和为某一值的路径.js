function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function FindPath(root, expectNumber) {
  let list = []
  let l = []
  // write code here
  if (root == null) {
    return []
  }
  return _FindPath(root, expectNumber)
  function _FindPath(root, expectNumber) {
    l.push(root.val)
    expectNumber -= root.val
    if (expectNumber > 0) {
      if (root.left && root.right) {
        if (root.left.val < root.right.val) {
          _FindPath(root.left, expectNumber)
          _FindPath(root.right, expectNumber)
        }
        if (root.right.val < root.left.val) {
          _FindPath(root.right, expectNumber)
          _FindPath(root.left, expectNumber)
        }
      } else {
        if (root.left) _FindPath(root.left, expectNumber)
        if (root.right) _FindPath(root.right, expectNumber)
      }
    }
    if (expectNumber == 0 && root.left == null && root.right == null) {
      list.push([].concat(l))
    }
    l.pop()
    return list
  }
}
a = new TreeNode(10)
b = new TreeNode(5)
c = new TreeNode(12)
d = new TreeNode(4)
e = new TreeNode(7)
a.left = b
a.right = c
b.left = d
b.right = e
x = FindPath(a, 22)
y = FindPath(a, 15)
console.log(x)
console.log(y)
