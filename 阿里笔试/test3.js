function convert(n) {
  const map = {
    0: 'f',
    1: 'c',
    2: 'e',
    3: '2',
    4: '0',
    5: '1',
    6: '7'
  }
  const s = []
  while (n / 7 > 0) {
    s.push(map[n % 7])
    n = parseInt(n / 7)
  }
  return s.reverse().join('')
}
console.log(convert(2017))