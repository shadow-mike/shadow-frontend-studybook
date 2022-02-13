/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const maxPos = {};
    for (let i = 0; i < s.length; i++) {
        maxPos[s[i]] = i;
    }
    let start = 0; // 分割片段的起点
    let maxLengthPos = 0; // 记录当前最远的下标
    const result = [];
    for (let i = 0; i < s.length; i++) {
        const curMaxLengthPos = maxPos[s[i]];
        maxLengthPos = Math.max(maxLengthPos, curMaxLengthPos);
        if (i === maxLengthPos) {
            result.push(i - start + 1);
            start = i + 1;
        }
    }
    return result;

};
// @lc code=end

