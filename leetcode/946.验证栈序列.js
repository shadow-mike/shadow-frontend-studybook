/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let i = (j = 0);
  const stack = [];
  while (typeof popped[j] === 'number') {
    if (stack.length && stack[stack.length - 1] === popped[j]) { // 如果和栈顶元素相等，则弹出
      stack.pop();
      j++;
    } else if (i < pushed.length) {
      stack.push(pushed[i]); // 如果pushed还有值则推入栈
      i++;
    } else {
      break; // pushed数组已推入完毕
    }
  }
  return !stack.length;
};
// @lc code=end
