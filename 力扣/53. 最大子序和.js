/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const map = new Map()
  let max = nums[nums.length - 1]
  map.set(nums.length - 1, max)
  for (let i = nums.length - 2; i >= 0; i--) {
    let temp = Math.max(map.get(i + 1) + nums[i], nums[i])
    if (temp > max) {
      max = temp
    }
    map.set(i, temp)
  }
  return max
};
console.log(maxSubArray([-1, -2]))