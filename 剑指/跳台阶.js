function jumpFloor(number) {
  // write code here
  const cache = {
    0: 1,
    1: 1
  }
  return _jump(number)

  function _jump(num) {
    if (cache[num] != undefined) {
      return cache[num]
    }
    cache[num] = _jump(num - 1) + _jump(num - 2)
    return cache[num]
  }
}

console.log(jumpFloor(3))