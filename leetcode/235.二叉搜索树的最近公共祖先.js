/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 不借助搜索树特性的解
// https://mp.weixin.qq.com/s/9RKzBcr3I592spAsuMH45g
// var lowestCommonAncestor = function(root, p, q) {
//     if (!root) return null;
//     if (root === p || root === q) return root;
//     const left = lowestCommonAncestor(root.left, p, q);
//     const right = lowestCommonAncestor(root.right, p, q);
//     if (!left && !right) return null;
//     if (left && right) return root;
//     return left ? left : right;
// };
var lowestCommonAncestor = function(root, p, q) {
    let commonAncestor = root;
    while (true) {
        if (p.val < commonAncestor.val && q.val < commonAncestor.val) {
            commonAncestor = commonAncestor.left;
        } else if (p.val > commonAncestor.val && q.val > commonAncestor.val) {
            commonAncestor = commonAncestor.right;
        } else {
            break;
        }
    }
    return commonAncestor;
}

// @lc code=end

