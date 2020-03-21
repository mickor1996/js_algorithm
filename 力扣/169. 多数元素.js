/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map()
  nums.forEach(item => {
    if (map.get(item) == undefined) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  })
  for (let i of map) {
    if (i[1] > nums.length / 2) {
      return i[0]
    }
  }
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))