/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length == 0) return 0
  let num = [new Array(triangle.length).fill(0), new Array(triangle.length).fill(0)]
  num[0][0] = triangle[0][0]
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      num[i % 2][j] = Math.min((j < i ? num[(i + 1) % 2][j] : Number.MAX_VALUE), (j > 0 ? num[(i + 1) % 2][j - 1] : Number.MAX_VALUE)) + triangle[i][j]
    }
  }
  return Math.min(...num[(triangle.length + 1) % 2])
};
console.log(minimumTotal([

]))