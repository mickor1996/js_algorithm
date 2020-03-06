function jumpFloorII(number) {
  // write code here
  const cache = {
    0: 0,
    1: 1
  }
  return _jumpFloor(number)

  function _jumpFloor(number) {
    if (cache[number] != undefined) {
      return cache[number]
    }
    sum = 0
    for (i = 0; i < number; i++) {
      sum += _jumpFloor(i)
    }
    cache[number] = sum + 1
    return cache[number]
  }

}
function a(number) {
  return Math.pow(2, number - 1);
}
console.log(jumpFloorII(6))
console.log(a(6))