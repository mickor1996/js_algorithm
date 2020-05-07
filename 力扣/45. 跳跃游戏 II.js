/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let step = 0
  let first = 0
  let last = 1
  while (last < nums.length) {
    let max = 0
    for (let i = first; i < last; i++) {
      max = Math.max(max, i + nums[i])
    }
    first = last
    last = max + 1
    step++
  }
  return step
};
console.log(jump([2, 3, 1, 1, 4]))