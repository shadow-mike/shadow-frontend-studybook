/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 *
 * [1302] 层数最深叶子节点的和
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
var deepestLeavesSum = function(root) {
    const stack = [root];
    let result = 0;
    while (stack.length) {
        const length = stack.length;
        result = 0;
        for (let i = length - 1; i >= 0; i--) {
            const node = stack.pop();
            result += node.val;
            if (node.left) stack.unshift(node.left);
            if (node.right) stack.unshift(node.right);
        }
    }
    return result;
};
// @lc code=end

