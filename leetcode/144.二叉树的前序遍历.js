/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function(root) {
//     const stack = [];
//     traverse(root, stack);
//     return stack;
// };
// function traverse(node, stack) {
//     if(!node) return;
//     stack.push(node.val);
//     traverse(node.left, stack)
//     traverse(node.right, stack)
// }

// 迭代
var preorderTraversal = function(root) {
    if (!root) return [];
    const stack = [root];
    const result = [];
    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    return result;
}

// @lc code=end

