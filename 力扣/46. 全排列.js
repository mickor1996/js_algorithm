/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let list = []
  v()
  return list
  function v(l = []) {
    for (let i = 0; i < nums.length; i++) {
      if (l.length == nums.length) {
        list.push(l)
        return
      }
      if (!l.includes(nums[i])) {
        l.push(nums[i])
        v(l.slice())
        l.pop()
      }
    }
  }
};
console.log(permute([1, 2, 3]))