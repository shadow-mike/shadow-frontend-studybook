/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const stack = [];
  return !!calc(stack, root, 0, targetSum);
};
// 递归收集一条链路上的节点到stack中
function calc(stack, node, prevSum, targetSum) {
  stack.push(node);
  const currSum = prevSum + node.val;
  if (node.left) {
    const r = calc(stack, node.left, currSum, targetSum);
    if (r) return r;
  }
  if (node.right) {
    const r = calc(stack, node.right, currSum, targetSum);
    if (r) return r;
  }
  // 到达叶子节点，计算值
  if (!node.left && !node.right) {
    if (currSum === targetSum) return true;
  }
  stack.pop();
}
// @lc code=end
