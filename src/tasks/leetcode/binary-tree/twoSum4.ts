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

function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set()

  function findTargetRecursive(node: TreeNode | null) {
    if (!node) return false

    if (set.has(node.val)) {
      return true
    }

    set.add(k - node.val)

    return findTargetRecursive(node.left) || findTargetRecursive(node.right)
  }

  return findTargetRecursive(root)
}