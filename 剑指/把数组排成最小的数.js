function PrintMinNumber(numbers) {
  // write code here
  numbers.sort(
    (a, b) => parseInt(a.toString() + b.toString()) - parseInt(b.toString() + a.toString())
  )
  return numbers.join('')
}
let a = [3, 3213, 322]
let b = PrintMinNumber(a)
console.log(b)