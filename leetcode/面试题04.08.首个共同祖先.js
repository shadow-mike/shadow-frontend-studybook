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
 var lowestCommonAncestor = function (root, p, q) {
    return findCommonAncestor(root, p, q);
};

function findCommonAncestor(node, p, q) {
    if (!node) return;
    if (node === p) return p;
    if (node === q) return q;
    const left = findCommonAncestor(node.left, p, q);
    const right = findCommonAncestor(node.right, p, q);
    if (!left && !right) return;
    if (left && right) return node;
    return left ? left : right;
}