
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var smallestK = function(arr, k) {
    const hp = new Heap();
    for (let i = 0; i < arr.length; i++) {
        hp.insert(arr[i]);
        if (hp.size > k) {
            hp.pop();
        }
    }
    const result = [];
    while (hp.size) {
        result.push(hp.pop());
    }
    return result;
};

class Heap {
    // 默认大顶堆
    constructor(compareFn = (a, b) => b - a) {
        this.data = [];
        this.compareFn = compareFn;
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
        if (this.size > 1) this.siftUp(this.size - 1);
    }
    pop() {
        if (!this.size) return;
        this.swap(0, this.size - 1);
        const val = this.data.pop();
        if (this.size > 1) this.siftDown(0);
        return val;
    }
    siftDown(i) {
        let idx = i;
        const lastIdx = (this.size - 1);
        const half = (lastIdx - 1) >>> 1;
        while (idx <= half) {
            const left = idx * 2 + 1;
            const right = idx * 2 + 2;
            let mostIdx = idx;
            if (left <= lastIdx && this.compareFn(this.data[mostIdx], this.data[left]) > 0) {
                mostIdx = left;
            }
            if (right <= lastIdx && this.compareFn(this.data[mostIdx], this.data[right]) > 0) {
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