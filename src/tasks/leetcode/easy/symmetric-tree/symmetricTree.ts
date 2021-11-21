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

function isSymmetric(root: TreeNode | null): boolean {
  return isSymmetricRecursion(root, root)
}

function isSymmetricRecursion(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right) return true
  if (!left || !right) return false

  return left.val === right.val &&
    isSymmetricRecursion(left.right, right.left) &&
    isSymmetricRecursion(left.left, right.right)
}