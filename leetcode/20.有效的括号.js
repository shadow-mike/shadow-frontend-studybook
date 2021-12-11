/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      if (map[s[i]] === stack[stack.length - 1]) {
        // 如果是map中能映射到value，并且与栈中最后一位括号匹配，则弹出这一对
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};
// @lc code=end
