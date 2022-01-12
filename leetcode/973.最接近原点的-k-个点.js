/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const h = new Heap((a, b) => b.distance - a.distance);
  points.forEach((p) => {
    h.insert({
      point: p,
      distance: p[0] * p[0] + p[1] * p[1],
    });
    if (h.size > k) {
      h.pop();
    }
  });
  const result = [];
  while (k--) {
    result.push(h.pop().point);
  }
  return result;
};
class Heap {
  // 默认小顶堆
  constructor(compareFn = (a, b) => a - b) {
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
