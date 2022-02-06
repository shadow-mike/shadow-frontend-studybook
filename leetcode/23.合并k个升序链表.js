/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) return null;
    const hp = new Heap((a, b) => a.val - b.val);
    const hair = new ListNode(null);
    let p = hair;
    for (let list of lists) {
        if (list) hp.insert(list);
    }
    while (hp.size) {
        const node = hp.pop();
        if (node.next) hp.insert(node.next);
        p.next = node;
        p = p.next;
        node.next = null;
    }
    return hair.next;
};

class Heap {
    constructor(compareFn = (a, b) => a - b) {
        this.data = [];
        this.compareFn = compareFn
    }
    get size() {
        return this.data.length;
    }
    insert(node) {
        this.data.push(node);
        if (this.size > 1) {
            this.siftUp(this.size - 1);
        }
    }
    pop() {
        this.swap(0, this.size - 1);
        const node = this.data.pop();
        if (this.size > 1) this.siftDown(0);
        return node;
    }
    siftUp(i) {
        let idx = i;
        while (idx > 0) {
            const parentIdx = (idx - 1) >>> 1;
            if (this.compareFn(this.data[parentIdx], this.data[idx]) > 0) {
                this.swap(idx, parentIdx);
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
            const left = idx * 2 + 1;
            const right = idx * 2 + 2;
            if (left <= lastIdx && this.compareFn(this.data[mostIdx], this.data[left]) > 0) {
                mostIdx = left;
            }
            if (right <= lastIdx && this.compareFn(this.data[mostIdx], this.data[right]) > 0) {
                mostIdx = right;
            }
            if (mostIdx === idx) return;
            this.swap(idx, mostIdx);
            idx = mostIdx;
        }
    }
    swap(a, b) {
        if (a === b) return;
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
    }
}
// @lc code=end

