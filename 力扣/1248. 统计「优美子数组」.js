/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let l = []
  l.push(-1)
  let num = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
      l.push(i)
    }
  }
  l.push(nums.length)
  for (let j = 1; j < l.length - k; j++) {
    num += (l[j] - l[j - 1]) * (l[j + k] - l[j + k - 1])
  }
  return num
};
console.log(numberOfSubarrays([2, 4, 6], 1))