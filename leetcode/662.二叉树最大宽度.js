/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let max = 0;
  let left = right = 0; // 记录每层最左和最右的值
  let q = [[0, root]]; // [[下标, 节点]]，下标从0开始计；
  while (q.length) {
    const currentWidth = q[q.length - 1][0] - q[0][0] + 1;
    max < currentWidth && (max = currentWidth);
    left = q[0][0];
    const tmp = [];
    for (let i = 0; i < q.length; i++) {
      const node = q[i][1];
      right = q[i][0];
      // 子节点的值是父级到最左的差值的2倍
      node.left && tmp.push([(right - left + 1) * 2 - 1, node.left]);
      node.right && tmp.push([(right - left + 1) * 2, node.right]);
    }
    q = tmp; // 更新q用于计算下一层宽度
  }
  return max;
};
// @lc code=end
