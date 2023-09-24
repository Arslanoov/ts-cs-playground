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
 * @return {boolean}
 */
const isBalanced = function(root) {
    let isBalanced = true;

    const dfs = (root, depth = 1) => {
        if (!root | !isBalanced) {
            return -1;
        }

        const leftH = dfs(root.left, depth + 1);
        const rightH = dfs(root.right, depth + 1);

        if (Math.abs(leftH - rightH) > 1) {
            isBalanced = false;
        }

        return Math.max(leftH, rightH) + 1;
    }

    dfs(root);

    return isBalanced;
};
