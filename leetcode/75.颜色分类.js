/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1;
    let i = 0;
    while (i <= right) {
        if (nums[i] === 2) {
            swap(nums, i, right);
            right--;
        } else if (nums[i] === 0) {
            swap(nums, i, left);
            left++;
            i++;
        } else {
            // nums[i]为1
            i++;
        }
    }
};
function swap(nums, a, b) {
    if (a === b) return;
    [nums[a], nums[b]] = [nums[b], nums[a]];
}
// @lc code=end

