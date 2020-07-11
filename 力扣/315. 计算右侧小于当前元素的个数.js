/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 解析见https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/solution/shu-zhuang-shu-zu-jie-fa-by-mickor/
var countSmaller = function (nums) {
  // 求i对应二进制最小位开始的连续0个数
  function lowbit(i) {
    return i & -i
  }
  // 树状数组更新
  function update(bit, list, i, k) {
    list[i] += k
    while (i < bit.length) {
      bit[i] += k
      i += lowbit(i)
    }
    return bit, list
  }
  // 求前缀和
  function getsum(bit, list, i) {
    let sum = 0;
    sum -= list[i]
    while (i > 0) {
      sum += bit[i];
      i -= lowbit(i);
    }
    return sum
  }
  // 使用map离散化数组
  let map = new Map()
  nums.map(item => {
    map.set(item, map.get(item) ? map.get(item) + 1 : 1)
  })
  // map转数组list，key->Array[0];value->Array[1],针对Array[0]排序
  let list = Array.from(map).sort((a, b) => a[0] - b[0])
  // 建立树状数组
  let bit = new Array(list.length + 1).fill(0)
  for (let i = 1; i < bit.length; i++) {
    let sum = 0
    list.slice(i - lowbit(i), i).map(item => sum += item[1])
    bit[i] = sum
  }
  // list拆分成两个数组(这里主要是针对前缀和会把自己本身算进去来做的操作，
  // 比如对[1, 1]计算右侧小于当前元素的个数，前缀和会得到[1, 0]
  // 所以要在前缀和的基础上减去当前元素的个数
  // 当前各个元素用list表示，对应的各个元素的数量用list2表示
  list2 = list.map(item => item[1])
  list = list.map(item => item[0])
  // 树状数组从1开始计数比较好操作，所以补了一个数字，但不能补0，因为如果本身列表中有0，就会多数一次0
  list.unshift(Number.MAX_VALUE)
  list2.unshift(Number.MAX_VALUE)
  // 树状数组求前缀和数组
  nums = nums.map(item => {
    bit, list2 = update(bit, list2, list.indexOf(item), -1)
    return getsum(bit, list2, list.indexOf(item))
  })
  return nums
};
console.log(countSmaller([0, 1]))