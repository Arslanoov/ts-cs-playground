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
const diameterOfBinaryTree = function(root) {
    const result = [0];

    const dfs = (root) => {
        if (!root) {
            return -1;
        }

        const leftH = dfs(root.left);
        const rightH = dfs(root.right);

        result[0] = Math.max(result[0], leftH + rightH + 2);

        return Math.max(leftH, rightH) + 1;
    }

    dfs(root);

    return result[0];
};
