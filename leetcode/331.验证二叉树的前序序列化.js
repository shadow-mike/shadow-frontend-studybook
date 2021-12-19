/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const arr = preorder.split(',');
  const stack = [1]; // 用一个栈来维护子节点个数
  for (const node of arr) {
    if (!stack.length) return false; // 如果还是节点但是栈为空，则返回false
    stack[stack.length - 1]--; // 每次都会消耗节点数
    if (stack[stack.length - 1] < 0) return false;
    if (stack[stack.length - 1] === 0) stack.pop();
    if (node !== '#') {
      stack.push(2); // 压入当前节点的子节点
    }
  }
  return !stack.length;
};
// @lc code=end
