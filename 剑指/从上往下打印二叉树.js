function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function PrintFromTopToBottom(root) {
  // write code here
  const q = []
  const p = []
  let i = 0
  if (root) {
    q.push(root)
  }
  while (q.length) {
    r = q.splice(0, 1)[0]
    p.push(r.val)
    if (r.left) q.push(r.left)
    if (r.right) q.push(r.right)
  }
  return p
}
const a = new TreeNode(1)
a.left = new TreeNode(2)
a.right = new TreeNode(3)
console.log(PrintFromTopToBottom(a))