function rectCover(number) {
  // write code here
  if (number == 0) return 0
  const cache = {
    0: 1,
    1: 1
  }
  return _cover(number)
  function _cover(num) {
    if (cache[num] != undefined) {
      return cache[num]
    }
    cache[num] = _cover(num - 1) + _cover(num - 2)
    return cache[num]
  }
}
console.log(rectCover(0))