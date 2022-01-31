/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    heapSort(nums); // 得到大顶堆
    let i = nums.length - 1;
    while (i > 0) {
        swap(nums, 0, i--);
        siftDown(nums, 0, i);
    }
    return nums;
};

function siftDown(nums, idx, lastIdx) {
    while ((idx * 2 + 1) <= lastIdx) {
        const left = idx * 2 + 1;
        const right = idx * 2 + 2;
        let mostIdx = idx;
        if (left <= lastIdx && nums[left] > nums[mostIdx]) {
            mostIdx = left;
        }
        if (right <= lastIdx && nums[right] > nums[mostIdx]) {
            mostIdx = right;
        }
        if (mostIdx === idx) break;
        swap(nums, mostIdx, idx);
        idx = mostIdx;
    }
}

function heapSort(nums) {
    const lastIdx = nums.length - 1;
    const halfIdx = (lastIdx - 1) >>> 1;
    for (let i = halfIdx; i >= 0; i--) {
        siftDown(nums, i, lastIdx);
    }
}
function swap(nums, a, b) {
    if (a === b) return;
    [nums[a], nums[b]] = [nums[b], nums[a]];
}
// @lc code=end

