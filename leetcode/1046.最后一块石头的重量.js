/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const hp = new Heap();
    for (let i = 0; i < stones.length; i++) {
        hp.push(stones[i]);
    }
    while (hp.size > 1) {
        const diff = hp.pop() - hp.pop();
        if (diff) hp.push(diff);
    }
    return hp.pop();

};

class Heap {
  constructor(compareFn) {
    this.arr = [];
    this.compare = compareFn || ((x, y) => x - y > 0); // 默认大顶堆
  }
  swap(heap, i, j) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
  push(ele) {
    const length = this.size;
    this.arr.push(ele);
    this.siftUp(this.arr, ele, length);
  }
  pop() {
    if (!this.size) return null;
    const biggest = this.arr[0];
    const last = this.arr.pop();
    if (biggest !== last) {
      this.arr[0] = last;
      this.siftDown(this.arr, last, 0);
    }
    return biggest;
  }
  siftUp(heap, node, idx) {
    let i = idx;
    while (i > 0) {
      const parentIdx = (i - 1) >>> 1;
      //   console.log('parentIdx', parentIdx, i);
      if (this.compare(node, heap[parentIdx])) {
        // console.log('before', heap);
        this.swap(heap, i, parentIdx);
        // console.log('after', heap);
        i = parentIdx;
      } else {
        return;
      }
    }
  }
  siftDown(heap, node, idx) {
    let i = idx;
    let half = (heap.length - 1) >>> 1;
    while (i <= half) {
      const leftChildIdx = i * 2 + 1;
      const rightChildIdx = i * 2 + 2;
      // 先判断左子节点是否大于node
      if (
        leftChildIdx < heap.length &&
        this.compare(heap[leftChildIdx], node)
      ) {
        // 右子树大于左子树，交换父级和右子树
        if (
          rightChildIdx < heap.length &&
          this.compare(heap[rightChildIdx], heap[leftChildIdx])
        ) {
          this.swap(heap, i, rightChildIdx);
          i = rightChildIdx;
        } else {
          // 交换父级和左子树
          this.swap(heap, i, leftChildIdx);
          i = leftChildIdx;
        }
      } else if (
        rightChildIdx < heap.length &&
        this.compare(heap[rightChildIdx], node)
      ) {
        this.swap(heap, i, rightChildIdx);
        i = rightChildIdx;
      } else {
        return;
      }
    }
  }
  get size() {
    return this.arr.length;
  }
  peek() {
    if (this.size) {
      return this.arr[0];
    }
    return null;
  }
}
  
// @lc code=end


