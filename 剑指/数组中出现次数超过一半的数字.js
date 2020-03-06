function MoreThanHalfNum_Solution(numbers) {
  // write code here
  const l = {}
  for (let i of numbers) {
    if (l[i] == undefined) { l[i] = 1 }
    else { l[i] += 1 }
  }
  for (let j in l) {
    if (l[j] > numbers.length / 2) {
      return j
    }
  }
  return 0
}
l = [1, 2, 3, 2, 2, 2, 5, 4, 2]
console.log(MoreThanHalfNum_Solution(l))