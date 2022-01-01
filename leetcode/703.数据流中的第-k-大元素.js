/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.hp = new Heap((x, y) => y > x); // 维护一个小顶堆
  for (let i = 0; i < nums.length; i++) {
    this.hp.push(nums[i]);
  }
  while (this.hp.size > k) {
    this.hp.pop();
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.hp.push(val);
  if (this.hp.size > this.k) {
    this.hp.pop();
  }
  return this.hp.peek();
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

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
