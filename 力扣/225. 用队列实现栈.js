/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.l = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  return this.l.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.l.pop()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.l.length == 0) return null
  return this.l[this.l.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.l.length == 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 *  */
var obj = new MyStack()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
