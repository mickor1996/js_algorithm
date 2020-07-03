/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sortedArrayToBST = function (nums) {
  if (nums.length > 0) {
    let node = new TreeNode(nums[Math.floor(nums.length / 2)])
    node.left = sortedArrayToBST(nums.slice(0, Math.floor(nums.length / 2)))
    node.right = sortedArrayToBST(nums.slice(Math.floor(nums.length / 2) + 1))
    return node
  } else {
    return null
  }
};