/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const long = new Array(nums.length).fill(0)
  let max = 0
  for (let i = nums.length - 1; i >= 0; i--) {
    for (j = i + 1; j <= nums.length - 1; j++) {
      if (nums[j] > nums[i] && long[j] + 1 > long[i]) {
        long[i] = long[j] + 1
      }
    }
    if (!long[i]) long[i] = 1
    if (long[i] > max) max = long[i]
  }
  return max
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]))