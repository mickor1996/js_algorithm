/**
 * 
 * @param breadNum int整型 
 * @param beverageNum int整型 
 * @param packageSum int整型二维数组 每个一维数组中有三个数，依次表示这个包装里面的面包数量、饮料数量、花费
 * @return int整型
 */
function minCost(breadNum, beverageNum, packageSum) {
  // write code here
  return m(breadNum, beverageNum, packageSum, 0)
  function m(breadNum, beverageNum, packageSum, i) {
    if (i < packageSum.length) {
      return Math.min(m(breadNum - packageSum[i][0], beverageNum - packageSum[i][1], packageSum, i + 1) + packageSum[i][2], m(breadNum, beverageNum, packageSum, i + 1))
    } else {
      if (beverageNum > 0 || beverageNum > 0) {
        return Number.MAX_VALUE
      } else {
        return 0
      }
    }
  }
}
console.log(minCost(5, 60, [[3, 36, 120], [10, 25, 129], [5, 50, 250], [1, 45, 130], [4, 20, 119]]))
module.exports = {
  minCost: minCost
};