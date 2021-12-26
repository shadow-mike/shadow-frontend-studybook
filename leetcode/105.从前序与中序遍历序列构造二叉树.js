/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const root = generate(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
    return root;
};
function generate(preorder, pStart, pEnd, inorder, iStart, iEnd) {
    if (pStart> pEnd || iStart > iEnd) {
        return null;
    }
    const rootVal = preorder[pStart];
    const root = new TreeNode(rootVal);
    let rootIdx = 0;
    // 在中序遍历中找到根节点位置
    for (let i = iStart; i <= iEnd;i++) {
        if (inorder[i] === rootVal) {
            rootIdx = i;
            break;
        }
    }
    const leftSize = rootIdx - iStart;
    // 传入左子树的前序起止index和中序起止index
    root.left = generate(preorder, pStart + 1, pStart + leftSize, inorder, iStart, rootIdx - 1);
    root.right = generate(preorder, pStart + leftSize + 1, pEnd, inorder, rootIdx + 1, iEnd);
    return root;
}
// @lc code=end
// 分析参考：https://mp.weixin.qq.com/s/OlpaDhPDTJlQ5MJ8tsARlA