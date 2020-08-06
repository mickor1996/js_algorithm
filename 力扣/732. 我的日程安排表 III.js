var MyCalendarThree = function () {
  this.array = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  this.array.push([start, 1])
  this.array.push([end, -1])
  this.array.sort((a, b) => a[1] - b[1])
  this.array.sort((a, b) => a[0] - b[0])
  let max = 0
  let sum = 0
  this.array.map(item => {
    sum += item[1]
    max = max > sum ? max : sum
  })
  return max
};
var obj = new MyCalendarThree()
console.log(obj.book(10, 20)); // returns 1
console.log(obj.book(50, 60)); // returns 1
console.log(obj.book(10, 40)); // returns 2
console.log(obj.book(5, 15)); // returns 3
console.log(obj.book(5, 10)); // returns 3
console.log(obj.book(25, 55)); // returns 3
/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */