/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  if (s === t) return true;
  let scount = (jcount = 0);
  let i = s.length - 1,
    j = t.length - 1;
    // 双指针，从后往前比较
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        scount++;
        i--;
      } else if (scount) { // 抵消#左边的字符
        scount--;
        i--;
      } else {
        break;
      }
    }
    while (j >= 0) {
      if (t[j] === '#') {
        jcount++;
        j--;
      } else if (jcount) {
        jcount--;
        j--;
      } else {
        break;
      }
    }
    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }
  return true;
};
// @lc code=end
