// 题目描述
// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。

// 插入数据，查询时就排序，也可以使用大小堆，但js没有现成函数，较复杂
const l = []
function Insert(num) {
  l.push(num)
}
function GetMedian() {
  if (!l) return null
  l.sort((a, b) => a - b)
  if (l.length % 2 == 0) {
    return (l[l.length / 2 - 1] + l[l.length / 2]) / 2
  } else if (l.length % 2 == 1) {
    return l[(l.length - 1) / 2]
  }
}
Insert(10)
console.log(GetMedian())
Insert(2)
console.log(GetMedian())
Insert(3)
console.log(GetMedian())
Insert(4)
console.log(GetMedian())
Insert(5)
console.log(GetMedian())
Insert(6)
console.log(GetMedian())