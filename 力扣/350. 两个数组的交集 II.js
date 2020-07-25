/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map()
  let int = []
  for (let i of nums1) {
    map.set(i, map.get(i) ? map.get(i) + 1 : 1)
  }
  for (let j of nums2) {
    let temp = map.get(j)
    if (temp) {
      int.push(j)
      if (temp == 1) {
        map.delete(j)
      } else {
        map.set(j, temp - 1)
      }
    }
  }
  return int
};
console.log(intersect([], []))