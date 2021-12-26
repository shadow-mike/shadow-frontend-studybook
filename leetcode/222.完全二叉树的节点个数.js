/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  if (!root) return 0;
  // 子树拆分为完美完全二叉树和完全二叉树
  // 完美树根据层深直接计算出节点数，其他类型的树通过遍历所有节点来计算
  let node = root;
  let lh = (rh = 0);
  while (node) {
    node = node.left;
    lh++;
  }
  node = root;
  while (node) {
    node = node.right;
    rh++;
  }
  if (lh === rh) {
    return 2 ** lh - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end
// 参考：https://mp.weixin.qq.com/s/xW2fbE3v4JhMSKfxoxIHBg
