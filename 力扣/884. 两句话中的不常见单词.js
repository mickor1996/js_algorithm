/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  A = A.split(" ")
  B = B.split(" ")
  let map = new Map()
  let uncommon = []
  for (let i of A) {
    if (map.get(i) == undefined) {
      map.set(i, 1)
    } else {
      map.set(i, map.get(i) + 1)
    }
  }
  for (let i of B) {
    if (map.get(i) == undefined) {
      map.set(i, 1)
    } else {
      map.set(i, map.get(i) + 1)
    }
  }
  for (let i of map) {
    if (i[1] == 1) {
      uncommon.push(i[0])
    }
  }
  return uncommon
}
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))