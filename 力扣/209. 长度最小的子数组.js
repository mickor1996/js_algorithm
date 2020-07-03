/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  if (nums.length == 0) return 0
  let i = 0
  let j = 0
  let sum = 0
  let min = Number.MAX_VALUE
  while (i <= nums.length) {
    while (sum < s && i < nums.length) {
      sum += nums[i]
      i++
    }
    if (sum < s) return 0
    while (j < i && (sum - nums[j] >= s)) {
      sum -= nums[j]
      j++
    }
    min = (i - j) < min ? (i - j) : min
    sum += nums[i]
    i++
  }
  return (min == Number.MAX_VALUE) ? 0 : min
};
console.log(minSubArrayLen(3, [1, 1]))