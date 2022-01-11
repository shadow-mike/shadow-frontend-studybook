/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

// var maxDepth = function(root) {
//     const stack = root ? [root] : [];
//     let depth = 0;
//     while (stack.length) {
//         const length = stack.length;
//         for (let i = 0; i < length; i++) {
//             const node = stack.pop();
//             if (node.left) stack.unshift(node.left);
//             if (node.right) stack.unshift(node.right);
//         }
//         depth++;
//     }
//     return depth;
// };


var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}
// @lc code=end

