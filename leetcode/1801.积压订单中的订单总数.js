/*
 * @lc app=leetcode.cn id=1801 lang=javascript
 *
 * [1801] 积压订单中的订单总数
 */

// @lc code=start
/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
  let total = 0;
  const sells = new Heap((a, b) => a.price - b.price); // 小顶堆，卖的最便宜的先出；
  const buys = new Heap((a, b) => b.price - a.price); // 大顶堆，最高价买的先出；
  for (let [price, amount, orderType] of orders) {
    if (orderType === 0) {
      // 当前是buy订单
      while (sells.size > 0 && sells.peek().price <= price) {
        if (amount === 0) break;
        order = sells.pop();
        if (order.amount <= amount) {
          total -= order.amount;
          amount -= order.amount;
        } else {
          total -= amount;
          sells.insert({
            price: order.price,
            amount: order.amount - amount,
          });
          amount = 0;
        }
      }
      if (amount > 0) {
        buys.insert({
          price,
          amount,
        });
        total += amount;
      }
    } else {
      // 当前是sell订单
      while (buys.size > 0 && buys.peek().price >= price) {
        if (amount === 0) break;
        order = buys.pop();
        if (order.amount <= amount) {
          total -= order.amount;
          amount -= order.amount;
        } else {
          total -= amount;
          buys.insert({
            price: order.price,
            amount: order.amount - amount,
          });
          amount = 0;
        }
      }
      if (amount > 0) {
        sells.insert({
          price,
          amount,
        });
        total += amount;
      }
    }
    // console.log('sells', sells);
    // console.log('buys', buys);
    // console.log('total', total);
  }

  return total % (10 ** 9 + 7);
};

const defaultFn = (a, b) => a - b;
class Heap {
  constructor(compareFn = defaultFn) {
    this.data = [];
    this.compareFn = compareFn;
  }
  peek() {
    return this.data[0];
  }
  get size() {
    return this.data.length;
  }
  insert(val) {
    this.data.push(val);
    this.siftUp(this.size - 1);
  }
  pop() {
    this.swap(0, this.size - 1);
    const val = this.data.pop();
    if (this.size > 1) this.siftDown(0);
    return val;
  }
  siftUp(i) {
    let idx = i;
    while (idx > 0) {
      const parentIdx = (idx - 1) >>> 1;
      if (this.compareFn(this.data[parentIdx], this.data[idx]) > 0) {
        this.swap(parentIdx, idx);
        idx = parentIdx;
      } else {
        return;
      }
    }
  }
  siftDown(i) {
    let idx = i;
    const lastIdx = this.size - 1;
    const half = (lastIdx - 1) >>> 1;
    while (idx <= half) {
      let mostIdx = idx;
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      if (
        leftIdx <= lastIdx &&
        this.compareFn(this.data[mostIdx], this.data[leftIdx]) > 0
      ) {
        mostIdx = leftIdx;
      }
      if (
        rightIdx <= lastIdx &&
        this.compareFn(this.data[mostIdx], this.data[rightIdx]) > 0
      ) {
        mostIdx = rightIdx;
      }
      if (mostIdx === idx) return;
      this.swap(mostIdx, idx);
      idx = mostIdx;
    }
  }
  swap(i, j) {
    if (i === j) return;
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}
// @lc code=end
