/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();
  for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  const h = new Heap();
for (const [k, val] of map.entries()) {
    h.push({
        k,
        val
    })
  }
  let result = '';
  while (h.size) { 
      const d = h.pop();
      result += new Array(d.val).fill(d.k).join('');
   }
  return result;
};
// 维护一个大根堆
class Heap {
  constructor() {
    this.data = [];
    this.compareFn = (a, b) => b.val - a.val;
  }
  peek() {
    return this.data[0];
  }
  get size() {
    return this.data.length;
  }
  pop() {
    this.swap(0, this.size - 1);
    const val = this.data.pop();
    if (this.size > 1) {
      this.siftDown(0);
    }
    return val;
  }
  push(val) {
    this.data.push(val);
    if (this.size > 1) {
        this.siftUp(this.size - 1);
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
  siftDown(i) {
    let idx = i;
    const lastIdx = this.size - 1;
    const half = (lastIdx - 1) >>> 1;
    while (idx <= half) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      let mostIdx = idx;
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
      if (idx === mostIdx) return;
      this.swap(idx, mostIdx);
      idx = mostIdx;
    }
  }
  swap(i, j) {
    if (i === j) return;
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}
// @lc code=end
