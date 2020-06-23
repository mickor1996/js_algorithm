/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let n = nums[0]
  for (let i = 1; i < nums.length; i++) {
    n = n ^ nums[i]
  }
  return n
};
console.log(singleNumber([2, 2, 1]))