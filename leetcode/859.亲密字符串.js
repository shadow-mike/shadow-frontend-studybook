/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false; // 长度不同
  if (s === goal) {
    const set = new Set(s);
    if (set.size === s.length) { // 俩字符串相等，但一个字符串中不存在相同字母
      return false;
    }
    return true;
  }
  const diffIdxs = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) diffIdxs.push(i);
  }
  if (diffIdxs.length !== 2) return false; // 不同下标超过3个
  if (
    s[diffIdxs[0]] === goal[diffIdxs[1]] &&
    s[diffIdxs[1]] === goal[diffIdxs[0]]
  )
    return true;
  return false;
};
// @lc code=end
