/**
 * 
 * @param s string字符串 
 * @return string字符串
 */
function change(s) {
  // write code here
  s = s.split('a')
  let count = s.length - 1
  s = s.join('')
  for (let i = 0; i < count; i++) {
    s += 'a'
  }
  return s
}
module.exports = {
  change: change
};
console.log(change(''))