/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack = []; // 记录括号栈
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      // 如果栈空，肯定是'('
      stack.push(s[i]);
    } else if (stack.length === 1 && s[i] === ')') {
      // 栈长度为1时且是')'，必为最外层括号
      stack.pop();
    } else {
      s[i] === '(' ? stack.push(s[i]) : stack.pop();
      result += s[i];
    }
  }
  return result;
};
// @lc code=end
