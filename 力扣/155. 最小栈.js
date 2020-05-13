/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.min = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (this.min.length == 0 || x <= this.min[this.min.length - 1]) {
    this.min.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let temp = this.stack.pop()
  if (temp == this.min[this.min.length - 1]) {
    this.min.pop()
  }
  return temp
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
obj.push(1)
console.log(obj.getMin())
obj.pop()

