/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	if (!nums.length) return 0;
  const set = new Set();
  for (n of nums) {
    set.add(n);
  }
  let maxLength = 1;
  for (n of nums) {
    let curLength = 0;
    if (!set.has(n - 1)) {
      let curNum = n;
      while (set.has(curNum)) {
				curNum++;
        curLength++;
      }
      maxLength < curLength && (maxLength = curLength);
    }
  }
  return maxLength;
};
// @lc code=end
