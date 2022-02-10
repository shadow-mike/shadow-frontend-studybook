/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const poll = new Map();
  for (let num of arr2) {
    poll.set(num, 0);
  }
  const hp = new Heap();
  for (let num of arr1) {
    if (poll.has(num)) {
      poll.set(num, poll.get(num) + 1);
    } else {
        hp.insert(num);
    }
  }
  const result = [];
  poll.forEach((v, k) => {
      result.push(...new Array(v).fill(k));
  })
  while (hp.size) {
    result.push(hp.pop());
  }
  return result;
};

class Heap {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.data = [];
  }
  get size() {
    return this.data.length;
  }
  swap(a, b) {
    if (a === b) return;
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
  insert(val) {
    this.data.push(val);
    if (this.size > 1) {
      this.siftUp(this.size - 1);
    }
  }
  pop() {
    this.swap(0, this.size - 1);
    const val = this.data.pop();
    if (this.size > 1) {
      this.siftDown(0);
    }
    return val;
  }
  siftDown(i) {
    let idx = i;
    const lastIdx = this.size - 1;
    const halfIdx = (lastIdx - 1) >>> 1;
    while (idx <= halfIdx) {
      let mostIdx = idx;
      const left = mostIdx * 2 + 1;
      const right = mostIdx * 2 + 2;
      if (
        left <= lastIdx &&
        this.compareFn(this.data[mostIdx], this.data[left]) > 0
      ) {
        mostIdx = left;
      }
      if (
        right <= lastIdx &&
        this.compareFn(this.data[mostIdx], this.data[right]) > 0
      ) {
        mostIdx = right;
      }
      if (mostIdx === idx) return;
      this.swap(mostIdx, idx);
      idx = mostIdx;
    }
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
}
// @lc code=end
