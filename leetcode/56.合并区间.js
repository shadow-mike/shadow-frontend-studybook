/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    const result = [sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
        const last = result[result.length - 1];
        const cur = sorted[i];
        // 包含关系
        if (last[0] <= cur[0] && last[1] >= cur[1]) {
            continue;
        }
        // 相交
        if (last[0] <= cur[0] && last[1] >= cur[0]) {
            last[1] = cur[1];
        }
        // 没重合
        if (last[1] < cur[0]) {
            result.push(cur);
        }
    }
    return result;
};
// @lc code=end

