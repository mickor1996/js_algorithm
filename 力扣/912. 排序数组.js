/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function (nums) {
//   nums.sort((a, b) => a - b)
// };
var sortArray = function (nums) {
  for (let i = Math.floor(nums.length / 2 - 1); i >= 0; i--) {
    heapSort(nums, i, nums.length)
  }
  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, 0, i)
    heapSort(nums, 0, i)
  }
  function heapSort(l, i, length) {
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
      let temp = l[i]
      if (j + 1 < length && nums[j] < nums[j + 1]) {
        j++
      }
      if (temp < l[j]) {
        swap(l, i, j)
        i = j
      } else {
        break
      }
    }
  }
  function swap(l, i, j) {
    let temp = l[i]
    l[i] = l[j]
    l[j] = temp
  }
};
let l = [3, 2, 1]
sortArray(l)
console.log(l)