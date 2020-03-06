function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin) {
  // write code here


  let k = vin.indexOf(pre[0])
  let t = new TreeNode(pre[0])
  if (k != 0) {
    t.left = reConstructBinaryTree(pre.slice(1, k + 1), vin.slice(0, k))

  }
  if (k != pre.length - 1) {
    t.right = reConstructBinaryTree(pre.slice(k + 1, pre.length), vin.slice(k + 1, vin.length))
  }
  return t
}


let pre = [1, 2, 4, 7, 3, 5, 6, 8]
let vin = [4, 7, 2, 1, 5, 3, 8, 6]
let t = reConstructBinaryTree(pre, vin)
let s = reConstructBinaryTree(pre, vin)
console.log(t == s)

