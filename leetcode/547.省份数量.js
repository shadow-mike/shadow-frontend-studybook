/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const length = isConnected.length;
    const visited = new Set();
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (!visited.has(i)) {
            visited.add(i);
            dfs(isConnected, visited, i);
            count++;
        }
    }
    return count;
};
function dfs(isConnected, visited, i) {
    const data = isConnected[i];
    for (let j = 0; j < data.length; j++) {
        // 深度优先遍历
        if (data[j] === 1 && !visited.has(j)) {
            visited.add(j);
            dfs(isConnected, visited, j);
        }
    }
}
// @lc code=end

