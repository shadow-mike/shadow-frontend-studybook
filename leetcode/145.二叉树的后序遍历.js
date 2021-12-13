/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
// 递归
// var postorderTraversal = function(root) {
//     if (!root) return [];
//     const result = [];
//     reverse(root, result);
//     return result;
// };
// function reverse(node, res) {
//     if (node.left) {
//         reverse(node.left, res);
//     }
//     if (node.right) {
//         reverse(node.right, res);
//     }
//     res.push(node.val)
// }


// 迭代
var postorderTraversal = function(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    while (stack.length) {
       const node = stack.pop();
       result.unshift(node.val);
       if (node.left) stack.push(node.left);
       if (node.right) stack.push(node.right);
    }
    return result;
}
// @lc code=end

