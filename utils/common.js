// 二叉堆
export class Heap {
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
