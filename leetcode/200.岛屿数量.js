/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  const length = grid[0].length;
  // 逐个遍历二维数组，如果是岛屿就进去递归淹没成水
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < length; j++) {
      if (grid[i][j] == '1') {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
};
function dfs(grid, i, j) {
  const m = grid.length,
    n = grid[0].length;
  if (i < 0 || i >= m || j >= n || j < 0) return;
  if (grid[i][j] == 0) return;
  grid[i][j] = 0; // 将相连节点淹没
  // 递归上下左右
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
}

// @lc code=end
