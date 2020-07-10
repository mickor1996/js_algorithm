/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  if (sentence.length == 0) return 0;
  let dp = new Array(sentence.length + 1).fill(0)
  for (let i = 1; i <= sentence.length; i++) {
    dp[i] = dp[i - 1] + 1
    for (let j = 0; j < dictionary.length; j++) {
      let temp = i - dictionary[j].length
      if (temp >= 0 && dictionary[j] == sentence.slice(temp, i)) {
        dp[i] = Math.min(dp[temp], dp[i])
      }
    }
  }
  return dp[dp.length - 1]
};

console.log(respace(["looked", "just", "like", "her", "brother"], "jesslookedjustliketimherbrother"))