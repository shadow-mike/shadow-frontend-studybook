/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.bigs = new Heap(); // 小顶堆
    this.smalls = new Heap((a, b) => b - a); // 小的那半数据用大顶堆维护
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // this.bigs永远大于等于this.smalls
    if (this.bigs.size === 0 && this.smalls.size === 0) {
        return this.bigs.insert(num);
    } 
    // else if (this.bigs.size === this.smalls.size) {
    //     if (this.bigs.peek() < num) {
    //         this.bigs.insert(num);
    //     } else {
    //         this.smalls.insert(num);
    //         this.bigs.insert(this.smalls.pop());
    //     }
    // } else {
    //     if (this.bigs.peek() < num) {
    //         this.bigs.insert(num);
    //         this.smalls.insert(this.bigs.pop());
    //     } else {
    //         this.smalls.insert(num);
    //     }
    // }

    if (this.bigs.peek() !== undefined && this.bigs.peek() <= num) {
        this.bigs.insert(num);
    } else {
        this.smalls.insert(num);
    }
    if (this.bigs.size)
    while (Math.abs(this.smalls.size - this.bigs.size) > 1) {
        if (this.smalls.size < this.bigs.size) {
            this.smalls.insert(this.bigs.pop());
        } else {
            // console.log('smalls:' ,this.smalls);
            this.bigs.insert(this.smalls.pop());
            // console.log('smalls:' ,this.smalls);
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // console.log(this.smalls, this.bigs)
    if ((this.smalls.size === this.bigs.size)) {
        return (this.smalls.peek() + this.bigs.peek()) / 2;
    } else {
        // return this.bigs.peek();
        return this.smalls.size > this.bigs.size ? this.smalls.peek() : this.bigs.peek();
    }
};

const defaultCompare = (a, b) => a - b; // 用作小顶堆的判断
class Heap {
    constructor(compareFn = defaultCompare) {
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
        this.siftUp(this.size - 1);
    }
    siftUp(i) {
        let idx = i;
        while (idx > 0) {
            const parentIdx = (idx - 1) >>> 1;
            if (this.compareFn(this.data[idx], this.data[parentIdx]) < 0) {
                this.swap(idx, parentIdx);
                idx = parentIdx;
            } else {
                return
            }
        }
    }
    siftDown(i) {
        let idx = i;
        const half = (this.size - 1) >>> 1;
        const lastIdx = this.size - 1;
        while (idx <= half) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let mostIdx = idx;
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
    pop() {
        this.swap(0, this.size - 1);
        const val = this.data.pop();
        if (this.size > 1) {
            this.siftDown(0);
        }
        return val;
    }
    swap(i, j) {
        if (i === j) return;
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// @lc code=end

