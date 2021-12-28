/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// 递归
// var preorder = function(root) {
//     if (!root) return [];
//     const result = []
//     traverse(root, result);
//     return result;
// };
// function traverse(node, stack) {
//     stack.push(node.val);
//     if (!node.children || !node.children.length) return;
//     node.children.forEach(child => traverse(child, stack));
// }

// 迭代
var preorder = function (root) {
  if (!root) return [];
  const stack = [root];
  const result = [];
  while (stack.length) {
    node = stack.pop();
    result.push(node.val);
    if (!node.children || !node.children.length) continue;
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
    // 这行替换上面的for语句块，就变成了层序遍历
    // node.children && node.children.forEach((child) => stack.unshift(child));
  }
  return result;
};
// @lc code=end
