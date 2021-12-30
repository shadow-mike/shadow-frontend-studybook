/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  let flag = true; // 控制左往右还是右往左
  while (stack.length) {
    let length = stack.length;
    const currents = [];
    while (length--) {
      const node = stack.shift();
      if (flag) {
        currents.push(node.val);
      } else {
        currents.unshift(node.val);
      }
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    flag = !flag;
    result.push(currents);
  }
  return result;
};
// @lc code=end
