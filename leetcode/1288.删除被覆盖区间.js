/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    const sorted = intervals.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1]; // 右端降序
        return a[0] - b[0]; // 左端升序
    });
    let delCount = 0;
    const pre = sorted[0];
    for (let i = 1; i < sorted.length; i++) {
        const cur = sorted[i];
        // 覆盖
        if (pre[0] <= cur[0] && pre[1] >= cur[1]) {
            delCount++;
        }
        // 相交
        if (pre[0] <= cur[0] && pre[1] <= cur[1]) {
            pre[1] = cur[1];
        }
        // 没交集
        if (pre[1] < cur[0]) {
            pre = cur;
        }
    }
    return sorted.length - delCount;
};
// @lc code=end

