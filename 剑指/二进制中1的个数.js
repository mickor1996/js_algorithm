function NumberOf1(n) {
  // write code here
  let count = 0;
  while (n != 0) {
    count++;
    n = n & (n - 1);
  }
  return count;
}

console.log(parseInt(Math.pow(2, 32) - 6).toString(2))
console.log(NumberOf1(5))
console.log(5 & -6)