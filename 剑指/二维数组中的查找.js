function Find(target, array)
{
  // write code here
  let x = array.length
  let y = array[0].length
  let i = 0
  let j = y-1
  while(i < x && j >= 0){
    if(target == array[i][j]){
      return true
    }
    if(target < array[i][j]){
      j--
    }
    if(target > array[i][j]){
      i++
    }
  }
  return false
}
let a = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
target = 7
console.log(Find(target,a))