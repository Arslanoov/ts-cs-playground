/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  function isValidBSTRecursive(
    node: TreeNode | null,
    start: number | null = null,
    end: number | null = null
  ): boolean {
    if (!node) return true

    if ((start !== null && node.val <= start) || (end !== null && node.val >= end)) {
      return false
    }

    return isValidBSTRecursive(node.right, node.val, end) &&
      isValidBSTRecursive(node.left, start, node.val)
  }

  return isValidBSTRecursive(root)
}