/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let l = 0, r = nums.length - 1;
    k = nums.length - k; // 第k大等价于 第 nums.length - k 小
    while (l <= r) {
        const p = partition(nums, l, r);
        if (p < k) {
            l = p + 1;
        } else if (p > k) {
            r = p - 1;
        } else {
            return nums[p];
        }
    }
};
function partition(nums, i, j) {
    const pivot = nums[i];
    let l = i, r = j + 1;
    while (true) {
        while (nums[++l] < pivot) {
            if (l >= j) break;
        }
        while (nums[--r] > pivot) {
            if (r <= i) break;
        }
        if (l >= r) break;
        swap(nums, l ,r);
    }
    swap(nums, i, r); // 将pivot和右端下标交换（指向的是小于pivot的子数组右端）
    return r;
}
function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}
// @lc code=end

