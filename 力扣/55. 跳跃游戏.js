/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) {
    return true
  }
  let map = new Map()
  map.set(nums.length - 1, true)
  for (let i = nums.length - 2; i >= 0; i--) {
    jump(i, nums)
  }
  return map.get(0)
  function jump(i, nums) {
    map.set(i, false)
    for (let j = 1; j <= nums[i]; j++) {
      if (j + i < nums.length) {
        if (map.get(j + i) == true) {
          map.set(i, true)
          break
        }
      }
    }
  }
};
console.log(canJump([2, 0, 0]))
