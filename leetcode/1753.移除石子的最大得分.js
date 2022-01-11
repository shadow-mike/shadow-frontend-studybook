/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    let count = 0;
    let h = new Heap();
    h.insert(a);
    h.insert(b);
    h.insert(c);
    while (true) {
        let s1 = h.pop();
        let s2 = h.pop();
        if (s2 === 0) break;
        h.insert(--s1);
        h.insert(--s2);
        count++;
    }
    // console.log(h)
    return count;
};


class Heap {
    // 维护一个默认大顶堆类
    constructor (compareFn = (a, b) => b - a) {
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
    swap(i, j) {
        if (i === j) return;
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
}
// @lc code=end
