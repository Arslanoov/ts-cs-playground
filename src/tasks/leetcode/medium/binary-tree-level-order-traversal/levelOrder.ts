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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const result: number[][] = []

  function levelOrderRecursive(node: TreeNode | null, depth: number = 0) {
    if (result.length === depth) {
      result.push([])
    }

    result[depth].push(node.val)

    if (node.left) {
      levelOrderRecursive(node.left, depth + 1)
    }

    if (node.right) {
      levelOrderRecursive(node.right, depth + 1)
    }
  }

  levelOrderRecursive(root)

  return result
}