var longestPalindrome = function (s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) == undefined) {
      map.set(s[i], 1)
    } else {
      map.set(s[i], map.get(s[i]) + 1)
    }
  }
  let flag = 0
  let sum = 0
  for (let i of map) {
    if (i[1] % 2 == 1) {
      flag = 1
      sum += i[1] - 1
    } else {
      sum += i[1]
    }
  }
  return sum + flag
};
console.log(longestPalindrome("abccccdd"))