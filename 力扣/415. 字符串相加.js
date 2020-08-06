/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let str = ''
  let carry = 0
  while (i >= 0 && j >= 0) {
    let temp = parseInt(num1[i]) + parseInt(num2[j]) + carry
    carry = Math.floor(temp / 10)
    str = (temp % 10).toString() + str
    i--
    j--
  }

  while (i >= 0) {
    let temp = parseInt(num1[i]) + carry
    carry = Math.floor(temp / 10)
    str = (temp % 10).toString() + str
    i--
  }
  while (j >= 0) {
    let temp = parseInt(num2[j]) + carry
    carry = Math.floor(temp / 10)
    str = (temp % 10).toString() + str
    j--
  }
  if (i < 0 && j < 0 && carry == 1) {
    str = '1' + str
  }
  return str
};
console.log(addStrings('99', '8'))