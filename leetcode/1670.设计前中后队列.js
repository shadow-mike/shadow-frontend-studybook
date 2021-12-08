/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start

var FrontMiddleBackQueue = function () {
  // left长度永远小于等于right长度
  this.left = [];
  this.right = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.left.unshift(val);
  if (this.left.length > this.right.length) {
    this.right.unshift(this.left.pop());
  }
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (this.left.length < this.right.length) {
    this.left.push(val);
  } else {
    this.right.unshift(val);
  }
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.right.push(val);
  if (this.right.length - this.left.length > 1) {
    this.left.push(this.right.shift());
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  // 此时left一定为空
  if (!this.right.length) return -1;
  const result = this.left.length ? this.left.shift() : this.right.shift();
  if (this.right.length - this.left.length > 1) {
    this.left.push(this.right.shift());
  }
  return result;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (!this.right.length) return -1; // 此时left一定为空
  if (this.left.length < this.right.length) {
    return this.right.shift();
  } else {
    return this.left.pop();
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (!this.right.length) return -1;
  const result = this.right.pop();
  if (this.left.length > this.right.length) {
    this.right.unshift(this.left.pop());
  }
  return result;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end
