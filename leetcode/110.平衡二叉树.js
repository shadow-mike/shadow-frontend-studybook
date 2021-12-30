/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;
    let balancedFlag = true;
    calcHeight(root);
    function calcHeight(node) {
        if (!node) return 0;
        if (!balancedFlag) return -111; // 只为退出递归
        if (!node.left && !node.right) return 1;
        const leftHeight = calcHeight(node.left);
        const rightHeight = calcHeight(node.right);
        // 计算每个节点高度的时候，顺便比对当前节点是否是平衡子树
        if(Math.abs(rightHeight - leftHeight) > 1) { 
            balancedFlag = false;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
    return balancedFlag;
};

// @lc code=end

