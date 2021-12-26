/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const descends = [];
  traverse(root, descends, k);
  return descends[k - 1];
};

// 搜索二叉树特点是左节点<父级节点<右节点，所以通过中序遍历的反转序列可以直接得到descend顺序；
function traverse(node, stack, k) {
  if (!node) return;
  if (stack.length >= k) return; // 提前退出
  traverse(node.right, stack, k);
  appendInto(stack, node.val);
  traverse(node.left, stack, k);
}
function appendInto(stack, val) {
  let i = 0;
  while (i < stack.length) {
    if (val < stack[i]) {
      i++;
    } else {
      return stack.splice(i, 0, val);
    }
  }
  stack.push(val);
}
