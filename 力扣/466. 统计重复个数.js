/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {

  arr1 = s1.split("");
  arr2 = s2.split("");

  let index = 0;
  let cnt = 0;
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] == arr2[index]) {
        index++;
      }
      if (index == arr2.length) {
        index = 0;
        ++cnt;
      }
    }
  }
  return parseInt(cnt / n2)
};