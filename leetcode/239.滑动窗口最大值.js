/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const mq = new MonoQueue();
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            mq.push(nums[i]);
        } else {
            mq.push(nums[i]);
            result.push(mq.max());
            mq.pop(nums[i - k + 1]);
        }
    }
    return result;
};
// 维护一个单调队列
class MonoQueue {
    constructor() {
        this.q = [];
    }
    push(val) {
        // 最后一个值小于val，则弹出，否则压入val
        while (this.q.length && this.q[this.q.length - 1] < val) {
            this.q.pop();
        }
        this.q.push(val);
    }
    pop(val) {
        // val可能在其他值操作push时已被弹出
        if (this.q[0] === val) {
            this.q.shift();
        }
    }
    max() {
        return this.q[0];
    }
}
// @lc code=end

/**
 * 或者还可以使用二叉堆Heap（优先队列）来解题。塞入数时得记录下标，因为存在值下标在窗口左侧之外的可能。窗口左滑时需要判断堆顶的下标是否还在窗口中；
 */

