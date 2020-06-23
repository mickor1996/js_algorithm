/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let c = ""
  let carry = 0
  if (a.length < b.length) {
    let t = b
    b = a
    a = t
  }
  let i = a.length - 1
  let j = b.length - 1
  while (i >= 0) {
    let temp
    if (j >= 0) {
      temp = parseInt(a[i]) + parseInt(b[j]) + carry
    } else {
      temp = parseInt(a[i]) + carry
    }
    if (temp >= 2) {
      c = (temp - 2).toString() + c
      carry = 1
    } else {
      c = temp.toString() + c
      carry = 0
    }
    i--
    j--
  }
  return carry ? "1" + c : c
};
console.log(addBinary('11', '11'))