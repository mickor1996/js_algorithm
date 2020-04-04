/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let i = 0
  let j = height.length - 1
  let left_max = 0
  let right_max = 0
  let num = 0
  while (i < j) {
    if (height[i] > left_max) {
      left_max = height[i]
    } else {
      num += left_max - height[i]
    }
    if (height[j] > right_max) {
      right_max = height[j]
    } else {
      num += right_max - height[j]
    }
    if (left_max <= right_max) {
      i++
    } else {
      j--
    }
  }
  return num
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))