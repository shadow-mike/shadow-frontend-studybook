/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
 var pathSum = function (root, sum) {
    if (!root) return 0;
    const stack = [root];
    let count = 0;
    while (stack.length) {
        const node = stack.pop();
        dfs(node, [], sum);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    function dfs(node, path, restSum) {
        if (!node) return;
        // path.push(node.val);
        const rs = restSum - node.val;
        if (rs === 0) {
            count++;
            // console.log(path)
        }
        if (node.left) dfs(node.left, path, rs);
        if (node.right) dfs(node.right, path, rs);
        // path.pop();
    }
    return count;
};
