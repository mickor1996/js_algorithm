/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  if (nums.length == 0) return 0
  if (nums.length == 1) return nums[0]
  const map = new Map()
  let i = nums.length - 2
  for (; i > 0; i--) {
    map.set(i, Math.max(m(nums, i), m(nums, i + 1)))
  }
  return Math.max(m(nums, i), m(nums, i + 1))
  function m(nums, i) {
    if (map.get(i) != undefined) return map.get(i)
    if ((i + 3) < nums.length) {
      return Math.max(m(nums, i + 2), m(nums, i + 3)) + nums[i]
    } else if ((i + 2) < nums.length) {
      return m(nums, i + 2) + nums[i]
    } else {
      return nums[i]
    }
  }
};
console.log(massage([2, 7, 9, 3, 1]))