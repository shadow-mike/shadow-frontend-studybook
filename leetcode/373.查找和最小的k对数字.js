/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const result = [];
    const steps = new Array(nums1.length).fill(0); // 下标对应nums1下标，值对应nums2下标；
    k = nums1.length * nums2.length > k ? k : nums1.length * nums2.length;
    while(k--) {
        let idx = 0;
        let minVal = Number.MAX_VALUE;
        for (let i = 0; i< nums1.length; i++) {
            if (nums1[i] + nums2[steps[i]] < minVal) {
                minVal = nums1[i] + nums2[steps[i]];
                idx = i;
            }
        }
        result.push([nums1[idx], nums2[steps[idx]]]);
        steps[idx]++;
    }
    return result;
};
// @lc code=end

