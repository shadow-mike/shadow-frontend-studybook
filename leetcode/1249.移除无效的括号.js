/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (
        stack.length &&
        // 下标不是-0或者下标大于0
        (stack[stack.length - 1] > 0 || isPositive0(stack[stack.length - 1]))
      ) {
        stack.pop();
      } else {
        stack.push(Number(`-${i}`)); // 推入负数，负数意为 ')'
      }
    }
  }
  const result = [...s];
  for (let j = stack.length - 1; j >= 0; j--) {
    result[Math.abs(stack[j])] = '';
  }
  return result.join('');
};

// 判断是不是+0、0
function isPositive0(num) {
  // 1 / +0 为 +Infinity, 1 / -0 为 -Infinity
  return num === 0 && 1 / num > 0;
}
// @lc code=end
