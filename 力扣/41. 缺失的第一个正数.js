/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let temp = null
  let i = 0
  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] != i + 1) {
      if (nums[nums[i] - 1] != nums[i]) {
        temp = nums[nums[i] - 1]
        nums[nums[i] - 1] = nums[i]
        nums[i] = temp
        continue
      }
    }
    i++
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1
    }
  }
  return nums.length + 1
};
console.log(firstMissingPositive([1, 1]))