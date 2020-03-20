/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let l = []
  for (let i = 0; i < num_people; i++) {
    if (candies >= i + 1) {
      l.push(i + 1)
      candies -= (i + 1)
    } else {
      l.push(candies)
      candies = 0
    }
  }
  let num = num_people + 1
  while (candies) {
    for (let i = 0; i < num_people; i++) {
      if (candies > num) {
        l[i] += num
        candies -= num
        num++
      } else {
        l[i] += candies
        candies = 0
      }
    }
  }
  return l
};
console.log(distributeCandies(5, 6))