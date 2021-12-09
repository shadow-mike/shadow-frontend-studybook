/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.left = [];
  this.right = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.left.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.right.length) {
    return this.right.pop();
  }
  while (this.left.length) {
    this.right.push(this.left.pop());
  }
  return this.right.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.right.length) {
    return this.right[this.right.length - 1];
  }
  while (this.left.length) {
    this.right.push(this.left.pop());
  }
  return this.right[this.right.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !(this.left.length + this.right.length);
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
