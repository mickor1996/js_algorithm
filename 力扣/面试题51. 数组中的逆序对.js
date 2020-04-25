/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  let remove_duplication = Array.from(new Set(nums))
  let nums_sort = remove_duplication.sort((a, b) => a - b)
  for (let i = nums.length; i >= 0; i--) {

  }
};
console.log(reversePairs([7, 5, 6, 4]))