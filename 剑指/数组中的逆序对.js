function InversePairs(data) {
  // write code here
  let num = 0
  let reverse = []
  let k = 0
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < i; j++) {
      if (data[i] < data[j]) {
        k = reverse.filter(item => item < data[i]).length
        reverse.push(data[i])
        num = num + (i - j) - k
        break
      }
    }
  }
  return num % 1000000007
}
function InversePairs2(data) {
  // write code here
  let num = 0
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[j] < data[i]) {
        num++
      }
    }
  }
  return num % 1000000007
}
let num = 0
function InversePairs3(data) {
  // write code here
  if (!data.length) return num
  mergeSort(data)
  return num % 1000000007
}

function mergeSort(data) {
  if (data.length == 1) return data
  let middle = parseInt(data.length / 2)
  data = merge(mergeSort(data.slice(0, middle)), mergeSort(data.slice(middle)))
  return data
}
function merge(data1, data2) {
  let i = 0
  let j = 0
  let data = []
  while (i < data1.length && j < data2.length) {
    if (data1[i] < data2[j]) {
      data.push(data1[i])
      i++
    } else if (data1[i] > data2[j]) {
      data.push(data2[j])
      j++
      num += data1.length - i
    }
  }
  if (i == data1.length) {
    while (j < data2.length) {
      data.push(data2[j])
      j++
    }
  } else {
    while (i < data1.length) {
      data.push(data1[i])
      i++
    }
  }
  return data
}
a = [1, 2, 3, 4, 5, 6, 7, 0]
// console.log(InversePairs(a))
console.log(InversePairs2(a))
console.log(InversePairs3(a))
// console.log(mergeSort(a))
// console.log(num)