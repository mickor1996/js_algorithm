/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length == 0) {
    return []
  }
  let newIntervals = []
  intervals.sort((a, b) => a[0] - b[0])
  let i = 1
  for (; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      intervals[i] = [intervals[i - 1][0], Math.max(intervals[i - 1][1], intervals[i][1])]
    } else {
      newIntervals.push(intervals[i - 1])
    }
  }
  newIntervals.push(intervals[i - 1])
  return newIntervals
};
let a = merge([1, 4])
console.log(a)