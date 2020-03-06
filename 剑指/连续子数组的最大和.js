function FindGreatestSumOfSubArray(array) {
  // write code here
  let max = []
  max[array.length] = -Number.MAX_VALUE
  for (let i = array.length - 1; i >= 0; i--) {
    max[i] = Math.max(array[i] + max[i + 1], array[i])
  }
  return Math.max(...max)
}
a = [-2, -8, -1, -5, -9]
console.log(FindGreatestSumOfSubArray(a))