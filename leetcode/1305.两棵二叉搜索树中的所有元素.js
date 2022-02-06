/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const b1 = new BSTIterator(root1), b2 = new BSTIterator(root2);
    const result = [];
    while (b1.hasNext() && b2.hasNext()) {
        const val = b1.getPeek() > b2.getPeek() ? b2.next() : b1.next();
        result.push(val);
    }
    while (b1.hasNext()) {
        result.push(b1.next());
    }
    while (b2.hasNext()) {
        result.push(b2.next());
    }
    return result;
};

// https://leetcode-cn.com/problems/binary-search-tree-iterator/
class BSTIterator {
    constructor(node) {
        this.stack = [];
        this.pushLeftBranch(node);
    }
    pushLeftBranch(node) {
        let p = node;
        while (p) {
            this.stack.push(p);
            p = p.left;
        }
    }
    getPeek() {
        return this.stack[this.stack.length - 1].val;
    }
    next() {
        const node = this.stack.pop();
        this.pushLeftBranch(node.right);
        return node.val;
    }
    hasNext() {
        return this.stack.length;
    }
}

// https://mp.weixin.qq.com/s/jI8_-E6rx2HVBOmuQOTgHg
// @lc code=end

