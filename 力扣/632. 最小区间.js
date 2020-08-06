/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  let all = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      all.push([nums[i][j], i])
    }
  }
  all.sort((a, b) => a[0] - b[0])
  let l = -1, r = -1, count = new Array(nums.length).fill(0), all_count = 0, min_dis = Number.MAX_SAFE_INTEGER, min_l = 0, min_r = 0
  while (r < all.length - 1) {
    while (r < all.length - 1 && all_count < nums.length) {
      r++
      if (count[all[r][1]]++ == 0) all_count++
    }
    while (l < r && all_count == nums.length) {
      l++
      if (--count[all[l][1]] == 0) all_count--
    }
    if (min_dis > (all[r][0] - all[l][0])) {
      min_dis = all[r][0] - all[l][0]
      min_l = all[l][0]
      min_r = all[r][0]
    }

  }
  return [min_l, min_r]
};
console.log(smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]))