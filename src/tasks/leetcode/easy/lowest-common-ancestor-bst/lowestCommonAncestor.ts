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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let first: number = p.val
  let second: number = q.val
  let current: TreeNode | null = root

  while (current) {
    if (current.val < first && current.val < second) {
      current = current.right
    } else if (current.val > second && current.val > first) {
      current = current.left
    } else {
      return current
    }
  }

  return null
}