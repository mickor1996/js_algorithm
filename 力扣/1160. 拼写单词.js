/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const map = new Map()
  let num = 0
  chars.split('').forEach(item => {
    if (map.get(item) == undefined) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  })
  words.forEach(item => {
    let imap = new Map()
    item.split('').forEach(i => {
      imap.set(i, imap.get(i) ? imap.get(i) + 1 : 1)
    })
    for (let i of imap) {
      if (map.get(i[0]) == undefined || i[1] > map.get(i[0])) {
        return
      }
    }
    num += item.length
  })
  return num
};
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"))