/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length != s3.length) return false
  if (s1.length == 0) return s2 == s3
  let a = new Array(s1.length + 1)
  let i = 0
  let j = 0
  for (i = 0; i < a.length; i++) {
    a[i] = new Array(s2.length + 1).fill(0)
  }
  a[0][0] = 1

  for (i = 1; i < s1.length + 1; i++) {
    a[i][0] = a[i - 1][0] && s1[i - 1] == s3[i - 1]
  }
  for (i = 1; i < s2.length + 1; i++) {
    a[0][i] = a[0][i - 1] && s2[i - 1] == s3[i - 1]
  }
  for (i = 1; i < s1.length + 1; i++) {
    for (j = 1; j < s2.length + 1; j++) {
      a[i][j] = (a[i - 1][j] && s1[i - 1] == s3[i + j - 1]) || (a[i][j - 1] && s2[j - 1] == s3[i + j - 1])
    }
  }
  return a[i - 1][j - 1]
};
console.log(isInterleave("", "a", "a"))