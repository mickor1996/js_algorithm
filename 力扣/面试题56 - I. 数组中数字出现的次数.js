/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let all = 0
  for (let i of nums) {
    all = all ^ parseInt(i)
  }
  let t = 1
  while ((t & all) == 0) {
    t = t << 1
  }
  let a = 0
  let b = 0
  for (let i of nums) {
    if ((parseInt(i) & t) == 0) {
      a = a ^ parseInt(i)
    } else {
      b = b ^ parseInt(i)
    }
  }
  return [a, b]
};
console.log(singleNumbers([1, 2, 5, 2]))