function VerifySquenceOfBST(sequence) {
  if (sequence.length == 0) return false
  return V(sequence)
  // write code here

}
function V(sequence) {
  if (sequence.length != 0) {
    k = sequence[sequence.length - 1]
    for (let i in sequence) {
      if (sequence[i] >= k) {
        indexK = i
        break
      }
    }
    if (sequence.slice(0, indexK).every(item => item < k) && sequence.slice(indexK, sequence.length - 1).every(item => item > k)) {
      return V(sequence.slice(0, indexK)) && V(sequence.slice(indexK, sequence.length - 1))
    } else {
      return false
    }
  } else {
    return true
  }
}

a = [4, 8, 6, 12, 16, 14, 10]
console.log(VerifySquenceOfBST(a))