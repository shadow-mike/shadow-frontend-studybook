/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  return build(1, n);
};
function build(start, end) {
  const result = [];
  if (start > end) {
    result.push(null);
    return result;
  }
  // i作为根节点进行BST构建
  for (let i = start; i <= end; i++) {
    const left = build(start, i - 1); // 构建i的左树
    const right = build(i + 1, end); // 构建i的右树

    for (let l of left) {
      for (let r of right) { // 左树*右树 组合
        const root = new TreeNode(i);
        root.left = l;
        root.right = r;
        result.push(root);
      }
    }
  }
  return result;
}
// https://mp.weixin.qq.com/s/kcwz2lyRxxOsC3n11qdVSw
// @lc code=end
