/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums;
    let pre = nums[0], res = pre, cur = null;
    for (let i = 1; i < nums.length; i++) {
        cur = Math.max(nums[i], pre + nums[i]);
        pre = cur;
        res = Math.max(res, cur);
    }
    return res;

};
// https://labuladong.gitee.io/algo/3/24/81/
// @lc code=end

