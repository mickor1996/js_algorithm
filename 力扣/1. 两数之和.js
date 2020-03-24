/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i in nums) {
    console.log(target - nums[i])
    if (map.get(target - nums[i]) != undefined) { return [map.get(target - nums[i]), parseInt(i)] }
    map.set(nums[i], parseInt(i))
  }
};
console.log(twoSum([2, 7, 11, 15], 9))