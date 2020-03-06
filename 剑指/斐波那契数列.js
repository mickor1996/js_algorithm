function Fibonacci(n) {
  // write code here
  a = 0;
  b = 1;
  if (n == 0) {
    return 0
  }
  if (n == 1) {
    return 1
  }
  for (let i = 0; i < n - 1; i++) {
    temp = a
    a = b
    b = temp + b
  }
  return b
}
console.log(Fibonacci(2))