/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let close = Number.MAX_VALUE
  let distance = Math.abs(target - close)
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1
    let k = nums.length - 1
    let temp = target - nums[i] - nums[j] - nums[k]
    while (j < k) {
      temp = target - nums[i] - nums[j] - nums[k]
      if (nums[i] + nums[j] + nums[k] < target) {
        if (Math.abs(temp) < distance) {
          distance = Math.abs(temp)
          close = nums[i] + nums[j] + nums[k]
        }
        j++
      } else if (nums[i] + nums[j] + nums[k] > target) {
        if (Math.abs(temp) < distance) {
          distance = Math.abs(temp)
          close = nums[i] + nums[j] + nums[k]
        }
        k--
      } else {
        return target
      }
    }
  }
  return close
};
console.log(threeSumClosest([0, 2, 1, -3], 1))