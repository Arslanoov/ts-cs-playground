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

function hasPathSum(node: TreeNode | null, targetSum: number, sum: number = 0): boolean {
  if (!node) return false
  sum += node.val

  if (!node.left && !node.right) return targetSum === sum

  return hasPathSum(node.left, targetSum, sum) ||
    hasPathSum(node.right, targetSum, sum)
}