/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = [];
  const tmp = [];
  dfs(0, Number.MIN_SAFE_INTEGER, nums);
  function dfs(cur, last, nums) {
    if (cur === nums.length) {
      if (tmp.length >= 2) {
        result.push([...tmp]);
      }
      return;
    }
    if (nums[cur] >= last) {
      tmp.push(nums[cur]);
      dfs(cur + 1, nums[cur], nums);
      tmp.pop();
    }
    if (nums[cur] !== last) {
      dfs(cur + 1, last, nums);
    }
  }
  return result;
};
// @lc code=end
