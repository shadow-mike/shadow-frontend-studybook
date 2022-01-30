/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let lMax = height[left],
    rMax = height[right];
    let result = (right - left) * Math.min(lMax, rMax);
  while (left < right) {
    if (lMax > rMax) {
      rMax = Math.max(rMax, height[--right]);
    } else {
      lMax = Math.max(lMax, height[++left]);
    }
    result = Math.max(result, (right - left) * Math.min(lMax, rMax));
  }
  return result;
};
// @lc code=end
