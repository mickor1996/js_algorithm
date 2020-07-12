/**
 * 
 * @param n int整型 
 * @param num int整型一维数组 
 * @return int整型
 */
function getMaxLength(n, num) {
  // write code here
  if (n < 3) return 0
  let max = 0
  let temp = 1
  let flag = -1
  for (let i = 1; i < n; i++) {
    if ((flag == -1 || flag == 0) && num[i] > num[i - 1]) {
      flag = 0
      temp++
      continue
    }
    if (flag == 1 && num[i] < num[i - 1]) {
      temp++
      continue
    }
    if (flag == 0 && num[i] < num[i - 1]) {
      flag = 1
      temp++
      continue
    }
    if (temp != 1 && flag == 1) {
      max = Math.max(max, temp)
    }
    if (flag == 1) i--
    if (flag == -1) temp = 0
    temp = 1
    flag = -1

  }
  if (flag != 1) temp = 0
  max = Math.max(max, temp)
  return max
}
console.log(getMaxLength(4, [5, 5, 6, 6]))
module.exports = {
  getMaxLength: getMaxLength
};