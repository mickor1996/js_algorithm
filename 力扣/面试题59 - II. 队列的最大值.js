var MaxQueue = function () {
  this.queue = []
  this.queue_max = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.queue_max.length) return this.queue_max[0]
  return -1

};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  while (this.queue_max.length > 0 && value > this.queue_max[this.queue_max.length - 1]) {
    this.queue_max.pop()
  }
  this.queue_max.push(value)
  return this.queue.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.queue.length == 0) return -1
  let temp = this.queue.shift()
  if (temp == this.queue_max[0]) {
    this.queue_max.shift()
  }
  return temp
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 *  */
var obj = new MaxQueue()
var param_1 = obj.max_value()
obj.push_back(1)
var param_2 = obj.max_value()
var param_3 = obj.pop_front()
