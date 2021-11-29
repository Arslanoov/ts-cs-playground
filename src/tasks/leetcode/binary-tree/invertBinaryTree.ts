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

function invertTree(root: TreeNode | null): TreeNode | null {
  return invertTreeRecursive(root)
}

function invertTreeRecursive(node: TreeNode | null) {
  if (node) {
    [node.left, node.right] = [node.right, node.left]
    invertTreeRecursive(node.left)
    invertTreeRecursive(node.right)
  }
  return node
}