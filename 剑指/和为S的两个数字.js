// 题目描述
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
// 输出描述:
// 对应每个测试案例，输出两个数，小的先输出。

// 循环遍历
// function FindNumbersWithSum(array, sum)
// {
//     // write code here
//   for (let i = 0; i < array.length; i++){
//     for (let j = array.length - 1; j >= 0; j--){
//       if (array[i] + array[j] == sum) {
//         return new Array(array[i],array[j])
//       }
//     }
//   }
//   return []
// }

// 双指针
function FindNumbersWithSum(array, sum) {
  // write code here
  if (array.length < 2) return [];
  var slow = 0; var high = array.length - 1; var list = [];
  while (slow < high) {
    var current = array[slow] + array[high];
    if (current < sum) {
      slow++
    } else if (current > sum) {
      high--;
    } else if (current == sum) {
      list.push(array[slow]);
      list.push(array[high]);
      break;
    }
  }

  return list;
}