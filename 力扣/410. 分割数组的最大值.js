/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let l = Math.max(...nums)
  let h = nums.reduce((p, c) => p += c)
  while (l < h) {
    let mid = Math.floor((l + h) / 2)
    let sum = 0
    let count = 1
    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] <= mid) {
        sum += nums[i]
      } else {
        sum = nums[i]
        count++
      }
    }
    if (count > m) l = mid + 1
    if (count <= m) h = mid
  }
  return h
};
console.log(splitArray([1, 3], 2))