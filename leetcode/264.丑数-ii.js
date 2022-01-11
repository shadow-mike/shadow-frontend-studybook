/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let s2 = s3 = s5 = 0;
    let arr = [1];
    for (let i = 1; i < n; i++) {
        arr[i] = Math.min(arr[s2] * 2, arr[s3] * 3, arr[s5] * 5);
        if (arr[i] % 2 === 0) s2++;
        if (arr[i] % 3 === 0) s3++;
        if (arr[i] % 5 === 0) s5++;
    }
    return arr[n - 1];
};
// 相同题目 https://leetcode-cn.com/problems/get-kth-magic-number-lcci/
// @lc code=end

