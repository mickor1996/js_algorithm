/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let list = []
  generate(0, "", 1, 0, n)
  return list
  function generate(p, s, ln, rn, n) {
    if (p == 0) {
      s += "("
    } else {
      s += ")"
    }
    if (ln < n) {
      generate(0, s, ln + 1, rn, n)
    }
    if (rn < n && rn < ln) {
      generate(1, s, ln, rn + 1, n)
    }
    if (ln == n && rn == n) {
      list.push(s)
      return
    }

  }
};
console.log(generateParenthesis(3))