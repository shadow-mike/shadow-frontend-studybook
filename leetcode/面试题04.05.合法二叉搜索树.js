/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     let isValid = true;
//     const nodes = [];
//     traverse(root);
//     if (isValid) {
//         // let max = nodes[0];
//         for (let i = 1; i < nodes.length; i++) {
//             if ((nodes[i - 1] >= nodes[i])) {
//                 isValid = false;
//                 break;
//             }     
//         }
//     }
//     return isValid;

//     function traverse(node) {
//         if (!node || !isValid) return;
//         const leftVal = traverse(node.left);
//         if (leftVal >= node.val) isValid = false;
//         nodes.push(node.val);
//         const rightVal = traverse(node.right);
//         if (rightVal <= node.val) isValid = false;
//         return node.val;
//     }
// };

var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
}
function helper (node, left, right) {
    if (!node) return true;
    if (node.val <= left || node.val >= right) return false;
    // 所有左子树的值小于当前节点的值；所有右子树的值大于当前节点的值；
    return helper(node.left, left, node.val) && helper(node.right, node.val, right);
}
