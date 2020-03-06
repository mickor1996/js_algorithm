function GetNumberOfK(data, k) {
  // write code here
  let num = 0
  for (let i in data) {
    if (data[i] == k) {
      num++
    } else if (data[i] > k) {
      break
    }

  }
  return num
}
console.log(GetNumberOfK([1, 1, 2, 3, 3, 5, 6], 3))
