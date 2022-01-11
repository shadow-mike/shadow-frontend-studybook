/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
    if (!root) return [];
    const stack = [root];
    const result = [];
    while (stack.length) {
        const length = stack.length;
        for (let i = 0; i < length; i++) {
            const node = stack.pop();
            if (i === length - 1) {
                result.push(node.val);
            }
            if (node.left) {
                stack.unshift(node.left);
            }
            if (node.right) {
                stack.unshift(node.right);
            }
        }
    }
    return result;
};
// @lc code=end

