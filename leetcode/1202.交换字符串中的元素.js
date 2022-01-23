/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const uf = new UF(s.length);
  for (let [i, j] of pairs) {
    uf.union(i, j);
  }
  const map = new Map();
  // 将一个连通图上的字符都维护到一个小顶堆上
  for (let i = 0; i < s.length; i++) {
    const rootIdx = uf.find(i);
    if(map.has(rootIdx)) {
        map.get(rootIdx).insert(s[i]);
    } else {
        const hp = new Heap((a, b) => a.charCodeAt() - b.charCodeAt());
        hp.insert(s[i]);
        map.set(rootIdx, hp);
    }
  }
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const rootIdx = uf.find(i);
      result[i] = map.get(rootIdx).pop();
  }
  return result.join('');
};

class UF {
  constructor(n) {
    this.count = n;
    this.parent = [];
    this.size = [];
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }
  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA === rootB) return;
    if (this.size[rootA] >= this.size[rootB]) {
        this.parent[rootB] = rootA;
        this.size[rootA] += this.size[rootB];
    } else {
        this.parent[rootA] = rootB;
        this.size[rootB] += this.size[rootA];
    }
    this.count--;
  }
  connected(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    return rootA === rootB;
  }
  find(x) {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }
}

class Heap {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.data = [];
  }
  get size() {
    return this.data.length;
  }
  peek() {
    return this.data[0];
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
    if (this.size > 1) this.siftDown(0);
    return val;
  }
  siftDown(i) {
    let idx = i;
    const lastIdx = this.size - 1;
    const halfIdx = (lastIdx - 1) >>> 1;
    while (idx <= halfIdx) {
        let mostIdx = idx;
        const leftIdx = idx * 2 + 1;
        const rightIdx = idx * 2 + 2;
        if (leftIdx <= lastIdx && this.compareFn(this.data[mostIdx], this.data[leftIdx]) > 0) {
            mostIdx = leftIdx;
        }
        if (rightIdx <= lastIdx && this.compareFn(this.data[mostIdx], this.data[rightIdx]) > 0) {
            mostIdx = rightIdx;
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
  swap(i, j) {
    if (i === j) return;
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}
// @lc code=end
