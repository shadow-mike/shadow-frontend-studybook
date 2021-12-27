/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function (A, B) {
    if (!A || !B) return false;
    const sameRoots = [];
    findSubRootInA(sameRoots, A, B.val); // 找出在A树中所有和B根节点值相同的节点
    return sameRoots.some(node => isSame(node, B));

};
function findSubRootInA(stack, node, val) {
    if (!node) return;
    if (node.val === val) stack.push(node);
    findSubRootInA(stack, node.left, val);
    findSubRootInA(stack, node.right, val);

}
function isSame(a, b) {
    if (!a || a.val !== b.val) return false; // b节点存在而a节点不存在 或者 a、b值不相同
    let result = true;
    if (b.left) {
        result = result && isSame(a.left, b.left);
    }
    if (b.right) {
        result = result && isSame(a.right, b.right);
    }
    return result;
}